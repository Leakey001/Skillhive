import React, { useEffect } from 'react';
import { Navbar } from '../components/navbar'; // Adjust path if needed
import './solutionsforexecutives.css';

// --- Custom Graphic Components ---
const HeroGraphic = () => (
    <div className="hero-graphic">
        <div className="graphic-ring"></div>
        <div className="graphic-ring"></div>
        <div className="graphic-ring"></div>
        <div className="graphic-center-dot"></div>
    </div>
);

const SupportGraphic = () => (
    <div className="support-graphic">
        <div className="graphic-shape human-shape"></div>
        <div className="graphic-shape ai-shape"></div>
    </div>
);

// --- Core Page Components ---

const BenefitCard = ({ icon, title, description }) => (
    <div className="benefit-card">
        <div className="benefit-icon">{icon}</div>
        <h3 className="benefit-title">{title}</h3>
        <p className="benefit-description">{description}</p>
    </div>
);

const UseCaseExample = ({ title, description, tasks, icon }) => (
    <div className="use-case-card">
        <div className="use-case-header">
            <div className="use-case-icon">{icon}</div>
            <h3 className="use-case-title">{title}</h3>
        </div>
        <p className="use-case-description">{description}</p>
        <ul className="use-case-tasks">
            {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ul>
    </div>
);

export default function SolutionsForExecutives() {
    useEffect(() => {
        const elements = document.querySelectorAll('.scroll-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        elements.forEach(element => observer.observe(element));
        return () => elements.forEach(element => observer.unobserve(element));
    }, []);

    const benefits = [
        { icon: "🎯", title: "Sharpened Focus", description: "Eliminate distractions and concentrate on high-impact decisions and strategic growth opportunities." },
        { icon: "⚡️", title: "Accelerated Execution", description: "Move faster on key initiatives by offloading operational and administrative tasks to a dedicated professional." },
        { icon: "⚖️", title: "Reclaimed Time", description: "Regain control of your schedule and reinvest your time in leadership, innovation, and personal well-being." },
        { icon: "📈", title: "Scalable Partnership", description: "Flexibly adjust your support level based on company needs, project phases, and growth trajectories." }
    ];

    const timelineSteps = [
        { step: "01", title: "Strategic Consultation", description: "We start with a deep dive into your goals, workflow, and delegation opportunities." },
        { step: "02", title: "Executive Matching", description: "You're paired with a senior assistant specifically vetted for executive-level support." },
        { step: "03", title: "Seamless Integration", description: "We manage the onboarding process for you, ensuring your assistant is ready to contribute from day one." }
    ];

    const useCases = [
        { icon: "🗓️", title: "Strategic Calendar Management", description: "Protect your focus time, manage complex travel, and prioritize high-stakes meetings.", tasks: ["Block time for deep work", "Coordinate board & investor meetings", "Manage multi-city travel logistics"] },
        { icon: "📧", title: "Executive Communications", description: "Handle critical correspondence, manage stakeholder relations, and streamline your inbox.", tasks: ["Screen and prioritize emails", "Draft internal & external comms", "Prepare meeting agendas & summaries"] },
        { icon: "📊", title: "Data & Reporting", description: "Synthesize information, prepare reports, and conduct research to inform your decisions.", tasks: ["Compile competitive analysis", "Prepare board presentation drafts", "Research potential partners or hires"] }
    ];
    
    const testimonials = [
        { quote: "Because I had tools that automated my processes, I always maintained that I didn't need an EA. But as Klara grew, I realized that the tools I was using couldn't provide the customized and professional service that a human is capable of.", author: "Simon Lorenz", role: "Co-CEO, Klara", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop" },
        { quote: "Double transformed how our leadership team manages schedules. The time saved is invaluable for focusing on core business challenges.", author: "Emma Rodriguez", role: "VP Operations, ScaleFast", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop" }
    ];


    return (
        <div className="solutions-executives-container">
            <Navbar />
            <main>
                {/* --- Hero Section --- */}
                <section className="executives-hero scroll-reveal">
                    <div className="container">
                        <p className="hero-eyebrow">Solutions for Executives</p>
                        <h1 className="hero-title">Lead with Clarity and Impact</h1>
                        <p className="hero-subtitle">
                            Your time is your most valuable asset. Our executive-level support is designed to protect it, allowing you to focus on the strategic decisions that drive your business forward.
                        </p>
                        <HeroGraphic />
                    </div>
                </section>

                {/* --- Benefits Section --- */}
                <section className="executives-benefits-section scroll-reveal">
                    <div className="container">
                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => <BenefitCard key={index} {...benefit} />)}
                        </div>
                    </div>
                </section>

                {/* --- How It Works Timeline (NEW) --- */}
                <section className="how-it-works-timeline-section scroll-reveal">
                    <div className="container">
                        <h2 className="section-title">Your Path to Effortless Delegation</h2>
                        <div className="timeline">
                            {timelineSteps.map((step, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-step-number">{step.step}</div>
                                    <div className="timeline-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Use Cases Section --- */}
                <section className="executives-use-cases-section scroll-reveal">
                    <div className="container">
                        <h2 className="section-title">Delegate What Matters</h2>
                        <p className="section-subtitle">Real-world examples of how top executives leverage SkillHive.</p>
                        <div className="use-cases-grid">
                            {useCases.map((useCase, index) => <UseCaseExample key={index} {...useCase} />)}
                        </div>
                    </div>
                </section>

                {/* --- Intelligent Support Section (Merged AI & Support) --- */}
                <section className="intelligent-support-section scroll-reveal">
                    <div className="container">
                        <div className="support-content">
                            <div className="support-text">
                                <h2 className="section-title">An Intelligent Support System</h2>
                                <p className="support-description">
                                    We combine the nuanced judgment of a dedicated human assistant with the speed and efficiency of our proprietary AI, AURORA. This synergy ensures tasks are not just completed, but optimized.
                                </p>
                                <ul className="support-highlights">
                                    <li>AI-powered task suggestions and context analysis.</li>
                                    <li>Human-led quality assurance and complex problem-solving.</li>
                                    <li>Adaptive learning from your preferences and patterns.</li>
                                    <li>Seamless integration with your existing tools.</li>
                                </ul>
                            </div>
                            <div className="support-visual-wrapper">
                                <SupportGraphic />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Testimonials Section --- */}
                <section className="executives-testimonials-section scroll-reveal">
                    <div className="container">
                        <h2 className="section-title">Trusted by Executive Leaders</h2>
                        <div className="testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="testimonial-card">
                                    <img src={testimonial.avatar} alt={testimonial.author} className="testimonial-avatar" />
                                    <p className="testimonial-text">"{testimonial.quote}"</p>
                                    <div className="testimonial-author">
                                        <strong>{testimonial.author}</strong>, {testimonial.role}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* --- CTA Section --- */}
                <section className="executives-cta-section scroll-reveal">
                    <div className="container">
                        <h2 className="cta-title">Ready to Lead More Effectively?</h2>
                        <p className="cta-subtitle">Discover how a dedicated SkillHive assistant can amplify your impact and transform your workday.</p>
                        <button className="cta-button" onClick={() => window.location.assign('/get-started')}>Book a Consultation</button>
                    </div>
                </section>
            </main>
        </div>
    );
}