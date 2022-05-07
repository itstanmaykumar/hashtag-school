import React from 'react';
import { Link } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import heroImg from '../../media/heroImg.svg';
import CourseItem from '../Courses/CourseItem';

const Home = () => {
    const [courses, setCourses] = useCourses();

    return (
        <main className='container'>
            <section className='row justify-content-between align-items-center'>
                <div className='col-md-5 my-4'>
                    <p>Learn with fun...</p>
                    <h1 className='fw-bolder'>Learn Anything</h1>
                    <h2 className='fw-bolder'>Interactively...</h2>
                    <small>Find the right instructor for you. Choose from many topics, skill levels, and languages. Shop thousands of high-quality on-demand online courses. Start learning today.</small>
                </div>
                <div className='col-md-6 my-4'>
                    <img className='w-100' src={heroImg}></img>
                </div>
            </section>
            <section>
                <div className='my-4 align-items-center'>
                    <h2 className='fw-bolder text-center'>Popular Courses</h2>
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
                        <Link className='btn btn-outline-dark rounded-3 shadow' to='/courses'>View All courses</Link>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;