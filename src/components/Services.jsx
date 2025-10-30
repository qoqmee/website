document.body.classList.toggle('light-theme');
import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 'ideate',
      title: 'Ideate',
      description: 'We help you develop creative ideas so that your business can grow more rapidly',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      color: '#6C5CE7'
    },
    {
      id: 'design',
      title: 'Design',
      description: 'We provide services with the best designs than our designer team for your business',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5zM2 17l10-5m0 0l10 5M2 12l10 5v5l10-5M2 12l10-5v-5l-10 5z"/>
        </svg>
      ),
      color: '#FF4757'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'We help develop company websites to be more professional and attractive',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16V8l-3-3H6l-3 3v8h18zM17 18H7V6h10v12z"/>
        </svg>
      ),
      color: '#00B894'
    },
    {
      id: 'app-dev',
      title: 'App Development',
      description: 'We help develop company mobile apps to be more professional and attractive',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 1.01H7c-1.11 0-2 .89-2 2v18c0 1.11.89 2 2 2h10c1.11 0 2-.89 2-2V3c0-1.11-.89-1.99-2-1.99zM17 19H7V5h10v14z"/>
        </svg>
      ),
      color: '#FDCB6E'
    },
    {
      id: 'business-growth',
      title: 'Business Growth',
      description: 'We also provide services by providing input for your business growth',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V6h2v4h4v2z"/>
        </svg>
      ),
      color: '#0984E3'
    },
    {
      id: 'digital-marketing',
      title: 'Digital marketing',
      description: 'We also help you market your products through an online marketplace',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 18v2H8v-2c0-2.67 4-2.67 4 0zm0-8v6h-2v-6H8V6h8v4z"/>
        </svg>
      ),
      color: '#FF7675'
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <h3 className="section-subtitle">The various services we provide to make your business more powerful</h3>
      <div className='flex mt-5 text-black dark: text-white'></div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon-wrapper" style={{ backgroundColor: service.color }}>
              {service.icon}
            </div>
            <h4 className="card-title">{service.title}</h4>
            <p className="card-description">{service.description}</p>
            <button className="learn-more-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;