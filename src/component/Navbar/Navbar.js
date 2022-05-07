import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/home">
                    <img width="35" src={logo} alt="main logo" />
                    <span className="fs-4">hashtag</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0">
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bolder" to="/signin">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;