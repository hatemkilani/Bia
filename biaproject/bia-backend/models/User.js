const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true, sparse: true }, // Add sparse to allow multiple null values
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
