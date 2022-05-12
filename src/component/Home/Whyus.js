import React from 'react';
import ex1 from '../../media/age.png';
import ex2 from '../../media/medal.png';
import ex3 from '../../media/fuu.png';

const Whyus = () => {
    return (
        <section className='p-5'>
            <h1 className='px-5 my-3 text-center'>Why Choose Us?</h1>
            <h4 className='col-md-8 mx-auto text-center'>Join over 11 million people learning on <span className='fw-bolder'>hashtag</span></h4>
            <div className='row g-4 justify-content-between align-items-center text-center pb-5'>
                <div className='col-lg-4 col-md-6 p-5 row justify-content-center'>
                    <img src={ex1} className='d-block w-75 px-5 mx-auto'></img>
                    <h5 className='fw-bolder mt-3'>For Ages 15 to 99</h5>
                    <small>Get started as a beginner with the fundamentals, or dive right into intermediate and advanced courses for professionals. Brilliant has courses for ambitious people of all ages.</small>
                </div>
                <div className='col-lg-4 col-md-6 p-5 row justify-content-center'>
                    <img src={ex2} className='d-block w-75 px-5 mx-auto' width="150"></img>
                    <h5 className='fw-bolder mt-3'>Master Essential Skills</h5>
                    <small>Build confidence with hands-on learning. You'll get to see concepts visually, interact with key ideas, and solve challenging problems that get you to really think.</small>
                </div>
                <div className='col-lg-4 col-md-6 p-5 row justify-content-center'>
                    <img src={ex3} className='d-block w-75 px-5 mx-auto' width="150"></img>
                    <h5 className='fw-bolder mt-3'>Stress Less, Learn Better</h5>
                    <small>Enjoy fun storytelling, guided problem solving, and making lots of mistakes while playing. On Brilliant, your natural curiosity will drive you, not the threat of a test.</small>
                </div>
            </div>
        </section>
    );
};

export default Whyus;