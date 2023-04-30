import React, { useEffect, useState } from "react";
import "../CSS/about.css";

const getabout = () => {
  return fetch(`https://victorious-slug-apron.cyclic.app/api/about`);
};
const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    getabout()
      .then((res) => res.json())
      .then((res) => setAbout(res));
  }, []);

  console.log(about);
  return (
    <>
      <div id="about">
        <div>
          <img src="https://brandradiator.com/image/case.png" alt="" />
        </div>
        <div>
          <h1> Who We Are</h1>

          {about.length !== 0 ? (
            <p> {about[about.length - 1].who_we_are}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="about_founder">
        <h1>Our Founders</h1>
        {about.length !== 0 ? (
          <p> {about[about.length - 1].founders}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default About;

// In About there will be content from either json or any free API (if you are applying for full stack use an API)
