"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link'
import {useState} from 'react'

export default function MobileNav() {
 const [open, setOpen] = useState(false)
 const [val, setVal] = useState(0)

 function changeVal(){
    setVal(add => add + 1)
 }

 function controlNav(){
    setOpen(!open)
 }
  return (
    <nav>
      
        <ul className='flex items-center justify-around md:hidden h-36'>
            <li>Home</li>
            <li onClick={controlNav} className='cursor-pointer'>
            <GiHamburgerMenu/>
            </li>
            
        </ul>
        {open &&
            <ul className="flex flex-col justify-around md:hidden items-end h-36 pr-24">

            <Link href={'/'}>
              <li>Home</li>
            </Link>

            <Link href={'/about'}>
              <li>About</li>
            </Link>

            <Link href={'/Contact'}>
              <li>Contact</li>
            </Link>

            <Link href={'/Help'}>
              <li>Help</li>
            </Link>

            <li>{val}</li>
            <li onClick={changeVal} >increase</li>

           </ul>

        }

    </nav>
     
  )
}
