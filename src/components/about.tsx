'use client'
import React from 'react'
import { motion } from 'motion/react';

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Aussie Stargazers</h2>
          <div className="prose prose-lg prose-invert mx-auto text-balance">
            <p className="mb-4">Welcome to Aussie Stargazers, your premier destination for astronomical wonders as viewed from the great Down Under!</p>
            <p className="mb-4">Founded by a group of passionate astronomers and night sky enthusiasts, our mission is to bring the majesty of the cosmos directly to you through stunning imagery sourced directly from NASA&apos;s Astronomy Picture of the Day API.</p>
            <p className="mb-6">Whether you&apos;re gazing up at the Southern Cross from the Outback, searching for nebulae from suburban Melbourne, or tracking celestial events across the Great Barrier Reef, we&apos;re here to enhance your stargazing experience with accurate data and breathtaking visuals.</p>
            <h3 className="text-2xl font-bold mt-10 mb-4">What Makes Us Different</h3>
            <p className="mb-4">We harness the power of NASA&apos;s renowned Astronomy Picture of the Day API to bring you a curated gallery of cosmic wonders, complete with expert explanations straight from the astronomers themselves.</p>
            <p className="mb-4">Unlike static astronomy sites, our collection refreshes with new stellar phenomena, galaxy formations, and nebula discoveries—giving you a constantly evolving window into the universe above Australia.</p>
            <p className="mb-8">From mesmerising deep space objects to rare celestial events, we deliver NASA&apos;s cutting-edge astronomical discoveries with all the scientific context and visual splendor that made these images worthy of NASA&apos;s spotlight.</p>
            <p className="mb-8">Check out the pics below—each one hand-selected by NASA&apos;s astronomers as representing something truly extraordinary in our cosmic neighborhood!</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}