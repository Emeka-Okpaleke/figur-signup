import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Signup = () => {
    return ( 
        <div className="login-container">
            <div className="login-box">
                <div className="head-container">
                    <p>Let's start</p>
                    <h2>We'll make this fast & simple</h2>
                </div>
                <form>
                    <div className="email text-input">
                        <label htmlFor="email"></label>
                        <input type="email" id="email" placeholder="Email" required />
                    </div>

                    <div className="submit-div" style={{display:"flex", justifyContent: "center"}}>
                        <button className = "loginSubmit" type="submit">Login</button>
                    </div>
                    <div className="link">
                        <a href="/">I already have an account</a>
                    </div>
                </form>

            </div>
        </div>
    );
}
 
export default Signup;