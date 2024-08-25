import "./footer.css"
import { Link } from "react-router-dom"
function Footer(){
    return(
        <div className="footer">
            <div className="footerTop">
                <div className="footerLeft">
                    <p>Funiro.</p>
                    <span>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</span>
                </div>
                <div className="footerRight">
                    <div className="columnOneandTwo">
                        <p className="links">Links</p>
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="columnOneandTwo">
                        <p className="links">Payment Options</p>
                        <p>Returns</p>
                        <p>privacy Policy</p>
                    </div>
                    <div className="columnThree columnOneandTwo">
                        <p className="links">Newsletter</p>
                        <div className="subscribeDiv">
                            <input placeholder="Enter Your Email Address" type="text"/>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerLine"></div>
            <div className="footerBotom">
                <p>2023 furino. All rights reverved</p>
            </div>
        </div>
    )
}

export default Footer