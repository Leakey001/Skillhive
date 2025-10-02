import React, { useEffect, useState } from 'react';
import './qualitysupport.css';

export const QualitySupport = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const qualityPoints = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get matched with your perfect assistant within 24 hours',
      highlight: '24h matching'
    },
    {
      icon: '🎯',
      title: 'Perfectly Matched',
      description: 'AI-powered matching based on your needs, industry, and working style',
      highlight: 'AI-powered'
    },
    {
      icon: '✅',
      title: 'Rigorously Vetted',
      description: 'Only 2% of applicants pass our comprehensive screening process',
      highlight: 'Top 2%'
    },
    {
      icon: '🚀',
      title: 'Ready to Scale',
      description: 'Start delegating immediately with proven workflows and AI tools',
      highlight: 'AI-enhanced'
    }
  ];

  return (
    <section className="quality-support">
      <div className="container">
        <div className="quality-content">
          {/* Main Headline */}
          <div className={`quality-header ${isVisible ? 'animate-fade-in' : ''}`}>
            <h2 className="quality-title">
              Get quality support from top EAs – fast.
            </h2>
          </div>

          {/* Description Block */}
          <div className={`quality-description ${isVisible ? 'animate-slide-up' : ''}`}>
            <p className="quality-text">
              SkillHive vets candidates so you can focus on what you do best. You'll be matched 
              with an experienced assistant who will give you support where you need it. 
              <span className="text-gradient">SkillHive works quickly</span>; you and your new 
              EA will be up and running in just a few days.
            </p>
          </div>

          {/* Quality Points Grid */}
          <div className="quality-grid">
            {qualityPoints.map((point, index) => (
              <div 
                key={index} 
                className={`quality-card ${isVisible ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="quality-card-header">
                  <div className="quality-icon-wrapper">
                    <span className="quality-icon">{point.icon}</span>
                  </div>
                  <div className="quality-highlight">
                    {point.highlight}
                  </div>
                </div>
                <h3 className="quality-card-title">{point.title}</h3>
                <p className="quality-card-description">{point.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`quality-cta ${isVisible ? 'animate-slide-up' : ''}`}>
            <button className="btn btn-primary btn-large">
              Get Matched Today
              <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="quality-cta-text">
              Free consultation • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};