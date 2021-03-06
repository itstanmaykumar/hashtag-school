import React from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pay from '../../media/pay.svg';

const Pay = () => {
    const handlePay = (e) => {
        e.preventDefault();
        const resolveTime = new Promise(resolve => setTimeout(resolve, 2000));
        toast.promise(
            resolveTime,
            {
                pending: 'Please wait...',
                success: "Payment Successfull!",
                error: 'Something Went Wrong!'
            }
        )
    }
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Complete Your Payment</h1>
            <div className='row justify-content-between align-items-center p-5'>
                <div className='col-lg-6 p-5'>
                    <img className='w-100' src={pay}></img>
                </div>
                <form onSubmit={handlePay} className='col-lg-6 p-5 rounded-20 shadow'>
                    <h5 className='mt-3'>Select Your Course</h5>
                    <div className="my-3">
                        <label htmlFor="inputState" className="form-label">Your Desired Course</label>
                        <select id="inputState" className="form-select">
                            <option>Full Stack Development</option>
                            <option>Machine Learning</option>
                            <option>Mobile App Development</option>
                        </select>
                    </div>
                    <h5 className='mt-5'>Enter You Card Information</h5>
                    <div className="my-3">
                        <label htmlFor="cardId" className="form-label">Your Card Number</label>
                        <input type="text" className="form-control" id="cardId" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cardPass" className="form-label">Your Password</label>
                        <input type="password" className="form-control" id="cardPass" required />
                    </div>
                    <div className="mb-4 pb-1">
                        <label htmlFor="veriCode" className="form-label">Verification Code</label>
                        <input type="number" className="form-control" id="veriCode" required />
                    </div>
                    <button type='submit' className='btn btn-dark d-inline-block'>Proceed Checkout</button>
                </form>
            </div>
        </div>
    );
};

export default Pay;