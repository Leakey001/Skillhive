import React, { useEffect } from 'react';
import { Navbar } from '../components/navbar'; // Adjust path if needed
import './solutionsforteams.css';

// --- Custom Graphic Components (for Hero and Management sections) ---
const TeamHeroGraphic = () => (
    <div className="hero-graphic-teams">
        <div className="team-node node-manager"></div>
        <div className="team-node node-member-1"></div>
        <div className="team-node node-member-2"></div>
        <div className="team-node node-member-3"></div>
        <div className="team-connection c1"></div>
        <div className="team-connection c2"></div>
        <div className="team-connection c3"></div>
    </div>
);

const ManagementGraphic = () => (
    <div className="management-graphic">
        <div className="dashboard-window">
            <div className="dashboard-header">Team Overview</div>
            <div className="dashboard-metric">
                <p>Hours Used<span>120/160</span></p>
                <div className="progress-bar"><div style={{ width: '75%' }}></div></div>
            </div>
            <div className="dashboard-metric">
                <p>Tasks Completed<span>86</span></p>
                <div className="progress-bar"><div style={{ width: '86%' }}></div></div>
            </div>
        </div>
    </div>
);

// --- Core Page Components (Text-Focused) ---
const BenefitCard = ({ title, description }) => (
    <div className="benefit-card">
        <h3 className="benefit-title">{title}</h3>
        <p className="benefit-description">{description}</p>
    </div>
);

const UseCaseExample = ({ title, description, tasks }) => (
    <div className="use-case-card">
        <h3 className="use-case-title">{title}</h3>
        <p className="use-case-description">{description}</p>
        <ul className="use-case-tasks">
            {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ul>
    </div>
);

// --- Main Page Component ---
export default function SolutionsForTeams() {
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
        { title: "Flexible Scaling", description: "Adjust support hours up or down based on project needs or seasonal demands without long-term commitments." },
        { title: "Strategic Focus", description: "Free your leadership team to concentrate on high-level strategy and growth initiatives by offloading admin tasks." },
        { title: "Measurable ROI", description: "Track time savings and productivity gains across your team with clear reporting and performance metrics." },
        { title: "Seamless Collaboration", description: "Our assistants integrate with your existing tools and workflows for smooth, centralized team coordination." }
    ];

    const workflowSteps = [
        { title: "Single Point of Contact", description: "Your team lead communicates requests to a dedicated SkillHive assistant or manager." },
        { title: "Task Triage & Distribution", description: "The assistant efficiently manages, prioritizes, and distributes tasks to the appropriate team members." },
        { title: "Unified Execution & Reporting", description: "Tasks are completed consistently, with progress and hours tracked in a single, transparent dashboard." },
    ];
    
    const useCases = [
        { title: "Team Coordination", description: "Keep leadership calendars aligned, schedule complex multi-department meetings, and manage group travel.", tasks: ["Schedule quarterly planning sessions", "Coordinate travel for team off-sites", "Manage shared team calendars"] },
        { title: "Project Support", description: "Provide administrative support for key projects, helping to track deliverables and coordinate tasks.", tasks: ["Track project milestones", "Prepare status report drafts", "Manage shared project documentation"] },
        { title: "Operational Support", description: "Streamline team operations by handling CRM updates, expense reports, and onboarding logistics.", tasks: ["Update CRM with new leads", "Compile team expense reports", "Prepare onboarding materials for new hires"] }
    ];

    const testimonials = [
        { quote: "SkillHive transformed how our leadership team manages schedules. The centralized support model means everyone is aligned, and the time saved is invaluable for focusing on core business challenges.", author: "Emma Rodriguez", role: "VP Operations, ScaleFast", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop" },
        { quote: "The ability to see a unified report of hours used and tasks completed across my team has given me an unprecedented level of clarity on our operational efficiency.", author: "David Kim", role: "CTO, InnovateX", avatar: "https://images.unsplash.com/photo-1599566150163-29194d6b4854?q=80&w=256&auto=format&fit=crop" }
    ];

    return (
        <div className="solutions-teams-container">
            <Navbar />
            <main>
                <section className="teams-hero scroll-reveal">
                    <div className="container">
                        <p className="hero-eyebrow">Solutions for Teams</p>
                        <h1 className="hero-title">Amplify Your Team's Impact</h1>
                        <p className="hero-subtitle">
                            Provide your key members with dedicated support to streamline operations, boost productivity, and drive collective success.
                        </p>
                        <TeamHeroGraphic />
                    </div>
                </section>

                <section className="teams-benefits-section scroll-reveal">
                    <div className="container">
                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => <BenefitCard key={index} {...benefit} />)}
                        </div>
                    </div>
                </section>
                
                <section className="team-workflow-section scroll-reveal">
                    <div className="container">
                        <h2 className="section-title">A Centralized Workflow That Scales</h2>
                        <p className="section-subtitle">Our model is designed for team efficiency, providing a single point of contact to manage support across multiple leaders.</p>
                        <div className="workflow-diagram">
                            {workflowSteps.map((step, index) => (
                                <React.Fragment key={index}>
                                    <div className="workflow-step">
                                        <div className="workflow-number">{`0${index + 1}`}</div>
                                        <div className="workflow-text">
                                            <h3>{step.title}</h3>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                    {index < workflowSteps.length - 1 && <div className="workflow-arrow"></div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="teams-use-cases-section scroll-reveal">
                    <div className="container">
                        <h2 className="section-title">How High-Performing Teams Delegate</h2>
                        <p className="section-subtitle">Real-world examples of how teams leverage SkillHive to improve efficiency.</p>
                        <div className="use-cases-grid">
                            {useCases.map((useCase, index) => <UseCaseExample key={index} {...useCase} />)}
                        </div>
                    </div>
                </section>
                
                <section className="management-section scroll-reveal">
                    <div className="container">
                        <div className="management-content">
                            <div className="management-text">
                                <h2 className="section-title">Centralized Management, Clear ROI</h2>
                                <p className="management-description">
                                    Oversee your entire team's support from a single dashboard. Track hours, monitor task progress, and get a clear view of your return on investment.
                                </p>
                                <ul className="management-highlights">
                                    <li>Unified billing and account management.</li>
                                    <li>Performance dashboards for team-wide insights.</li>
                                    <li>Consistent quality and process across all users.</li>
                                    <li>Easily reallocate hours based on team priorities.</li>
                                </ul>
                            </div>
                            <div className="management-visual-wrapper">
                                <ManagementGraphic />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="teams-testimonials-section scroll-reveal">
                    <div className="container">
                        <h2 className="section-title">Trusted by Team Leaders</h2>
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

                <section className="teams-cta-section scroll-reveal">
                    <div className="container">
                        <h2 className="cta-title">Ready to Empower Your Entire Team?</h2>
                        <p className="cta-subtitle">Let's discuss a customized support plan that aligns with your team's goals and budget.</p>
                        <button className="cta-button" onClick={() => window.location.assign('/get-started')}>Request a Team Consultation</button>
                    </div>
                </section>
            </main>
        </div>
    );
}