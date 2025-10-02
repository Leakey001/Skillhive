import React from 'react';
import './howitworks.css';

export const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Share your needs',
      description: 'We help identify the skills and traits that will make your Assistant a perfect match.',
      color: 'purple'
    },
    {
      id: 2,
      title: 'Meet your match',
      description: 'Our team reviews thousands of assistants to find your dedicated Assistant.',
      color: 'pink'
    },
    {
      id: 3,
      title: 'Onboard and delegate',
      description: 'Meet your Assistant in a virtual onboarding, and delegate your first tasks and projects.',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Optimize and Scale',
      description: 'Leverage AI to delegate effectively, saving even more time.',
      color: 'gradient'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="hiw-content">
          {/* Header */}
          <div className="hiw-header">
            <h2 className="hiw-title">How Skillhive works</h2>
          </div>

          {/* Step Cards */}
          <div className="hiw-steps">
            {steps.map((step, index) => (
              <div key={step.id} className="step-card">
                {/* Icon Circle */}
                <div className={`step-icon step-icon-${step.color}`}>
                  {step.id === 1 && (
                    <div className="icon-illustration">
                      <div className="person-icon">
                        <div className="person-head"></div>
                        <div className="person-body"></div>
                        <div className="plus-icon">+</div>
                      </div>
                    </div>
                  )}
                  {step.id === 2 && (
                    <div className="icon-illustration">
                      <div className="match-icons">
                        <div className="person-left">
                          <div className="person-head"></div>
                          <div className="person-body"></div>
                        </div>
                        <div className="person-right">
                          <div className="person-head"></div>
                          <div className="person-body"></div>
                        </div>
                        <div className="checkmark">✓</div>
                      </div>
                    </div>
                  )}
                  {step.id === 3 && (
                    <div className="icon-illustration">
                      <div className="chat-interface">
                        <div className="chat-bubble">
                          <span>Sophie</span>
                          <p>How can I help today?</p>
                        </div>
                        <div className="chat-controls">
                          <div className="pause-btn">⏸</div>
                          <div className="progress-bar"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {step.id === 4 && (
                    <div className="icon-illustration">
                      <div className="chart-icon">
                        <div className="chart-bars">
                          <div className="bar bar-1"></div>
                          <div className="bar bar-2"></div>
                          <div className="bar bar-3"></div>
                          <div className="bar bar-4"></div>
                          <div className="bar bar-5"></div>
                        </div>
                        <div className="smiley">😊</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hiw-cta">
            <button className="get-started-btn">Get started</button>
          </div>
        </div>
      </div>
    </section>
  );
};