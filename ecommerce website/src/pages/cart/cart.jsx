import "./cart.css";
// import image from "/images/Untitled design/2.png";
import closeImg from "/images/Untitled design/close.svg";
import { Link } from "react-router-dom";
import CartImg from "/images/Vector.png";
import exitImage from "/images/share/Group.svg";
import { useState} from "react";

function Cart() {
    const [active, setActive] = useState(true);
    function closeItem() {
        setActive(true);
    }
    function openItem() {
        setActive(false);
    }
    const [arrayOfProducts, setArrayOfProducts] = useState([
        {
            id: 1,
            productImg: "/images/Untitled design/3.png",
            productName: "t-shirt",
            amount: "4",
            price: "200$",
        },
        {
            id: 2,
            productImg: "/images/Untitled design/2.png",
            productName: "pants",
            amount: "2",
            price: "120$",
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
        <>
            <div className="cartIcon">
                <img src={CartImg} alt="#" onClick={openItem} />
            </div>
            <div id="cartList" className={active ? "close" : "open"}>
                <div className="cartListContent">
                    <div className="cartHeader">
                        <h1>Shopping Cart</h1>
                        <img src={exitImage} alt="#" onClick={closeItem} />
                    </div>
                    <div id="dash"></div>
                    {arrayOfProducts.map((item) => {
                        return (
                            <>
                                <div id="cartListItems" key={item.id}>
                                    <img className="imageInCart" src={item.productImg} alt="" />
                                    <div className="amount">
                                        <h6>{item.productName}</h6>
                                        <span>
                                            {item.amount} x <p>{item.price}</p>
                                        </span>
                                    </div>
                                    <div className="closee">
                                        <img src={closeImg} alt="" id={item.id} onClick={deletePost} />
                                    </div>
                                </div>
                            </>
                        )
                    })}
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <h6 >200$</h6>
                    </div>
                    <div className="dash"></div>
                    <Link to={"/cart"}>
                        <button onClick={closeItem}>Cart</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Cart;
