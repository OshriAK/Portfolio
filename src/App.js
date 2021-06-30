import React from 'react';
import './App.css';

import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import MyProjects from './components/myProjects/MyProjects';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;
