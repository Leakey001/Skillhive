import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/shared/layout';
import { Home } from './pages/Home';
import HowItWorksPage from './pages/HowItWorkspage';
import ProductPage from './pages/product';
import SolutionsForExecutives from './pages/solutionsforexecutives';
import SolutionsForTeams from './pages/solutionsforteams';
import { GetStartedPage } from './pages/getstarted';
import { LoginPage } from './pages/login';
import PricingPage from './pages/pricing';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage - with shared layout */}
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        
        {/* How It Works Page (render component directly to reflect latest edits) */}
        <Route path="/how-it-works" element={
          <Layout>
            <HowItWorksPage />
          </Layout>
        } />
        
        {/* Product Page */}
        <Route path="/product" element={
          <Layout>
            <ProductPage />
          </Layout>
        } />

        {/* Pricing Page */}
        <Route path="/pricing" element={
          <Layout>
            <PricingPage />
          </Layout>
        } />

        {/* Solutions Pages */}
        <Route path="/solutions/executives" element={
          <Layout>
            <SolutionsForExecutives />
          </Layout>
        } />
        
        <Route path="/solutions/teams" element={
          <Layout>
            <SolutionsForTeams />
          </Layout>
        } />
        
        {/* Get Started Page */}
        <Route path="/get-started" element={
          <Layout>
            <GetStartedPage />
          </Layout>
        } />

        {/* Login Page */}
        <Route path="/login" element={
          <Layout>
            <LoginPage />
          </Layout>
        } />
        </Routes>
    </Router>
  );
}

export default App;