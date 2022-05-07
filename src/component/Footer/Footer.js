import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/logo.png';
import playstore from '../../media/android.png';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="py-4 row justify-content-between text-start">
                    <div className="mt-4 col-lg-2 col-sm-6 order-lg-2 order-xs-2">
                        <h6 className="mb-2 text-white"><span className="border-2 border-bottom border-secondary">Quick L</span>inks</h6>
                        <Link className="mt-3 mb-2 text-decoration-none d-block text-secondary foo-link" to="/about">About Me</Link>
                        <Link className="my-2 text-decoration-none d-block text-secondary foo-link" to="/courses">Courses</Link>
                        <Link className="my-2 text-decoration-none d-block text-secondary foo-link" to="/Courses">Pricing</Link>
                        <Link className="my-2 text-decoration-none d-block text-secondary foo-link" to="/services">Testimonial</Link>
                        <Link className="my-2 text-decoration-none d-block text-secondary foo-link" to="/career">Career</Link>
                    </div>
                    <div className="mt-4 mb-4 text-white col-lg-3 col-sm-6 order-lg-3 order-xs-1">
                        <h6 className="mb-3 text-white"><span className="border-2 border-bottom border-secondary">Connect Wi</span>th Us</h6>
                        <div className="my-3 d-flex text-secondary foo-link">
                            <small className="col-1"><i className="fas fa-map-marker-alt"></i></small>
                            <small>12, Jhankar Mahbub Street,<br />Programming Hero, Bangladesh</small>
                        </div>
                        <div className="mb-4 d-flex text-secondary foo-link">
                            <small className="col-1"><i className="fas fa-phone-alt"></i></small>
                            <small>999, +88012345</small>
                        </div>
                        <h6 className="mt-3 mb-3 text-white"><span className="border-2 border-bottom border-secondary">Download O</span>ur App</h6>
                        <div className="row justify-content-between pe-5">
                            <Link className="d-block pe-xl-5 pe-lg-0 pe-md-5 pe-5" to="/playstore">
                                <img className="d-block w-100 pe-5 pe-sm-0" src={playstore} alt="android" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 col-lg-4 col-sm-12 order-lg-1 order-xs-3">
                        <div className="pb-2">
                            <Link className="navbar-brand" to="/home">
                                <img className="me-1" width="35" src={logo} alt="main logo" />
                                <span className="fs-4 text-light">hashtag</span>
                            </Link>
                        </div>
                        <small className="text-secondary d-block">Hashtag, Inc.is a for-profit massive open online course provider aimed at professional adults and students. Her, students take courses primarily to improve job-related skills.</small>
                        <div className="mt-4 mb-4">
                            <Link to="/facebook"><i className="text-white pe-3 fab fa-facebook-f"></i></Link>
                            <Link to="/twitter"><i className="text-white pe-3 fab fa-twitter"></i></Link>
                            <Link to="/googleplus"><i className="text-white pe-3 fab fa-google-plus-g"></i></Link>
                            <Link to="/linkedin"><i className="text-white pe-3 fab fa-linkedin-in"></i></Link>
                        </div>
                        <small className="text-light">Copyright &copy; 2022. <span className="text-light">Tanmay Kumar.</span></small>
                        <div>
                            <Link to="/desclaimer" className="text-decoration-none text-secondary foo-link"><small>Desclaimer.</small></Link>
                            <Link to="/tnc" className="px-2 text-decoration-none text-secondary foo-link"><small>Terms & Conditions.</small></Link>
                            <Link to="/privacy" className="text-decoration-none text-secondary foo-link"><small>Privacy Policy.</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;