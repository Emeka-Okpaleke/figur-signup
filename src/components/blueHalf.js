import figur from "../assets/images/figurWhite.png"
import blur from "../assets/images/Group 1588.png"



const BlueHalf = () => {
    return ( 
        <div className="blueSection" style={{background: "#2260FF", height: "100%", position:"relative"}}>
            <div className="blueContainer">
                <div className="figurIcon">
                    <img src= {figur} alt="" />
                </div>
                <div className="blueHeaderText">
                    <h2>More than a digital payment</h2>
                </div>
                <div className="blueParagraph">
                    <p>Experience seamless accessibilty to pay bills, open personal & business bank accounts, track revenue & more on one platform.</p>
                </div>
                <div className="blur" >
                    <img src={blur} alt="" style={{position:"absolute", bottom:"-150px", left:"-100px"}}/>
                </div>
            </div>

        </div>
     );
}
 
export default BlueHalf;