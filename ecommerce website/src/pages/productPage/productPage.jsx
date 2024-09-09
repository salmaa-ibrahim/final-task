import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import "./productPage.css";
// import imagee from "/images/Untitled design/2.png"
import facebook from "/images/share/akar-icons_facebook-fill.svg"
import linkedin from "/images/share/akar-icons_linkedin-box-fill.svg"
import twitter from "/images/share/ant-design_twitter-circle-filled.svg"
import Counter from "../counter/counter";
function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => setProduct(res));
    });
    if (ProductPage) {
    return (
        <div>
            <div className="productPage">
                <div className="product">
                    <div className="productHeader">
                        <p> Home</p>
                        <span> &gt; </span>
                        <p>Shop</p>
                        <span> &gt; </span>
                        <h4>{product.title}</h4>
                    </div>
                    <div className="productDiv">
                        <div className="productImg">
                            <img src={product.image} alt="" />
                        </div>

                        <div className="productDetails">
                            <h1>{product.title}</h1>
                            <p>{product.price}$</p>
                            <div className="stars">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <div className="category">
                                <p>{product.category}</p>
                            </div>
                            <div className="counterAndBtn">
                                <Counter></Counter>
                                <button>Add to cart</button>
                            </div>
                            <div className="line"></div>
                            <div className="additionalInformation">
                                <p> <p className="item">ID</p> : {product.id}</p>
                                <p> <p className="item">Category</p> : {product.category}</p>
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
                    <p>{product.description}</p>
                </div>
            </div>


        </div>
    )

}
}
export default ProductPage;
