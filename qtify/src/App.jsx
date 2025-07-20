import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Cards from './components/Card/Card';
import Section from './components/Section/Section';

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Section />
    </>
  )
}

export default App
