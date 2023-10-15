import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <BrowserRouter>
      <div className="navbar">
        <Navbar />
       </div>
        <div className="main">
          <Routes>
            <Route path="/App" element={<App />} />
          </Routes>

          <div className="title">
        <h1>Budget Control App home page</h1>
      </div> 
        </div>

        
      
      </BrowserRouter>
    </div>
  );
};

export default Home;
