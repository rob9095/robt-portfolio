import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import ContactSection from './Components/ContactSection';
import AboutSection from './Components/AboutSection';
import HeroSection from './Components/HeroSection';
import WorkSection from './Components/WorkSection';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ContactSection />
          <Footer />
      </div>
    );
  }
}

export default App;
