import React from 'react';
import Home from '../Home/Home';
import Service from '../Service/Service';
import Upcoming from '../Upcoming/Upcoming';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Service></Service>
            <Upcoming></Upcoming>
        </div>
    );
};

export default HomePage;