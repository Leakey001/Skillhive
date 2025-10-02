import React, { useState, useEffect } from 'react';
import './navbar.css';

// Component for the Dropdown Item
const NavDropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="nav-dropdown-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="nav-link nav-dropdown-toggle">
        {label}
        {/* Dropdown chevron/arrow */}
        <svg className={`dropdown-chevron ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Dropdown Menu (Placeholder) */}
      {isOpen && (
        <div className="nav-dropdown-menu">
          {children}
        </div>
      )}
    </div>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation items to match the image
  const navItems = [
    { href: 'how-it-works', label: 'How it works' },
    // 'Solutions' will be a dropdown
    { href: 'product', label: 'Product' },
    { href: 'pricing', label: 'Pricing' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Left: Logo */}
          <div className="nav-left">
            <button 
              onClick={() => scrollToSection('hero')}
              className="logo"
            >
              <div className="logo-icon"></div> 
              <span className="logo-text">SkillHive</span>
            </button>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="nav-menu nav-center desktop-only">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
            
            {/* Solutions Dropdown */}
            <NavDropdown label="Solutions">
              {/* Add actual dropdown links here later */}
              <button className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>For Executives</button>
              <button className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>For Teams</button>
            </NavDropdown>

          </div>

          {/* Right: CTA Buttons */}
          <div className="nav-right">
            <div className="nav-actions">
            <button className="btn-login"> 
              Log in
            </button>
            <button className="btn-primary">
              Get Started
            </button>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-toggle mobile-only"
            >
              <svg className="menu-icon" fill="currentColor" viewBox="0 0 20 20">
                {isMobileMenuOpen ? (
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                )}
              </svg>
            </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="mobile-nav-link"
            >
              {item.label}
            </button>
          ))}
          {/* Add Mobile Dropdown link here if needed */}
          <button className="mobile-nav-link">Solutions</button>
          <button className="mobile-login">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};