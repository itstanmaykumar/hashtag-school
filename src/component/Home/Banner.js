import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../media/heroImg.svg';

const Banner = () => {
    return (
        <section className='row justify-content-between align-items-center mb-5 pb-3'>
            <div className='order-lg-2 col-lg-6'>
                <img className='w-100' src={heroImg}></img>
            </div>
            <div className='order-lg-1 col-lg-5'>
                <p>Learn with fun...</p>
                <h1 className='fw-bolder'>Improve Your Professional Skill</h1>
                <h2 className='fw-bolder'>Interactively...</h2>
                <small className='d-block mt-3 mb-4'>Find the right instructor for you. Choose from many topics, skill levels, and languages. Shop thousands of high-quality on-demand online courses. Start learning today.</small>
                <Link className='btn btn-dark shadow' to='/courses'>Get Started</Link>
            </div>
        </section>
    );
};

export default Banner;