import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Platform from './components/sections/Platform'
import Workflow from './components/sections/Workflow'
import Metrics from './components/sections/Metrics'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Platform/>
     <Workflow/>
     <Metrics/>
     <Testimonials/>
     <CTA/>
     <Footer/>
    </>
  )
}

export default App
