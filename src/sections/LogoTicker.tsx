"use client"
import Image from "next/image";
import echoLogo from "@/assets/logo-echo.png"
import acme from "@/assets/logo-acme.png"
import quantom from "@/assets/logo-quantum.png"
import apexLogo from "@/assets/logo-apex.png"
import pulse from "@/assets/logo-pulse.png"
import celestial from "@/assets/logo-celestial.png"
import {motion} from 'framer-motion'
export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14"
          animate={{
            translateX: "-50%"
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}>
              <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image"/>
              <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image"/>
              <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image"/>
              <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image"/>
              <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image"/>
              <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image"/>
              <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image"/>
              <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image"/>
              <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image"/>
              <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image"/>
          </motion.div>
        </div>
      </div>
    </div>
  )
};
