import React, { useState, useEffect } from 'react';
 import './roi.css';

export const ROI = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const roiMetrics = [
    {
      title: 'Save Time & Money',
      stat: '300%',
      description: 'Productivity increase',
      icon: '⏰',
      color: 'blue'
    },
    {
      title: 'Flexible Scaling',
      stat: '24/7',
      description: 'Available when you need it',
      icon: '📈',
      color: 'purple'
    },
    {
      title: 'No Long-term Contracts',
      stat: '0',
      description: 'Commitment required',
      icon: '🔓',
      color: 'green'
    }
  ];

  const benefits = [
    'Drive ROI and reach your goals',
    'Save time without the cost of hiring, onboarding, or management',
    'Try an assistant for yourself, share with your team, or scale hours up and down',
    'You can count on SkillHive to stay flexible as your needs evolve',
    'No long-term contracts or commitments'
  ];

  return (
    <section id="roi" className="roi">
      {/* RIGHT IMAGE SIDE */}
      <div className="roi-bg">
        <div className="roi-images-container">
          <img 
            src="https://images.ctfassets.net/z3pjfvfh0c2f/3ROxzJN94a8YJ5YkpM5Lb2/c1cbedff4222ec44e56b618748365191/Graph__3_.png?q=70&fm=webp"
            alt="ROI Analytics Dashboard"
            className="roi-bg-image roi-image-1"
          />
          <img 
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ROI Analytics Chart"
            className="roi-bg-image roi-image-2"
          />
        </div>
      </div>

      <div className="container roi-content">
        <div className="roi-text">
          {/* Header */}
         <div className={`roi-header ${isVisible ? 'animate-fade-in' : ''}`}>
            <h2 className="roi-title">
              Drive ROI and reach your goals.
            </h2>
          </div>

          {/* Main Content */}
          <div className={`roi-main ${isVisible ? 'animate-slide-up' : ''}`}>
            {/* Key Benefits */}
              <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="benefit-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="benefit-check">✓</div>
                  <p className="benefit-text">{benefit}</p>
                </div>
              ))}
            </div>

            {/* ROI Metrics */}
            <div className="roi-metrics">
              {roiMetrics.map((metric, index) => (
                <div 
                  key={index} 
                  className={`metric-card ${isVisible ? 'animate-slide-up' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="metric-icon">{metric.icon}</div>
                  <div className="metric-content">
                    <div className={`metric-stat metric-${metric.color}`}>
                      {metric.stat}
                    </div>
                    <div className="metric-title">{metric.title}</div>
                    <div className="metric-description">{metric.description}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* CTA Section */}
          <div className={`roi-cta ${isVisible ? 'animate-slide-up' : ''}`}>
            <h3 className="cta-question">
              Why work with SkillHive?
            </h3>
            <button className="btn btn-primary btn-large">
              Start Your Journey
              <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="cta-guarantee">
              No long-term contracts • Flexible scaling • 14-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};