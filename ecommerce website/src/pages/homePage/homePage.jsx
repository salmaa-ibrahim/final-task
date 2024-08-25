import "./homepage.css";
import bgImg from "../../../public/images/Untitled design/B2.png"
// import { useEffect, useState } from "react";
// import LogoImg from "/images/Meubel House_Logos-05.png"
import { Link } from "react-router-dom"

function HomePage() {
    
const arrayofimg=[
    {
        image:"/images/Untitled design/1.png",
        title:"electronics",
        id:1
    },
    {
        image:"/images/Untitled design/4.png",
        title:"jewelery",
        id:2
    }
    ,
    {
        image:"/images/Untitled design/3.png",
        title:"men's clothing",
        id:3
    }
    ,
    {
        image:"/images/Untitled design/2.png",
        title:"women's clothing",
        id:4
    }
]

    // const [category, setcategory] = useState([]);

    // useEffect(() => {
    //     function Allcategory() {
    //         fetch("https://fakestoreapi.com/products/categories")
    //             .then((respose) => {
    //                 return respose.json();
    //             })
    //             .then((finalResult) => {
    //                 setcategory(finalResult);
    //             });
    //     }
    //     Allcategory();
    // }, []);

    return (
        <div className="homePage">
            <div className="Header">
                <img src={bgImg} alt="" />
            </div>

            <div className="CategoriesDiv">
                <h1>Categories</h1>
                <div className="Categories">
                    
                            {arrayofimg.map((category)=>{
                        return(
                            <>
                            <Link to={"/shop"}>
                            <div className="eachCategory">
                                <div className="categoryImg">
                                    <img src={category.image} alt="#" />
                                </div>
                                <p>{category.title}</p>
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
