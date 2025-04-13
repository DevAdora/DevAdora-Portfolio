// components/Header.jsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header>
      <nav>
        <div className="header ageflex justify-between items-start px-4 py-4">
          <div className="text-[18px] font-bold text-light-dark">
            <h1>DevAdora ©</h1>
          </div>
          
          <ul className="flex gap-[10px]">
            <li><Link href="#" className="text-light-dark text-[18px] font-medium">About,</Link></li>
            <li><Link href="#" className="text-light-dark text-[18px] font-medium">Works,</Link></li>
            <li><Link href="#" className="text-light-dark text-[18px] font-medium">Testimonials,</Link></li>
            <li><Link href="#" className="text-light-dark text-[18px] font-medium">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}