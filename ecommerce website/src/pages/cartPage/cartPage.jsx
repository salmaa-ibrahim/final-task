import "./cartPage.css"
import HeaderImage from "/images/Untitled design/page.png";
import imageee from "../../../public/images/Untitled design/3.png"
import basket from "../../../public/images/share/basket.svg"
import { useState } from "react";
function CartPage() {

    const [active, setActive] = useState(false);
    function closeItem() {
        setActive(true);
    }
    // function openItem() {
    //     setActive(false);
    // }
    return (
        <div className="cartPage">
            <div className="Header">
                <img src={HeaderImage} alt="#" />
                <div className="center">
                    <h1>Cart</h1>
                    <p>
                        Home &gt; <span>Cart</span>
                    </p>
                </div>
            </div>
            <div className="cartPageContent">
                <table className="market">
                    <tr>
                        <th className="disapeIconeInTable">image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th className="disapeIconeInTable">icone</th>
                    </tr>
                    <tr id="responsive" className={active ? "delete" : "keep"}>
                        <td className="imageCell"> <img src={imageee} alt="" /></td>
                        <td className="color">productName</td>
                        <td className="color">200$</td>
                        <td className="quantity">3</td>
                        <td>200$</td>
                        <td className="basket"><img src={basket} onClick={closeItem}/></td>
                    </tr>

                    <tr id="responsive" >
                        <td className="imageCell"> <img src={imageee} alt="" /></td>
                        <td className="color">productName</td>
                        <td className="color">200$</td>
                        <td className="quantity">3</td>
                        <td>200$</td>
                        <td className="basket"><img src={basket} /></td>
                    </tr>

                    {/* <tr className="responsive">
                        <td className="imageCell"> <img src={imageee} alt="" /></td>
                        <td className="color">productName</td>
                        <td className="color">200$</td>
                        <td className="quantity">3</td>
                        <td>200$</td>
                        <td className="basket"><img src={basket} /></td>
                    </tr> */}
                </table>
                <div className="cartTotal">
                    <h1>Cart Total</h1>
                    <div className="CartTotalPrice">
                        <div className="smallTotalDiv">
                            <p>Subtotal </p>
                            <label>230$</label>
                        </div>
                        <div className="smallTotalDiv">
                            <p>Total </p>
                            <span>230$</span>
                        </div>
                    </div>
                    <button>Chech Out</button>
                </div>
            </div>
        </div>
    )
}

export default CartPage