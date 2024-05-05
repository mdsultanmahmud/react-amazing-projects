import { Link } from "react-router-dom";
import "./_index.scss";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="weather__navbar__container">
      <div className="weather__navbar__logo">
        <h1>Logo</h1>
        <div className="weather__navbar__humberguer">
          {!showLinks ? (
            <span onClick={() => setShowLinks(true)}>
              <FaBarsStaggered />
            </span>
          ) : (
            <span onClick={() => setShowLinks(false)}>
              <RxCross1 />
            </span>
          )}
        </div>
      </div>
      <div
        className={`weather__navbar__links ${
          showLinks ? "active__navbar__links" : ""
        }`}
      >
        <ul>
          <li onClick={() => setShowLinks(false)}>
            <Link to={"/"}>Home</Link>
          </li>
          <li onClick={() => setShowLinks(false)}>
            <Link to={"/weather"}>Weather</Link>
          </li>
          <li onClick={() => setShowLinks(false)}>
            <Link to={"/calculator"}>Calculator</Link>
          </li>
          <li onClick={() => setShowLinks(false)}>
            <Link to={"/slider"}>Slider</Link>
          </li>
          <li onClick={() => setShowLinks(false)}>
            <Link to={"/"}>Calculator</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
