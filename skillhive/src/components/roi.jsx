import React, { useState, useEffect, useRef } from 'react';
import './roi.css';

// SVG Icon Components for a professional look
const IconTime = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconScale = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m1-1.5l-1-1.5m0 0l-1 1.5m1-1.5l-1-1.5m-7.5 0h7.5m-7.5 0l-1 1.5m1-1.5l-1-1.5m0 0l-1 1.5m1-1.5l-1-1.5" />
  </svg>
);

const IconContract = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

// Custom hook to detect if element is in viewport for animations
const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};

export const ROI = () => {
  const [sectionRef, isVisible] = useInView({ threshold: 0.1 });

  const roiMetrics = [
    {
      title: 'Save Time & Money',
      stat: '300%',
      description: 'Productivity increase',
      icon: <IconTime />,
      color: 'blue'
    },
    {
      title: 'Flexible Scaling',
      stat: '24/7',
      description: 'Available when you need it',
      icon: <IconScale />,
      color: 'purple'
    },
    {
      title: 'No Contracts',
      stat: 'Zero',
      description: 'Commitment required',
      icon: <IconContract />,
      color: 'green'
    }
  ];

  return (
    <section id="roi" className="roi-section" ref={sectionRef}>
      <div className="roi-container">
        {/* LEFT CONTENT COLUMN */}
        <div className={`roi-content-column ${isVisible ? 'is-visible' : ''}`}>
          <div className="roi-header">
            <span className="roi-eyebrow">Maximize Your Output</span>
            <h2 className="roi-title">
              Drive tangible ROI and achieve your goals faster.
            </h2>
            <p className="roi-subtitle">
              Save time and resources without the overhead of hiring, onboarding, or management. With SkillHive, you gain a flexible partner that scales with your needs, ensuring you only pay for what you use.
            </p>
          </div>

          <div className="roi-metrics">
            {roiMetrics.map((metric, index) => (
              <div
                key={index}
                className="metric-card"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`metric-icon-wrapper metric-${metric.color}`}>
                  {metric.icon}
                </div>
                <div className="metric-content">
                  <p className="metric-stat">{metric.stat}</p>
                  <h3 className="metric-title">{metric.title}</h3>
                  <p className="metric-description">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>

           <div className="roi-cta">
             <button className="cta-button">
               Start Your Journey
               <svg className="cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
               </svg>
             </button>
             <p className="cta-guarantee">
               Flexible scaling • No long-term contracts
             </p>
           </div>
        </div>

        {/* RIGHT VISUAL COLUMN */}
        <div className={`roi-visual-column ${isVisible ? 'is-visible' : ''}`}>
          <div className="roi-images-container">
            <img
              src="https://images.ctfassets.net/z3pjfvfh0c2f/3ROxzJN94a8YJ5YkpM5Lb2/c1cbedff4222ec44e56b618748365191/Graph__3_.png?q=70&fm=webp"
              alt="ROI Analytics Dashboard"
              className="roi-image roi-image-1"
            />
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ROI Analytics Chart"
              className="roi-image roi-image-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};