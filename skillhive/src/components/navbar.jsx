import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

// Component for the Dropdown Item
const NavDropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="nav-dropdown-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)} // For keyboard navigation
      onBlur={() => setIsOpen(false)}  // For keyboard navigation
    >
      <button className="nav-link nav-dropdown-toggle" aria-haspopup="true" aria-expanded={isOpen}>
        {label}
        {/* Dropdown chevron/arrow */}
        <svg className={`dropdown-chevron ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Dropdown Menu */}
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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation items to match the image
  const navItems = [
    { href: '/how-it-works', label: 'How it works' },
    // 'Solutions' will be a dropdown
    { href: '/product', label: 'Product' },
    { href: '/pricing', label: 'Pricing' },
  ];

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      // Handle scroll to section for same page navigation
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle page navigation
      navigate(href);
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If on homepage, scroll to hero section
      const element = document.getElementById('hero');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage
      navigate('/');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Left: Logo */}
          <div className="nav-left">
            <button 
              onClick={handleLogoClick}
              className="logo"
              aria-label="Go to homepage"
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
                onClick={() => handleNavigation(item.href)}
                className={`nav-link ${location.pathname === item.href ? 'nav-link--active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Solutions Dropdown */}
            <NavDropdown label="Solutions">
              <button 
                className="dropdown-item" 
                onClick={() => {
                  navigate('/solutions/executives');
                  setIsMobileMenuOpen(false);
                }}
              >
                For Executives
              </button>
              <button 
                className="dropdown-item" 
                onClick={() => {
                  navigate('/solutions/teams');
                  setIsMobileMenuOpen(false);
                }}
              >
                For Teams
              </button>
            </NavDropdown>

          </div>

          {/* Right: CTA Buttons */}
          <div className="nav-right">
            <div className="nav-actions">
              <button className="btn-login desktop-only" aria-label="Log in" onClick={() => handleNavigation('/login')}>
                Log in
              </button>
              <button className="btn-primary desktop-only" onClick={() => handleNavigation('/get-started')}>
                Get Started
              </button>
              
              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mobile-menu-toggle mobile-only"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="menu-icon" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
              onClick={() => handleNavigation(item.href)}
              className={`mobile-nav-link ${location.pathname === item.href ? 'mobile-nav-link--active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <div className="mobile-dropdown-section">
            <h3 className="mobile-dropdown-title">Solutions</h3>
            <button 
              onClick={() => {
                navigate('/solutions/executives');
                setIsMobileMenuOpen(false);
              }}
              className="mobile-nav-link"
            >
              For Executives
            </button>
            <button 
              onClick={() => {
                navigate('/solutions/teams');
                setIsMobileMenuOpen(false);
              }}
              className="mobile-nav-link"
            >
              For Teams
            </button>
          </div>
          {/* LOGIN BUTTON ADDED FOR MOBILE */}
          <button 
             onClick={() => {
               handleNavigation('/login');
               setIsMobileMenuOpen(false);
             }}
             className="btn-login btn-login--mobile"
           >
             Log in
           </button>
           <button 
             onClick={() => {
               handleNavigation('/get-started');
               setIsMobileMenuOpen(false);
             }}
             className="btn-primary btn-primary--mobile"
           >
             Get Started
           </button>
        </div>
      </div>
    </nav>
  );
};