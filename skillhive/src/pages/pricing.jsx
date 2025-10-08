import React, { useState } from 'react';
import './pricing.css';

// --- Accordion Item for FAQ Section ---
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

// --- Main Pricing Page Component ---
export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: "Starter",
            monthlyPrice: "$499",
            yearlyPrice: "$419",
            description: "For individuals and small teams getting started.",
            features: [ "20 hours/month", "Dedicated Assistant", "Email & Calendar Management", "Standard Response Time" ],
        },
        {
            name: "Professional",
            monthlyPrice: "$799",
            yearlyPrice: "$679",
            description: "For busy professionals who need consistent support.",
            features: [ "40 hours/month", "Dedicated Assistant", "Priority Support", "Travel & Event Planning", "Basic Reporting" ],
            isPopular: true,
        },
        {
            name: "Executive",
            monthlyPrice: "$1299",
            yearlyPrice: "$1099",
            description: "For executives and teams requiring comprehensive delegation.",
            features: [ "80 hours/month", "Senior Dedicated Assistant", "Instant Response Time", "AI-Powered Task Optimization", "Advanced Reporting" ],
        }
    ];

    const comparisonFeatures = [
        { feature: "Support Hours", values: ["20 / month", "40 / month", "80 / month"] },
        { feature: "Dedicated Assistant", values: ["✓", "✓", "Senior"] },
        { feature: "Response Time", values: ["Standard", "Priority", "Instant"] },
        { feature: "Email & Calendar", values: ["✓", "✓", "✓"] },
        { feature: "Travel & Event Planning", values: ["-", "✓", "✓"] },
        { feature: "AI Task Optimization", values: ["-", "-", "✓"] },
        { feature: "Reporting & Insights", values: ["-", "Basic", "Advanced"] },
    ];

    const faqs = [
        { question: "What if I need more hours than my plan includes?", answer: "You can easily add extra hours at a standard hourly rate, or upgrade your plan at any time. We're flexible to accommodate your changing needs." },
        { question: "Can I switch plans later on?", answer: "Absolutely. You can upgrade, downgrade, or cancel your plan at the end of any monthly billing cycle, providing you with complete control." },
        { question: "How does the matching process work?", answer: "After our initial consultation, we use a combination of AI analysis and human expertise to match you with a U.S.-based assistant whose skills, experience, and work style are the perfect fit for you." },
        { question: "Is there a long-term contract?", answer: "No. All our plans are on a month-to-month basis. We believe in earning your business every month and don't believe in locking you into long-term commitments." },
    ];

    const testimonials = [
        {
            quote: "SkillHive transformed how I manage my schedule. The time saved is invaluable.",
            author: "Alex Johnson",
            role: "CEO at TechNova",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
        },
        {
            quote: "My assistant handles everything seamlessly, allowing me to focus on strategy.",
            author: "Sarah Chen",
            role: "COO at InnovateX",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop"
        },
        {
            quote: "The AI integration is impressive. It learns and adapts to my needs quickly.",
            author: "Michael Torres",
            role: "Founder at GrowthLabs",
            avatar: "https://images.unsplash.com/photo-1599566150163-29194d6b4854?q=80&w=256&auto=format&fit=crop"
        }
    ];

    return (
        <div className="pricing-page-container">
            <main>
                {/* Hero Section */}
                <section className="pricing-hero">
                    <div className="container">
                        <h1 className="hero-title">Simple, transparent pricing</h1>
                        <p className="hero-subtitle">
                            Choose the plan that fits your workload. No hidden fees, no long-term contracts.
                        </p>
                        <div className="billing-toggle">
                            <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={billingCycle === 'yearly'}
                                    onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                                />
                                <span className="slider"></span>
                            </label>
                            <span className={billingCycle === 'yearly' ? 'active' : ''}>Yearly</span>
                            <span className="save-badge">Save 15%</span>
                        </div>
                    </div>
                </section>

                {/* Plans Section */}
                <section className="pricing-plans-section">
                    <div className="container">
                        <div className="plans-grid">
                            {plans.map((plan) => (
                                <div key={plan.name} className={`plan-card ${plan.isPopular ? 'plan-card--popular' : ''}`}>
                                    {plan.isPopular && <div className="popular-badge">Most Popular</div>}
                                    <div className="plan-header">
                                        <h3 className="plan-name">{plan.name}</h3>
                                        <p className="plan-description">{plan.description}</p>
                                        <div className="plan-price">
                                            <span className="price-amount">{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</span>
                                            <span className="price-period">/mo</span>
                                        </div>
                                    </div>
                                    <ul className="plan-features">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="feature-item">
                                                <span className="feature-icon">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className={`plan-cta ${plan.isPopular ? 'plan-cta--popular' : ''}`}
                                        onClick={() => window.location.assign('/get-started')}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Feature Comparison Table Section */}
                <section className="comparison-section">
                    <div className="container">
                        <h2 className="section-title">Compare All Features</h2>
                        <div className="comparison-table-wrapper">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Features</th>
                                        {plans.map(plan => <th key={plan.name}>{plan.name}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((item) => (
                                        <tr key={item.feature}>
                                            <td>{item.feature}</td>
                                            {item.values.map((value, i) => (
                                                <td key={i}>
                                                    {value === '✓' ? <span className="check-mark">✓</span> : value}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="pricing-testimonials-section">
                    <div className="container">
                        <h2 className="section-title">Trusted by leaders worldwide</h2>
                        <div className="testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="testimonial-card">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        className="testimonial-avatar"
                                    />
                                    <p className="testimonial-text">"{testimonial.quote}"</p>
                                    <div className="testimonial-author">
                                        <strong>{testimonial.author}</strong>, {testimonial.role}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq-section">
                    <div className="container">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="pricing-cta-section">
                    <div className="container">
                        <h2 className="cta-title">Ready to reclaim your time?</h2>
                        <p className="cta-subtitle">Let's find the perfect plan for you. Our team is ready to help you get started.</p>
                        <button
                            className="cta-button"
                            onClick={() => window.location.assign('/get-started')}
                        >
                            Book a Free Consultation
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}