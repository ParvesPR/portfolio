import React from 'react';
import './Contact.css';
import contact from '../../../assets/images/contact.jpg'

const Contact = () => {
    return (
        <section className='contact-section py-4'>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <img className='img-fluid' src={contact} alt="" />
                    </div>
                    <div className="col-sm-12 col-lg-6 mt-3">
                        <h2 className='text-secondary text-center text-uppercase'>Get in touch</h2>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="name" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Your Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Phone No.</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                <label for="floatingTextarea2">Comments</label>
                            </div>
                            <div className="col-lg-12 my-3 d-flex justify-content-center">
                            <input type="submit" className="form-control btn btn-primary" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;