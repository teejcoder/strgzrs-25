'use client'
import React from 'react'
import { motion } from 'motion/react';

export const About = () => {
  return (
    <motion.section
      className="w-full pb-16"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      exit={{ opacity: 0, y: 100 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Aussie Stargazers</h2>
          <div className="prose space-y-5 mx-auto text-center text-balance">
              <p>Welcome to Aussie Stargazers, your premier destination for astronomical wonders as viewed from the great Down Under!</p>
              <p>Founded by a group of passionate astronomers and night sky enthusiasts, our mission is to bring the majesty of the cosmos directly to you through stunning imagery sourced directly from NASA&apos;s Astronomy Picture of the Day API.</p>
              <p>Whether you&apos;re gazing up at the Southern Cross from the Outback, searching for nebulae from suburban Melbourne, or tracking celestial events across the Great Barrier Reef, we&apos;re here to enhance your stargazing experience with accurate data and breathtaking visuals.</p>
            <h3 className='my-8'>What Makes Us Different</h3>
              <p>We harness the power of NASA&apos;s renowned Astronomy Picture of the Day API to bring you a curated gallery of cosmic wonders, complete with expert explanations straight from the astronomers themselves.</p>
              <p>Unlike static astronomy sites, our collection refreshes with new stellar phenomena, galaxy formations, and nebula discoveries—giving you a constantly evolving window into the universe above Australia.</p>
              <p>From mesmerising deep space objects to rare celestial events, we deliver NASA&apos;s cutting-edge astronomical discoveries with all the scientific context and visual splendor that made these images worthy of NASA&apos;s spotlight.</p>
              <p>Check out the pics below—each one hand-selected by NASA&apos;s astronomers as representing something truly extraordinary in our cosmic neighborhood!</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}