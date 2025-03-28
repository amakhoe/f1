"use client"
import {motion} from 'framer-motion'
import CheckIcon from '@/assets/check.svg'
import {twMerge} from 'tailwind-merge'
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="section-title">Precos</h2>
        <p className="section-description mt-5">Free Forever. Upgrade for unlimited tasks, better security, and exclusive features.</p>
       <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end'>
        {pricingTiers.map(({
          title,
          monthlyPrice,
          buttonText,
          popular,
          inverse,
          features,
        })=> (
          <div className={twMerge('p-10 border-[#f1f1f1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]', inverse === true && 'border-black bg-black text-white')}>
            <div className="flex justify-between">
            <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white')}>{title}</h3>
            {popular === true && (
 <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
 <motion.span 
 animate={{
  backgroundPositionX: "-100%",
 }}
 transition={{
  duration: 1,
  repeat: Infinity,
  ease: "linear",
  repeatType: "loop"
 }}
 className='[background-size:200%] bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] text-transparent bg-clip-text font-medium'>Popular</motion.span></div>

            )}
           </div>
            <div className='flex items-baseline gap-1 mt-[30px]'>
              <span className='text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
              <span className={twMerge('text-4xl font-bold text-black/50', inverse === true && 'text-white')}>/month</span>
            </div>
            <button className={twMerge('btn btn-primary w-full mt-[30px]', inverse === true && 'bg-white text-black')}>{buttonText}</button>
            <ul className='flex flex-col gap-5 mt-8'>
              {features.map((feature) => (
                <li className='text-sm flex items-center gap-4'>
                  <CheckIcon className="h-6 w-6"/>
                  <span>{feature}</span></li>
              ))}
            </ul>
            </div>
        )
        )}
       </div>
       <div>
        </div>
        </div>
      </section>
  )
}
