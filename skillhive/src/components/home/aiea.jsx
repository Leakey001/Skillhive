import React, { useState, useEffect } from 'react';
import './aiea.css';

export const AIEA = () => {
  const [activeTask, setActiveTask] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const tasks = [
    {

      title: 'Organize team offsite',
      description: 'AI researches locations, human handles negotiations',
      aiActions: ['Research venues', 'Compare prices', 'Check availability'],
      humanActions: ['Negotiate contracts', 'Coordinate with team', 'Final booking']
    },
    {

      title: 'Meal planning assistance',
      description: 'AI suggests menus, human customizes for preferences',
      aiActions: ['Generate meal plans', 'Calculate nutrition', 'Create shopping lists'],
      humanActions: ['Consider dietary restrictions', 'Personalize recipes', 'Coordinate timing']
    },
    {

      title: 'Suggest flight options',
      description: 'AI finds best deals, human optimizes for comfort',
      aiActions: ['Search flights', 'Compare prices', 'Find optimal routes'],
      humanActions: ['Check seat preferences', 'Review layover times', 'Book preferred option']
    },
    {

      title: 'Budget optimization',
      description: 'AI analyzes spending, human provides strategic insights',
      aiActions: ['Track expenses', 'Identify patterns', 'Generate reports'],
      humanActions: ['Interpret trends', 'Suggest improvements', 'Implement changes']
    }
  ];

  return (
    <section id="aiea" className="aiea">
      <div className="container aiea-content">
        <div className="aiea-text">
        <div className="aiea-header">
          <h2 className="aiea-title">
            Supercharge your delegation with our AI .
          </h2>
          <p className="aiea-description">
            Combining an AI Assistant with your dedicated remote assistant, 
            <span className="text-gradient">SkillHive unites advanced technology</span> with the 
            experience of your Assistant to deliver maximum quality.
          </p>
        </div>

        {/* Interactive Task Demo */}
        <div className={`aiea-demo ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="demo-header">
            <h3 className="demo-title">See AI + Human in Action</h3>
            <p className="demo-subtitle">
              Click on tasks to see how AI and human assistants collaborate
            </p>
          </div>

          <div className="demo-interface">
            {/* Task Selection */}
            <div className="task-selector">
              {tasks.map((task, index) => (
                <button
                  key={index}
                  className={`task-button ${activeTask === index ? 'active' : ''}`}
                  onClick={() => setActiveTask(index)}
                >
                  <span className="task-icon">{task.icon}</span>
                  <span className="task-name">{task.title}</span>
                </button>
              ))}
            </div>

            {/* Task Display */}
            <div className="task-display">
              <div className="task-header">
                <h4 className="task-title">{tasks[activeTask].title}</h4>
                <p className="task-description">{tasks[activeTask].description}</p>
              </div>

              <div className="collaboration-showcase">
                {/* AI Side */}
                <div className="collaboration-side ai-side">
                  <div className="side-header">
                    <div className="side-icon ai-icon">🤖</div>
                    <h5 className="side-title">AI Co-pilot</h5>
                  </div>
                  <ul className="action-list">
                    {tasks[activeTask].aiActions.map((action, index) => (
                      <li key={index} className="action-item">
                        <span className="action-dot ai-dot"></span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Collaboration Arrow */}
                <div className="collaboration-arrow">
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Human Side */}
                <div className="collaboration-side human-side">
                  <div className="side-header">
                    <div className="side-icon human-icon">👤</div>
                    <h5 className="side-title">Human Assistant</h5>
                  </div>
                  <ul className="action-list">
                    {tasks[activeTask].humanActions.map((action, index) => (
                      <li key={index} className="action-item">
                        <span className="action-dot human-dot"></span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* AI Benefits Section */}
          <div className={`aiea-benefits ${isVisible ? 'animate-slide-up' : ''}`}>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h4 className="benefit-title">Execute Tasks More Efficiently</h4>
                <p className="benefit-description">
                  AI ensures your Assistant works smarter, not harder, with optimized workflows
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💬</div>
                <h4 className="benefit-title">Proactively Communicate</h4>
                <p className="benefit-description">
                  Smart notifications and updates keep you informed without overwhelming
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">⏰</div>
                <h4 className="benefit-title">Report Their Assistant's Time</h4>
                <p className="benefit-description">
                  Automatic time tracking and detailed productivity insights
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`aiea-cta ${isVisible ? 'animate-slide-up' : ''}`}>
            <div className="cta-content">
              <h3 className="cta-title">Ready to Experience AI + Human Power?</h3>
              <p className="cta-subtitle">
                Join thousands of professionals who've transformed their productivity
              </p>
              <button className="btn btn-primary btn-large">
                Start Your Free Trial
                <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="cta-note">No credit card required • 14-day free trial</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};