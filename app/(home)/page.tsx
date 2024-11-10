import React from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './style.css'

const page = () => {
  return (
    <div className="page-container">
      <div className="inner-container">
        <div className="inner-content">
          <Navbar />
          <HeroSection />
        </div>
        <div className="bottom-gradient bottom-gradient-xl"></div>
      </div>

      <div className="inner-content section-margin">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default page;