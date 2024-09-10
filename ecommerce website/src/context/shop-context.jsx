import { createContext, useState} from 'react'
import {PRODUCTS} from "../../src/products"
export const ShopContext = createContext(null);

const getDefultCart = () =>{
    let cart = {}
    for (let i=1 ; i < PRODUCTS.length + 1 ; i++){
        cart[i] = 0
    }
    return cart
}



export const ShopContextProvider = (prop) => {
    const [cartItems , setCartItems] = useState(getDefultCart());

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = {cartItems, addToCart , removeFromCart}

    return (<ShopContext.Provider value={contextValue}>{prop.children}</ShopContext.Provider>
    )
}
