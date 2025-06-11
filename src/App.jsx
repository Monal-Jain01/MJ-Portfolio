import React, { useContext } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'    
import Education from './components/Education'
import Contact from './components/Contact'
import Skills from './components/Skills'
import { ThemeContext } from './contexts/ThemeContextProvider'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme} w-100vw  overflow-x-hidden`}>
      <Header />
      <Home sectionId="home" />
      <About sectionId="about" />
      <Skills sectionId="skills" />
      <Education sectionId="education" />
      <Projects sectionId="projects" />
      <Contact sectionId="contact" />
      <Footer />
    </div>
  )
}
