import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Mainpage from "./components/Mainpage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ProductDetails from "./components/ProductDetails";

function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Mainpage/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/register" element={<SignupPage/>}></Route>
      <Route path="/view/:plantid" element={<ProductDetails/>}></Route>
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;