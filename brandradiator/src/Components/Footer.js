import React from "react";
import "../CSS/footer.css";
export const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <ul>
          <h3>Services</h3>
          <li>Content Marketing</li>
          <li>Digital Strategy Consulting</li>
          <li>Mobile App Development</li>
          <li>Offline Marketing</li>
          <li>Online Reputation Management</li>
        </ul>
        <ul>
          <h3>Quick Links</h3>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>Media</li>
          <li>Contact Us</li>
          <li>BR Academy</li>
        </ul>
        <ul>
          <div className="footer_logo">
            <div id="nav_logo">
              <div>
                <div id="logo">
                  <span>
                    <h1 id="move">BR</h1>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <li>
            Patna | Ranchi | Dhanbad | Bangalore | Kolkata | Delhi NCR | London
          </li>
          <li>Mob.No-+91-9122112704</li>
          <li>Email Id:-info@brandradiator.com</li>
          <li></li>
        </ul>
      </div>
      <h4>Copyright © {new Date().getFullYear()} Brand Radiator</h4>
    </footer>
  );
};
