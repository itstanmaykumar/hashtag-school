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

    //console.log(course);
    const title = course?.title;
    const instructor = course?.instructor;
    const img = course?.img;
    const text = course?.text;
    const duration = course?.duration;
    const student = course?.student;
    const rating = course?.rating;
    const price = course?.price;

    const handlePay = (e) => {
        e.preventDefault();
        const resolveTime = new Promise(resolve => setTimeout(resolve, 2000));
        toast.promise(
            resolveTime,
            {
                pending: 'Please wait...',
                success: "Successfully Enrolled!",
                error: 'Enrollment Failed!'
            }
        )
    }

    return (
        <div>
            <div className='container my-5'>
                <img className='d-block col-6 mx-auto rounded-20 shadow' src={img}></img>
                <h2 className='my-3'>{title}</h2>
                <p className='fs-5'><span className='fw-bolder'>Instructor: </span>{instructor}</p>
                <h4>Course Description</h4>
                <p>{text}</p>
                <p><span className='fw-bolder pe-2'>Total Enrolled: </span> {student} Students</p>
                <p><span className='fw-bolder'>Rating: </span><span className='text-warning fw-bolder ps-2'>{rating}</span></p>
                <p className='fs-5'><span className='fw-bolder pe-2'>Price: </span>${price}</p>
            </div>
            <div className='container'>
                <h3 className='text-center mt-5'>Enroll This Course</h3>
                <div className='row justify-content-center align-items-center p-5 pt-0'>
                    <form onSubmit={handlePay} className='col-lg-6 p-5 rounded-20 shadow bg-light'>
                        <div className="my-3">
                            <label htmlFor="inputState" className="form-label">Your Desired Course</label>
                            <select id="inputState" className="form-select" disabled>
                                <option>{title}</option>
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
                        <button type='submit' className='btn btn-dark d-inline-block'>Proceed Checkout</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;