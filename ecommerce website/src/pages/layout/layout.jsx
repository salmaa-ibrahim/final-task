import "./layout.css";
import { Outlet, Link } from "react-router-dom";
import LogoImg from "/images/Meubel House_Logos-05.png"
import CartImg from "/images/Vector.png"
import Feature from "../feature/feature";
import Footer from "../footer/footer";
function Layout() {
    return (
        <>
        <div className="navbar">
            <div className="logo">
                <img src={LogoImg} alt="#" />
                <Link to="/">Furniro</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="cart">
                <img src={CartImg} alt="#" />
            </div>
        </div>
        <Outlet />
        <Feature></Feature>
        <Footer></Footer>

        </>
    );
}

export default Layout;
