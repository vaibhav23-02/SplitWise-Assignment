const mongoose = require('mongoose');

// Define the schema for an expense
const ExpenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    
    splitMethod: { 
        type: String, 
        enum: ['equal', 'exact', 'percentage'], 
        required: true 
    },
    
    participants: [{
        userId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User',
            index: true 
        },
        
        amount: { type: Number },
        
        percentage: { type: Number },
    }],
    
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        index: true 
    },
    
    createdAt: { type: Date, default: Date.now },
});

ExpenseSchema.index({ 'participants.userId': 1 });
ExpenseSchema.index({ createdBy: 1 });

module.exports = mongoose.model('Expense', ExpenseSchema);
