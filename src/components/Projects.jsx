// components/Projects.jsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
  return (
    <section className="projects h-full py-8 px-[10%] bg-dark-black text-white-dove">
      <div className="text-center py-8">
        <h1 className="text-[7rem]">SELECTED WORKS</h1>
      </div>
      
      <div className="text-white-dove p-8 flex justify-end items-end w-full">
        <p>(Projects)</p>
        <span className="text-right text-xl w-[30%]">
          "I am here to help you transform your tech aspirations into a
          remarkable reality."
        </span>
      </div>

      <div className="flex flex-col relative gap-40">
        {/* Project 1 */}
        <div className="flex items-start relative h-screen">
          <div className="sticky top-[20%] w-[45%] z-10 text-5xl text-white-dove">
            <h1 className="w-full text-[12rem]">01.</h1>
          </div>
          
          <div className="w-[55%] overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-kendal-charcoal scrollbar-track-dark-black">
            <div className="w-full h-[60vh] mb-8 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/freshinsights-logo.png" 
                  width={1000} 
                  height={600} 
                  className="w-full h-full object-cover rounded-lg"
                  alt="Project 1" 
                  objectFit='contain'
                />
              </motion.div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h3 className="text-[1.2rem]">Grocery & E-commerce</h3>
              <div className="text-[1.5rem] flex justify-between items-center py-4 text-wrap">
                <h2>Flask Python Application</h2>
                <div className="flex gap-4 ">
                  <span className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base text-white-dove">2025</span>
                  <span className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base text-white-dove">Design</span>
                  <span className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base text-white-dove">Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex items-start relative h-screen">
          <div className="sticky top-[20%] w-[45%] z-10 text-5xl text-white-dove">
            <h1 className="w-full text-[12rem]">02.</h1>
          </div>
          
          <div className="w-[55%] overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-kendal-charcoal scrollbar-track-dark-black">
            <div className="w-full h-[60vh] mb-8 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/hr-image.png" 
                  width={1000} 
                  height={600} 
                  className="w-full h-full object-cover rounded-lg"
                  alt="Project 2" 
                />
              </motion.div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h3 className="text-[1.2rem]">Management & Education System</h3>
              <div className="text-[1.5rem] flex justify-between items-center py-4">
                <h2>HRMS Website</h2>
                <div className="flex gap-4">
                  <span className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base text-white-dove">2025</span>
                  <span className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base text-white-dove">Design</span> 
                  <span className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base text-white-dove">Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project 3 */}
        <div className="flex items-start relative h-screen">
          <div className="sticky top-[20%] w-[45%] z-10 text-5xl text-white-dove">
            <h1 className="w-full text-[12rem]">03.</h1>
          </div>
          
          <div className="w-[55%] overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-kendal-charcoal scrollbar-track-dark-black">
            <div className="w-full h-[60vh] mb-8 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/arc-tech-logo.png" 
                  width={1000} 
                  height={600} 
                  className="w-full h-full object-cover rounded-lg"
                  alt="Project 3" 
                />
              </motion.div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h3 className="text-[1.2rem]">Architecture & Engineering</h3>
              <div className="text-[1.5rem] flex justify-between items-center py-4">
                <h2>Arc-tech Website</h2>
                <div className="flex gap-4">
                  <span className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base text-white-dove">Design</span>
                  <span className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base text-white-dove">Development</span>
                  <span className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base text-white-dove">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}