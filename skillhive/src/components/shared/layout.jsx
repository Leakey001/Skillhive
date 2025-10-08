import React from 'react';
import { Navbar } from '../navbar';
import Footer from '../footer';
import './layout.css';

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};