import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-center text-white py-3 mt-3'>
            <p>Copyright © {new Date().getFullYear()} PARVES</p>
        </div>
    );
};

export default Footer;