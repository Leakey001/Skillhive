import React from 'react';
import './howitwork.css';

export const HowItWorks = () => {
  // Simplified and focused content for the three-step process
  const steps = [
    {
      id: '01',
      title: 'Tell Us Your Needs',
      description: 'Start with a quick consultation call. We\'ll learn about your business, workflow, and the support you need to excel.',
    },
    {
      id: '02',
      title: 'Get Matched with Experts',
      description: 'Our personalized matching process connects you with the right U.S.-based professional who fits your work style, tools, and timezone.',
    },
    {
      id: '03',
      title: 'Integrate & Scale',
      description: 'Onboard your new assistant, delegate your first tasks, and start reclaiming your time. We ensure a smooth start and provide continuous support.',
    },
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">How SkillHive Works</h2>
          <p className="section-subtitle">
            A simple, streamlined process to connect you with the perfect professional.
          </p>
        </div>

        {/* Steps Container */}
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.id} className="step-item">
              <div className="step-content">
                <span className="step-number">{step.id}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};