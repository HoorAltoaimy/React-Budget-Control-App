import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <BrowserRouter>
        {/* <div className="title">
        <h1>Budget Control App</h1>
      </div> */}

        <Navbar />
        <div className="form1">
          <Routes>
            <Route path="/App" element={<App />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Home;
