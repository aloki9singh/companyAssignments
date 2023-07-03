import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [hamMenu, setHamMenu] = useState(false);
  const handleRoutes = () => {
    setHamMenu(!hamMenu);
  };
  console.log(hamMenu);
  return (
    <div className="h-20  bg-[#0A192F]  border-b border-white flex items-center fixed top-0 left-0 right-0 md:px-10 px-5 justify-between">
      <Link to={"/"} class=" text-[#FFFFFF] text-[20px] f">
        TalentConnect360
      </Link>
      <div className="nav_routes">
        <Link to={"/"}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/candidatesearch">Candidates</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">
          <div>Log In</div>
        </Link>
      </div>
      <div className="hamburger" onClick={handleRoutes}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {hamMenu && (
        <div className=" absolute top-0 left-0 text-white flex flex-col gap-10 w-full bg-[#0A192F] h-screen text-[23px]">
          <div className="flex justify-end p-5 font-extrabold" onClick={()=>setHamMenu(false)}>X</div>
          <Link onClick={()=>setHamMenu(false)} to={"/"}>Home</Link>
          <Link onClick={()=>setHamMenu(false)} to="/about">About</Link>
          <Link onClick={()=>setHamMenu(false)} to="/services">Services</Link>
          <Link onClick={()=>setHamMenu(false)} to="/candidatesearch">Candidates</Link>
          <Link onClick={()=>setHamMenu(false)} to="/contact">Contact</Link>
          <Link onClick={()=>setHamMenu(false)} to="/login">
            <div>Log In</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
