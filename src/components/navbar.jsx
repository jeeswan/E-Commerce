import React from 'react'
import images from '../assets/assets';


const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={images.logo} className="w-36" alt="Weaveleafs Logo" />
    </div>
  )
}

export default Navbar
