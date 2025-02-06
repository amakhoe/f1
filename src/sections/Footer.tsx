import logo from '@/assets/logosaas.png'
import Socialx from '@/assets/social-x.svg'
import Linkdin from "@/assets/social-linkedin.svg"
import Insta from '@/assets/social-insta.svg'
import Youtube from '@/assets/social-youtube.svg'
import Image from 'next/image';
export const Footer = () => {
  return (
    <footer className='bg-black text-[#bcbcbc] text-sm py-10 text-center'>
      <div className='container'>
        <div className="inline-flex relative before:content-[''] before:absolute
         before:top-2 before:bottom-0 before:w-full before:bg-red-500 before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)]">
          <Image src={logo} height={40} alt="logo" className='relative'/>
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href=''>About</a>
          <a href=''>About</a>
          <a href=''>About</a>
          <a href=''>About</a>
          <a href=''>About</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <Socialx alt="social x" />
          <Linkdin alt="linkdin"/>
          <Youtube alt="youtube" />
          <Insta alt="Insta"/>
        </div>
        <p className='mt-6'>&copy; 2025 Kars Design, Inc. All Right</p>
      </div>
    </footer>
  )
};
