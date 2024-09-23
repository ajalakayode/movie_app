"use client"
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useContext } from "react";
import {SidebarContext} from "../providers"
import { IoIosHeartEmpty } from "react-icons/io";
 
export default function Navbar() {
  const {val} = useContext(SidebarContext)
  return (
    <nav className="">
        <ul className= "md:flex hidden  justify-around capitalize items-center h-20 bg-purple-950 text-white">

            <Link href={'/'}>
              <li>Home</li>
            </Link>

            <Link href={'/about'}>
              <li>About</li>
            </Link>

            <Link href={'/now-showing'}>
              <li>Now Showing</li>
            </Link>

            {/* <Link href={'/top-rated'}>
              <li>Top Rated</li>
            </Link> */}

            
            <Link href={'contact'}>
              <li>Contact Us</li>
            </Link>

            <Link href={'/wishes'}> 
              <li className=""add to cart><IoIosHeartEmpty /> {val}</li>
            </Link>
           
        </ul>
            <MobileNav/>
    </nav>
  )
}
