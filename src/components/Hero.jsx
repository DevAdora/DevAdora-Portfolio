// components/Hero.jsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center text-center" id="home">
      <div className="w-full">
        <motion.div 
          className="h-full text-dark-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex w-full text-center justify-center">
          <h1 className="font-bold flex-wrap text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem]">DEVADORA</h1>
          <span className="flex-wrap text-[1rem] sm:text-3rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem]">©</span>
          </div>
        </motion.div>
        
        <div className="flex justify-between items-center h-full w-full mb-[7.5%]">
          <div className="flex items-right justify-end gap-[10px] w-1/3">
            {/* <div className="arrow">
            <Image
                width="64"
                height="64"
                src="https://img.icons8.com/laces/64/arrow.png"
                alt="arrow"
              />
            </div> */}
            <div className="w-4/5 items-right justify-right tracking-[1.4px] leading-[1.4]">
              <h3 className="text-dark-black text-right">
                An aspiring freelance software developer & web designer from
                Philippines
              </h3>
            </div>
          </div>
          
                <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]">
        <Image 
          src="/images/devadora-image.png" 
          width={400} 
          height={500} 
          alt="DevAdora Portrait" 
          className="w-full h-auto"
        />
      </div>

          
          <div className="flex justify-center items-center h-full w-1/3">
            <div>
              <Link 
                href="#contact" 
                className="hero-btn bg-dark-black text-center text-white-dove text-[2rem] no-underline p-4 rounded-[45px]"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}