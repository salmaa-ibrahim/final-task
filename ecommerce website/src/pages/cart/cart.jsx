import "./cart.css";
import image from "/images/Untitled design/2.png";
import closeImg from "/images/Untitled design/close.svg";
import { Link } from "react-router-dom";
import CartImg from "/images/Vector.png";
import exitImage from "/images/share/Group.svg";
import { useState } from "react";

function Cart() {
    const [active, setActive] = useState(true);
    function closeItem() {
        setActive(true);
    }
    function openItem() {
        setActive(false);
    }


    const [deleteproduct , setDeleteproduct] = useState(false);
    function deleteItem() {
        setDeleteproduct(true);
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
                    <div id="cartListItems">
                        <img className="imageInCart" src={image} alt="" />
                        <div className="amount">
                            <h6>product Name</h6>
                            <span>
                                1 x <p>34$</p>
                            </span>
                        </div>
                        <div className="closee">
                            <img src={closeImg} alt="" />
                        </div>
                    </div>

                    <div id="cartListItems" className={deleteproduct ? "delete" : "keep"}>
                        <img className="imageInCart" src={image} alt=""  onClick={deleteItem}/>
                        <div className="amount">
                            <h6>product uuuu uu uuuuuuu Name</h6>
                            <span>
                                1 x <p>34$</p>
                            </span>
                        </div>
                        <div className="closee">
                            <img src={closeImg} alt="" />
                        </div>
                    </div>
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <h6>300$</h6>
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
