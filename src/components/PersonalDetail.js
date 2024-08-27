import Button from "./button";
import InputPassword from "./inputPassword";
import InputEmail from "./inputText";
import TextBox from "./textBox";
const PersonalDetails = ({ personalLink }) => {
    return ( 
        <div className="container step3">
            <div className="login-container">
                <div className="login-box">
                    <div className="head-container">
                        <p>Let's start</p>
                        <h2 className="font-semibold">Tell us about you</h2>
                    </div>
                    <div className="bg-gray-300 rounded-[10px] w-fit ">
                        <span className="p-[10px]">Please use your legal <b>First Name</b> and <b>Last Name</b></span>
                    </div>
                    <form>
                        <div className="flex justify-between">
                            <TextBox color={"secondary"}>
                                First Name
                            </TextBox>
                            
                            <TextBox color={"secondary"}>
                                Last Name
                            </TextBox>
                        </div>

                        <TextBox color={"secondary"}>
                            Phone
                        </TextBox>

                        <TextBox color={"secondary"}>
                            Password
                        </TextBox>

                        <TextBox color={"secondary"}>
                        Referrer's number
                        </TextBox>

                        <small>By clicking sign up, you agree to our <a href="/" style={{ font: 'semibold' }}>Terms</a> and <a href="/" style={{ font: "semibold" }}>Policies</a></small>

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

// import Button from "./button";
// import InputPassword from "./inputPassword";
// import InputEmail from "./inputText";

// const PersonalDetails = ({ personalLink }) => {
//     return ( 
//         <div className="container step3">
//             <div className="flex flex-col items-center justify-center h-screen">
//                 <div className="max-w-lg w-full flex flex-col py-10">
//                     <div className="text-[#032B69]">
//                         <p className="m-0">Let's start</p>
//                         <h2 className="font-bold">Tell us about you</h2>
//                     </div>
//                     <div className="text-center mb-4">
//                         <span className="text-sm">
//                             Please use your legal <b>First Name</b> and <b>Last Name</b>
//                         </span>
//                     </div>
//                     <form className="flex flex-col gap-5">
//                         <div className="relative flex flex-col gap-4">
//                             <div className="relative">
//                                 <InputEmail />
//                                 <label className="absolute p-2">First Name</label>
//                             </div>
//                             <div className="relative">
//                                 <InputEmail />
//                                 <label className="absolute p-2">Last Name</label>
//                             </div>
//                             <div className="relative">
//                                 <InputEmail />
//                                 <label className="absolute p-2">Phone</label>
//                             </div>
//                             <div className="relative">
//                                 <InputPassword />
//                                 <label className="absolute p-2">Password</label>
//                             </div>
//                             <div className="relative">
//                                 <InputEmail />
//                                 <label className="absolute p-2">Referrer's number</label>
//                             </div>
//                         </div>
//                         <small className="text-xs mb-4">
//                             By clicking sign up, you agree to our 
//                             <a href="/" className="font-semibold"> Terms</a> and 
//                             <a href="/" className="font-semibold"> Policies</a>
//                         </small>
//                         <div className="flex justify-center mb-4">
//                             <Button>Sign up</Button>
//                         </div>
//                         <div className="flex justify-center mb-4">
//                             <Button link={personalLink}>Login</Button>
//                         </div>
//                         <div className="text-center">
//                             <a href="/" className="text-[#032B69] no-underline font-semibold">I already have an account</a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PersonalDetails;

