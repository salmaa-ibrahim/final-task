import "./contactPage.css";
import ShopImg from "/images/Untitled design/background2.png";
import addressImg from "/images/address.svg";
import phoneImg from "/images/bxs_phone.svg";
import timeImg from "/images/bi_clock-fill.svg";
import Form from "../form/form";

function ContactPage() {
    return (
        <div className="contactPage">
            <div className="Header">
                <img src={ShopImg} alt="#" />
                <div className="center">
                    <h1>Contact</h1>
                    <p>
                        Home &gt; <span>Contact</span>
                    </p>
                </div>
            </div>
            <div className="conactContent">
                <div className="contacTop">
                    <h1>Get In Touch With Us</h1>
                    <p>
                        For More Information About Our Product & Services. Please Feel Free
                        To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
                        Not Hesitate!
                    </p>
                </div>
                <div className="contactBottom">
                    <div className="information">
                        <div className="informationBlock">
                            <img src={addressImg} alt="" />
                            <div className="infoText">
                                <h3>Address</h3>
                                <span>236 5th SE Avenue, New York NY10000, United States</span>
                            </div>
                        </div>
                        <div className="informationBlock">
                            <img src={phoneImg} alt="" />
                            <div className="infoText">
                                <h3>Phone</h3>
                                <span>
                                    Mobile: +(84) 546-6789 <br />
                                    Hotline: +(84) 456-6789
                                </span>
                            </div>
                        </div>

                        <div className="informationBlock">
                            <img src={timeImg} alt="" />
                            <div className="infoText">
                                <h3>Working Time</h3>
                                <span>
                                    Monday-Friday: 9:00 - 22:00 <br />
                                    Saturday-Sunday: 9:00 - 21:00
                                </span>
                            </div>
                        </div>
                    </div>
                    <Form></Form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
