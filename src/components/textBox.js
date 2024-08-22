import InputEmail from "./inputText";
const TextBox = ({children, color}) => {
    const getColor = (colorPalette) => {
        return colorPalette === "primary" 
          ? "#2260FF" 
          : colorPalette === "secondary" 
          ? "#032B69" 
          : "";
      };
      const buttonColor = getColor(color);


    return ( 
    <div className="email text-input">
        <div className="relative w-full">
            <InputEmail/>
            <label style={{color : buttonColor}} for="text" className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all p-1 peer-focus:bg-white">{children}</label>
        </div>
    </div>
     );
}
 
export default TextBox;