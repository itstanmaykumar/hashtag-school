import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CourseDetails = () => {

    const { courseId } = useParams();
    let navigate = useNavigate();


    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`/courses.json`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const course = courses[courseId];

    console.log(course);
    const title = course?.title;
    const instructor = course?.instructor;
    const img = course?.img;
    const text = course?.text;
    const price = course?.price;

    const handlePay = () => toast.success("Course Enrolment Successful!");

    return (
        <div>
            <div className='container my-5'>
                <img className='d-block col-6 mx-auto rounded-20 shadow' src={img}></img>
                <h2 className='my-3'>{title}</h2>
                <p className='fs-5'><span className='fw-bolder'>Instructor: </span>{instructor}</p>
                <h3>Course Description</h3>
                <p>{text}</p>
                <p className='fs-5'><span className='fw-bolder'>Price: </span>{price}</p>
            </div>
            <div className='container'>
                <h3 className='text-center mt-5'>Enroll This Course</h3>
                <div className='row justify-content-center align-items-center p-5 pt-0'>
                    <form className='col-lg-6 p-5 rounded-20 shadow bg-light'>
                        <div class="my-3">
                            <label htmlFor="inputState" class="form-label">Your Desired Course</label>
                            <select id="inputState" class="form-select" disabled>
                                <option selected>{title}</option>
                            </select>
                        </div>
                        <h5 className='mt-5'>Enter You Card Information</h5>
                        <div className="my-3">
                            <label htmlFor="cardId" className="form-label">Your Card Number</label>
                            <input type="text" className="form-control" id="cardId" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardPass" className="form-label">Your Password</label>
                            <input type="password" className="form-control" id="cardPass" required />
                        </div>
                        <div className="mb-4 pb-1">
                            <label htmlFor="veriCode" className="form-label">Verification Code</label>
                            <input type="number" className="form-control" id="veriCode" required />
                        </div>
                        <p onClick={handlePay} type='submit' className='btn btn-dark d-inline-block'>Proceed Checkout</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;