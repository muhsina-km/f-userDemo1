import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Mainpage from "./components/Mainpage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ProductDetails from "./components/ProductDetails";
import AboutPage from "./components/AboutPage";
import SearchPage from "./components/SearchPage";
import Category from "./components/Category";
import ViewCart from "./components/ViewCart";
import { useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Mainpage/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/cart" element={<ViewCart/>}></Route>
      <Route path="/login" element={<LoginPage onLogin={(userData) => setUser(userData)}/>}></Route>
      <Route path="/register" element={<SignupPage/>}></Route>
      <Route path="/search/:query" element={<SearchPage/>}></Route>
      <Route path="/view/:plantid" element={<ProductDetails/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/categories" element={<Category/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
