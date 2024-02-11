import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Mainpage from "./components/Mainpage";


function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Mainpage/>}></Route>
        
      </Routes>
      </BrowserRouter>

      {/* <Mainpage/> */}
     

    </div>
  );
}

export default App;
