import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CourseOutline from './components/CourseOutline';
import CertificateSection from './components/CertificateSection';
import CourseSchedule from './components/CourseSchedule';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CourseOutline />
        {/* <CertificateSection /> */}
        <CourseSchedule />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App; 