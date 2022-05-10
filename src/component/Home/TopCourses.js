import React from 'react';
import { Link } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import CourseItem from '../Courses/CourseItem';

const TopCourses = () => {
    const [courses, setCourses] = useCourses();
    return (
        <section className='container'>
            <div className='my-4 align-items-center'>
                <h1 className='fw-bolder text-center'>Pop<span className='border-bottom border-3'>ular Cour</span>ses</h1>
                <div className="container px-5 py-5 rounded-10 bg-light-pro">
                    <div className="row g-4">
                        {
                            courses.slice(0, 3).map(course => <CourseItem
                                key={course.id}
                                course={course}
                            ></CourseItem>)
                        }
                    </div>
                </div>
                <p className='text-center mb-5 pb-5'>
                    <Link className='btn btn-outline-dark rounded-3 shadow' to='/courses'>View All Courses <i className="ps-1 fas fa-angle-double-right"></i></Link>
                </p>
            </div>
        </section>
    );
};

export default TopCourses;