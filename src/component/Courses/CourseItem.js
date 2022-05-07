import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = ({ course }) => {

    const { title, instructor, img, text, price } = course;

    return (
        <div className="col-xl-4 col-md-6 text-start mx-auto">
            <div className="p-2 h-100">
                <div className="d-flex flex-column box justify-content-between bg-white h-100 rounded-10 shadow shadow-hover">
                    <div className='mb-3 shadow rounded-10'>
                        <img className='w-100 d-block rounded-10' src={img} />
                    </div>
                    <div className='px-3'>
                        <h5 className='fw-bolder'>{title}</h5>
                        <small className='d-flex justify-content-between text-secondary'>
                            <span className='d-block'>By <span className='fw-bolder'>{instructor}</span></span>
                            <span className='d-block fw-bolder text-dark'>${price}</span>
                        </small>
                    </div>
                    <div className='pt-2 pb-3 px-3'>
                        <small>{text}</small>
                    </div>
                    <div className="pb-3 text-center">
                        <Link className='btn btn-dark shadow' to='/coursedtails'>Enroll Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseItem;