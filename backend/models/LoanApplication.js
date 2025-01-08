const mongoose = require('mongoose');

const loanApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  personalDetails: {
    name: String,
    email: String,
    phone: String,
    age: Number,
    address: String,
  },
  financialDetails: {
    monthlyIncome: Number,
    requestedLoanAmount: Number,
    tenure: Number,
  },
  cibilScore: Number,
  dti: Number,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('LoanApplication', loanApplicationSchema);
