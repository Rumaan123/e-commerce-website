import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 w-[1440px] h-[555px] mx-auto py-8 px-9">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full items-center justify-center">
    {/* Address Section */}
    <div>
      <h3 className="text-lg font-bold mb-4">Address</h3>
      <p>400 University Drive Suite 200 Coral Gables,</p>
      <p>FL 33134 USA</p>
    </div>

    {/* Links Section */}
    <div>
      <h3 className="text-lg font-bold mb-4">Links</h3>
      <ul>
        <li className="font-bold text-black">Home</li>
        <li className="font-bold text-black">Shop</li>
        <li className="font-bold text-black">About</li>
        <li className="font-bold text-black">Contact</li>
      </ul>
    </div>

    {/* Newsletter Section */}
    <div>
      <h3 className="text-lg font-bold mb-4">Newsletter</h3>
      <form>
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="w-[173px] p-2 mb-4 border-b-2 border-black"
        />
        <button
          type="submit"
          className=" text-black py-2 px-4 font-bold "
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="mt-8 pt-4 border-t text-sm text-black flex justify-between h-[59px]">
    <p>© 2022 Meubel House. All rights reserved.</p>
  </div>
</footer>


  )
}

export default Footer
