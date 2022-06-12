import React from 'react';
import apar1 from '../../assets/images/apar1.png';
import apar2 from '../../assets/images/apar2.png';
import apar3 from '../../assets/images/apar3.png';
import apar4 from '../../assets/images/apar4.png';
import apar5 from '../../assets/images/apar5.png';

const AparDetails = () => {
    return (
        <section className='bg-info'>
            <h1 className='text-bold text-center py-3 text-light'>Project Details:Apar Parts</h1>

            <div id="carouselExampleInterval" class="carousel slide w-50 mx-auto" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={apar1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={apar2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={apar3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={apar4} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={apar5} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-4 text-dark">
                        <h3 className='text-bold'>Details</h3>
                        <ul>
                            <li>This is Manufacturer company website.
                            </li>
                            <li>In this website already have an admin. admin can manage product items,users & orders.
                            </li>
                            <li>Admin also can add a item and delete a item.
                            </li>
                            <li>Admin can manage payment method & make a user admin.
                            </li>
                            <li>Using mongodb for store data.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h3 className='text-bold'>Technology Usage:</h3>
                        React Js,Node Js,Express Js,Mongo DB,Firebase,React-router,React-firebase-hooks,Tailwind CSS,React Hot Toast
                    </div>
                    <div className="col-lg-4">
                        <h3 className='text-bold'>Code Link:</h3>
                        <button className='btn btn-outline-primary mx-2 text-white text-bold'>Client</button>
                        <button className='btn btn-outline-primary mx-2 text-white text-bold'>Server</button>
                        <button className='btn btn-outline-primary mx-2 text-white text-bold'>Live Site</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AparDetails;