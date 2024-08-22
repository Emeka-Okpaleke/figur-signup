const Button = ({ children, onClick, color }) => {
    const getColor = (colorPalette) => {
      return colorPalette === "primary" 
        ? "#2260FF" 
        : colorPalette === "secondary" 
        ? "#032B69" 
        : "";
    };
  
    const buttonColor = getColor(color);
  
    return (
      <button
        className="loginSubmit"
        type="button" 
        onClick={onClick}
        style={{ backgroundColor: buttonColor }}
      >
        {children}
      </button>
    );
};
  
export default Button;