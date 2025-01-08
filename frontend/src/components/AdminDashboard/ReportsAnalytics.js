// Import necessary modules
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import './ReportsAnalytics.css'
// Helper function to simulate count-up animation
const useCountUp = (targetValue) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetValue;
    const duration = 2000; // Duration of the animation in ms
    const stepTime = Math.abs(Math.floor(duration / end));

    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [targetValue]);

  return count;
};

// Random Data Generator Function
const generateRandomData = () => {
  return {
    totalApplications: Math.floor(Math.random() * 1000),
    approvedApplications: Math.floor(Math.random() * 500),
    rejectedApplications: Math.floor(Math.random() * 200),
    pendingApplications: Math.floor(Math.random() * 300),
    loanAmountData: [
      Math.floor(Math.random() * 50000),
      Math.floor(Math.random() * 50000),
      Math.floor(Math.random() * 50000),
      Math.floor(Math.random() * 50000),
      Math.floor(Math.random() * 50000),
      Math.floor(Math.random() * 50000), // 6 months data
    ],
    loanStatusData: [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100), // 6 months data
    ],
  };
};

const ReportsAnalytics = () => {
  const [data, ] = useState(generateRandomData);

  // Pie chart options
  const pieChartOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Approved", "Rejected", "Pending"],
    series: [
      data.approvedApplications,
      data.rejectedApplications,
      data.pendingApplications,
    ],
    colors: ["#4CAF50", "#F44336", "#FF9800"],
    tooltip: {
      y: {
        formatter: (val) => `${val} Applications`,
      },
    },
  };

  // Bar chart options
  const barChartOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
    },
    series: [
      {
        name: "Loan Amount",
        data: data.loanAmountData, // Ensure this array has 6 values
      },
    ],
    colors: ["#1976D2"],
    title: {
      text: "Loan Amounts in Applications (6 Months)",
      align: "center",
    },
  };

  // Card Styles
  // const cardStyle = {
  //   border: "1px solid #e0e0e0",
  //   borderRadius: "8px",
  //   padding: "20px",
  //   textAlign: "center",
  //   marginBottom: "20px",
  //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  // };

  const totalApplications = useCountUp(34);
  const approvedApplications = useCountUp(32);
  const rejectedApplications = useCountUp(36);
  const pendingApplications = useCountUp(20);

  const cardData = [
    {
      title: "Total Applications",
      icon: "fa-file",
      value: totalApplications,
      borderColor: "info",
      textColor: "info",
    },
    {
      title: "Approved Applications",
      icon: "fa-check-circle",
      value: approvedApplications,
      borderColor: "success",
      textColor: "success",
    },
    {
      title: "Rejected Applications",
      icon: "fa-times-circle",
      value: rejectedApplications,
      borderColor: "danger",
      textColor: "danger",
    },
    {
      title: "Pending Applications",
      icon: "fa-clock",
      value: pendingApplications,
      borderColor: "warning",
      textColor: "warning",
    },
  ];

  return (
    <div className="container-fluid loan-dashboard mt-5">
     <h2 className="text-center text-primary fw-larger"><b>Report Analytics</b></h2>
<div className="d-flex justify-content-center sec4 w-100 sec4">
  <div className="row d-flex justify-content-center w-100">
    {cardData.map((card, index) => (
      <div key={index} className="col-md-3 d-flex justify-content-center mb-4 ">
        <div className={`card shadow report-custom-card border-${card.borderColor} mx-sm-1 p-3`}>
          <div className={`card-icon report-custom-icon text-${card.textColor}`}>
            <span className={`fa ${card.icon}`} aria-hidden="true"></span>
          </div>
          <div className="card-text text-left mt-3">
            <p className="card-title report-custom-card-title">{card.title}</p>
          </div>
          <div className="card-text text-center mt-2">
            <h3 className="card-value report-custom-card-value"><b>{card.value}</b></h3>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>




      {/* Pie Chart and Bar Chart */}
      <div className="row sec2 d-flex justify-content-center py-5 mt-5">
        {/* <div className="row"> */}
        <div className="col-11 col-md-6">
          <h4 className="text-center fw-large">Application Status Distribution</h4>
          <ReactApexChart
            options={pieChartOptions}
            series={pieChartOptions.series}
            type="pie"
            height={350}
          />
        </div>
        <div className="col-11 col-md-6 mt-4">
          <h4 className="text-center fw-large">Loan Amounts in Applications</h4>
          <ReactApexChart
            options={barChartOptions}
            series={barChartOptions.series}
            type="bar"
            height={350}
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ReportsAnalytics;
