import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Mainpage from "./components/Mainpage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ProductDetails from "./components/ProductDetails";
import AboutPage from "./components/AboutPage";
import SearchPage from "./components/SearchPage";
import Category from "./components/Category";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";

function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
      <CartProvider>
      <Routes>
      <Route path="/" element={<Mainpage/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/register" element={<SignupPage/>}></Route>
      <Route path="/search/:query" element={<SearchPage/>}></Route>
      <Route path="/view/:plantid" element={<ProductDetails/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/categories" element={<Category/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </CartProvider>  
      </BrowserRouter>

    </div>
  );
}

export default App;
