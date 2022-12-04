import React from 'react';

const Expertise = () => (
    <section className="page-section" id="expertise">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Expertise</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <span className="fas"></span>
                                <div className="d-flex flex-column">
                                    <span className="card-title">Blazor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <span className="fas"></span>
                                <div className="d-flex flex-column">
                                    <span className="card-title">ASP.NET Core MVC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <span className="fas"></span>
                                <div className="d-flex flex-column">
                                    <span className="card-title">ASP.NET Core API</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <span className="fas"></span>
                                <div className="d-flex flex-column">
                                    <span className="card-title">Bootstrap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <span className="fas"></span>
                                <div className="d-flex flex-column">
                                    <span className="card-title">Windows Forms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Expertise;