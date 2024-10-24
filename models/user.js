const mongoose = require('mongoose');

// Define the schema for a user
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    
    email: { type: String, required: true, unique: true },
    
    mobile: { type: String, required: true },
    
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
