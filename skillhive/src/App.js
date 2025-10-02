import React from 'react';
import { Navbar } from './components/home/navbar';
import { Hero } from './components/home/hero';
import { Quality } from './components/home/quality';
import { AIEA } from './components/home/aiea';
import { ROI } from './components/home/roi';
import { HowItWorks } from './components/home/howitworks';
import { WhoUsesSkillive } from './components/home/whousesskillhive';
import Testimonials from "./components/home/testimonials";
import Footer from "./components/home/footer";
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {/* Temporary placeholder - will be replaced with Hero component */}
        <Hero />
        <Quality />
        <AIEA />
        <ROI />
        <HowItWorks />
        <WhoUsesSkillive />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;