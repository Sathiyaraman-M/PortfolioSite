import React from 'react';

const ProjectModal = ({id, title, content, image, link}) => (
    <div className="portfolio-modal modal fade" id={id} tabIndex="-1" aria-labelledby={id}
         aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header border-0">
                    <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{title}</h2>
                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                <div className="divider-custom-line"></div>
                            </div>
                            <img className="rounded mb-3" style={{height: '200px', objectFit: 'contain',width:'auto !important'}} src={image} alt="..."/>
                            <p className="mb-3">{content}</p>
                            <div className="d-flex justify-content-center" >
                                <a href={link} className="btn btn-primary mx-1" target="_blank" rel="noreferrer">
                                    <i className="fas fa-fw fa-brands fa-github"></i>
                                    Open in GitHub
                                </a>
                                <button className="btn btn-primary mx-1" data-bs-dismiss="modal">
                                    <i className="fas fa-xmark fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectModal;