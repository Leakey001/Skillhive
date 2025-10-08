import React from 'react';
import { Hero } from '../components/hero';
import { Quality } from '../components/quality';
import { QualitySupport } from '../components/qualitysupport';
import { AIEA } from '../components/aiea';
import { ROI } from '../components/roi';
import { HowItWorks } from '../components/howitwork';
import { WhoUsesSkillive } from '../components/whousesskillhive';
import Testimonials from '../components/testimonials';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Quality />
      <QualitySupport />
      <AIEA />
      <ROI />
      <HowItWorks />
      <WhoUsesSkillive />
      <Testimonials />
    </div>
  );
};