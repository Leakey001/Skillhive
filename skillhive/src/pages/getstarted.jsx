import React, { useState } from 'react';
import './getstarted.css'; // Import the CSS for this page
import { Navbar } from '../components/navbar'; // Assuming Navbar is in the same directory or adjust path

export const GetStartedPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Thank you! Your request has been sent. We will contact you shortly.");
    // In a real app, you would send data to a backend here.
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const benefits = [
    {
      icon: "👥",
      title: 'Expert Matching',
      description: 'Our rigorous vetting process ensures you’re paired with top-tier talent perfectly suited to your needs.'
    },
    {
      icon: "⚡️",
      title: 'Seamless Integration',
      description: 'Get up and running in minutes. Your new assistant integrates directly into your existing workflow and tools.'
    },
    {
      icon: "📈",
      title: 'Scale with Flexibility',
      description: 'With no long-term contracts, you can scale your support up or down as your business needs evolve.'
    }
  ];

  // Updated to use text-based company names instead of placeholders
  const trustedCompanies = [
    'Stripe', 'Notion', 'Figma', 'Dropbox', 'Shopify'
  ];

  return (
    <>
      <Navbar />
      <div className="get-started-page">
        {/* White Hero Section */}
        <header className="get-started-hero">
          <div className="container">
            <h1 className="get-started-title">Your strategic advantage is one step away.</h1>
            <p className="get-started-subtitle">
              Fill out the form to connect with our team and discover how SkillHive can redefine your productivity.
            </p>
            <div className="trusted-by-section">
              <span className="trusted-by-title">TRUSTED BY LEADING COMPANIES</span>
              <div className="trusted-logos">
                {/* Updated map function to render company names directly */}
                {trustedCompanies.map((company, index) => (
                  <div key={index} className="logo-text">{company}</div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content: Two-Column Layout */}
        <main className="get-started-main-content container">
          <div className="why-skillhive-column">
            <div className="why-skillhive-content">
              <h2 className="section-heading">Unlock unparalleled efficiency</h2>
              <p className="section-intro">
                SkillHive is more than just support; it's a partnership designed to amplify your impact. We handle the details so you can focus on the big picture.
              </p>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-card-icon">{benefit.icon}</div>
                    <div className="benefit-card-text">
                      <h3 className="benefit-card-title">{benefit.title}</h3>
                      <p className="benefit-card-description">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial Block */}
              <div className="testimonial-block">
                <blockquote>
                  "Working with SkillHive has been a revelation. My productivity has doubled, and I can finally focus on strategic growth. It's the best investment I've made in my business."
                </blockquote>
                <cite>
                  <span className="cite-name">Alex Carter</span>
                  <span className="cite-title">CEO, Innovate Inc.</span>
                </cite>
              </div>
            </div>
          </div>

          <div className="signup-form-column">
            <div className="signup-form-wrapper">
              <h3 className="form-title">Start the Conversation</h3>
              <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Jane Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane.doe@company.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="e.g., Acme Corporation" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">What are you looking to delegate?</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="e.g., calendar management, research, etc."></textarea>
                </div>
                <button type="submit" className="submit-btn">Request a Consultation</button>
                <p className="form-footer-text">Our team will reach out within 24 hours.</p>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};