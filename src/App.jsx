import React from 'react';
import About from './components/About';
import Cards from './components/Cards';
import Email from './components/Email';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Email />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
