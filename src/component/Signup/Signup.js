import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../../media/google.svg";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";



const Signup = () => {
    let provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate("/");
            }).catch((error) => {
                const errorMessage = error.message;

            });
    }

    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
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
                <h2 className="text-center">Create A Free Account</h2>
                <form onSubmit={handleSignup}>
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
                    <div className='mb-4'>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <div className=''>
                            <input className="form-control"
                                type='password'
                                name='confirmPassword'
                                id='confirmPassword'
                            />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-dark d-block w-100'>
                        Sign Up
                    </button>
                </form>
                <p className='mt-2'>
                    Already have an account?
                    <Link to="/signin" > Sign in</Link>
                </p>
                <div className='row justify-content-between align-items-center '>
                    <hr className="col-5" />
                    <p className="col-1">or</p>
                    <hr className="col-5" />
                </div>
                <div className=''>
                    <button onClick={googleAuth} className='px-5 mb-3 btn btn-outline-dark d-flex justify-content-center align-items-center w-100'
                    >
                        <img className="d-block" src={GoogleLogo} alt='' />
                        <p className="mt-3 fs-5 ms-3"> Google Sign Up </p>
                    </button>
                    <small className="text-secondary">By clicking Sign up, I agree to hashtag's Terms and Privacy Policy</small>
                </div>
            </div>
        </div>
    );
};

export default Signup;