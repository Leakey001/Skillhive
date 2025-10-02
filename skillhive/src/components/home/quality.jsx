import React from 'react';
import './quality.css';

export const Quality = () => {
  return (
    <section id="quality" className="quality">
      <div className="quality-bg">
        <img
          src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Quality support visual"
          className="quality-bg-image"
        />
      </div>

      <div className="container quality-content">
        <div className="quality-text">
          <h2 className="quality-title">Get quality support from top Taskers and AI Assistants – fast.</h2>
          <p className="quality-desc">
            Skillhive vets candidates so you can focus on what you do best. You’ll be matched with an experienced
            assistant who will give you support where you need it. Skillhive works quickly; you and your new Assistant will be
            up and running in just a few minutes.
          </p>
          <button className="quality-link">Our approach</button>
        </div>
      </div>
    </section>
  );
};




