
import reccGroup from '../assets/reccGroups.png'

import leisure from '../assets/leisure.png'
import activism from '../assets/activism.png'
import mba from '../assets/mba.png'
import philosophy from '../assets/philosophy.png'


function Recomendation() {
    return (
        <div className='w-60 h-60 flex flex-col justify xl:hidden'>
            <div><img src={reccGroup}></img></div>

            <div className='flex flex-row  space-x-8 ms-0 mt-4 content-center'>
                <div><img src={ leisure}></img></div>
                <div><button className='text-black w-20 h-8 hover:bg-black content-center rounded-lg  bg-btColor'><p className='hover:text-white'>Follow</p></button></div>
            </div>

            <div className='flex flex-row  space-x-8 ms-0 mt-4 content-center'>
                <div><img src={activism }></img></div>
                <div><button className='text-black w-20 h-8 hover:bg-black content-center rounded-lg  bg-btColor'><p className='hover:text-white'>Follow</p></button></div>
            </div>

            <div className='flex flex-row  space-x-8 ms-0 mt-4 content-center'>
                <div><img src={ mba}></img></div>
                <div><button className='text-black w-20 h-8 hover:bg-black content-center rounded-lg  bg-btColor'><p className='hover:text-white'>Follow</p></button></div>
            </div>

            <div className='flex flex-row  space-x-8 ms-0 mt-4 content-center'>
                <div><img src={ philosophy}></img></div>
                <div><button className='text-black w-20 h-8 hover:bg-black content-center rounded-lg  bg-btColor'><p className='hover:text-white'>Follow</p></button></div>
            </div>

        </div>
    )
}

export default Recomendation
