import Button from "./button";
import InputEmail from "./inputText";
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

// import Button from "./button";
// import InputEmail from "./inputText";

// const Login = ({ loginLink }) => {
//   return (
//     <div className="max-w-lg w-full flex flex-col py-10">
//       <div className="head-container text-[#032B69]">
//         <p>Let's start</p>
//         <h2>We'll make this fast & simple</h2>
//       </div>
//       <form className="pt-10 flex flex-col gap-5">
//         <div className="email flex justify-center">
//           <InputEmail />
//           <label className="p-2">Email</label>
//         </div>
//         <div className="submit-div flex justify-center">
//           <Button onClick={loginLink} color="secondary">Login</Button>
//         </div>
//         <div className="link self-center">
//           <a href="/" className="text-[#032B69] no-underline font-semibold">I already have an account</a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;