import React from 'react';

const About = () => (
    <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">
                <div className="col-lg-4 ms-auto"><p className="lead">My name is Sathiyaraman M and I'm a Computer Science Engineering student. I'm from India, living in Chennai and currently pursuing Computer Science and Engineering in RMK Engineering College, Tamil Nadu, India.</p></div>
                <div className="col-lg-4 me-auto"><p className="lead">A great .NET enthusiast myself, I spend most of my time tinkering with ASP.NET Core and Blazor. I have also worked a bit in other frameworks and looking forward to build some interesting apps for future.</p></div>
            </div>
        </div>
    </section>
);

export default About;