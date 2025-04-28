import React from 'react'

type Props = object;

export default function Footer({}: Props) {
  return (
    <footer className="py-24 px-6 border-t text-center">
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} <a href='https://tjmb.dev'>tjmb.dev</a></p>
      <div className="mt-4">
        <a href="https://tjmb.dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:underline mx-2">Portfolio</a>
        <a href="https://github.com/teejcoder" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:underline mx-2">GitHub</a>
      </div>
    </footer>
  )
}