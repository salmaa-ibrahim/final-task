import "./homepage.css";
import HomwHeaderImage from "/images/Untitled design/homee.png"
import { Link } from "react-router-dom"


function HomePage() {

    const arrayofcategories = [
        {
            image: "/images/Untitled design/1.png",
            category: "electronics",
            title:"electronics",
            id: 1
        },
        {
            image: "/images/Untitled design/4.png",
            category: "jewelery",
            title:"jewelery",
            id: 2
        }
        ,
        {
            image: "/images/Untitled design/3.png",
            category: "mensclothing",
            title:"men's clothing",
            id: 3
        }
        ,
        {
            image: "/images/Untitled design/2.png",
            category: "womensclothing",
            title:"women's clothing",
            id: 4
        }
    ]

    return (
        <div className="homePage">
            <div className="Header">
                <img src={HomwHeaderImage} alt="" />
            </div>
            <div className="CategoriesDiv" >
                <h1>Categories</h1>
                <div className="Categories">
                    {arrayofcategories.map((item) => {
                        return (
                            <>
                                <Link to={`/shop/${item.category}`}>
                                    <div className="eachCategory" >
                                        <div className="categoryImg">
                                            <img src={item.image} alt="#" />
                                        </div>
                                        <p>{item.title}</p>
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
