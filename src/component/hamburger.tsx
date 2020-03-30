import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import { State, City } from "./interfaces";
import * as fromAnimation from "../util/animation";

import Dallas from "../images/dallas.webp";
import Austin from "../images/austin.webp";
import Beijing from "../images/beijing.webp";
import NewYork from "../images/newyork.webp";
import SanFrancisco from "../images/sanfrancisco.webp";

interface Props {
  state: State;
}



const Hamburger: React.FC<Props> = props => {
  const { state } = props;

  let menuRef = useRef<HTMLDivElement | null>(null);
  let revealMenuRef = useRef<HTMLDivElement | null>(null);
  let revealMenuBgRef = useRef<HTMLDivElement | null>(null);
  let cityBgRef = useRef<HTMLDivElement | null>(null);
  let line1Ref = useRef<Link | null>(null);
  let line2Ref = useRef<Link | null>(null);
  let line3Ref = useRef<Link | null>(null);
  let infoRef = useRef<HTMLDivElement | null>(null);

  const cities: Array<City> = [
    { name: "Dallas", image: Dallas },
    { name: "Austin", image: Austin },
    { name: "Beijing", image: Beijing },
    { name: "New York", image: NewYork },
    { name: "San Francisco", image: SanFrancisco }
  ];

  useEffect(() => {
    if (state.clicked === false) {
      //close menu
      gsap.to([revealMenuRef.current, revealMenuBgRef.current], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      });

      gsap.to(menuRef.current, {
        duration: 1,
        css: { display: "none" }
      });
    } else if (
      state.clicked === true ||
      (state.clicked && state.initial === null)
    ) {
      //open menu

      gsap.to(menuRef.current, {
        duration: 1,
        css: { display: "block" }
      });

      gsap.to([revealMenuRef.current, revealMenuBgRef.current], {
        duration: 0,
        height: "100%",
        opacity: 1
      });
      fromAnimation.staggerReveal(
        revealMenuBgRef.current,
        revealMenuRef.current
      );
      fromAnimation.fadeIn(infoRef.current);
      fromAnimation.staggerLink(
        line1Ref.current,
        line2Ref.current,
        line3Ref.current
      );
    }
  }, [state]);

 

  return (
    <div ref={menuRef} className="hamburger-menu">
      <div ref={revealMenuBgRef} className="menu-secondary-bg-black"></div>
      <div ref={revealMenuRef} className="menu-layer">
        <div ref={cityBgRef} className="menu-city-bg"></div>

        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link ref={line1Ref} to="/oppertunities">
                      Oppertunities
                    </Link>
                  </li>

                  <li>
                    <Link ref={line2Ref} to="/solutions">
                      Solutions
                    </Link>
                  </li>

                  <li>
                    <Link ref={line3Ref} to="/contact-us">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={infoRef} className="info">
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
                {cities.map(city => (
                  <span
                    key={city.name}
                    onMouseEnter={_ => fromAnimation.handleOnMouseEnter(cityBgRef.current,city)}
                    onMouseLeave={_=>fromAnimation.handleOnMouseLeave(cityBgRef.current)}
                  >
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
