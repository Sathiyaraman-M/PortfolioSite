import React from 'react';

const About = () => (
    <section className="page-section mb-0">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase">About Me</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">
                <div className="col-lg-4 ms-auto"><p className="lead">My name is Sathiyaraman M and I'm a Computer Science Engineering student. I'm from India, living in Chennai and currently pursuing Computer Science and Engineering in RMK Engineering College, Tamil Nadu, India.</p></div>
                <div className="col-lg-4 me-auto"><p className="lead">A great .NET enthusiast myself, I spend most of my time doing projects with ASP.NET Core and Blazor as I am intending to get into Full-Stack Web Development. Just recently, began exploring the JavaScript ecosystem.</p></div>
            </div>
        </div>
    </section>
);

export default About;