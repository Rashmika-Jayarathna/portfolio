import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import React, { useState } from 'react'

const HomePage = () => {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)



  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Nav bar */}
        <MobileNav nav = {nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        
        {/* Hero section */}
      </div>
    </div>
  )
}

export default HomePage