import { Route, Routes } from "react-router-dom";

import About from "./Components/About";
import Admin from "./Components/Admin";
import ContactUs from "./Components/ContactUs";
import Dashbord from "./Components/Dashboard";
import Edit from "./Components/Edit";
import { Footer } from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: "80px" }}>
        <Navbar />
      </div>
      <div style={{ margin: "20px", marginTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/dashboard" element={<Dashbord />}></Route>
          <Route path="/edit/:id" element={<Edit/>}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
