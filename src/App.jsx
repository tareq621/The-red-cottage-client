import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import Faq from "./Pages/Faq";
import DesignServices from "./Pages/DesignServices";
import BrowseAllDesign from "./Pages/BrowseAllDesign";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/faq" element={<Faq></Faq>}></Route>
        <Route
          path="/designservices"
          element={<DesignServices></DesignServices>}
        ></Route>
        <Route
          path="/browsealldesign"
          element={<BrowseAllDesign></BrowseAllDesign>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
