import React from 'react';

const UserDashboard = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="Hero" style={{ padding: '50px 0', backgroundColor: '#4CAF50', color: 'white', textAlign: 'center' }}>
        <h1>Welcome to Our Loan Application Platform</h1>
        <p>Your journey to financial freedom starts here</p>
        <a href="#ApplyLoan" style={{ textDecoration: 'none', color: '#fff', padding: '10px 20px', backgroundColor: '#1976D2', borderRadius: '5px' }}>
          Apply for a Loan
        </a>
      </section>

      {/* Why Us Section */}
      <section id="WhyUs" style={{ padding: '40px 20px' }}>
        <h2>Why Choose Us</h2>
        <p>
          We offer fast, secure, and reliable loan services with competitive interest rates and flexible terms. Our goal is to make your loan experience as smooth and hassle-free as possible.
        </p>
      </section>

      {/* How to Apply Section */}
      <section id="HowToApply" style={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
        <h2>How to Apply</h2>
        <p>
          Applying for a loan is easy! Simply follow these steps:
          <ol>
            <li>Fill out the online loan application form with your personal and financial details.</li>
            <li>Submit required documents for verification.</li>
            <li>Wait for the loan approval process.</li>
            <li>Once approved, sign the loan agreement and receive your funds.</li>
          </ol>
        </p>
      </section>

      {/* Contact Us Section */}
      <section id="ContactUs" style={{ padding: '40px 20px' }}>
        <h2>Contact Us</h2>
        <p>
          Have questions? Feel free to reach out to us:
          <ul>
            <li>Email: support@loanapp.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Loan Street, Finance City</li>
          </ul>
        </p>
      </section>

      {/* FAQ Section */}
      <section id="FAQ" style={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
        <h2>Frequently Asked Questions</h2>
        <div>
          <h3>What is the minimum loan amount?</h3>
          <p>The minimum loan amount is $500.</p>
        </div>
        <div>
          <h3>How long does it take to get loan approval?</h3>
          <p>Loan approval typically takes 1-3 business days, depending on the provided documentation.</p>
        </div>
        <div>
          <h3>Can I apply for a loan if I have bad credit?</h3>
          <p>Yes, we offer loans for individuals with various credit histories. Your eligibility will depend on other factors such as income and financial stability.</p>
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;
