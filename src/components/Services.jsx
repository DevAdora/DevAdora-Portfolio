// components/Services.jsx
'use client'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Services() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  // Transform values for the box positions based on scroll
  const box2Y = useTransform(scrollYProgress, [0, 0.33], ["100%", "0%"])
  const box3Y = useTransform(scrollYProgress, [0.33, 0.66], ["100%", "0%"])
  
  return (
    <div className="services  h-full" ref={containerRef}>
      <div className="flex-wrap justify-center items-center">
        <div className="text-center text-2xl p-8">
          <h1 className="text-white-dove text-[7rem]">SERVICES I OFFER. /</h1>
        </div>
        <div className="text-white-dove p-8 flex justify-end items-end w-full">
          <p>(Services)</p>
          <span className="text-right text-xl w-[30%]">
            "I am here to help you transform your tech aspirations into a
            remarkable reality."
          </span>
        </div>
      </div>
      
      <motion.div 
        className="box border-t border-white-dove sticky top-0 w-full h-screen flex flex-col bg-dark-black z-[1]"
      >
        <div className="mt-4 p-8">
          <div className="flex justify-between items-center">
            <div className="w-[45%] pl-8">
              <h1 className="text-white-dove text-[4rem]">01</h1>
            </div>
            <div className="w-[55%] flex justify-start items-start">
              <h1 className="text-[4rem] flex-wrap text-white-dove tracking-tighter leading-[1.4]">
                Web Development
              </h1>
            </div>
          </div>
          <div className="flex justify-end items-end w-full pt-4">
            <div className="w-[55%] p-4 pr-4">
              <p className="w-4/5 text-[1.7rem] text-white-dove leading-[1.4]">
                I have been enjoying creating and designing Web, I also actively
                participate in contests such as Web Designing and Development.
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end w-full">
            <div className="pt-4 w-[55%] flex justify-start items-start">
              <ol className="p-8 ml-1 list-decimal">
                <li className="leading-[1.4] text-xl text-white-dove">FullStack Development</li>
                <li className="leading-[1.4] text-xl text-white-dove">Motion & Animations</li>
              </ol>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="box border-t border-white-dove sticky top-[17.5%] w-full h-screen flex flex-col bg-dark-black z-[2]"
        style={{ y: box2Y }}
      >
        <div className="mt-4 p-8">
          <div className="flex justify-between items-center">
            <div className="w-[45%] pl-8">
              <h1 className="text-white-dove text-[4rem]">02</h1>
            </div>
            <div className="w-[55%] flex justify-start items-start">
              <h1 className="text-[4rem] flex-wrap text-white-dove tracking-tighter leading-[1.4]">
                Software Development
              </h1>
            </div>
          </div>
          <div className="flex justify-end items-end w-full pt-4">
            <div className="w-[55%] p-4 pr-4">
              <p className="w-4/5 text-[1.7rem] text-white-dove leading-[1.4]">
                As a freelancer, I offer software development to any devices,
                may it a website or mobile application. My expertise lies on the
                software development where I will transform your idea to
                reality.
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end w-full">
            <div className="pt-4 w-[55%] flex justify-start items-start">
              <ol className="p-8 ml-1 list-decimal">
                <li className="leading-[1.4] text-xl text-white-dove">Responsive Design</li>
                <li className="leading-[1.4] text-xl text-white-dove">Adaptive and Functionality</li>
              </ol>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className=" box border-t border-white-dove sticky top-[17.5%] w-full h-screen flex flex-col bg-dark-black z-[3]"
        style={{ y: box3Y }}
      >
        <div className="mt-4 p-8">
          <div className="flex justify-between items-center">
            <div className="w-[45%] pl-8">
              <h1 className="text-white-dove text-[4rem]">03</h1>
            </div>
            <div className="w-[55%] flex justify-start items-start">
              <h1 className="text-[4rem] flex-wrap text-white-dove tracking-tighter leading-[1.4]">
                Graphic Designing
              </h1>
            </div>
          </div>
          <div className="flex justify-end items-end w-full pt-4">
            <div className="w-[55%] p-4 pr-4">
              <p className="w-4/5 text-[1.7rem] text-white-dove leading-[1.4]">
                Mostly of my side projects, I do the designing. UI/UX designing
                is not my forte, but you could trust to give you the best colors
                that are pleasing to the naked eye.
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end w-full">
            <div className="pt-4 w-[55%] flex justify-start items-start">
              <ol className="p-8 ml-1 list-decimal">
                <li className="leading-[1.4] text-xl text-white-dove">Wireframing and Prototyping</li>
                <li className="leading-[1.4] text-xl text-white-dove">Flowchat and UX Writing</li>
              </ol>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}