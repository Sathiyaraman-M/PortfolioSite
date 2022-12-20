import React from 'react';

const ExpertiseSection = ({title, content, setBgColor}) => {
    return (
        <section className={ setBgColor ? "page-section bg-primary" : "page-section"} id="expertise">
            <div className="container">
                <h2 className={`page-section-heading ${setBgColor ? "bg-primary text-white" : ""} text-center text-uppercase text-secondary mb-0`}>{title}</h2>
                <div className={`divider-custom ${setBgColor ? "divider-light" : ""}`}>
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row row-cols-auto row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
                    {content.map((item) => {
                        return (
                            <div className={`col ${setBgColor ? "text-white" : ""}`}>
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;