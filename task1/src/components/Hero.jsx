
import hero from '../assets/HeroImage.png'
import navi from '../assets/navi_outlined.svg'
import groupJoin from '../assets/groupJoin.png'





function Hero() {
    return (

        

        <div className=" custom-class w-screen sm:h-480 sm:w-x sm:bg-center sm:bg-cover h-96 mx-auto bg-center bg-cover bg-local " 
        style={{ backgroundImage: `url(${hero})`,filter: 'contrast(150%) brightness(75%)',}} 
         >
            <div className='flex w-full justify-between flex-row'>
            <div className=' pl-24 hidden md:block md:bg-black md:pl-1'><img src={navi}></img></div>
            <div className='hidden md:block md:pr-1'><img src={groupJoin}></img></div>
            </div>
            <div className='flex flex-col space-y-2 pt-48 pl-24 md:pt-60 lg:pl-1'>
            <p className='    md:text-2xl  text-4xl font-bold'>Computer Engineering</p>
            <p className='    md:text-sm text-lg font-light'>142,765 Computer Engineers follow this</p>
            </div>

        </div>

    

    



    )
}

export default Hero
