/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Projects.css';
import aparHome from '../../../assets/images/apar-home.png';
import { BsArrowRightCircle } from 'react-icons/bs/index';

const Projects = () => {
    return (
        <section classNameName='py-5 project-section'>
            <div classNameName="container">
                <div classNameName="row">
                    <h2 className='mt-5 text-secondary text-uppercase text-center'>My Latests Projects</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-3 container mx-auto py-5">
                        <div className="col">
                            <div className="card h-100">
                                <img src={aparHome} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Apar Parts <span className='fs-6 text-danger'>(Manufacturer Company)</span></h5>
                                    <p className="card-text">This is a Auto-mobile parts manufacturer company website.Users have to log in and can order any product</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className="banner-btn my-3 btn btn-secondary">Explore <BsArrowRightCircle></BsArrowRightCircle> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={aparHome} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Apar Parts <span className='fs-6 text-danger'>(Manufacturer Company)</span></h5>
                                    <p className="card-text">This is a Auto-mobile parts manufacturer company website.Users have to log in and can order any product</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className="banner-btn my-3 btn btn-secondary">Explore <BsArrowRightCircle></BsArrowRightCircle> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;