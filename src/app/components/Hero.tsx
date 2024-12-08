import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-[900px] bg-[#FBEBB5] px-12 lg:px-24 items-center justify-center lg:justify-between'> 
    
      <div className='flex flex-col justify-center text-left font-poppins text-[#000000] gap-6 h-full'>

        <h1 className='text-5xl font-bold leading-tight'>Rocket single seater</h1>
        <h1 className=' underline py-2 text-black text-lg'>Shop Now</h1>

      </div>

      <div className='w-[853px] h-auto mt-4 lg:mt-0 flex justify-center lg:justify-end'>
        <img src="Rocket single seater 1.svg" alt="sofa" className='w-full h-auto object-contain lg:mr-0 lg:mt-0' />
      </div>

      
    </div>
    
  )
} 

export default Hero
