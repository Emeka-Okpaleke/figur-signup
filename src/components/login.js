import Button from "./button";
import TextBox from "./textBox";
const Login = ({loginLink}) => {
    return ( 
        <div className="login-box">
                        <div className="head-container">
                            <p>Let's start</p>
                            <h2>We'll make this fast & simple</h2>
                        </div>
                        <form>
                            <TextBox color={"secondary"}>
                                Email
                            </TextBox>
                            <div className="submit-div" style={{ display: "flex", justifyContent: "center" }}>
                            <Button onClick={loginLink} color="secondary">Login</Button>
                            </div>
                            <div className="link">
                                <a href="/">I already have an account</a>
                            </div>
                        </form>
                    </div>
     );
}
 
export default Login;
