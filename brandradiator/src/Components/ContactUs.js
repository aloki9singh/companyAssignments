// In contact us you will be creating a
//form which will store data on the click
//of the submit button in the DB.

// In Navigation there will be
// • Home
// • About
// • Contact Us
// • Admin (which will have a login dashboard to view data submitted from the contact us form)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/contact.css";
const ContactUs = () => {
  const [input, setInput] = useState({
    image: "",
    heading: "",
    details: "",
  });
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
  //setData of input to Mongo database using POST request
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://agreeable-duck-dirndl.cyclic.app/api/home", {
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
      alert("Data Added Successfully");
      navigate("/");
    }
  };

  return (
    <div id="contact">
      <form action="" onSubmit={handleSubmit}>
        <h1>Create New</h1>
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

export default ContactUs;
