import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header__container" style={{ paddingBottom: open ? "40px" : "0" }}>
      <div className="header__text">
        <span className="header__vertical">The</span>Siren
      </div>
      <div className="nav" style={{ marginBottom: open ? "140px" : "0" }}>
        <ul className="navbar" style={{ transform: open ? "translateY(0)" : "translateY(-200%)" }}>
          <li>
            <NavLink to="/" className="NavText">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/bollywood" className="NavText">
              Bollywood
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className="NavText">
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink to="/hollywood" className="NavText">
              Hollywood
            </NavLink>
          </li>
          <li>
            <NavLink to="/fitness" className="NavText">
              Fitness
            </NavLink>
          </li>
          <li>
            <NavLink to="/food" className="NavText">
              Food
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="burger" onClick={() => setOpen((open) => !open)}>
        <div className="burger__line" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}></div>
        <div className="burger__line" style={{ opacity: open ? "0" : "1" }}>
          {" "}
        </div>
        <div className="burger__line" style={{ transform: open ? "rotate(-45deg)" : "rotate(0deg)" }}></div>
      </div>
    </div>
  );
};

export default Navbar;
