import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Courses from './components/course';
import Features from './components/features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;