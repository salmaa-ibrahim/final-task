import "./homepage.css";
import ShopImg from "/images/Rectangle 1.jpg";
import { useEffect, useState } from "react";
// import LogoImg from "/images/Meubel House_Logos-05.png"
import { Link } from "react-router-dom"

function HomePage() {
    
// const arrayofimg=[
//     {
//         image:"/images/electronics.jpeg"
//     },
//     {
//         image:"/images/jewelery.jpg"
//     }
//     ,
//     {
//         image:"/images/men's clothing.jpeg"
//     }
//     ,
//     {
//         image:"/images/women's .jpeg"
//     }
// ]

    const [category, setcategory] = useState([]);

    useEffect(() => {
        function Allcategory() {
            fetch("https://fakestoreapi.com/products/categories")
                .then((respose) => {
                    return respose.json();
                })
                .then((finalResult) => {
                    setcategory(finalResult);
                });
        }
        Allcategory();
    }, []);

    return (
        <div className="homePage">
            <div className="Header">
                <img src={ShopImg} alt="" />
            </div>

            <div className="CategoriesDiv">
                <h1>Categories</h1>
                <div className="Categories">
                    
                            {category.map((category)=>{
                        return(
                            <>
                            <Link to={"/shop"}>
                            <div className="eachCategory">
                                <div className="categoryImg">
                                    <img src="" alt="#" />
                                </div>
                                <p>{category}</p>
                            </div>
                            </Link>
                            </>
                        )
                    })}
                    
                    
                </div>
            </div>
        </div>
    );
}

export default HomePage;
