import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-[10vh] bg-green-500 flex justify-between pl-10 pr-20 items-center text-white font-bold text-xl'>
      <div className="logo text-3xl"> 
        <Link href="/">ClipLinks</Link>
      </div>
      <ul className='flex justify-center gap-12 items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="mailto:agrwaladitya99@gmail.com"><li>Contact Us</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar