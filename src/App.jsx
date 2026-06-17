import { useState } from 'react'
import '../src/styles/App.css'
import Nav from "./components/Nav.jsx"
import Banner from "./components/Banner.jsx"
import Projets from "./components/Projets.jsx"
import Skill from "./components/Skill.jsx"
import Parcours from "./components/Parcours.jsx"
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div>
    <Nav/>
    <Banner/>
    <Projets/>
    <Skill/>
    <Parcours/>
    <Contact/>
    <Footer/>
    
    </div>
  )
}

export default App
