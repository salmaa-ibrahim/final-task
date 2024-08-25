import "./feature.css"
import Img1 from "/images/trophy 1.svg"
import Img2 from "/images/Vector.svg"
import Img3 from "/images/guarantee.svg"
import Img4 from "/images/customer-support.svg"
function Feature(){
    return(
        <>
        <div className="features">
                <div className="feature">
                    <div className="featureImg">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="featureName">
                        <p>High Quality</p>
                        <span>crafted from top materials</span>
                    </div>
                </div>

                <div className="feature">
                    <div className="featureImg">
                        <img src={Img3} alt="" />
                    </div>
                    <div className="featureName">
                        <p>Warranty Protection</p>
                        <span>over 2  years</span>
                    </div>
                </div>

                <div className="feature">
                    <div className="featureImg">
                        <img src={Img2} alt="" />
                    </div>
                    <div className="featureName">
                        <p>free Shipping</p>
                        <span>order over 150$</span>
                    </div>
                </div>

                <div className="feature four">
                    <div className="featureImg">
                        <img src={Img4} alt="" />
                    </div>
                    <div className="featureName">
                        <p>24 / 7 Support</p>
                        <span>Dedicated support</span>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Feature