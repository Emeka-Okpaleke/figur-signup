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
                    <div className="email">
                        <label htmlFor="email"></label>
                        <input type="email" id="email" placeholder="Email" required />
                    </div>

                    <button className = "loginSubmit" type="submit">Continue</button>
                    <div className="link">
                        <a href="/">I already have an account</a>
                    </div>
                </form>

            </div>
        </div>
    );
}
 
export default Signup;