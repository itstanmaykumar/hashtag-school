import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.init";
import GoogleLogo from "../../media/google.svg";


const Signin = () => {
    let navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate("/");
            }).catch((error) => {
                const errorMessage = error.message;

            });
    }

    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    return (
        <div className='container p-5 pt-0'>
            <div className='col-md-6 mx-auto p-5 shadow m-5 rounded-10 bg-light'>
                <h2 className="text-center">Fill Up to Sign In</h2>
                <form onSubmit={handleSignin}>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='email'>Email</label>
                        <div className=''>
                            <input className="form-control" type='email' name='email'
                                id='email' />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password'>Password</label>
                        <div className=''>
                            <input className="form-control"
                                type='password'
                                name='password'
                                id='password'
                            />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-dark d-block w-100'>
                        Sign In
                    </button>
                </form>
                <p className='mt-2'>
                    New to hashtag?{" "}
                    <Link to="/signup">Create New Account</Link>
                </p>
                <div className='row justify-content-between align-items-center'>
                    <hr className="col-5" />
                    <p className="col-1">or</p>
                    <hr className="col-5" />
                </div>
                <div className=''>
                    <button onClick={googleAuth} className='px-5 btn btn-outline-dark d-flex justify-content-center align-items-center w-100'
                    >
                        <img className="d-block" src={GoogleLogo} alt='' />
                        <p className="mt-3 fs-5 ms-3"> Google Sign In </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signin;