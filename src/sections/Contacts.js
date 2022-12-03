import React from 'react';

const Contacts = () => (
    <section className="page-section" id="contact">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <span className="fas"></span>
                                <div className="d-flex flex-column">
                                    <div className="card-title">Sathiyaraman2003@gmail.com</div>
                                    <span className="text-muted">EMAIL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contacts;