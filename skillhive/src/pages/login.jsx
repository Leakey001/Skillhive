import React, { useState } from 'react';
import { Navbar } from '../components/navbar'; // Assuming you want the navbar on this page
import './login.css'; // We will create this CSS file next

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handler for the login form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    
    // --- DEMO LOGIC ---
    // In a real application, you would send this data to a backend server
    // for validation and authentication.
    console.log('Attempting to log in with:');
    console.log('Email:', email);
    console.log('Password:', password);

    alert(`Login attempt for ${email}. Check the console for details. (This is a demo)`);
    
    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };

  // Handler for the "Create Account" link
  const handleCreateAccount = () => {
    // In a real application, this would navigate to a separate sign-up page.
    // For example: navigate('/signup');
    console.log('Redirecting to account creation page...');
    alert('You would be redirected to a sign-up page. (This is a demo)');
  };

  return (
    <>
      <Navbar />
      <div className="login-page-wrapper">
        <div className="login-card">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Please enter your details to sign in.</p>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                required 
              />
            </div>

            <button type="submit" className="login-button">Sign In</button>
          </form>

          <div className="create-account-prompt">
            <span>Don't have an account?</span>
            <button onClick={handleCreateAccount} className="create-account-link">
              Create an account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};