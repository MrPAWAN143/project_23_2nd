import React from 'react'
import img2 from './assest/images/img2.jpg'

export default function About() {
  return (
    <div className='container mt-2'>
      <h1 className='text-center'>About Page</h1>
      <p className='col-8 m-auto'>Welcome to Pathway.com, where your digital journey 
      unfolds effortlessly. Explore seamless design and cutting-edge
       technology, crafted for an immersive experience. Navigate with 
       ease through our user-friendly interface, a testament to our 
       commitment to simplicity. Behind the scenes, our dedicated
        team shapes pathways of innovation. Join us on this unique 
        adventure—one click at a time. Your journey begins here at
         Pathway.com</p>
         <img className='w-50 d-block m-auto mt-4' src={img2} />
    </div>
  )
}
