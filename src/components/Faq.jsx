import { useState } from 'react';
import './Faqq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the services provided to customers?",
      answer: "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
    },
    {
      question: "How can I submit a proposal for cooperation?",
      answer: "You can send us a message via email or fill out the contact form on our website. Our team will review your proposal and get back to you within 24 hours."
    },
    {
      question: "I come from a faraway place, can collaboration be done full time online through several meeting applications?",
      answer: "Yes, absolutely! We work with clients from all over the world and use Zoom, Google Meet, Microsoft Teams, and other platforms for seamless communication."
    },
    {
      question: "How do I get the payment complete?",
      answer: "Payment is processed after project completion. We accept bank transfers, PayPal, and cryptocurrency. Invoices are sent via email."
    },
    {
      question: "How long can the collaboration last?",
      answer: "Collaboration duration depends on your project scope. It can range from a few weeks to several months or even years for ongoing support."
    }
  ];

  return (
    <div className="faq-section">
      {/* Заголовок */}
      <div className="faq-header">
        <h3 className="faq-subtitle">Frequently Ask Question</h3>
        <h2 className="faq-title">Some of our frequently asked questions</h2>
      </div>

      {/* Аккордеон */}
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'faq-item--open' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleItem(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-arrow">
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;