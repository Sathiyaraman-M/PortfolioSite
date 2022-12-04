import React from 'react';

import aspnetcoreapi from '../assets/expertise/aspnetcore.jpg';
import aspnetcoremvc from '../assets/expertise/aspnetcore-mvc.png';
import blazor from '../assets/expertise/blazor.png';
import bootstrap from '../assets/expertise/bootstrap.png';
import docker from '../assets/expertise/docker.png'
import mysql from '../assets/expertise/mysql.png'
import sqlserver from '../assets/expertise/sql-server.png'

import './Expertise.css'

const Expertise = () => {
    return (
        <section className="page-section" id="expertise">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Expertise</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-xl-3 mb-4">
                        <div className="card">
                            <div className="card-body expertise-card-body d-flex justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={blazor} className="expertise-img" alt="blazor" />
                                    <h4 className="text-center">Blazor</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 mb-4">
                        <div className="card">
                            <div className="card-body expertise-card-body d-flex justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={aspnetcoreapi} className="expertise-img" alt="aspnetcore-api" />
                                    <h4 className="text-center">ASP.NET Core API</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 mb-4">
                        <div className="card">
                            <div className="card-body d-flex justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={aspnetcoremvc} className="expertise-img" alt="aspnetcore-mvc" />
                                    <h4 className="text-center">ASP.NET Core MVC</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 mb-4">
                        <div className="card">
                            <div className="card-body d-flex justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={bootstrap} className="expertise-img" alt="bootstrap" />
                                    <h4 className="text-center">Bootstrap</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 mb-4">
                        <div className="card">
                            <div className="card-body d-flex justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={docker} className="expertise-img" alt="docker" />
                                    <h4 className="text-center">Docker</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 mb-4">
                        <div className="card">
                            <div className="card-body d-flex justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={blazor} className="expertise-img" alt="windows-forms" />
                                    <h4 className="text-center">Windows Forms</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 mb-4">
                        <div className="card">
                            <div className="card-body d-flex justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={sqlserver} className="expertise-img" alt="sqlserver" />
                                    <h4 className="text-center">SQL Server</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 mb-4">
                        <div className="card">
                            <div className="card-body d-flex justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={mysql} className="expertise-img" alt="mysql" />
                                    <h4 className="text-center">MySQL</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;