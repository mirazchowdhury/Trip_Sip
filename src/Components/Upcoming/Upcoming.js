import React, { useEffect, useState } from 'react';
import './Upcoming.css'
const Upcoming = () => {
    const [upcommings, setUpcommings] = useState()

    useEffect(() => {
        fetch('https://trip-sip-server.vercel.app/upcomming')
            .then(res => res.json())
            .then(data => {
                setUpcommings(data)
            })
    }, [])
    // console.log(upcommings);


    return (
        <div className='container'>
            <h3 className='App mt-5 pt-2 fw-bold'>Upcoming Packages</h3>

            <div className='row row-cols-3 App parentGrid mx-auto'>
                {
                    upcommings?.map(upcomming => <div className='m-3 upcomingCard col border border-1 rounded-3'>
                        <img className='w-100 imageCard mt-2 rounded-3' src={upcomming.img} alt="" />
                        <h5 className='fw-semibold mt-2'>{upcomming.spot}</h5>
                        <h6 className='fw-semibold mt-1'>{upcomming.place}</h6>
                        <p className='fw-semibold pt-1'>
                            Price: TBA
                        </p>
                    </div>)

                }
            </div>


        </div>
    );
};

export default Upcoming;