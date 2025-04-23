import React from 'react'

type Props = {
    children: string
}

export default function Container({children}: Props) {
  return (
    <section>
        {children}
    </section>
  )
}