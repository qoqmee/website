import React from 'react';
import './Testion.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 'Boy',
      title: 'Ronald Richards',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      avatar: './src/assets/Ellipse.png',
      decoration: './src/assets/Stars.png',
    },
    {
      id: 'Boy1',
      title: 'Guy Hawkins',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      avatar: './src/assets/Ellipse(1).png',
      decoration: './src/assets/Stars.png',
    },
    {
      id: 'Girl',
      title: 'Kristin Watson',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      avatar: './src/assets/Ellipse(2).png',
      decoration: './src/assets/Stars.png',
    },
    {
      id: 'Boy2',
      title: 'Robert Fox',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      avatar: './src/assets/Ellipse(3).png',
      decoration: './src/assets/Stars.png',
    },
    {
      id: 'Girl1',
      title: 'Savannah Nguyen',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      avatar: './src/assets/Ellipse(4).png',
      decoration: './src/assets/Stars.png',
    },
    {
      id: 'Boy3',
      title: 'Courtney Henry',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      avatar: './src/assets/Ellipse(5).png',
      decoration: './src/assets/Stars.png',
    }
  ];

  return (
    <section className="testimonials-section">
      <h1 className="section-title">Testimonials</h1>
      <h2 className="section-subtitle">Some testimonials from our customers</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.avatar}
              alt={testimonial.title}
              width="100"
              height="100"
              className="card-avatar"
            />
            <h4 className="card-title">{testimonial.title}</h4>
            <p className="card-description">{testimonial.description}</p>
            <img
              src={testimonial.decoration}
              alt="Rating"
              className="card-decoration"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;