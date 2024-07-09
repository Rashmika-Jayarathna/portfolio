import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center ">
        <Particle />
        <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center '>

          <div>

            <h1 className='text-[35px] md:text-[50px] text-white font-bold '>
                HI, I'M <span className='text-yellow-400'>RASHMIKA</span>
            </h1>
            <TextEffect />
            <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nulla maiores porro, modi reiciendis exercitationem debitis veniam, iure atque iusto laborum enim repellat ea? Ducimus!</p>
            <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                <button className='flex px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black items-center space-x-2 '>
                  <p>Download CV</p>
                  <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                  </button>
            </div>
          </div>

          <div className='w-[600px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[600px]'>
            <Image src="/images/u1.jpg" alt='user' layout='fill' className='object-cover rounded-full'/>
          </div>
        </div>
    </div>
  )
}

export default Hero