import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Rules from './components/Rules';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-euforia-dark font-sans text-white selection:bg-euforia-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Rules />
      </main>
      <Footer />
    </div>
  );
};

export default App;