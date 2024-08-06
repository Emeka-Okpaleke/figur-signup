import Button from "./button";
import InputEmail from "./inputText";
const Login = ({loginLink}) => {
    return ( 
        <div className="login-box">
                        <div className="head-container">
                            <p>Let's start</p>
                            <h2>We'll make this fast & simple</h2>
                        </div>
                        <form>
                            <div className="email text-input">
                                <label htmlFor="email"></label>
                                {/* <input type="email" id="email" placeholder="Email" required /> */}
                                <InputEmail/>
                            </div>
                            <div className="submit-div" style={{ display: "flex", justifyContent: "center" }}>
                                <Button link = {loginLink}>Login</Button>
                            </div>
                            <div className="link">
                                <a href="/">I already have an account</a>
                            </div>
                        </form>
                    </div>
     );
}
 
export default Login;