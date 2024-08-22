// const Button = ({ children, onClick, color }) => {
//     const getColor = (colorPalette) => {
//       return colorPalette === "primary" 
//         ? "#2260FF" 
//         : colorPalette === "secondary" 
//         ? "#032B69" 
//         : "";
//     };
  
//     const buttonColor = getColor(color);
  
//     return (
//       <button
//         className="loginSubmit"
//         type="submit"
//         onClick={onClick}
//         style={{ backgroundColor: buttonColor}}
//       >
//         {children}
//       </button>
//     );
//   };
  
//   export default Button;

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
        type="button" // Change this to "button" to prevent form submission
        onClick={onClick}
        style={{ backgroundColor: buttonColor }}
      >
        {children}
      </button>
    );
};
  
export default Button;