const LoanApplication = require('../models/LoanApplication');

const submitLoanApplication = async (req, res) => {
  const { personalDetails, financialDetails, cibilScore, dti } = req.body;

  try {
    const loanApplication = new LoanApplication({
      userId: req.user.id,
      personalDetails,
      financialDetails,
      cibilScore,
      dti,
    });

    await loanApplication.save();
    res.status(201).json({ message: 'Loan application submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { submitLoanApplication };
