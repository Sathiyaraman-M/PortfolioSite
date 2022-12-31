import React from 'react';
import sports_store from '../assets/portfolio/sports-store.png'
import endurance from '../assets/portfolio/endurance.png'
import resurgence from '../assets/portfolio/resurgence.png'
import genesis from '../assets/portfolio/genesis.png'
import novel_infinite from '../assets/portfolio/novel-infinite.png'

const ProjectSection = () => (
    <section className="page-section portfolio">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#sports-store">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src={sports_store} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#endurance">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src={endurance} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#fluid">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src={genesis} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#resurgence">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src={resurgence} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#genesis">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src={genesis} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#infinite">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src={novel_infinite} alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ProjectSection;