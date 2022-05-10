import React from 'react';
import { Link } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import heroImg from '../../media/heroImg.svg';
import ex1 from '../../media/ex1.png';
import ex2 from '../../media/ex2.png';
import ex3 from '../../media/ex3.png';
import CourseItem from '../Courses/CourseItem';

const Home = () => {
    const [courses, setCourses] = useCourses();

    return (
        <main className='container'>
            <section className='row justify-content-between align-items-center'>
                <div className='order-md-2 col-md-6 my-4'>
                    <img className='w-100' src={heroImg}></img>
                </div>
                <div className='order-md-1 col-md-5 my-4'>
                    <p>Learn with fun...</p>
                    <h1 className='fw-bolder'>Improve Your Professional Skill</h1>
                    <h2 className='fw-bolder'>Interactively...</h2>
                    <small className='d-block mt-3 mb-4'>Find the right instructor for you. Choose from many topics, skill levels, and languages. Shop thousands of high-quality on-demand online courses. Start learning today.</small>
                    <Link className='btn btn-dark shadow' to='/courses'>Get Started</Link>
                </div>
            </section>
            <section id="service">
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
            <section className='px-5'>
                <h1 className='px-5 my-5 text-center'>Join over 11 million people learning on <span className='fw-bolder'>hashtag</span></h1>
                <div className='row justify-content-between align-items-center my-4'>
                    <div className='col-lg-4 p-5'>
                        <img src={ex1} className='d-block mb-3' height="150"></img>
                        <h3>For ages 10 to 110</h3>
                        <p>Get started as a beginner with the fundamentals, or dive right into intermediate and advanced courses for professionals. Brilliant has courses for ambitious people of all ages.</p>
                    </div>
                    <div className='col-lg-4 p-5'>
                        <img src={ex2} className='d-block mb-3' height="150"></img>
                        <h3>Master essential skills</h3>
                        <p>Build confidence with hands-on learning. You'll get to see concepts visually, interact with key ideas, and solve challenging problems that get you to really think.</p>
                    </div>
                    <div className='col-lg-4 p-5'>
                        <img src={ex3} className='d-block mb-3' height="150"></img>
                        <h3>Stress less, learn better</h3>
                        <p>Enjoy fun storytelling, guided problem solving, and making lots of mistakes while playing. On Brilliant, your natural curiosity will drive you, not the threat of a test.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;