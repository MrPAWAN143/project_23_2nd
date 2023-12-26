import React from 'react'
import { useState } from 'react'

export default function Contact() {

    const [inputs, setinputs] = useState({})

    const handleInputs = (event) => {
        const name = event.target.name
        const value = event.target.value

        setinputs({inputs,[name]:value })

        
        console.log(inputs)
        
    }
    const handSubmit = (event) =>{
        // event.preventDefault()
        console.log(inputs)
    }


    return (
        <>
            <h1 className='text-center'>Contact Page</h1>
            <p className='col-8 m-auto '>
                Experience simplicity and style with our user-friendly form. Enter your details
                seamlessly—name, email, phone, and gender. Stay in control with a straightforward
                checkbox to agree to terms. Designed with Bootstrap for a clean, modern look. Submit
                and embark on your hassle-free journey with us.
            </p>

            <form className="container mt-2 " onSubmit={handSubmit}>
                <div className="mb-3 w-50 m-auto">
                    <label className="form-label" for='name'>Name:</label>
                    <input type="text" name="name" id='name' className="form-control " value={inputs.name} placeholder='Enter Name' onChange={handleInputs} />
                </div>

                <div className="mb-3 w-50 m-auto">
                    <label className="form-label" for='email'>Email:</label>
                    <input type="email" name="email" id='email' placeholder='Enter email Id' value={inputs.email} className="form-control" onChange={handleInputs} />
                </div>

                <div className="mb-3 w-50 m-auto">
                    <label className="form-label" for='phone'>Phone:</label>
                    <input
                        type="tel" name="phone" id='phone' value={inputs.phone} placeholder='Enter Phone' className="form-control" onChange={handleInputs} />
                </div>

                <div className="mb-3 w-50 m-auto">
                    <label className="form-label" for='gender'>Gender:</label>
                    <select
                        name="gender" id='gender' className="form-select"
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="mb-3 form-check w-50 m-auto">
                    <input type="checkbox" id='agree' name="agreeToTerms" value={inputs.agreeToTerms} onChange={handleInputs} className="form-check-input"
                    />
                    <label className="form-check-label w-50 m-auto" for='agree'>
                        I agree to accept all terms and conditions
                    </label>
                </div>

                <button type="submit" className="btn btn-primary w-50 m-auto d-block">
                    Submit
                </button>
            </form>

        </>
    );


}
