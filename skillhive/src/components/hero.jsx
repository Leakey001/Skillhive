import React, { useEffect, useState } from 'react';
import './hero.css';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Text Content - Now first in DOM order */}
      <div className="container hero-content">
        <div className="hero-text">
          {/* Animated Headline */}
          <h1 className={`hero-title ${isVisible ? 'animate-fade-in' : ''}`}>
            <span className="find-your-text">Delegate Smarter. Work Faster. Grow Bigger.</span>
            <br />
            <span className="perfect-match-text">Your dedicated assistant + AI tools to help you scale.</span>
          </h1>
          
          <p className={`hero-description ${isVisible ? 'animate-slide-up' : ''}`}>
            We pair you with a skilled assistant who matches your needs and working style. 
            Our AI ensures the perfect fit, saving you time and finding the right person faster.
          </p>

          {/* Animated CTA Buttons */}
          <div className={`hero-actions ${isVisible ? 'animate-slide-up' : ''}`}>
            <button className="btn btn-primary btn-large" onClick={() => window.location.assign('/get-started')}>
              Find An Assistant
              <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="btn btn-secondary btn-large" onClick={() => window.location.assign('/how-it-works')}>
              How It Works
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={`hero-trust ${isVisible ? 'animate-fade-in' : ''}`}>
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-dot trust-dot-green"></span>
                Trusted by 1000+ professionals
              </div>
              <div className="trust-item">
                <span className="trust-dot trust-dot-blue"></span>
                500+ assistants available
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image - Now below text in DOM order */}
      <div className={`hero-bg ${isVisible ? 'animate-fade-in' : ''}`}>
        <img 
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=870&auto=format&fit=crop"
          alt="Professional workspace"
          className="hero-bg-image"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <svg className="scroll-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};