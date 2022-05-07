import React from 'react';
import { Link } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import CourseItem from './CourseItem';

const Courses = () => {
    const [courses, setCourses] = useCourses();
    return (
        <main className='container'>
            <section>
                <div className='my-4 align-items-center'>
                    <h2 className='fw-bolder text-center my-3 pt-4'>Learn From Professionals</h2>
                    <p className='container px-5 text-center text-secondary'>Online courses are planned by industry professionals to make sure that you have the knowledge to build scalable solid softwares. You need to pass an online exam for joining this course. After you apply & pay the admission test fee, we will send you the exam schedule.</p>
                    <div className="container px-5 py-5 rounded-10 bg-light-pro">
                        <div className="row g-4">
                            {
                                courses.map(course => <CourseItem
                                    key={course.id}
                                    course={course}
                                ></CourseItem>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Courses;