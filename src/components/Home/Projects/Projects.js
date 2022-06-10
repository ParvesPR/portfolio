/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Projects.css';
import aparHome from '../../../assets/images/apar-home.png';
import warehouse from '../../../assets/images/warehouse.png';
import lucky from '../../../assets/images/lucky.png';
import { BsArrowRightCircle } from 'react-icons/bs/index';

const Projects = () => {
    return (
        <section className='project-section'>
            <div className="container">
                <div className="row">
                    <h2 className='mt-5 text-secondary text-uppercase text-center'>My Latests Projects</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto py-3 mb-5">
                        <div className="col project-card">
                            <div className="card shadow border-0 project-bg h-100">
                                <img src={aparHome} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Apar Parts <span className='fs-6 text-light'>(Manufacturer Company)</span></h5>
                                    <p className="card-text text-light">This is a Auto-mobile parts manufacturer company website.Users have to log in and can order any product</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className="banner-btn fw-bold my-3 btn btn-secondary bg-secondary">Explore <BsArrowRightCircle></BsArrowRightCircle> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col project-card">
                            <div className="card shadow border-0 project-bg2 h-100">
                                <img src={warehouse} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Warehouse <span className='fs-6 text-danger'>(Cars Warehouse)</span></h5>
                                    <p className="card-text text-dark">Used & new cars Warehouse Management.Customers will see many products & can buy any product from there.</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className="banner-btn card-btn fw-bold my-3 btn btn-secondary">Explore <BsArrowRightCircle></BsArrowRightCircle> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col project-card">
                            <div className="card shadow border-0 project-bg3 h-100">
                                <img src={lucky} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Travel Package <span className='fs-6 text-danger'>(Lucky One)</span></h5>
                                    <p className="card-text text-dark">Used & new cars Warehouse Management.Customers will see many products & can buy any product from there.</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className="banner-btn fw-bold lucky-btn my-3 btn btn-secondary">Explore <BsArrowRightCircle></BsArrowRightCircle> </button>
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