import React, { useEffect } from 'react';
import { Navbar } from '../components/navbar'; // Assuming Navbar is here or adjust path
import './HowItWorkspage.css';

// --- Award-Winning Graphic Components (Custom-built to be more illustrative) ---

const AnimatedBookingGraphic = () => (
  <div className="graphic-card animated-booking">
    <div className="card-header">
      <div className="dot red"></div>
      <div className="dot yellow"></div>
      <div className="dot green"></div>
    </div>
    <div className="calendar-grid">
      <div className="day-header">Mo</div><div className="day-header">Tu</div><div className="day-header">We</div><div className="day-header">Th</div><div className="day-header">Fr</div>
      {Array(25).fill().map((_, i) => (
        <div key={i} className={`calendar-day day-${i + 1}`}>
          {i === 9 && <div className="event-marker blue"></div>}
          {i === 14 && <div className="event-marker green"></div>}
          {i === 18 && <div className="event-marker red"></div>}
          {i === 6 && <div className="hover-effect"></div>} {/* Hover effect for step 1 */}
          {i + 1}
        </div>
      ))}
    </div>
    <div className="meeting-prompt">
      <span className="person-icon">👤</span> Initial Consultation
    </div>
  </div>
);

const AnimatedMatchingGraphic = () => (
  <div className="graphic-card animated-matching">
    <div className="header-bar"></div>
    <div className="person-group">
      <div className="person large-circle"></div>
      <div className="person-flow">
        <div className="small-circle one"></div>
        <div className="small-circle two"></div>
        <div className="small-circle three"></div>
      </div>
      <div className="person small-circle"></div>
    </div>
    <div className="match-detail">
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
      <span className="match-status">Matching in progress...</span>
    </div>
  </div>
);

const AnimatedOnboardingGraphic = () => (
  <div className="graphic-card animated-onboarding">
    <div className="desktop-screen">
      <div className="task-list">
        <div className="list-item completed"><span className="checkmark">✓</span> Account Setup</div>
        <div className="list-item completed"><span className="checkmark">✓</span> Tool Access</div>
        <div className="list-item current"><span className="cursor-indicator"></span> First Tasks</div>
        <div className="list-item">Training & Protocols</div>
      </div>
    </div>
    <div className="mobile-notification">
      <span className="notif-icon">🔔</span> Onboarding Complete!
    </div>
  </div>
);

const AnimatedDelegatingGraphic = () => (
  <div className="graphic-card animated-delegating">
    <div className="message-bubble sender">
      Can you schedule this for me? <span className="timestamp">10:30 AM</span>
    </div>
    <div className="message-bubble assistant">
      Done! Added to your calendar. <span className="timestamp">10:35 AM</span>
    </div>
    <div className="app-icon mail">✉️</div>
    <div className="app-icon slack">💬</div>
    <div className="app-icon calendar">🗓️</div>
  </div>
);


// --- New Core Components ---

// What You Can Delegate Section
const DelegationSection = () => {
  const categories = [
    { title: "Calendar Management", items: ["Scheduling meetings", "Booking appointments", "Sending invitations"] },
    { title: "Email & Communication", items: ["Inbox triage", "Drafting responses", "Filtering spam"] },
    { title: "Travel Planning", items: ["Booking flights & hotels", "Creating itineraries", "Expense reports"] },
    { title: "Research & Data", items: ["Market research", "Competitor analysis", "Data entry"] },
    { title: "CRM & Sales Support", items: ["Lead qualification", "CRM updates", "Follow-up emails"] },
    { title: "Personal Tasks", items: ["Gift shopping", "Dinner reservations", "Household errands"] },
  ];

  return (
    <section className="delegation-section scroll-reveal">
      <div className="container">
        <h2 className="section-heading">What can you delegate?</h2>
        <p className="section-intro">
          From routine administrative tasks to complex project support, SkillHive assistants empower you to focus on your core business.
        </p>
        <div className="delegation-grid">
          {categories.map((category, index) => (
            <div key={index} className="delegation-card">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Seamless Integration Section
const IntegrationSection = () => {
  const tools = [
    { name: "Google Workspace", icon: "https://www.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png" }, // Generic Google icon
    { name: "Microsoft 365", icon: "https://img.icons8.com/color/48/000000/microsoft-office-365.png" },
    { name: "Slack", icon: "https://img.icons8.com/color/48/000000/slack-new.png" },
    { name: "Zoom", icon: "https://img.icons8.com/color/48/000000/zoom.png" },
    { name: "Salesforce", icon: "https://img.icons8.com/color/48/000000/salesforce.png" },
    { name: "Asana", icon: "https://img.icons8.com/color/48/000000/asana.png" },
    { name: "HubSpot", icon: "https://img.icons8.com/color/48/000000/hubspot.png" },
    { name: "CRM Systems", icon: "https://img.icons8.com/ios-filled/50/000000/crm.png" }, // Generic CRM
  ];
  return (
    <section className="integration-section scroll-reveal">
      <div className="container">
        <h2 className="section-heading">Integrate seamlessly with your tools</h2>
        <p className="section-intro">
          Your SkillHive assistant works directly within the platforms you already use every day, ensuring a smooth transition and immediate productivity.
        </p>
        <div className="tool-icons-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-item">
              <img src={tool.icon} alt={tool.name} />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Meet Our Assistants Section
const AssistantsSection = () => {
  const assistants = [
    { name: "Emily R.", specialty: "Executive Support", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Michael B.", specialty: "Project Management", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sarah K.", specialty: "Marketing & Comms", avatar: "https://images.unsplash.com/photo-1599566150163-29194d6b4854?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "David L.", specialty: "Administrative Tasks", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDBofDB8fHx8fA%3D%3D" },
  ];
  return (
    <section className="assistants-section scroll-reveal">
      <div className="container">
        <h2 className="section-heading">Meet a few of our SkillHive experts</h2>
        <p className="section-intro">
          Our team is composed of highly experienced, U.S.-based professionals, hand-picked for their diverse skills and dedication to your success.
        </p>
        <div className="assistant-grid">
          {assistants.map((assistant, index) => (
            <div key={index} className="assistant-card">
              <img src={assistant.avatar} alt={assistant.name} className="assistant-avatar" />
              <h3>{assistant.name}</h3>
              <p>{assistant.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Main Step Section Component
const StepSection = ({ step, title, description, graphic: GraphicComponent, reverse, imageBottomSrc, detailedDescription }) => {
  useEffect(() => {
    // Scroll animation logic
    const elements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    elements.forEach(element => observer.observe(element));

    return () => elements.forEach(element => observer.unobserve(element));
  }, []); // Run once on mount

  const content = (
    <div className="step-content">
      <div className="step-number">{step}</div>
      <h2 className="step-title">{title}</h2>
      <p className="step-description">{description}</p>
      {detailedDescription && <p className="step-detailed-description">{detailedDescription}</p>}
      {imageBottomSrc && <img src={imageBottomSrc} alt="Team member" className="step-bottom-image" />}
    </div>
  );

  const graphic = (
    <div className="step-graphic">
      <GraphicComponent />
    </div>
  );

  return (
    <section className={`step-section container scroll-reveal ${reverse ? 'reverse-layout' : ''}`}>
      {reverse ? (
        <>
          {graphic}
          {content}
        </>
      ) : (
        <>
          {content}
          {graphic}
        </>
      )}
    </section>
  );
};


// Pricing CTA Section
const PricingCTA = ({ price, buttonText }) => (
  <section className="pricing-cta-section scroll-reveal">
    <div className="container">
      <h2 className="cta-headline">The help you need, only when you need it.</h2>
      <p className="cta-description">
        Whether you're short-staffed, scaling up, or just need a few extra hours each week, <strong>SkillHive</strong> gives you flexible support without the commitment of a full-time hire. Plans start at <strong>{price}</strong> per month, and our team can help you explore what makes sense for your workload and goals.
      </p>
      <button className="cta-button" onClick={() => window.location.assign('/get-started')}>{buttonText}</button>
    </div>
  </section>
);

// --- Main Page Component ---

const HowItWorksPage = () => {
  return (
    <>
      <Navbar /> {/* Assuming Navbar is fixed at the top */}
      <div className="how-it-works-page">
        {/* 1. Hero Section (White) */}
        <header className="page-header white-bg scroll-reveal">
          <div className="container">
            <p className="header-eyebrow">OUR PROCESS</p>
            <h1>Simplify your workday with SkillHive.</h1>
            <p className="header-subtitle">
              Discover a streamlined, four-step process to connect with your perfect virtual assistant and reclaim your time.
            </p>
            <button className="header-button" onClick={() => window.location.assign('/get-started')}>Get started today</button>
          </div>
        </header>

        {/* 2. Step 1: Talk with our team */}
        <StepSection
          step="01"
          title="Connect with our experts"
          description="Schedule a no-obligation call with our team to discuss your unique business needs and the challenges you're facing. We'll listen, advise, and outline how SkillHive can empower your growth."
          detailedDescription="This personalized consultation helps us understand your workflow, preferred tools, and the specific tasks you envision delegating. It's the first step towards a more productive future."
          graphic={AnimatedBookingGraphic}
          reverse={false}
          imageBottomSrc="https://images.unsplash.com/photo-1506452819137-0422416856b8?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        {/* 3. Step 2: Get matched with your assistant */}
        <StepSection
          step="02"
          title="Your perfect match, guaranteed"
          description="Leveraging our advanced matching algorithm and human expertise, we quickly pair you with a U.S.-based virtual assistant whose skills, time zone, and work style align seamlessly with yours."
          detailedDescription="Our vetting process ensures that every SkillHive professional is not just experienced, but also proactive and ready to integrate into your team with minimal friction."
          graphic={AnimatedMatchingGraphic}
          reverse={true}
        />

        {/* 4. Delegation Section */}
        <DelegationSection />

        {/* 5. Step 3: Onboard and set up */}
        <StepSection
          step="03"
          title="Smooth onboarding & setup"
          description="We guide you and your new assistant through a comprehensive onboarding process, ensuring all necessary tools and access are configured for immediate productivity. Your dedicated supervisor oversees the transition."
          detailedDescription="From setting up task management to syncing calendars, we handle the technicalities so you can focus on delegating, not managing setup."
          graphic={AnimatedOnboardingGraphic}
          reverse={false}
        />

        {/* 6. Integration Section */}
        <IntegrationSection />

        {/* 7. Step 4: Start delegating tasks */}
        <StepSection
          step="04"
          title="Delegate with confidence"
          description="Begin offloading tasks through your preferred communication channels. Whether it's Slack, email, or a project management tool, your assistant is ready to take action, providing regular updates and proactive support."
          detailedDescription="Experience the freedom of knowing critical tasks are handled efficiently and professionally, allowing you to reclaim valuable time for strategic initiatives."
          graphic={AnimatedDelegatingGraphic}
          reverse={true}
        />

        {/* 8. Meet Our Assistants Section */}
        <AssistantsSection />

        {/* 9. Pricing and CTA */}
        <PricingCTA
          price="starting from $549"
          buttonText="Begin Your Free Consultation"
        />
      </div>
    </>
  );
};

export default HowItWorksPage;