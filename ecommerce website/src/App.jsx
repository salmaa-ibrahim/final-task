import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/layout';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import ContactPage from './pages/contactPage/contactPage';
import NoPage from './pages/noPage/NoPage ';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
