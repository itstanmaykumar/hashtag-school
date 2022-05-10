import React from 'react';
import Banner from './Banner';
import Query from './Query';
import TopCourses from './TopCourses';
import Whyus from './Whyus';

const Home = () => {
    return (
        <main className='container'>
            <Banner></Banner>
            <TopCourses></TopCourses>
            <Whyus></Whyus>
            <Query></Query>
        </main>
    );
};

export default Home;