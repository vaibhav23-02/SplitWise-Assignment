const Expense = require('../models/expense');
const generateBalanceSheet = require('../utils/balanceSheet');

// Controller to handle adding a new expense
exports.addExpense = async (req, res) => {
    const { description, amount, splitMethod, participants } = req.body;

    try {
        let calculatedParticipants = [];

        if (splitMethod === 'equal') {
            const splitAmount = amount / participants.length;
            calculatedParticipants = participants.map(participant => ({
                userId: participant.userId,
                amount: splitAmount
            }));
        } 
        else if (splitMethod === 'exact') {
            const totalExactAmount = participants.reduce((sum, participant) => sum + participant.amount, 0);

            if (totalExactAmount !== amount) {
                return res.status(400).json({ error: 'Total of specified amounts must equal the expense amount' });
            }

            calculatedParticipants = participants;
        } 
        else if (splitMethod === 'percentage') {
            const totalPercentage = participants.reduce((sum, participant) => sum + participant.percentage, 0);

            if (totalPercentage !== 100) {
                return res.status(400).json({ error: 'Total percentage must be 100' });
            }

            calculatedParticipants = participants.map(participant => ({
                userId: participant.userId,
                amount: amount * (participant.percentage / 100)
            }));
        }

        const expense = new Expense({
            description,
            amount,
            splitMethod,
            participants: calculatedParticipants,
            createdBy: req.user.id
        });

        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get individual expense for the logged-in user
exports.getIndividualExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ 'participants.userId': req.user.id });

        const totalAmountSpent = expenses.reduce((total, expense) => {
            const participant = expense.participants.find(p => p.userId.toString() === req.user.id);
            return total + (participant ? participant.amount : 0);
        }, 0);

        res.status(200).json({ expenses, totalAmountSpent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get overall expenses
exports.getOverallExpenses = async (req, res) => {
    try 
    {
        const expenses = await Expense.find({});
        const totalAmountSpent = expenses.reduce((total, expense) => total + expense.amount, 0);
        res.status(200).json({ expenses, totalAmountSpent });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to download the balance sheet
exports.downloadBalanceSheet = async (req, res) => {
    try {
        const balanceSheet = await generateBalanceSheet();
        res.status(200).json(balanceSheet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
