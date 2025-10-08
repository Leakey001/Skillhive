// Product.jsx - SkillHive Product Page (Simplified & Light Theme)
import React, { useEffect } from 'react';
import { Navbar } from '../components/navbar'; // Adjust path if needed
import './product.css';

// --- Utility Components (Simplified for Performance) ---

const MockupOmniChannel = () => (
    <div className="mockup-base mockup-omni">
        <div className="comm-node node-slack"></div>
        <div className="comm-node node-mobile"></div>
        <div className="comm-node node-web"></div>
        <div className="comm-node node-email"></div>
        <div className="comm-center-hub"></div>
    </div>
);

const MockupHybridAI = () => (
    <div className="mockup-base mockup-hybrid">
        <div className="hybrid-shape human-shape"></div>
        <div className="hybrid-shape ai-shape"></div>
    </div>
);

const MockupDashboard = () => (
    <div className="mockup-base mockup-dashboard">
        <div className="dashboard-metric">
            <span className="metric-value">42h</span>
            <span className="metric-label">Saved this month</span>
        </div>
        <div className="dashboard-chart">
            <div className="chart-bar bar-1"></div>
            <div className="chart-bar bar-2"></div>
            <div className="chart-bar bar-3"></div>
            <div className="chart-bar bar-4"></div>
        </div>
    </div>
);

const MockupOptimization = () => (
    <div className="mockup-base mockup-optimization">
        <div className="flow-step current">Analyze</div>
        <div className="flow-arrow">→</div>
        <div className="flow-step">Optimize</div>
    </div>
);

// --- Split Section Mockups ---

const MobileChatMockup = () => (
    <div className="split-mockup-wrapper split-mockup-wrapper--chat">
        <div className="chat-message user">"Find the best flight to NYC for next Tuesday."</div>
        <div className="chat-message assistant thinking">
            <div className="dot-flashing"></div>
        </div>
        <div className="chat-message assistant">"Found a direct flight on JetBlue at 9 AM for $249. Should I book it?"</div>
    </div>
);

const PreferencesMockup = () => (
    <div className="split-mockup-wrapper split-mockup-wrapper--preferences">
        <div className="preference-card">
            <span className="pref-icon">✈️</span>
            <div className="pref-text">
                <h4>Travel Preferences</h4>
                <p>Aisle seats, direct flights, loyalty programs applied.</p>
            </div>
        </div>
        <div className="preference-card">
            <span className="pref-icon">📅</span>
            <div className="pref-text">
                <h4>Scheduling Protocol</h4>
                <p>Automatically decline meetings before 9 AM.</p>
            </div>
        </div>
        <div className="preference-card">
            <span className="pref-icon">💡</span>
            <div className="pref-text">
                <h4>Proactive Suggestions</h4>
                <p>Learns patterns to anticipate future needs.</p>
            </div>
        </div>
    </div>
);


// --- Core Layout Components ---

const Hero = () => (
    <section className="hero-section scroll-reveal">
        <div className="container">
            <h1 className="hero-title">
                The Executive Assistant Experience,
                <br />
                <span className="hero-gradient-text">Redefined by AI</span>
            </h1>
            <p className="hero-subtitle">
                SkillHive combines the intuition of a world-class human assistant with the speed and intelligence of a powerful AI backend. Delegate smarter, move faster, and achieve more.
            </p>
            <div className="hero-image-container">
                {/* Simplified, static browser window mockup */}
                <div className="hero-browser-mockup">
                    <div className="browser-header">
                        <div className="browser-dot"></div>
                        <div className="browser-dot"></div>
                        <div className="browser-dot"></div>
                    </div>
                    <div className="browser-body">
                        <div className="browser-task">✓  Calendar Sync</div>
                        <div className="browser-task active">→ Draft Email</div>
                        <div className="browser-task">... Book Travel</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const FeatureCard = ({ title, description, MockupComponent }) => (
    <div className="feature-card scroll-reveal">
        <div className="feature-card__mockup-area">
            <MockupComponent />
        </div>
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
    </div>
);

const FeatureSection = () => (
    <section className="feature-section">
        <div className="container feature-grid">
            <FeatureCard
                title="Delegate from anywhere"
                description="Your assistant is always one tap away. Find the SkillHive app on the web, mobile, Slack, and Chrome."
                MockupComponent={MockupOmniChannel}
            />
            <FeatureCard
                title="Human + AI assistance"
                description="When AI is your assistant's assistant, there are no compromises. You win."
                MockupComponent={MockupHybridAI}
            />
            <FeatureCard
                title="Transparent reporting"
                description="See real-time usage, track your EA's performance, and get regular updates on all your tasks."
                MockupComponent={MockupDashboard}
            />
            <FeatureCard
                title="Industry best practices"
                description="Discover how other executives are delegating. Access coaching & advice tailored to your goals."
                MockupComponent={MockupOptimization}
            />
        </div>
    </section>
);

const SplitSection = ({ title, subtitle, content, MockupComponent, reverse = false }) => (
    <section className="split-section scroll-reveal">
        <div className={`container split-layout ${reverse ? 'split-layout--reverse' : ''}`}>
            <div className="split-layout__mockup">
                <MockupComponent />
            </div>
            <div className="split-layout__content">
                <h2 className="split-title">
                    {title}
                    {subtitle && <span className="split-title__accent"> {subtitle}</span>}
                </h2>
                <p className="split-content-text" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </div>
    </section>
);

const TestimonialSection = () => (
    <section className="testimonial-section scroll-reveal">
        <div className="container testimonial-container">
            <div className="testimonial-avatars">
                <img className="avatar-circle avatar-circle--1" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop" alt="Testimonial author 1" />
                <img className="avatar-circle avatar-circle--2" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop" alt="Testimonial author 2" />
            </div>
            <p className="testimonial-quote">
                "SkillHive is the first assistant service that truly 'gets it'. The predictive task completion means I get confirmation, not questions. It's like having a mind-reader on my team."
            </p>
            <p className="testimonial-author">Elara Vance</p>
            <p className="testimonial-title">Chief Innovation Officer at StellarCorp</p>
        </div>
    </section>
);

const AuroraSection = () => (
    <section className="aurora-section scroll-reveal">
        <div className="container">
            <div className="aurora-content">
                {/* Simplified, static AI graphic */}
                <div className="aurora-visual">
                    <div className="aurora-node node-center"></div>
                    <div className="aurora-node node-1"></div>
                    <div className="aurora-node node-2"></div>
                    <div className="aurora-node node-3"></div>
                    <div className="aurora-node node-4"></div>
                    <div className="aurora-node node-5"></div>
                    <div className="aurora-node node-6"></div>
                </div>
                <h2 className="aurora-title">Powered by AURORA AI</h2>
                <p className="aurora-description">
                    SkillHive’s AI companion, AURORA, proactively helps our assistants execute tasks more efficiently. They rely on AURORA to save time so they can prioritize critical projects that require their valuable expertise and human judgment.
                </p>
            </div>
        </div>
    </section>
);

const FinalCTA = () => (
    <section className="final-cta-section scroll-reveal">
        <div className="container">
            <div className="final-cta-content">
                <h2 className="final-cta-title">Delegate with confidence, trust, and visibility from day one.</h2>
                <p className="final-cta-description">
                    Let our tools do the heavy lifting, and don't be surprised to see how natural it feels. You were always meant to be good at this!
                </p>
                <button className="final-cta-button" onClick={() => window.location.assign('/get-started')}>
                    Get started
                </button>
            </div>
        </div>
    </section>
);

export default function ProductPage() {
    useEffect(() => {
        const elements = document.querySelectorAll('.scroll-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => observer.observe(element));

        return () => elements.forEach(element => observer.unobserve(element));
    }, []);

    return (
        <div className="product-page-container">
            <Navbar />
            <main>
                <Hero />
                <FeatureSection />
                <AuroraSection />
                <SplitSection
                    title="Adaptive Contextual Chat for"
                    subtitle="instant clarity"
                    content="Stop wasting time clarifying instructions. SkillHive's chat instantly analyzes your request, identifies missing data points, and surfaces contextual questions for your EA to ask. This reduces task delegation from minutes to seconds."
                    MockupComponent={MobileChatMockup}
                    reverse={false}
                />
                <SplitSection
                    title="The Predictive Personalization"
                    subtitle="Model"
                    content="SkillHive learns more than just your preferences. It learns your <strong>patterns</strong>—when you travel, who you meet, and how you approve tasks. Over time, it moves from suggestions to proactively performing multi-step actions on your behalf."
                    MockupComponent={PreferencesMockup}
                    reverse={true}
                />
                <TestimonialSection />
                <FinalCTA />
            </main>
        </div>
    );
}