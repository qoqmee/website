document.body.classList.toggle('light-theme');
import React from 'react';
import './ServicesSection.css';

const Testion = () => {
  const services = [
    {
      id: 'Boy',
      title: 'Ronald Richards',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      icon: ( 
        <img src="src/components/Ellipse.png" width="100" height="100">
        </img>
      ),
    },
    {
      id: 'Boy1',
      title: 'Guy Hawkins',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      icon: (
        <img src="src/components/Ellipse (1).png" width="100" height="100">
        </img>
      ),
    },
    {
      id: 'Girl',
      title: 'Kristin Watson',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      icon: (
        <img src="src/components/Ellipse (2).png" width="100" height="100">
        </img>
      ),
    },
    {
      id: 'Boy2',
      title: 'Robert Fox',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      icon: (
        <img src="src/components/Ellipse (3).png" width="100" height="100">
        </img>
      ),
    },
    {
      id: 'Girl1',
      title: 'Savannah Nguyen',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      icon: (
        <img src="src/components/Ellipse (4).png" width="100" height="100">
        </img>
      ),
    },
    {
      id: 'Boy3',
      title: 'Courtney Henry',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      icon: (
        <img src="src/components/Ellipse (5).png" width="100" height="100">
        </img>
      ),
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Testmonials</h2>
      <h3 className="section-subtitle">Some testmonials from our customers</h3>
      <div className='flex mt-5 text-black dark: text-white'></div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon-wrapper" style={{ backgroundColor: service.color }}>
              {service.icon}
            </div>
            <h4 className="card-title">{service.title}</h4>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testion;