'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function Navbar() {

    const pathname = usePathname()
  return (
    
    <nav className='bg-blue-400'>
        <ul className='flex gap-3 justify-between items-center'>
            <div className='font-bold text-2xl'>
                The path is {pathname}
            </div>
            <div className='flex gap-3 justify-center items-center'>
            <Link className='hover:bg-blue-500 hover: cursor-pointer font-bold px-5 py-5' href='/home'><li>Home</li></Link>
            <Link className='hover:bg-blue-500 hover: cursor-pointer font-bold px-5 py-5' href='/about'><li>About us</li></Link>
            <Link className='hover:bg-blue-500 hover: cursor-pointer font-bold px-5 py-5' href='/contact'><li>Contact us</li></Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar