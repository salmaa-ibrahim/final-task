import "./cartPage.css"
import HeaderImage from "/images/Untitled design/page.png";
import basket from "/images/share/basket.svg"
import { useState } from "react";
function CartPage() {
    const [arrayOfProducts, setArrayOfProducts] = useState([
        {
            id: 1,
            productImg: "/images/Untitled design/3.png",
            productName: "t-shirt",
            amount: "4",
            price: "200$"
        },
        {
            id: 2,
            productImg: "/images/Untitled design/2.png",
            productName: "pants",
            amount: "2",
            price: "120$"
        },
    ])


    function deletePost(event) {
        console.log(event.target.id)
        const newArrayAfterDelete = arrayOfProducts.filter((item) => {
            return item.id != event.target.id
        })

        setArrayOfProducts(newArrayAfterDelete)
    }

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
                    {arrayOfProducts.map((item) => {
                        return (
                            <>
                                <tr id="responsive"  key={item.id} >
                                    <td className="imageCell"> <img src={item.productImg} alt="" /></td>
                                    <td className="color">{item.productName}</td>
                                    <td className="color">{item.price}$</td>
                                    <td className="quantity">{item.amount}</td>
                                    <td>{item.price}</td>
                                    <td className="basket"><img src={basket} id={item.id} onClick={deletePost} /></td>
                                </tr>
                            </>
                        )
                    })}
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