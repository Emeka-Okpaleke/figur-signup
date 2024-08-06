const Button = ({children, link}) => {
    return ( 
        <button className="loginSubmit" type="submit" onClick={link}>{children}</button>
     );
}
export default Button;