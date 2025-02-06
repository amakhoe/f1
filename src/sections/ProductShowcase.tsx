"use client"
import product from "@/assets/product-image.png"
import tubo from "@/assets/tube.png"
import piramede from "@/assets/pyramid.png"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0,1],[150, -150]);
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
        <div className="tag">Boost your productivity</div>
        </div>
        <h2 className="text-3xl md:text-[54] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
          A more effective way to track progress</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#001e80]">
          Effortless turn your ideas into a fully functional, responsive Saas website
          in just minutes with this templates
        </p>
        </div>
        <div className="relative">
        <Image alt="Producto" src={product} className="mt-10"/>
        <motion.img className="hidden md:block absolute -right-36 -top-32" alt="Piramide" 
        height={262} width={262} src={piramede.src} 
        style={{
          translateY,
         }}/>
        <motion.img className="hidden md:block absolute bottom-24 -left-36" alt="Piramide" 
        height={262} width={262} src={tubo.src} 
        style={{
          translateY,
         }}/>
      </div>
      </div>
    </section>
  )
};

        