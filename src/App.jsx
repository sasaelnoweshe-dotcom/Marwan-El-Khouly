import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'
import Hero from './components/Hero'
import About from './components/about'
import Works from './components/Works'
import Devs from './components/devs'
import CreativeContactForm from './components/contact'
import Footer from './components/Footer'


function App() {
  const links = [{"title":"الرئيسية","href":"main"},
    {"title":"من انا","href":"#me"},
    {"title":"اعمالي","href":"#works"},
    {"title":"المطورين","href":"#devs"},
    {"title":"تواصل معي","href":"#contact"}
  ]


  return (
    <>
          <section id="hero-section" style={{minHeight:'100vh', width:"100%", display:'flex', flexDirection:'column'}}>
        <Nav links={links} />
        <div id="home">
          <Hero />
        </div>
      </section>
      <section id="about-section" style={{minHeight:'100vh', width:"100%", display:'flex', alignItems:'center', justifyContent:'center'}}>
        <About />
      </section>
      
        <Works />
        <Devs />
        <CreativeContactForm />
        <Footer />
    </>
  )
}

export default App
