import React from "react";

const Footer = () => (
    <>
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <div className="row row-cols-auto g-2 justify-content-center">
                            <div className="col">
                                <a className="btn btn-outline-light btn-lg rounded-pill"
                                   href="https://github.com/Sathiyaraman-M" target="_blank" rel="noreferrer">
                                    <i className="fab fa-brands fa-github"></i>
                                    GitHub
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn btn-outline-light btn-lg rounded-pill"
                                   href="https://twitter.com/SathiyaramanM" target="_blank" rel="noreferrer">
                                    <i className="fab fa-fw fa-twitter"></i>
                                    Twitter
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn btn-outline-light btn-lg rounded-pill"
                                   href="https://www.linkedin.com/in/sathiyaraman-m" target="_blank" rel="noreferrer">
                                    <i className="fab fa-fw fa-linkedin-in"></i>
                                    LinkedIn
                                </a>
                            </div>
                            <div className="col">
                                <a className="btn btn-outline-light btn-lg rounded-pill"
                                   href="https://discordapp.com/users/822291121446977536" target="_blank" rel="noreferrer">
                                    <i className="fab fa-fw fa-discord"></i>
                                    Discord
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <CopyrightSection />
    </>
);

const CopyrightSection = () => (
    <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright &copy; Sathiyaraman M - 2022</small></div>
    </div>
);

export default Footer;