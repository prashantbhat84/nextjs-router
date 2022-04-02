import React from 'react'
import {useRouter} from 'next/router'
const PortfolioProjectPage = () => {
  const router= useRouter();
  const Id= router.query.projectId
  return (
    <p>Project Id #-{Id}</p>
  )
}

export default PortfolioProjectPage