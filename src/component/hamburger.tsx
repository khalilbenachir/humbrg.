import React from "react";
import { Link } from "react-router-dom";

const hamburger = () => {
  return (
    <div className="hamburger-menu">
      <div className="menu-secondary-bg-black"></div>
      <div className="menu-layer">
        <div className="menu-city-bg"></div>

        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/oppertunities">Oppertunities</Link>
                  </li>

                  <li>
                    <Link to="/solutions">Solutions</Link>
                  </li>

                  <li>
                    <Link to="/contact-us">Contact us</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta ad eligendi natus qui iusto. Recusandae, incidunt
                  tenetur! Quis quasi, ratione natus expedita et, accusamus
                  culpa sint magnam dolore minus repellendus.
                </p>
              </div>
              <div className="locations">
                  Locations :
                  <span>Dallas</span>
                  <span>Austin</span>
                  <span>Beijing</span>
                  <span>New york</span>
                  <span>San Francisco</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hamburger;
