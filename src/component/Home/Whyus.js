import React from 'react';
import ex1 from '../../media/ex1.png';
import ex2 from '../../media/ex2.png';
import ex3 from '../../media/ex3.png';

const Whyus = () => {
    return (
        <section className='px-5'>
            <h1 className='px-5 my-3 text-center'>Why Choose Us?</h1>
            <h4 className='col-md-8 mx-auto text-center'>Join over 11 million people learning on <span className='fw-bolder'>hashtag</span></h4>
            <div className='row justify-content-between align-items-center my-4'>
                <div className='col-lg-4 col-md-6 p-5'>
                    <img src={ex1} className='d-block mb-3' height="150"></img>
                    <h4>For ages 15 to 99</h4>
                    <p>Get started as a beginner with the fundamentals, or dive right into intermediate and advanced courses for professionals. Brilliant has courses for ambitious people of all ages.</p>
                </div>
                <div className='col-lg-4 col-md-6 p-5'>
                    <img src={ex2} className='d-block mb-3' height="150"></img>
                    <h4>Master essential skills</h4>
                    <p>Build confidence with hands-on learning. You'll get to see concepts visually, interact with key ideas, and solve challenging problems that get you to really think.</p>
                </div>
                <div className='col-lg-4 col-md-6 p-5'>
                    <img src={ex3} className='d-block mb-3' height="150"></img>
                    <h4>Stress less, learn better</h4>
                    <p>Enjoy fun storytelling, guided problem solving, and making lots of mistakes while playing. On Brilliant, your natural curiosity will drive you, not the threat of a test.</p>
                </div>
            </div>
        </section>
    );
};

export default Whyus;