import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
const getabout = () => {
  return fetch(`https://agreeable-duck-dirndl.cyclic.app/api/home`);
};
const Home = () => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    getabout()
      .then((res) => res.json())
      .then((res) => setHome(res));
  }, []);
  console.log(home);
  return (
    <div id="home">
      {home.length !== 0 ? (
        home.map((e) => (
          // Card used in mapping data
          <div
            className="card"
            key={e._id}
            style={{ backgroundImage: `url(${e.image})` }}
          >
            <div>
              <div className="card_data">
                <h3>{e.heading}</h3>
                <p>{e.details}</p>
                <button> View Details</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;

// Prove your skills by creating a unique website where the below points are mandatory.
// • Header
// • Logo
// • Side nav in a hamburger menu
// • Main lead space
// • Content
// • Footer

//image
//div with border , heading, deltail , more detail button
