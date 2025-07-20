import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';;
import Album from './components/Album/Album';

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Album />
    </>
  )
}

export default App
