
import hero from '../assets/HeroImage.png'

function Hero() {
    return (

        <div className='relative  kt:w-screen kt:h-auto md:w-screen sm:w-screen  mx-auto bg-center bg-cover'>
        <img className='z-3 object-cover kt:w-screen kt:h-auto md:w-screen sm:w-screen  contrast-150 brightness-75' src={hero} alt="Computer Engineering" />
        <p className='absolute mx-40 inset-y-1/2 md:text-2xl md:mx-20 md:mb-20 sm:mx-10 sm:text-light text-4xl font-bold'>Computer Engineering</p>
        <p className='absolute mx-40 inset-y-2/3 md:text-sm md:mx-20 sm:mx-10 sm:text-xs text-lg font-light'>142,765 Computer Engineers follow this</p>
    </div>
    
    
    



    )
}

export default Hero
