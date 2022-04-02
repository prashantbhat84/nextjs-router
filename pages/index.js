import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <>
    <h1>Home Page</h1>
    <ul>
      <li>

    <Link  href="/portfolio">Portfolio Page</Link>
      </li>
      <li>

    <Link  href="/clients">Clients Page</Link>
      </li>
      
    </ul>
    </>
  )
}

export default index