import React from 'react'
import Link from 'next/link'
const PageNotFound = () => {
    
  return (
    <div>
        <h1>
            Page Not Found
        </h1>
        <Link  replace href="/">Go Home</Link>
      
        
        </div>
  )
}

export default PageNotFound