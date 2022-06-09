import React from 'react';
import image from '../../../assets/images/banner.webp';
import '../Banner/Banner.css';

const Banner = () => {
    return (
        <section style={{
            backgroundImage: `url(${image})`
        }} className='banner-image'>
            <div className='container'>
                <div className='row align-items-center h-75'>
                    <div className='col-sm-6 col-lg-6 mt-5'>
                        <p className='btn btn-outline-secondary text-white'>Hi There !</p>
                        <h1 className='text-success'><span className='text-white fw-bold'>I'm Parves.</span> I'm a web developer</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;