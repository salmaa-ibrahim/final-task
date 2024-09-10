import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/layout';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import ContactPage from './pages/contactPage/contactPage';
import ProductPage from './pages/productPage/productPage';
import CartPage from './pages/cartPage/cartPage';
import Electronics from './pages/categories/electronics';
import Jewelery from './pages/categories/jewelery';
import Men from './pages/categories/men';
import Women from './pages/categories/women';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="/shop/electronics"element={<Electronics/>}></Route>
          <Route path="/shop/jewelery"element={<Jewelery/>}></Route>
          <Route path="/shop/mensclothing"element={<Men/>}></Route>
          <Route path="/shop/womensclothing"element={<Women/>}></Route>
          <Route path="contact" element={<ContactPage />} />
          <Route path='cart' element={<CartPage/>}></Route>
          <Route path="/product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
