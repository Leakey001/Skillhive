import React, { useEffect, useState } from 'react';
import './hero.css';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Background Image Overlay */}
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=870&auto=format&fit=crop"
          alt="Professional workspace"
          className="hero-bg-image"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          {/* Animated Headline */}
          <h1 className={`hero-title ${isVisible ? 'animate-fade-in' : ''}`}>
            Unlock possibilitis
            <br />
            <span className="text-gradient">with a Human+AI Assistant</span>
          </h1>
          
          {/* Animated Subheadlines */}
          <div className={`hero-subtitle ${isVisible ? 'animate-slide-up' : ''}`}>
            <p className="hero-text-item">
              <span className="hero-icon"></span>
              Prepare pitch deck
            </p>
            <p className="hero-text-item">
              <span className="hero-icon"></span>
              Plan trip to SF next week
            </p>
            <p className="hero-text-item">
              <span className="hero-icon"></span>
              Organize launch event
            </p>
          </div>

          <p className={`hero-description ${isVisible ? 'animate-slide-up' : ''}`}>
            Focus on what matters thanks to experienced remote assistants 
            <span className="text-gradient"> empowered by AI tools</span>
          </p>

          {/* Animated CTA Buttons */}
          <div className={`hero-actions ${isVisible ? 'animate-slide-up' : ''}`}>
            <button className="btn btn-primary btn-large">
              Get started
              <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="btn btn-secondary btn-large">
              <svg className="btn-play" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch how it works
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`hero-trust ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="trust-indicators">
            <div className="trust-item">
              <span className="trust-dot trust-dot-green"></span>
              Available 24/7
            </div>
            <div className="trust-item">
              <span className="trust-dot trust-dot-blue"></span>
              AI-Powered
            </div>
            <div className="trust-item">
              <span className="trust-dot trust-dot-purple"></span>
              Human + AI
            </div>
          </div>
        </div>
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