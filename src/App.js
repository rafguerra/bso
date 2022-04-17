import React from 'react';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Story from './components/Story';
import About from "./components/About";
import Deeper from "./components/Deeper";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Story/>
      <About/>
      <Deeper/>
      <Contact/>
    </div>
  );
}

export default App;
