import React from 'react'
import hero from '../assets/HeroImage.png'

function Hero() {
    return (

        <div className='relative  kt:w-full kt:h-auto md:w-full sm:w-full  mx-auto bg-center bg-cover'>
        <img className='z-3 object-cover kt:w-full kt:h-auto md:w-full sm:w-full  contrast-150 brightness-75' src={hero} alt="Computer Engineering" />
        <p className='absolute mx-40 inset-y-2/3 md:text-2xl text-4xl font-bold'>Computer Engineering</p>
        <p className='absolute mx-40 inset-y-3/4 md:text-sm text-lg font-light'>142,765 Computer Engineers follow this</p>
    </div>
    
    
    



    )
}

export default Hero
