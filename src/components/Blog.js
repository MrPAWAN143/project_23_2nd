import React from 'react'
import img3 from './assest/images/img3.jpg'

export default function Blog() {
  return (
    <div className='container mt-2'>
      <h1 className='text-center'>Blog Page</h1>
      <p className='col-8 m-auto '>Discover the React Revolution: Unleashing the Power of Dynamic UIs! 
        In this blog, we delve into the heart of React, exploring its seamless 
        components and declarative syntax. Dive into the world of virtual DOM 
        for lightning-fast updates and learn how React transforms web development
        . Whether you're a seasoned developer or a coding enthusiast, join us on
         </p>
         <img className='w-50 d-block m-auto mt-4' src={img3}/>
    </div>
  )
}
