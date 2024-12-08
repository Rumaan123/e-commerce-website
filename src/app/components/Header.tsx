import React from 'react'
import Link from 'next/link'

const Header = ({ bgColor = 'bg-[#FBEBB5]' }) => {
    
  return (
    <div className={`flex w-full max-w-[1440px] h-[100px] ${bgColor} items-center px-8`}>

        <div className=' flex-1 flex justify-center items-center gap-8  font-poppins'>
            <Link href="/">Home</Link>
            <Link href="/Shop">Shop</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
        </div>
        <div className=' flex justify-center items-center gap-4 ml-auto'>
            <img src="mdi_account-alert-outline.svg" alt="account" className='w-6 h-6'/>
            <img src="akar-icons_search.svg" alt="search" className='w-6 h-6'/>
            <img src="akar-icons_heart.svg" alt="heart" className='w-6 h-6'/>
            <img src="ant-design_shopping-cart-outlined.svg" alt="shopping" className='w-6 h-6'/>
        </div>
      
    </div>
  )
}

export default Header
