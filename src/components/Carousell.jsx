import React from 'react';
import { Carousel } from 'antd';
import './Carous.css';

const Carousell = () => {
  return (
    <Carousel arrows infinite={false} className="carousel-wrapper">
      <div className="carousel-slide">
        <img src="src/assets/zapatie.svg" alt="" className="quote-icon"/>
        <p className="quote-text">
          We are serious about providing our best service to <br /> all the customers we help. 
          Customers satisfaction is <br /> our number one priority.
        </p>
        <div className="author">
          <span>Mark Garfield</span>
          <span>CEO & Head of Product</span>
        </div>
      </div>

      {/* Второй слайд — для примера */}
      <div className="carousel-slide">
        <img src="src/assets/zapatie.svg" alt="" className="quote-icon"/>
        <p className="quote-text">
          We are serious about providing our best service to <br /> all the customers we help. 
          Customers satisfaction is <br /> our number one priority.
        </p>
        <div className="author">
          <span>Mark Garfield</span>
          <span>CEO & Head of Product</span>
        </div>
      </div>

      {/* Третий слайд */}
      <div className="carousel-slide">
        <img src="src/assets/zapatie.svg" alt="" className="quote-icon"/>
        <p className="quote-text">
          We are serious about providing our best service to <br /> all the customers we help. 
          Customers satisfaction is <br /> our number one priority.
        </p>
        <div className="author">
          <span>Mark Garfield</span>
          <span>CEO & Head of Product</span>
        </div>
      </div>
      {/* Четвертый слайд */}
      <div className="carousel-slide">
        <img src="src/assets/zapatie.svg" alt="" className="quote-icon"/>
        <p className="quote-text">
          We are serious about providing our best service to <br /> all the customers we help. 
          Customers satisfaction is <br /> our number one priority.
        </p>
        <div className="author">
          <span>Mark Garfield</span>
          <span>CEO & Head of Product</span>
        </div>
      </div>
      {/* Пятый слайд */}
      <div className="carousel-slide">
        <img src="src/assets/zapatie.svg" alt="" className="quote-icon"/>
        <p className="quote-text">
          We are serious about providing our best service to <br /> all the customers we help. 
          Customers satisfaction is <br /> our number one priority.
        </p>
        <div className="author">
          <span>Mark Garfield</span>
          <span>CEO & Head of Product</span>
        </div>
      </div>
    </Carousel>
  );
};

export default Carousell;