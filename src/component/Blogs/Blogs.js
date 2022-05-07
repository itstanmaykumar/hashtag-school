import React from 'react';

const Blogs = () => {
    return (
        <section className='container'>
            <div className="mx-auto px-3 pb-5 mx-3 my-5">
                <h1 className="my-4 p-3 text-center">Explore Our Recent Blogs</h1>
                <article className="p-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">Difference between Authentication and Authorization -</h3>
                    <p>Authentication & Authorization are both used to maintain the safety of the resources of an automated system. Despite the similar-sounding terms, authentication and authorization are very different process with respect to each other. Authentication validates if the users are whom they claim to be. On the other hand, Authorization gives permission to access the resourses of the system. Authentication identifies the user, but authorization identifies the permission of accessibility of that user. Authentication is done before authorization. Authorization works through passwords & credentials, but authentication works through settings maintained by security teams.</p>
                </article>
                <article className="p-5 my-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">What other services does firebase provide other than authentication?</h3>
                    <div>
                        <p>There are many services which Firebase provides, Most useful of them is Authentication. But there are also some useful services that help you to develop high-quality mobile and web applications. Such as -</p>
                        <ul>
                            <li>
                                <h5>Cloud Messaging</h5>
                                <p>Firebase can implement notifications, and it is fast, reliable, and scalable.</p>
                            </li>
                            <li className='my-3'>
                                <h5>Dynamic Links</h5>
                                <p>Firebase can generate deep links which redirect user to your applications.</p>
                            </li>
                            <li className='my-3'>
                                <h5>Predictions</h5>
                                <p>Firebase can help in making predictions about your application decisions with the help of google's AI.</p>
                            </li>
                            <li >
                                <h5>Google Analytics</h5>
                                <p>Firebase can help in growing and managing your application. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.</p>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Blogs;