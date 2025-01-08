import './UserHome.css';
import React from 'react';
import { FaCheckCircle, FaCreditCard, FaHandshake, FaHeadset } from 'react-icons/fa';
import bgvideo from "../Images/bgvideo2.mp4";
import loanSolutionImage from "../Images/feature1.jpg"
import seamlessProcessImage from "../Images/feature2.jpg"
import dedicatedSupportImage from "../Images/feature3.jpg"

const cardData = [
    {
        title: 'Quick Approvals',
        description: 'Get your loan approved within minutes with our efficient system.',
        icon: <FaCheckCircle className="card-icon" />,
        // bgColor: '#e1f5fe', // light blue background for quick approvals
    },
    {
        title: 'Flexible Repayment',
        description: 'Choose repayment plans that fit your financial needs.',
        icon: <FaCreditCard className="card-icon" />,
        // bgColor: '#fff9c4', // light yellow background for flexible repayment
    },
    {
        title: 'Zero Hidden Fees',
        description: 'Enjoy full transparency with no hidden charges.',
        icon: <FaHandshake className="card-icon" />,
        // bgColor: '#c8e6c9', // light green background for transparency
    },
    {
        title: '24/7 Support',
        description: 'Our team is here to help you any time you need assistance.',
        icon: <FaHeadset className="card-icon" />,
        // bgColor: '#f8bbd0', // light pink background for support
    },
];

const features = [
    {
        title: "Tailored Loan Solutions",
        description: "Our loans are customized to meet your unique financial needs and goals.",
        // image: "../Images/feature1.jpg", // Path to the image
        image: loanSolutionImage,
    },
    {
        title: "Seamless Process",
        description: "Experience a smooth and hassle-free loan application process from start to finish.",
        image: seamlessProcessImage, // Path to the image
    },
    {
        title: "Dedicated Support",
        description: "Our team is available to guide and assist you at every step of your loan journey.",
        image: dedicatedSupportImage, // Path to the image
    },
];



const UserHome = () => {
    return (
        <div className="user-home">
            <div className="welcome-section">
                <video autoPlay loop muted>
                    <source src={bgvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content-overlay">
                    <div className="welcome-content">
                        <h1>Welcome to LoanEase</h1>
                        <p>"Empowering your dreams with easy loans at 0% EMI"</p>
                    </div>
                </div>
            </div>


            <div className="home-cards container">
                <h3 className="text-primary text-center pb-5">Why Choose Us?</h3>
                <div className="row">
                    {cardData.map((card, index) => (
                        <div key={index} className="col-md-3 card-style">
                            <div className="home-card shadow rounded text-center py-4">
                                <div className="card-icon-container">
                                    {card.icon}
                                </div>
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-description">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="introduction-section">
                <div className="container py-4">
                    <h2 className="text-center text-white">Your Trusted Partner in Financial Growth</h2>
                    <p className="text-center">
                        At LoanEase, we make dreams achievable. Whether it's starting a business, pursuing higher education, or fulfilling a personal goal, our seamless loan solutions are designed to empower you every step of the way.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <section className="container-fluid py-4" style={{backgroundColor:"lightgray"}}>
                {/* <h3 className="text-primary mb-4 text-center">What Sets Us Apart?</h3> */}
                <div className="row whatSetsUs">
                    {features.map((feature, index) => (
                        <div className="col-md-4 card-container " key={index}>
                            <div className="card border-0 shadow">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="card-img-top p-2"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-primary">{feature.title}</h5>
                                    <p className="card-text">{feature.description}</p>
                                </div>
                                <button className='btn Read-more text-white'>Read More!</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="features-section py-5">
                <div className="container py-5">
                    <h2 className="text-center mb-5 text-primary">Explore LoanEase Features</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="water-drop-card">
                                <h4>Lightning-Fast Approvals</h4>
                                <p>Experience seamless loan approvals in just a few clicks.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="water-drop-card">
                                <h4>Robust Security</h4>
                                <p>Your privacy is our top priority with cutting-edge encryption.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="water-drop-card">
                                <h4>Customizable Loans</h4>
                                <p>Choose flexible plans tailored to your financial goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Section */}
            <section className="support-section bg-primary py-5">
                <div className="container">
                    <h1 className="text-white mb-4 text-center">We’re Here to Help</h1>
                    <p className="text-white text-center mb-5">
                        Reach out to us anytime! Our support team is available 24/7 to assist you.
                    </p>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="support-card p-4 shadow-sm rounded">
                                <i className="fas fa-envelope text-primary fa-3x mb-3"></i>
                                <h5>Email Support</h5>
                                <p className="mb-1">Drop us an email, and we’ll get back to you shortly.</p>
                                <a href="mailto:support@loanease.com" className="text-primary">
                                    support@loanease.com
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="support-card p-4 shadow-sm rounded">
                                <i className="fas fa-phone-alt text-primary fa-3x mb-3"></i>
                                <h5>Call Support</h5>
                                <p className="mb-1">Speak to our experts directly for personalized assistance.</p>
                                <a href="tel:+18005551234" className="text-primary">
                                    +1-800-555-1234
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="support-card p-4 shadow-sm rounded">
                                <i className="fas fa-map-marker-alt text-primary fa-3x mb-3"></i>
                                <h5>Visit Us</h5>
                                <p className="mb-1">Stop by our office for in-person assistance.</p>
                                <address className="text-primary">
                                    123 LoanEase Blvd,<br />
                                    Suite 456,<br />
                                    Financial City, FL 78910
                                </address>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </div>
    );
};

export default UserHome;
