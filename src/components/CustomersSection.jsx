import React from 'react';
import './CustomersSection.css';

const CustomersSection = () => {
  const logos = [
    { name: 'Amazon', src: 'src/assets/Group.svg', alt: 'Amazon' },
    { name: 'Jeep', src: 'src/assets/Group (1).svg', alt: 'Jeep' },
    { name: 'Careem', src: 'src/assets/Group (2).svg', alt: 'Careem' },
    { name: 'HubSpot', src: 'src/assets/Group (3).svg', alt: 'HubSpot' },
    { name: 'jQuery', src: 'src/assets/Group (4).svg', alt: 'jQuery' },
    { name: 'Canon', src: 'src/assets/Group (5).svg', alt: 'Canon' },
    { name: 'FedEx', src: 'src/assets/Group (6).svg', alt: 'FedEx' },
    { name: 'Bitcoin', src: 'src/assets/Group (7).svg', alt: 'Bitcoin' },
    { name: 'Pirelli', src: 'src/assets/Group (8).svg', alt: 'Pirelli' },
    { name: 'Philips', src: 'src/assets/Group (9).svg', alt: 'Philips' },
  ];

  return (
    <section className="customers-section">
      <h2 className="section-title">Some of Our Great Customers</h2>
      <h3 className="section-subtitle">Some of the companies we have worked with</h3>

      <div className="logos-container">
        <div className="logo-row">
          {logos.slice(0, 5).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="company-logo"
            />
          ))}
        </div>
        <div className="logo-row">
          {logos.slice(5).map((logo, index) => (
            <img
              key={index + 5}
              src={logo.src}
              alt={logo.alt}
              className="company-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;