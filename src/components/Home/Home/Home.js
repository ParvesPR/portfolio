import React from 'react';
import Banner from '../Banner/Banner';
import MyServices from '../MyServices/MyServices';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyServices></MyServices>
            <Projects></Projects>
        </div>
    );
};

export default Home;