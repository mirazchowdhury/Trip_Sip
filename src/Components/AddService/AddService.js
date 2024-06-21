import React, { useState } from 'react';

const AddService = () => {

    const [serviceData, setServiceData] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(serviceData)
        event.target.reset();

        fetch("https://trip-sip-server.vercel.app/services", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Your Data inserted")
                }
            })


    }
    const handleChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...serviceData };
        newUser[field] = value;
        setServiceData(newUser);
    }



    return (
        <div className='App container'>
            <h3 className='fw-bold mt-4'> Add New Service</h3>
            <form onSubmit={handleSubmit} className='my-3'>
                <input onChange={handleChange} type="text" name='title' placeholder='Service Title' required />

                <br />
                <br />
                <input onChange={handleChange} type="text" name='imageLink' placeholder='Image Link' required />

                <br />
                <br />
                <input onChange={handleChange} type="number" name='price' placeholder='Price' required />
                <br />
                <br />


                <button className='btn btn-primary' type='submit'>Add Service</button>

            </form>
        </div>
    );
};

export default AddService;