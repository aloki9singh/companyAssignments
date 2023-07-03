import { Routes, Route } from "react-router-dom";
import "./App.css";
import CandidateSearch from "./Components/CandidateSearch";
import Home from "./Components/Home";
import LoginComp from "./Components/Login";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="text-center bg-[#0A192F] text-[#CCCCCC]">
      <Navbar />
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<LoginComp/>} path={"/login"} />
        <Route element={<CandidateSearch/>} path={"/candidatesearch"} />
        <Route element={<NotFound/>} path={"*"} />
      </Routes>
 
    </div>
  );
}

export default App;
