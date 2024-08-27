// import { useParams } from "react-router-dom"
import "./productPage.css";
import imagee from "/images/Untitled design/2.png"
import facebook from "../../../public/images/share/akar-icons_facebook-fill.svg"
import linkedin from "../../../public/images/share/akar-icons_linkedin-box-fill.svg"
import twitter from "../../../public/images/share/ant-design_twitter-circle-filled.svg"

import Counter from "../counter/counter";
function ProductPage() {
    // const { id } = useParams(); //import from react-router-dom
    return (
        <>
            <div className="productPage">
                <div className="product">
                    <div className="productHeader">
                        <p> Home</p>
                        <span> &gt; </span>
                        <p>Shop</p>
                        <span> &gt; </span>
                        <h4>Name of Product</h4>
                    </div>
                    <div className="productDiv">
                        <div className="productImg">
                            <img src={imagee} alt="" />
                        </div>
                        <div className="productDetails">
                            <h1>Product Name</h1>
                            <p>300$</p>
                            <div className="stars">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <div className="category">
                                <p>Women clothing</p>
                            </div>
                            <div className="counterAndBtn">
                                <Counter></Counter>
                                <button>Add to cart</button>
                            </div>
                            <div className="line"></div>
                            <div className="additionalInformation">
                                <p> <p className="item">ID</p> : 1</p>
                                <p> <p className="item">Category</p> : women</p>
                                <p> <p className="item">Share</p> : 
                                    <img src={facebook} alt="" />
                                    <img src={linkedin} alt="" />
                                    <img src={twitter} alt="" />
                                    </p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="description">
                    <label>Decription</label>
                    <p>
                        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                        portable active stereo speaker takes the unmistakable look and sound
                        of Marshall, unplugs the chords, and takes the show on the road.
                        <br /> <br />
                        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
                        vintage styled engineering. Setting the bar as one of the loudest
                        speakers in its class, the Kilburn is a compact, stout-hearted hero
                        with a well-balanced audio which boasts a clear midrange and
                        extended highs for a sound that is both articulate and pronounced.
                        The analogue knobs allow you to fine tune the controls to your
                        personal preferences while the guitar-influenced leather strap
                        enables easy and stylish travel.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
