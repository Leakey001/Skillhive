import React, { useState, useEffect } from 'react';
import './aiea.css';

// --- SVG Icon Components for a clean and professional look ---

const AiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" /><rect x="4" y="12" width="16" height="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 12v-2a3 3 0 0 0-3-3H9" />
  </svg>
);

const HumanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const EfficiencyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m13 17-5-5 5-5" /><path d="m18 17-5-5 5-5" />
    </svg>
);

const CommunicationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const TimeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
);


export const AIEA = () => {
  const [activeTask, setActiveTask] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Staggered animation effect for elements
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const tasks = [
    {
      title: 'Organize Team Offsite',
      description: 'AI researches locations, human handles negotiations.',
      aiActions: ['Research venues', 'Compare prices', 'Check availability'],
      humanActions: ['Negotiate contracts', 'Coordinate with team', 'Finalize booking']
    },
    {
      title: 'Meal Planning Assistance',
      description: 'AI suggests menus, human customizes for preferences.',
      aiActions: ['Generate meal plans', 'Calculate nutrition', 'Create shopping lists'],
      humanActions: ['Consider dietary needs', 'Personalize recipes', 'Coordinate timing']
    },
    {
      title: 'Suggest Flight Options',
      description: 'AI finds best deals, human optimizes for comfort.',
      aiActions: ['Search all airlines', 'Compare prices & times', 'Find optimal routes'],
      humanActions: ['Check seat preferences', 'Review layover times', 'Book preferred option']
    },
    {
      title: 'Budget Optimization',
      description: 'AI analyzes spending, human provides strategic insights.',
      aiActions: ['Track expenses live', 'Identify saving patterns', 'Generate reports'],
      humanActions: ['Interpret data trends', 'Suggest improvements', 'Implement changes']
    }
  ];

  return (
    <section id="aiea" className="aiea">
      <div className="container aiea-container">
        <div className="aiea-header">
          <h2 className={`aiea-title ${isVisible ? 'fade-in-up' : ''}`}>
            The Human-AI Partnership
          </h2>
          <p className={`aiea-description ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            SkillHive merges advanced AI with human intuition. Our AI Co-pilot handles the data-heavy lifting, freeing your dedicated assistant to focus on strategic execution, negotiation, and providing a personal touch.
          </p>
        </div>

        <div className={`aiea-demo ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="demo-sidebar">
            <div className="demo-sidebar-header">
              <h3 className="demo-title">Example Workflows</h3>
            </div>
            <div className="task-selector">
              {tasks.map((task, index) => (
                <button
                  key={index}
                  className={`task-button ${activeTask === index ? 'active' : ''}`}
                  onClick={() => setActiveTask(index)}
                >
                  <span className="task-name">{task.title}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="demo-main">
            <div className="task-display">
              <div className="collaboration-showcase">
                {/* AI Side */}
                <div className="collaboration-side ai-side">
                  <div className="side-header">
                    <div className="side-icon"><AiIcon /></div>
                    <h4 className="side-title">AI Co-pilot</h4>
                  </div>
                  <ul className="action-list">
                    {tasks[activeTask].aiActions.map((action, index) => (
                      <li key={index} className="action-item">{action}</li>
                    ))}
                  </ul>
                </div>

                {/* Collaboration Connector */}
                <div className="collaboration-connector"></div>

                {/* Human Side */}
                <div className="collaboration-side human-side">
                  <div className="side-header">
                    <div className="side-icon"><HumanIcon /></div>
                    <h4 className="side-title">Human Assistant</h4>
                  </div>
                  <ul className="action-list">
                    {tasks[activeTask].humanActions.map((action, index) => (
                      <li key={index} className="action-item">{action}</li>
                    ))}
                  </ul>
                </div>
              </div>
               <p className="task-description">{tasks[activeTask].description}</p>
            </div>
          </div>
        </div>

        <div className="aiea-benefits">
            <div className={`benefit-card ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
                <div className="benefit-icon"><EfficiencyIcon /></div>
                <h4 className="benefit-title">Unparalleled Efficiency</h4>
                <p className="benefit-description">AI optimizes workflows so your assistant works smarter, delivering higher quality results faster.</p>
            </div>
            <div className={`benefit-card ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.7s' }}>
                <div className="benefit-icon"><CommunicationIcon /></div>
                <h4 className="benefit-title">Proactive Communication</h4>
                <p className="benefit-description">Smart notifications and summaries keep you informed without interrupting your flow.</p>
            </div>
            <div className={`benefit-card ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.8s' }}>
                <div className="benefit-icon"><TimeIcon /></div>
                <h4 className="benefit-title">Transparent Reporting</h4>
                <p className="benefit-description">Get detailed productivity insights with automatic time tracking and task analysis.</p>
            </div>
        </div>
      </div>
    </section>
  );
};