/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './MyServices.css';

const MyServices = () => {
    return (
        <section className='service-section'>
            <div className='container'>
                <div className='row'>
                    <h3 className='text-light text-center text-uppercase py-4'>| Services |</h3>
                    <div className=' col-lg-4 col-sm-12 col-md-6 mb-3'>
                        <div className="js-card card text-white">
                            <div className="card-body">
                                <h4 className="text-center text-white">JavaScript</h4>
                                <p className="card-text">JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.</p>
                            </div>
                            <ul className="list-group card-list">
                                <li className="list-group-item text-white">Asynchronous Programming</li>
                                <li className="list-group-item text-white">Functional Programming</li>
                                <li className="list-group-item text-white">Keep Up With The Industry</li>

                            </ul>
                        </div>
                    </div>

                    <div className=' col-lg-4 col-sm-12 col-md-6 mb-3'>
                        <div className="react-card card text-white">
                            <div className="card-body">
                                <h4 className="text-center text-white">React JS</h4>
                                <p className="card-text">
                                    React JS is a JavaScript library used in web development to build interactive elements on websites.</p>
                            </div>
                            <ul className="list-group rjs-list">
                                <li className="list-group-item text-white">React Router</li>
                                <li className="list-group-item text-white">React Hooks</li>
                                <li className="list-group-item text-white">React Library</li>

                            </ul>
                        </div>
                    </div>

                    <div className=' col-lg-4 col-sm-12 col-md-6 mb-3'>
                        <div className="node-card card text-white">
                            <div className="card-body">
                                <h4 className="text-center text-white">Node JS</h4>
                                <p className="card-text">Node.js is an open-source and cross-platform JavaScript runtime environment.It is a popular tool for almost any kind of project.</p>
                            </div>
                            <ul className="list-group node-list">
                                <li className="list-group-item text-white">Security</li>
                                <li className="list-group-item text-white">Databases</li>
                                <li className="list-group-item text-white">Package management.</li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MyServices;