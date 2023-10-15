
import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nav2 from './components/Nav2';
import Posts from './components/Posts';




function App() {
  

  return (
    <>
   
    <Navbar />
    <Hero />
    <Nav2 />
    <hr className='mr-40 ml-40 border-t-2 mt-2'/>
    <Posts />
      
    </>
  )
}

export default App
