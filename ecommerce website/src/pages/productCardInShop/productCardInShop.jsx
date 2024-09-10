import "./productCardInShop.css"
import { Link } from "react-router-dom"

import {ShopContext} from "../../context/shop-context"
import { useContext } from "react"
function ProductCard(prop){
    const {addToCart} = useContext(ShopContext)
    return(
        <>
        <div className="productCard">
                    <div className="productImgInShop">
                        <img className="cardImage" src={prop.image} alt="" />
                        <div className="middleButton">
                            <p onClick={()=> addToCart}>Add to cart</p>
                        </div>
                    </div>
                    <Link to={`/product/${prop.id}`}> 
                    <div className="productDetailsInShop">
                        <div className="box">
                            <h1>{prop.title}</h1>
                        </div>
                        <span >{prop.category}</span>
                        <div className="priceInShop">
                            <label>{prop.price} $</label>
                            <p className="priceBefore">30.5 $</p>
                        </div>
                    </div>
                    </Link>
        </div>
        </>
    )
}

export default ProductCard