import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/ContextProvider";
import "../CSS/admin.css";
const Admin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { setToken } = useContext(Context);
  const navigate = useNavigate();
  //setData of input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  //checking logindata of input to Mongo database using POST request
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://agreeable-duck-dirndl.cyclic.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    const data = await res.json();
    if (res.status == 404 || !data) {
      alert("Error Occured!");
    } else {
      setToken(data.token);
      alert("LogIn Success");
      navigate("/dashboard");
    }
  };

  return (
    <div id="admin">
      <form action="" onSubmit={handleSubmit}>
        <h1>LogIn</h1>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={input.email}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={input.password}
        />

        <input
          style={{ width: "30%", border: "2px solid green" }}
          type="submit"
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default Admin;

// (which will have a login dashboard to view
//data submitted from the contact us form)
