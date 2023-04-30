import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../Context/ContextProvider";
import "../CSS/contact.css";

const Edit = () => {
  const [input, setInput] = useState({
    image: "",
    heading: "",
    details: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useContext(Context);

  //getdata
  const getData = () => {
    fetch(`https://agreeable-duck-dirndl.cyclic.app/api/home/${id}`)
      .then((res) => res.json())
      .then((res) => setInput(res.data));
  };
  console.log(input);
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
  //setData of input to Mongo database using POST request
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://agreeable-duck-dirndl.cyclic.app/api/home/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      }
    );

    const data = await res.json();
    if ((input.image = "" || input.details == "" || input.heading == "")) {
      alert(" Empty Field!");
    } else if (res.status == 404 || !data) {
      alert("Error Occured!");
    } else {
      alert("Data Updated Successfully");
      navigate("/");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (token == "") {
    navigate("/admin");
  }

  return (
    <div id="contact">
      <form action="" onSubmit={handleSubmit}>
        <h1>Update Post</h1>
        <label htmlFor="image">Image Url</label>
        <input
          onChange={handleChange}
          name="image"
          type="url"
          value={input.image}
        />
        <label htmlFor="heading">Heading</label>
        <input
          onChange={handleChange}
          name="heading"
          type="text"
          value={input.heading}
        />
        <label htmlFor="details">Details</label>

        <textarea
          onChange={handleChange}
          name="details"
          type="text"
          value={input.details}
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Edit;

// In contact us you will be creating a
//form which will store data on the click
//of the submit button in the DB.

// In Navigation there will be
// • Home
// • About
// • Contact Us
// • Admin (which will have a login dashboard to view data submitted from the contact us form)
