import Button from './button';
import InputEmail from './inputText';
import './otp.css';
const Otp = ({ OtpLink }) => {
    return ( 
        <div className="OtpContainer step2">   
            <div className="login-container">
                <div className="login-box">
                    <div className="head-container">
                        <p>OTP verification</p>
                        <h2>A verification code has been sent to</h2>
                    </div>
                    <form>
                        <div className="email text-input">
                            <InputEmail/>
                            <label style={{ whiteSpace: 'nowrap' }}>Enter Verification Code</label>
                        </div>
                        <div className="link"><a href="/">Forgot Password</a></div>
                        <div className="submit-div" style={{ display: "flex", justifyContent: "center" }}>
                            <Button link={OtpLink}>Continue</Button>
                        </div>
                        <div className="link">
                            <a href="/">Resend OTP</a>
                        </div>
                    </form>
                    <div className="p-name">
                        <p>I already have an account</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;
