import React from 'react'
import Header from '../components/Header'

const page = () => {
  return (
    <div>
      <Header  bgColor="bg-#FFFFFF"/>

      <div className='relative'>
      <img src="/Rectangle 1.svg" alt="image" className="w-full h-auto"/>

      <div className='flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center '>
    
        <img src="/Meubel House_Logos-05.svg" alt="shop"className='w-[100px] h-auto'/>
        <h1 className='font-bold text-5xl'>Contact</h1>

        <div className="text-center mt-4">
          <p className="text-sm text-black font-bold">Home &gt; Contact</p>
        </div>
        </div>
      </div>
      <div className='w-[1440px] h-[1144px] justify-center text-center py-8'>
        <h1 className='font-semibold text-3xl'>Get In Touch With Us</h1>
        <p className='text-[#9F9F9F] justify-center items-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>

      
    <div className="w-full max-w-[1440px] h-[555px] mx-auto flex items-center justify-center bg-gray-100">
      <form className="bg-white w-full max-w-[600px] p-8 shadow-lg rounded-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-bold text-gray-700 mb-2">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-bold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-bold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Hi! I'd like to ask about"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-[120px]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>

    </div>
  )
}

export default page
