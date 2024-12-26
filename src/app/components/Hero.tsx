import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col w-full h-auto bg-[#FBEBB5] px-12 lg:px-24 items-center justify-center'> 
      
      {/* Text aur Main Image Section */}
      <div className='flex flex-col lg:flex-row w-full items-center justify-between'>
        {/* Left Side Content */}
        <div className='flex flex-col justify-center text-left font-poppins text-[#000000] gap-6 h-full'>
          <h1 className='text-5xl font-bold leading-tight'>Rocket single seater</h1>
          <h1 className='underline py-2 text-black text-lg'>Shop Now</h1>
        </div>

        {/* Right Side Main Image */}
        <div className='w-[853px] h-auto mt-4 lg:mt-0 flex justify-center lg:justify-end'>
          <img 
            src="/Rocket single seater 1.svg" 
            alt="main-sofa" 
            className='w-full h-auto object-contain lg:mr-0 lg:mt-0' 
          />
        </div>
      </div>

      {/* Table aur Sofa Images Section */}
      <div className='flex justify-center items-center gap-8 mt-8 bg-[#FAF4F7] w-full h-[672px]'>
        
        {/* Table Image */}
        <img 
          src="/Group 9.svg" 
          alt="table" 
          className='w-[605px] h-auto px-8' 
        />
        
        {/* Sofa Image */}
        <img 
          src="/Group 8.svg" 
          alt="sofa" 
          className='w-[605px] h-auto px-8' 
        />

      </div>

      <div className="w-full bg-white px-12 lg:px-24 py-12">

{/* Heading and Paragraph Section */}
<div className="text-center mb-8">
  <h2 className="text-2xl font-bold mb-2">Top Picks For You</h2>
  <p className="text-sm text-gray-600 max-w-[600px] mx-auto">
    Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
  </p>
</div>

{/* Images Section */}
<div className="flex flex-col lg:flex-row justify-center items-center gap-12">
  
  {/* First Image */}
  <div className="text-center">
    <img 
      src="/Group 18.svg " 
      alt="Trenton Modular Sofa" 
      className="w-[287px] h-auto mx-auto"
    />
    
  </div>

  {/* Second Image */}
  <div className="text-center">
    <img 
      src="/Group 15.svg" 
      alt="Granite Dining Table" 
      className="w-[287px] h-auto mx-auto"
    />
    
</div>

  <div className='text-center'>
    <img 
      src="/Group 16.svg" 
      alt="bar table" 
      className='w-[287px] h-auto mx-auto'
    />
  </div>

  <div className='text-center'>
    <img 
      src="/Group 17.svg" 
      alt="mirror" 
      className='w-[287px] h-auto mx-auto'
    />
  </div>
  
</div>

     <div className="text-center mt-8">
        <button className=" text-black py-2 px-6 rounded hover:bg-gray-300 transition duration-300">
          View More
        </button>
      </div>

</div>
<div className="w-full h-[500px] bg-[#FDF8E7] flex flex-col lg:flex-row items-center justify-between px-12 lg:px-24 py-8 gap-12">

      {/* Sofa Image on Left */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src="/Asgaard sofa 1.svg" 
          alt="Asgaard Sofa" 
          className="w-[983px] h-auto object-contain"
        />
      </div>

      {/* Text Content on Right */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left space-y-4 gap-18">
        <p className="text-sm text-gray-500">New Arrivals</p>
        <h2 className="text-4xl font-bold text-black">Asgaard sofa</h2>
        
        <button className="border border-black text-black py-2 px-6 rounded hover:bg-black hover:text-white transition duration-300">
          Order Now
        </button>
      </div>
    </div>

    <div className="w-full px-12 lg:px-24 py-12 bg-white">
      
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-2">Our Blogs</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Blog Card 1 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="/Rectangle 13.svg" 
            alt="Blog Image 1" 
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h3 className="text-lg font-bold mt-4 mb-2">Going all-in with millennial design</h3>
          <p className="text-black font-medium underline">Read More</p>
          <div className="flex items-center justify-center text-sm text-black gap-2 mt-2">
            <span>🕒 5 min</span>
            <span>📅 12th Oct 2022</span>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="/Rectangle 15.svg" 
            alt="Blog Image 2" 
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h3 className="text-lg font-bold mt-4 mb-2">Going all-in with millennial design</h3>
          <p className="text-black font-medium underline">Read More</p>
          <div className="flex items-center justify-center text-sm text-black gap-2 mt-2">
            <span>🕒 5 min</span>
            <span>📅 12th Oct 2022</span>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="/Rectangle 16.svg" 
            alt="Blog Image 3" 
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h3 className="text-lg font-bold mt-4 mb-2">Going all-in with millennial design</h3>
          <p className="text-black font-medium underline">Read More</p>
          <div className="flex items-center justify-center text-sm text-black gap-2 mt-2">
            <span>🕒 5 min</span>
            <span>📅 12th Oct 2022</span>
          </div>
        </div>
      </div>

      {/* View All Post Button */}
      <div className="text-center mt-8">
        <button className="text-black border border-gray-800 py-2 px-6 rounded hover:bg-gray-300 hover:text-white transition duration-300">
          View All Post
        </button>
      </div>
    </div>

    <div className="w-full h-[450px] bg-[#FDF8E7] flex flex-col items-center justify-center px-4">
      
      {/* Main Content */}
      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
        Our Instagram
      </h2>

      <p className="text-gray-600 mb-6 text-center">
        Follow our store on Instagram
      </p>

      <button className="bg-white shadow-lg px-6 py-3 rounded-lg text-black font-semibold hover:bg-gray-200 transition duration-300">
        Follow Us
      </button>
    </div>


</div>
    
  )
} 

export default Hero
