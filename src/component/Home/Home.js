import React from 'react';
import useCourses from '../../hooks/useCourses';
import ex1 from '../../media/ex1.png';
import ex2 from '../../media/ex2.png';
import ex3 from '../../media/ex3.png';
import CourseItem from '../Courses/CourseItem';
import Banner from './Banner';
import TopCourses from './TopCourses';

const Home = () => {
    return (
        <main className='container'>
            <Banner></Banner>
            <TopCourses></TopCourses>
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