import "./shopPage.css"
// import { Link } from "react-router-dom"
import HeaderImage from "../../../public/images/Untitled design/page.png";
// import ShopImg from "/images/Untitled design/B2.png"
import ProductCard from "../productCardInShop/productCardInShop"
import { useEffect, useState } from 'react'

function ShopPage(){
    const [arrayOfAllProducts , setArrayOfAllProducts] = useState([])

    useEffect(()=>{
        function AllProducts(){
            fetch("https://fakestoreapi.com/products").then(
                (respose)=>{return respose.json()}
            ).then((finalResult)=>{setArrayOfAllProducts(finalResult)})
        }
        AllProducts();
    } ,[])

    return(
        <div className="shopPage">
            <div className="Header">
                <img src={HeaderImage} alt="#" />
                <div className="center">
                    <h1>Shop</h1>
                    <p>Home  &gt; <span>Shop</span></p>
                </div>
            </div>
            <div className="shopContent">
                {arrayOfAllProducts.map((product)=>{
                    return(
                    <>
                    <ProductCard
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price ={product.price}
                    category={product.category}
                    description={product.description}
                    ></ProductCard>
                    </>
                    )
                })}
            </div>
            <div className="shopFooter">
                <button className="pageNumberBtns"> 1 </button>
                <button className="pageNumberBtns"> 2 </button>
                <button className="pageNumberBtns"> 3 </button>
                <button className="pageNumberBtns"> next </button>
            </div>

        </div>
    )
}

export default ShopPage




















