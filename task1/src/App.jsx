
import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nav2 from './components/Nav2';
import Posts from './components/Posts';
import AndNav from './components/AndNav';
import Pen from './components/Pen';
import DotNav from './components/DotNav';



function App() {
  

  return (
    <div>
  <DotNav />
    <Navbar />
    <Hero />
    <Nav2 />
    <AndNav />
    <hr className='mr-40 ml-40 border-t-2 mt-2 lg:hidden'/>
    <Pen  />
    <Posts />
    
      
    </div>
  )
}

export default App
