"use client"
import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png"
import MenuIcon from "@/assets/menu.svg"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <p className="text-white hidden md:block">
          Streamline your workflow and bost your productivity  

        </p>
      <div className="inline-flex gap-1 items-center">
      <p>  Hello You</p>
      <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
      </div>
    </div>
    <div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
          <Image src={Logo} alt="Saas Logo" height={40} width={40} />
          <MenuIcon className="h-5 w-5 md:hidden"/>
          <nav className="hidden md:flex gap-6 text-black items-center">
            <a href="">About</a>
            <a href="">About</a>
            <a href="">About</a>
            <a href="">About</a>
            <button className="-tracking-tighter bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center">Get for Free</button>
          </nav>
          </div>
        </div>
      </div>
    </div>
    </header>
   
  )
};
