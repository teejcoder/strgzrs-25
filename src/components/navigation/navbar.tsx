import Link from 'next/link';
import React from 'react';

export default function Navbar({}: Record<string, unknown>) {

  return (
    <nav className='fixed top-0 left-0 z-50 w-full flex items-center p-6 border-b backdrop-blur-sm'>
        <Link href="/">Aussie Stargazers</Link>
    </nav>
  )
}