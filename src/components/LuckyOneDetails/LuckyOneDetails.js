import React from 'react';
import lucky1 from '../../assets/images/lucky1.png';
import lucky2 from '../../assets/images/lucky2.png';
import lucky3 from '../../assets/images/lucky3.png';

const LuckyOneDetails = () => {
    return (
        <section className='bg-info'>
            <h1 className='text-bold text-center py-3 text-light'>Project Details: Lucky One</h1>

            <div id="carouselExampleInterval" class="carousel slide w-75 mx-auto" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={lucky1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={lucky2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={lucky3} class="d-block w-100" alt="..." />
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
                            <li>Simple React project using vanilla CSS.
                            </li>
                            <li>In this project, the user can see many places for traveling & user can add to the cart by clicking Booking Now button.
                            </li>
                            <li>After clicking, places will add to Cart.
                            </li>
                            <li>By clicking choose 1 for me button, the user can get a random place for traveling.
                            </li>
                            <li>Choose again button to remove all added places
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h3 className='text-bold'>Technology Usage:</h3>
                        React Js,CSS.
                    </div>
                    <div className="col-lg-4">
                        <h3 className='text-bold'>Code Link:</h3>
                        <button className='btn btn-outline-primary mx-2 text-white text-bold'><a className='text-white text-bold text-decoration-none' target="blank" href="https://github.com/ParvesPR/lucky-one" alt="">Code</a></button>
                        <button className='btn btn-outline-primary mx-2 text-white text-bold'><a className='text-white text-bold text-decoration-none' target="blank" href="https://lucky-js.netlify.app/">Live Site</a></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LuckyOneDetails;