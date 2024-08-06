import Button from "./button";
import InputPassword from "./inputPassword";
import InputEmail from "./inputText";
const PersonalDetails = ({ personalLink }) => {
    return ( 
        <div className="container step3">
            <div className="login-container">
                <div className="login-box">
                    <div className="head-container">
                        <p>Let's start</p>
                        <h2>Tell us about you</h2>
                    </div>
                    <div>
                        <span>Please use your legal <b>First Name</b> and <b>Last Name</b></span>
                    </div>
                    <form>
                        <div className="email text-input">
                        <div className="email text-input">
                            <InputEmail/>
                            <label style={{ whiteSpace: 'nowrap' }}>First Name</label>
                        </div>
                        <div className="email text-input">
                            <InputEmail/>
                            <label style={{ whiteSpace: 'nowrap' }}>Last Name</label>
                        </div>
                        </div>
                        <div className="email text-input">
                            <InputEmail/>
                            <label>Phone</label>
                        </div>
                        <div className="email text-input">
                            <InputPassword/>
                            <label>Password</label>
                        </div>
                        <div className="email text-input">
                            <InputEmail/>
                            <label>Referrer's number</label>
                        </div>
                        <small>By clicking sign up, you agree to our <a href="/" style={{ font: 'semibold' }}>Terms</a> and <a href="/" style={{ font: "semibold" }}>Policies</a></small>
                        <div className="link"><a href="/">Forgot Password</a></div>
                        <div className="submit-div" style={{ display: "flex", justifyContent: "center" }}>
                            <Button>Sign up</Button>
                        </div>
                        <div className="submit-div" style={{ display: "flex", justifyContent: "center" }}>
                            <Button link={personalLink}>Login</Button>
                        </div>
                        <div className="link">
                            <a href="/">I already have an account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;
