// css
import './App.css'

// components
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <NavBar />
      <div className='main-container'>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </>
  )
}

export default App
