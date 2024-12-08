import React from 'react'
import Header from '../components/Header'

const page = () => {
  return (
    <div>
      <Header bgColor="bg-#FFFFFF"/>
      <div className='relative'>
      <img src="Rectangle 1.svg" alt="image" className="w-full h-auto"/>

      <div className='flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center '>
    
        <img src="Group 55.svg" alt="shop"className='w-[100px] h-auto'/>

        <div className="text-center mt-4">
          <p className="text-sm text-black font-bold">Home &gt; Shop</p>
        </div>
        </div>
      </div>
      

      <div className='bg-[#FAFAF4] py-6 mt-12'>
        <div className="max-w-screen-lg mx-auto flex justify-between items-center space-x-2">
          
          <img src="system-uicons_filtering.svg" alt="icon" />
          <p className="text-black text-sm">Filter</p>
          
          <img src="ci_grid-big-round.svg" alt="icons" />
          <img src="bi_view-list.svg" alt="icons" />
          
          <img src="Line 5.svg" alt="line" />
          <p>Showing 1–16 of 32 results</p>
          
          <div className="flex items-center space-x-2">
             <img src="Group 60.svg" alt="group" />
             <img src="Group 61.svg" alt="group" />
          </div>
        </div>
        </div>

        <div className='px-12 items-center'>
            <img src="Group 77.svg" alt="group" />
        </div>

        <div className='my-12'></div>


        <div className='bg-[#FAFAF4] flex justify-around items-center py-8 w-[1440px] h-[300px]'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold '>Free Delivery</h1>
            <p className='text-[#9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold'>90 Days Return</h1>
            <p className='text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold'>Secure Payment</h1>
            <p className='text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
        </div>
        </div>
    </div>
  )
}

export default page
