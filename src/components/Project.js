import React from 'react'
import img1 from './assest/images/img1.jpg'

export default function Project(){
    const backgroundimagez = {
        width:'100%',
        height:'100vh',

       
    };
    
    return (
        <div className='container mt-2' >
            <h1 className='text-center'>Project Page</h1>
            <p className='col-8 m-auto '>
                We will build a small game during this tutorial. You might be tempted to skip it because youre 
                not building games — but give it a chance. The techniques you
                ll learn in the tutorial are fundamental to building any React 
                app, and mastering it will give you a deep understanding of React.
            </p>
           <img className='w-50 m-auto d-block mt-2' src={img1} />
        </div>
    )
}
