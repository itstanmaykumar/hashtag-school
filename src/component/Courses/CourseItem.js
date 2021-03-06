import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CourseItem = ({ course }) => {

    const { id, title, instructor, img, text, rating, price } = course;
    let navigate = useNavigate();

    const handleCourseDetails = (id) => {
        navigate(`/courses/${id}`);
    }

    return (
        <div className="col-lg-11 col-md-6 text-start mx-auto">
            <div className="p-3 h-100">
                <div className="row box justify-content-between bg-white h-100 rounded-10 shadow box">
                    <div className='col-lg-6 col-md-12 d-flex align-items-center shadow rounded-10'>
                        <img className='w-100 d-block rounded-10' src={img} />
                    </div>
                    <div className='col-lg-6 col-md-12 d-flex flex-column justify-content-center'>
                        <div className='px-3 pt-4'>
                            <h5 className='fw-bolder'>{title}</h5>
                            <small className='d-flex justify-content-between text-secondary'>
                                <span className='d-block'>By <span className='fw-bolder'>{instructor}</span></span>
                                <span className='text-dark fw-bolder pe-4'><i className="pe-2 text-warning fas fa-star"></i>{rating}</span>
                            </small>
                        </div>
                        <div className='pt-2 pb-3 px-3'>
                            <small>{text.slice(0, 100)}...<span onClick={() => handleCourseDetails(id)} className="fw-bolder cursor-pointer">Read more</span></small>
                        </div>
                        <div className="pb-4 px-3 d-flex justify-content-between align-items-center">
                            <button onClick={() => handleCourseDetails(id)} className='d-inline-block btn btn-dark shadow' to='/coursedtails'>Enroll Now <i className="ps-2 fas fa-caret-right"></i></button>
                            <span className='d-block fw-bolder fs-5 me-4'>${price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseItem;