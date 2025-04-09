// components/ProjectsGallery.jsx
'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function ProjectsGallery() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const x1 = useTransform(scrollYProgress, [0, 1], ['-20%', '0%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  
  return (
    <div className="gallery h-full overflow-hidden justify-center items-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[7rem]">WORK GALLERY</h1>
          </motion.div>
          <motion.div
            className="flex items-center py-6 gap-5 w-1/3 -left-1/5 h-full object-contain relative"
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <Image
              src="/images/wvsu-web.png"
              alt="Gallery Image 1"
              width={300}
              height={200}
              className="w-full h-full transition-transform duration-300 object-cover"
            />
            <Image
              src="/images/wvsu-web.png"
              alt="Gallery Image 2"
              width={300}
              height={200}
              className="w-full h-full transition-transform duration-300 object-cover"
            />
            <Image
              src="/images/wvsu-web.png"
              alt="Gallery Image 3"
              width={300}
              height={200}
              className="w-full h-full transition-transform duration-300 object-cover"
            />
            <Image
              src="/images/wvsu-web.png"
              alt="Gallery Image 4"
              width={300}
              height={200}
              className="w-full h-full transition-transform duration-300 object-cover"
            />
          </motion.div>
          <motion.div
            className="flex items-center py-6 gap-5 w-1/3 -left-1/5 h-full object-contain relative"
            initial={{ x: 100 }}
            whileInView={{ x: 25 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <Image
              src="/images/wvsu-web.png"
              alt="Gallery Image 5"
              width={300}
              height={200}
              className="w-full h-full transition-transform duration-300 object-cover"
            />
            <Image
              src="/images/wvsu-web.png"
              alt="Gallery Image 6"
              width={300}
              height={200}
              className="w-full h-full transition-transform duration-300 object-cover"
            />
            <Image
              src="/images/wvsu-web.png"
              alt="Gallery Image 7"
              width={300}
              height={200}
              className="w-full h-full transition-transform duration-300 object-cover"
            />
            <Image
              src="/images/wvsu-web.png"
              alt="Gallery Image 8"
              width={300}
              height={200}
              className="w-full h-full transition-transform duration-300 object-cover"
            />
          </motion.div>
        </div>
  )
}