import React from 'react';
import cabin from '../assets/portfolio/cabin.png'
import cake from '../assets/portfolio/cake.png'
import circus from '../assets/portfolio/circus.png'
import game from '../assets/portfolio/game.png'
import safe from '../assets/portfolio/safe.png'
import submarine from '../assets/portfolio/submarine.png'

const ProjectSection = () => (
    <section className="page-section portfolio">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#sports-store">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={cabin} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#endurance">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={cake} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#fluid">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={circus} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#resurgence">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={game} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#infinite">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={safe} alt="..."/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolio-react">
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={submarine} alt="..."/>
                    </div>
                </div>
                {/*<div className="col-md-6 col-lg-4 mb-5">*/}
                {/*    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">*/}
                {/*        <div*/}
                {/*            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">*/}
                {/*            <div className="portfolio-item-caption-content text-center text-white"><i*/}
                {/*                className="fas fa-plus fa-3x"></i></div>*/}
                {/*        </div>*/}
                {/*        <img className="img-fluid" src={cabin} alt="..."/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col-md-6 col-lg-4 mb-5">*/}
                {/*    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">*/}
                {/*        <div*/}
                {/*            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">*/}
                {/*            <div className="portfolio-item-caption-content text-center text-white"><i*/}
                {/*                className="fas fa-plus fa-3x"></i></div>*/}
                {/*        </div>*/}
                {/*        <img className="img-fluid" src={cake} alt="..."/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col-md-6 col-lg-4 mb-5">*/}
                {/*    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">*/}
                {/*        <div*/}
                {/*            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">*/}
                {/*            <div className="portfolio-item-caption-content text-center text-white"><i*/}
                {/*                className="fas fa-plus fa-3x"></i></div>*/}
                {/*        </div>*/}
                {/*        <img className="img-fluid" src={circus} alt="..."/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col-md-6 col-lg-4 mb-5 mb-lg-0">*/}
                {/*    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">*/}
                {/*        <div*/}
                {/*            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">*/}
                {/*            <div className="portfolio-item-caption-content text-center text-white"><i*/}
                {/*                className="fas fa-plus fa-3x"></i></div>*/}
                {/*        </div>*/}
                {/*        <img className="img-fluid" src={game} alt="..."/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col-md-6 col-lg-4 mb-5 mb-md-0">*/}
                {/*    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">*/}
                {/*        <div*/}
                {/*            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">*/}
                {/*            <div className="portfolio-item-caption-content text-center text-white"><i*/}
                {/*                className="fas fa-plus fa-3x"></i></div>*/}
                {/*        </div>*/}
                {/*        <img className="img-fluid" src={safe} alt="..."/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col-md-6 col-lg-4">*/}
                {/*    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">*/}
                {/*        <div*/}
                {/*            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">*/}
                {/*            <div className="portfolio-item-caption-content text-center text-white"><i*/}
                {/*                className="fas fa-plus fa-3x"></i></div>*/}
                {/*        </div>*/}
                {/*        <img className="img-fluid" src={submarine} alt="..."/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    </section>
);

export default ProjectSection;