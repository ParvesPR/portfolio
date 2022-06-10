import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyServices from '../MyServices/MyServices';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyServices></MyServices>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;