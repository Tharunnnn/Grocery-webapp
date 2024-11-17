import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>We Bring Store To Your Door</h1>
            <p className='mb-10'>Shop your favourite Product from your favourite Store from you home in one single place in just few clicks and at a discounted price</p>

            <button className='btn-primary'>Start Shopping</button>
        </div>

       
    </div>
  )
}

export default Banner