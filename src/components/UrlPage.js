import React from 'react'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import About from './About'
import Contact from './Contact'

export default function UrlPage() {
const {UrlPage} = useParams()
if(UrlPage == "pawan"){
    return(
       <div className='container'>
      <h1> Hello {UrlPage}</h1>
       </div>
    )
}else{
    return(
<div className='container'>
    <h1>Hello Mr <span>{UrlPage}</span> This Page Not found Please Check url</h1>

</div>
    )
}
  return (
    <div>
    
    </div>
  )
}
