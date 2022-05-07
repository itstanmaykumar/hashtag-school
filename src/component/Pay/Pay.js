import React from 'react';
import pay from '../../media/pay.svg';

const Pay = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Complete Your Payment</h1>
            <div className='row justify-content-between align-items-center p-5'>
                <div className='col-lg-6 p-5'>
                    <img className='w-100' src={pay}></img>
                </div>
                <div className='col-lg-6 p-5 rounded-20 shadow'>
                    <h5 className='mt-3'>Enter You Card Information</h5>
                    <div className="mb-3 mt-5">
                        <label for="cardId" className="form-label">Your Card Number</label>
                        <input type="text" className="form-control" id="cardId" />
                    </div>
                    <div className="mb-3">
                        <label for="cardPass" className="form-label">Your Password</label>
                        <input type="password" className="form-control" id="cardPass" />
                    </div>
                    <div className="mb-4 pb-1">
                        <label for="veriCode" className="form-label">Verification Code</label>
                        <input type="number" className="form-control" id="veriCode" />
                    </div>
                    <span className='btn btn-dark d-inline-block'>Submit Info</span>
                </div>
            </div>
        </div>
    );
};

export default Pay;