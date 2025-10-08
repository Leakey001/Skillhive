import React, { useEffect, useState } from 'react';
import './qualitysupport.css';

// --- Custom SVG Icon Components for a professional look ---
const FastIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);
const MatchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const VettedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const ScaleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export const QualitySupport = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const qualityPoints = [
    {
      icon: <FastIcon />,
      title: 'Lightning Fast Matching',
      description: 'Our streamlined process matches you with your perfect assistant, typically within 24 hours.',
    },
    {
      icon: <MatchIcon />,
      title: 'AI-Powered Precision',
      description: 'We use AI to analyze your unique needs, industry, and work style for a perfect match.',
    },
    {
      icon: <VettedIcon />,
      title: 'Rigorously Vetted Talent',
      description: 'Only the top 2% of applicants pass our comprehensive multi-stage screening process.',
    },
    {
      icon: <ScaleIcon />,
      title: 'Ready to Integrate',
      description: 'Your new assistant comes equipped with proven workflows and AI tools to start delegating immediately.',
    }
  ];

  return (
    <section className="quality-support">
      <div className="container">
        <div className="quality-grid-layout">
          {/* Left Column: Narrative and CTA */}
          <div className={`quality-text-content ${isVisible ? 'fade-in-up' : ''}`}>
            <h2 className="quality-title">
              World-class support, without the guesswork.
            </h2>
            <p className="quality-description">
              SkillHive handles the entire vetting process so you can focus on your goals. We match you with an experienced, US-based executive assistant who is ready to elevate your productivity from day one.
            </p>
            <div className="quality-cta">
              <button className="btn btn-primary btn-large">
                Get Matched Today
              </button>
              <p className="quality-cta-text">
                Free consultation, seamless onboarding.
              </p>
            </div>
          </div>

          {/* Right Column: List of Quality Points */}
          <div className="quality-points-list">
            {qualityPoints.map((point, index) => (
              <div 
                key={index}
                className={`quality-point-item ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="quality-point-icon">
                  {point.icon}
                </div>
                <div className="quality-point-text">
                  <h3 className="quality-point-title">{point.title}</h3>
                  <p className="quality-point-description">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};