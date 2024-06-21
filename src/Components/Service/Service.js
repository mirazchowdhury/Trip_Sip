import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {

    const [remainingServices, setRemainingServices] = useState();
    //For Showing All Available Service
    useEffect(() => {
        fetch('https://trip-sip-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setRemainingServices(data)
            })
    }, [remainingServices])

    const handleDelete = (service) => {
        const agree = window.confirm(`Are you want to delete ${service.name}?`)

        if (agree) {
            fetch(`https://trip-sip-server.vercel.app/services/${service._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        alert("User Deleted Successfully")

                        const remainingServiceNew = remainingServices.filter(usr => usr._id !== service._id);
                        setRemainingServices(remainingServiceNew)
                    }
                })
        }
        else {
            console.log("Canceled By User");
        }

    }
    return (
        <div className='mt-5 mb-3 container'>
            <h2 className='fw-bold App'>Service</h2>
            <div className='row row-cols-3 App parentGrid mx-auto'>
                {
                    remainingServices?.map(service => <div className='m-3 upcomingCard col border border-1 rounded-3'>
                        <img className='w-100 imageCard mt-2 rounded-3' src={service.imageLink} alt="" />
                        <h5 className='fw-semibold mt-2'>{service.title}</h5>
                        <p className='fw-semibold pt-1'>
                            Price: {service.price}$
                        </p>

                        <div className='d-flex justify-content-around'>
                            <Link to={`/update/${service._id}`}>
                                <button className='btn btn-info px-3 rounded-3 fw-semibold text-white'>Edit</button>
                            </Link>
                            <button onClick={() => { handleDelete(service) }} className='btn btn-danger px-3 rounded-3 fw-semibold'>Delete</button>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default Service;