import  { useState } from 'react'

import PopUp from './PopUp'

import logo from '../assets/Logo.jpg'
import search from '../assets/SearchBar.jpg'
import createAcc from '../assets/CreateAccount.jpg'

function Navbar() {

    const [showPopUp, setShowPopUp] = useState(false);

    const togglePopUp = () => {
        setShowPopUp(!showPopUp);
        console.log("hello")
    }

    
    return (

        <div className='w-full h-72 flex flex-row justify-between items-center content-center  lg:hidden'>
            <div className='flex ms-10'><img src={logo}></img></div>
            <div className='flex'><img src={search}></img></div>
            <div className='flex me-10'><button onClick={togglePopUp}><img src={createAcc}></img></button></div>

            {showPopUp ? <PopUp togglePopUp={togglePopUp}/> : null}
        </div>




    )
}

export default Navbar
