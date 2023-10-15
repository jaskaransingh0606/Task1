import React, { useState } from 'react'

import Recomendation from './Recomendation'

import nature from '../assets/NatureImage.png'
import article from '../assets/Article.png'
import more from '../assets/more.png'
import sarthak from '../assets/Sarthak.png'
import share from '../assets/share.png'
import views from '../assets/views.png'

import wall from '../assets/wall.png'
import education from '../assets/education.png'
import sara from '../assets/sara.png'

import car from '../assets/car.png'
import meetup from '../assets/Meetup.png'
import dateLocation from '../assets/DateLocation.png'
import ronal from '../assets/Ronal.png'
import visitSite from '../assets/visitSite.png'

import job from '../assets/Job.png'
import infoLoc from '../assets/InfoLocation.png'
import apply from '../assets/Apply.png'
import joseph from '../assets/joseph.png'

import locSearch from '../assets/LocSearch.png'




function Posts() {

    const [showrecom, setShowRecom] = useState(false);

    const toggleRecom = () => {
        setShowRecom(!showrecom);
    }


    return (
        <div className='flex flex-row mr-40 ml-40 justify-between '>

            <div className='flex flex-col mt-7 w-692  space-y-2 lg:justify-center kt:mr-0 kt:ml:0 kt:w-full'>

                <div className='h-472 flex flex-col space-y-4 kt:mr-0 kt:ml:0 kt:w-full'>
                    <div className='kt:w-full sm:w-full'><img src={nature}></img></div>
                    <div className='ms-2 me-2'><img src={article}></img></div>
                    <div className='flex flex-row  content-center ms-2 me-2'>
                        <div><p className='text-black w-600 font-semibold kt:w-400 sm:w-300 '>What if famous brands had regular fonts? <br />Meet RegulaBrands!</p></div>
                        <div><img src={more}></img></div>
                    </div>
                    <div className='ms-2 me-2'><p className='text-black'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p></div>
                    <div className=' flex flex-row items-center content-center justify-between ms-2 '>
                        <div className=' w-175 flex flex-row items-center content-center justify-between'>
                            <div><img src={sarthak}></img></div>
                            <div><p className='text-black font-semibold'>Sarthak Kamra</p></div>
                        </div>
                        <div className=' w-175 flex flex-row items-center content-center justify-between'>
                            <div><img src={views}></img></div>
                            <div><img src={share}></img></div>
                        </div>
                    </div>
                </div>


                <div className='h-472 flex flex-col space-y-4 kt:mr-0 kt:ml:0 kt:w-full'>
                    <div className='kt:w-full sm:w-full'><img src={wall}></img></div>
                    <div className='ms-2 me-2'><img src={education}></img></div>
                    <div className='flex flex-row items-center content-center ms-2 me-2'>
                        <div><p className='text-black w-600 font-semibold kt:w-400 sm:text-sm'>Tax Benefits for Investment under National Pension <br /> Scheme launched by Government </p></div>
                        <div><img src={more}></img></div>
                    </div>
                    <div className='ms-2 me-2'><p className='text-black'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p></div>
                    <div className=' flex flex-row items-center content-center justify-between ms-2 '>
                        <div className=' w-175 flex flex-row items-center content-center justify-between'>
                            <div><img src={sara}></img></div>
                            <div><p className='text-black font-semibold'>Sarah West</p></div>
                        </div>
                        <div className=' w-175 flex flex-row items-center content-center justify-between'>
                            <div><img src={views}></img></div>
                            <div><img src={share}></img></div>
                        </div>
                    </div>
                </div>

                <div className='h-472 flex flex-col space-y-4 kt:mr-0 kt:ml:0 kt:w-full'>
                    <div className='kt:w-full sm:w-full'><img src={car}></img></div>
                    <div className='ms-2 me-2'><img src={meetup}></img></div>
                    <div className='flex flex-row items-center content-center ms-2 me-2'>
                        <div><p className='text-black w-600 font-semibold kt:w-400 sm:text-sm'>Finance & Investment Elite Social Mixer @Lujiazui </p></div>
                        <div><img src={more}></img></div>
                    </div>
                    <div className='ms-2 me-2'><img src={dateLocation}></img></div>
                    <div><img src={visitSite}></img></div>
                    <div className=' flex flex-row items-center content-center justify-between ms-2 '>
                        <div className=' w-175 flex flex-row items-center content-center justify-between'>
                            <div><img src={ronal}></img></div>
                            <div><p className='text-black font-semibold'>Ronal Jones</p></div>
                        </div>
                        <div className=' w-175 flex flex-row items-center content-center justify-between'>
                            <div><img src={views}></img></div>
                            <div><img src={share}></img></div>
                        </div>
                    </div>
                </div>

                <div className='h-472 flex flex-col space-y-4 kt:mr-0 kt:ml:0 kt:w-full'>

                    <div className='ms-2 me-2 kt:w-full sm:w-full'><img src={job}></img></div>
                    <div className='flex flex-row items-center content-center ms-2 me-2'>
                        <div><p className='text-black w-600 font-semibold kt:w-400 sm:text-sm'>Software Developer </p></div>
                        <div><img src={more}></img></div>
                    </div>
                    <div className='ms-2 me-2'><img src={infoLoc}></img></div>
                    <div><img src={apply}></img></div>
                    <div className=' flex flex-row items-center content-center justify-between ms-2 '>
                        <div className=' w-175 flex flex-row items-center content-center justify-between'>
                            <div><img src={joseph}></img></div>
                            <div><p className='text-black font-semibold'>Joseph Gray</p></div>
                        </div>
                        <div className=' w-175 flex flex-row items-center content-center justify-between'>
                            <div><img src={views}></img></div>
                            <div><img src={share}></img></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col space-y-12 xl:hidden'>
                <div className=''><button onClick={toggleRecom}><img className='mt-8' src={locSearch}></img></button></div>
                {showrecom ? <Recomendation /> : null}
            </div>

        </div>
    )
}

export default Posts
