import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Otp from './Otp';
import PersonalDetails from './PersonalDetail';
import Login from './login';

const Signup = () => {
    const [action, setAction] = useState('');

    const loginLink = (e) => {
        e.preventDefault();
        setAction('step2');
    };

    const OtpLink = (e) => {
        e.preventDefault();
        setAction('step3');
    };

    const personalLink = (e) => {
        e.preventDefault();
        setAction('');
    };

    return ( 
        <div className="container">
            <div className="login-container bg-white flex justify-center 2xl:justify-start items-center">
                {action === '' && <Login loginLink={loginLink} />}
                {action === 'step2' && <Otp OtpLink={OtpLink} />} 
                {action === 'step3' && <PersonalDetails personalLink={personalLink} />} 
            </div>
        </div>
    );
};

export default Signup;
