import React from 'react'
import img1 from './assest/images/img1.jpg'

export default function Home() {
  return (
    <div className='container'>
      <h1 className='text-center mb-4'>Home Page</h1>
      <p className='col-10 m-auto'>
        A home page is the primary web page that a visitor will view when they
         navigate to a website via a search engine, and it may also function as
          a landing page to attract visitors. In some cases, the home page is a 
          site directory, particularly when a website has multiple home pages.
      </p>
      <img src={img1} className='w-50 m-auto d-block mt-4'/>
    </div>
  )
}
