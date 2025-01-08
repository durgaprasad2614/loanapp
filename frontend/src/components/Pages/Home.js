import './Home.css';
import bgVideo from "../Images/bgVideo.mp4"
// import bg1 from "../Images/bg1.jpg"
import bg2 from "../Images/bg2.jpg"
import { Typewriter } from "react-simple-typewriter";
import React, { useState, useEffect } from 'react';

const Home = () => {

  // State for loan details
  const [interestRate, setInterestRate] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [repaymentPeriod, setRepaymentPeriod] = useState(0);

  // Auto-increment values when the section is mounted
  useEffect(() => {
    const interval = setInterval(() => {
      setInterestRate(prevRate => (prevRate < 7.5 ? prevRate + 0.1 : 7.5));
      setLoanAmount(prevAmount => (prevAmount < 50000 ? prevAmount + 500 : 50000));
      setRepaymentPeriod(prevPeriod => (prevPeriod < 5 ? prevPeriod + 0.1 : 5));
    }, 100); // Update every 100ms

    return () => clearInterval(interval); // Clean up on unmount
  }, []);
  // get in Touch 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loanTypes = [
    {
      title: "Home Loan",
      description: "Affordable loans to help you buy your dream home.",
      imageUrl: "https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg",
      author: "Ravi",
      daysAgo: "2"
    },
    {
      title: "Personal Loan",
      description:
        "Get personal loans with low interest rates and flexible terms.",
      imageUrl: "https://images.pexels.com/photos/4968380/pexels-photo-4968380.jpeg",
      author: "DP",
      daysAgo: "6"

    },
    {
      title: "Car Loan",
      description: "Drive home with easy car loan options and low EMIs.",
      imageUrl: "https://rajarshishahugramin.com/wp-content/uploads/2023/02/car-loan.png",
      author: "Mariya",
      daysAgo: "8"
    },
    {
      title: "Education Loan",
      description: "Secure education funding with competitive interest rates.",
      imageUrl: "https://images.pexels.com/photos/7731373/pexels-photo-7731373.jpeg",
      author: "Siri",
      daysAgo: "13"
    },
  ];

  const steps = [
    { number: 1, title: 'Application Submission', description: 'Complete and submit the loan application form with necessary details.' },
    { number: 2, title: 'Documentation Verification', description: 'Provide required documents such as income proof, identity verification, and credit history.' },
    { number: 3, title: 'Credit Evaluation', description: 'The lender assesses your creditworthiness based on the provided information.' },
    { number: 4, title: 'Loan Underwriting', description: 'A thorough analysis is conducted to determine the risk and terms of the loan.' },
    { number: 5, title: 'Loan Approval and Disbursement', description: 'Upon approval, the loan amount is disbursed to your account.' },
  ];

  // what our costemer say 
  const cards = [
    {
      text: "This loan service was a game changer for my business. Amazing experience!",
      author: "John Doe",
      role: "Entrepreneur",
      image: "https://images.pexels.com/photos/4968380/pexels-photo-4968380.jpeg",
      stars: 5, // Example star rating
      timeAgo: "2 days ago",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur."
    },
    {
      text: "The entire process was smooth and fast. I couldn’t have asked for better support.",
      author: "Jane Smith",
      role: "Freelancer",
      image: "https://images.pexels.com/photos/4968380/pexels-photo-4968380.jpeg",
      stars: 4,
      timeAgo: "1 week ago",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur."
    },
    {
      text: "Their flexible repayment plans are unmatched. Highly recommend them to anyone.",
      author: "Mike Johnson",
      role: "Small Business Owner",
      image: "https://images.pexels.com/photos/4968380/pexels-photo-4968380.jpeg",
      stars: 5,
      timeAgo: "1 month ago",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur."
    },
    {
      text: "Professional, reliable, and quick! Truly a wonderful experience.",
      author: "Emma Brown",
      role: "Designer",
      image: "https://images.pexels.com/photos/4968380/pexels-photo-4968380.jpeg",
      stars: 3,
      timeAgo: "5 days ago",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(autoSlide);
  }, [cards.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };


  // FQA div 
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is the loan application process?",
      answer: "The loan application process involves filling out a form, submitting required documents, and waiting for approval from our team.",
    },
    {
      question: "How long does it take to get approved?",
      answer: "Approval times vary, but on average, you can expect a decision within 1-2 business days.",
    },
    {
      question: "What are the loan eligibility criteria?",
      answer: "Eligibility depends on factors like income, credit score, and loan amount requested. Visit our eligibility page for full details.",
    },
    {
      question: "Can I repay my loan early?",
      answer: "Yes, you can repay your loan early without any penalties. However, early repayment may affect your interest charges.",
    },
  ];
  return (
    <div className="home-page">
      <div className="hero-container">
        {/* Background Video */}
        <video className="hero-video" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="hero-content text-center text-white">
          <h1 className="display-3 fw-bold h1">
            Welcome to{" "}
            <span className="gradient-text">
              <Typewriter
                words={["LoanApp", "Your Trusted Partner", "Quick Loans"]}
                loop={true}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>
          <p className="lead mt-3">
            Your trusted loan partner for quick and easy loan processing.
          </p>
          <div className="mt-4">
            <button className="btn gradient-btn">
              <b>Read More</b>
            </button>
          </div>
        </div>
      </div>

      <div className="counter-section">
        <div className="counter-container ">
          {/* Interest Rate */}
          <div className="counter glass-card">
            <div className="icon-container">
              <i className="fas fa-percentage fa-3x"></i>
            </div>
            <div className="counter-value">{interestRate.toFixed(1)}%</div>
            <div className="counter-label">Interest Rate</div>
          </div>

          {/* Loan Amount */}
          <div className="counter glass-card">
            <div className="icon-container">
              <i className="fas fa-dollar-sign fa-3x"></i>
            </div>
            <div className="counter-value">${loanAmount.toLocaleString()}</div>
            <div className="counter-label">Loan Amount</div>
          </div>

          {/* Repayment Period */}
          <div className="counter glass-card">
            <div className="icon-container">
              <i className="fas fa-calendar-alt fa-3x"></i>
            </div>
            <div className="counter-value">{repaymentPeriod.toFixed(1)} Years</div>
            <div className="counter-label">Repayment Period</div>
          </div>
        </div>
      </div>

      <div className="services-container container-fluid">
        <div
          className='img-container '
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg2})`,
          }}
        >
          <h1 className='text-white'>Our Loan Services</h1>
        </div>
        <div className="card-container1 container">
          {loanTypes.map((loan, index) => (
            <div key={index} className="card carddd">
              <div className="card-image carddd-image" style={{ backgroundImage: `url(${loan.imageUrl})` }}></div>
              <div className="category">{loan.category}</div>
              <div className="heading">
                {loan.title}
                <div className="author">
                  <span className="name">{loan.description}</span><br />
                  - By <span className="name">{loan.author}</span> {loan.daysAgo} days ago
                </div>
              </div>
              <button className="apply-button">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>



      <div className="how-it-works-container container-fluid bg-primary py-5">
        <h2 className="text-white py-4">How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.number} className=" step-box left">
              {/* /// <div key={step.number} className={`step-box ${index % 2 === 0 ? 'left' : 'right'}`}> */}
              <div className="badge-ribbon">
                <div className="circle">{step.number}</div>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* why to choose us  */}
      <div className="loan-benefits-section container my-5">
        <h2 className="text-center text-primary mb-4">Why Choose Our Loan Services?</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="benefit-card p-4 text-center">
              <i className="fas fa-check-circle fa-3x text-success mb-3"></i>
              <h4 className="mb-2">Quick Approval</h4>
              <p>Get your loan approved within hours with our fast and easy process.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="benefit-card p-4 text-center">
              <i className="fas fa-dollar-sign fa-3x text-warning mb-3"></i>
              <h4 className="mb-2">Low Interest Rates</h4>
              <p>Enjoy competitive interest rates that fit your budget.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="benefit-card p-4 text-center">
              <i className="fas fa-shield-alt fa-3x text-info mb-3"></i>
              <h4 className="mb-2">Secure Process</h4>
              <p>Your data is safe with us thanks to our advanced security measures.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="benefit-card p-4 text-center">
              <i className="fas fa-calendar-alt fa-3x text-primary mb-3"></i>
              <h4 className="mb-2">Flexible Repayment</h4>
              <p>Choose repayment terms that suit your financial goals.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="benefit-card p-4 text-center">
              <i className="fas fa-users fa-3x text-danger mb-3"></i>
              <h4 className="mb-2">Dedicated Support</h4>
              <p>Our support team is here to assist you every step of the way.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="benefit-card p-4 text-center">
              <i className="fas fa-chart-line fa-3x text-secondary mb-3"></i>
              <h4 className="mb-2">Custom Loan Options</h4>
              <p>Personalized loan solutions tailored to your unique needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* what our costmer says  */}
      <div className='container carasual-cont'>
        <div className='row'>
          <div className="polygon-carousel col-11 col-md-5 col-lg-5">
            <h5 className="carousel-title text-primary py-3"><b>What Our Customers Say</b></h5>
            <div className="carousel-container">
              {/* <button className="carousel-btn prev-btn" onClick={goToPrevious}>
                ❮
              </button> */}
              <div className="carousel-slide">
                <div className="cardu">
                  <div className="stars">
                    {[...Array(cards[currentIndex].stars)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="star"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <div className="infos">
                    <p className="date-time">{cards[currentIndex].timeAgo}</p>
                    <p className="description">{cards[currentIndex].description}</p>
                  </div>
                  <div className="author">— {cards[currentIndex].author}</div>
                </div>
              </div>
              {/* <button className="carousel-btn next-btn" onClick={goToNext}>
                ❯
              </button> */}
            </div>
          </div>

          <div className="rating-div col-11 col-md-5 col-lg-5">
              <h5 className="text-primary py-3 mb-3"><b>Overall Ratings</b></h5>
            <div className=''>
              <div className="rating-divvv ratings-summary bg-light p-4 rounded shadow">
                <div className="d-flex align-items-center justify-content-between my-2">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <i key={index} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <span>5.0/5 (100 reviews)</span>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                  <div className="stars">
                    {[...Array(4)].map((_, index) => (
                      <i key={index} className="bi bi-star-fill text-warning"></i>
                    ))}
                    <i className="bi bi-star-half text-warning"></i>
                  </div>
                  <span>4.5/5 (150 reviews)</span>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                  <div className="stars">
                    {[...Array(3)].map((_, index) => (
                      <i key={index} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <span>3.0/5 (50 reviews)</span>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                  <div className="stars">
                    {[...Array(2)].map((_, index) => (
                      <i key={index} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <span>2.0/5 (10 reviews)</span>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                  <div className="stars">
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <span>1.0/5 (20 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* FQA div  */}
      <div className='container'>
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'open' : ''}`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                >
                  {faq.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="arrow-down"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* get in touch  */}
      <div className="container py-5">
        <h2 className="mb-4 pb-5 text-center text-head ">Get in Touch</h2>
        <div className="row">
          {/* Images Section */}
          <div className="col-md-6 mb-4">
            <img
              src={`https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`}
              alt="Random"
              className="img-fluid rounded"
            />
          </div>

          {/* Form Section */}
          <div className="col-md-6">
            <form>
              {/* Name Field */}
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="form-control"
                />
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="form-control"
                />
              </div>

              {/* Message Field */}
              <div className="mb-3">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                  className="form-control"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

