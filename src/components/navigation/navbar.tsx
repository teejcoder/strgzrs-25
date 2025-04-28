import React from 'react'
import { ThemeToggle } from '../theme-toggle'

type Props = {}

export default function Navbar({}: Props) {

  return (
    <nav className='fixed top-0 left-0 z-50 w-full flex items-center p-6 border-b backdrop-blur-sm'>
        <p className='mr-auto'>AUSSIE STARGAZERS</p>
        <ThemeToggle/>
    </nav>
  )
}