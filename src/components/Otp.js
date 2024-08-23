// import Button from './button';
// import InputEmail from './inputText';
// import './otp.css';

// const Otp = ({ OtpLink }) => {
//     return ( 
//         <div className="OtpContainer step2">   
//             <div className="login-container">
//                 <div className="login-box">
//                     <div className="head-container">
//                         <p>OTP verification</p>
//                         <h2>A verification code has been sent to</h2>
//                     </div>
//                     <form>
//                         <div className="email text-input">
//                             <InputEmail/>
//                             <label style={{ whiteSpace: 'nowrap' }}>Enter Verification Code</label>
//                         </div>
//                         <div className="link"><a href="/">Forgot Password</a></div>
//                         <div className="submit-div" style={{ display: "flex", justifyContent: "center" }}>
//                             {/* The Button calls the OtpLink function when clicked */}
//                             <Button onClick={OtpLink} color={"primary"}>Continue</Button>
//                         </div>
//                         <div className="link">
//                             <a href="/">Resend OTP</a>
//                         </div>
//                     </form>
//                     <div className="p-name">
//                         <p>I already have an account</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Otp;

import Button from './button';
import InputEmail from './inputText';
import TextBox from './textBox';

const Otp = ({ OtpLink }) => {
    return ( 
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-lg p-6 rounded-lg">
                <div className="text-center mb-6">
                    <p className="text-lg font-medium text-gray-800">OTP verification</p>
                    <h2 className="text-xl font-bold text-gray-900">A verification code has been sent to</h2>
                </div>
                <form className="space-y-6">
                     <TextBox color={"secondary"}>
                        Enter Verification Code
                    </TextBox>
                    <div className="text-center">
                        <a href="/" className="text-blue-600 font-semibold">Forgot Password</a>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={OtpLink} color="primary">Continue</Button>
                    </div>
                    <div className="text-center">
                        <a href="/" className="text-blue-600 font-semibold">Resend OTP</a>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <p className="text-gray-700">I already have an account</p>
                </div>
            </div>
        </div>
    );
};

export default Otp;
