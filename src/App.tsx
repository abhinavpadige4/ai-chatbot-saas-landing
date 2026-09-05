import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white font-sans antialiased">
        <Header />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;