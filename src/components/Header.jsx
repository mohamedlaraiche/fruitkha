import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { FaShoppingCart } from "react-icons/fa";
import { CgMenuGridR, CgClose } from "react-icons/cg";
import ShoppingCard from "./Shop/ShoppingCard";
const Header = ({ added }) => {
  const [square, setSquare] = useState(true);
  const [Menu, setMenu] = useState("hide");
  const [cardIcon, setCardIcon] = useState("hideIcons");
  const menuHandler = () => {
    setMenu(Menu === "hide" ? "show" : "hide");
    setSquare(false);
    setCardIcon(cardIcon === "hideIcons" ? "showIcons" : "hideIcons");
  };
  const squareHandler = () => {
    setSquare(true);
    setMenu("hide");
    setCardIcon("hideIcons");
  };
  const closeMenu = () => {
    setMenu("hide");
    setSquare(true);
    setCardIcon("hideIcons");
  };
  return (
    <div className="header">
      <Link to="*" onClick={closeMenu}>
        <img src="./Images/logo.png" alt="logo" />
      </Link>
      <ul id={Menu}>
        <li>
          <Link to="*" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={closeMenu}>
            News
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="shop" onClick={closeMenu}>
            Shop
          </Link>
        </li>
      </ul>
      <div className="icons" id={cardIcon}>
        <span>
          <Link to="/cart">
            <span className="qtNbr"> {added} </span>
            <FaShoppingCart />
          </Link>
        </span>
      </div>
      <div className="burger">
        {square === true ? (
          <CgMenuGridR onClick={menuHandler} />
        ) : (
          <CgClose onClick={squareHandler} />
        )}
      </div>
    </div>
  );
};

export default Header;
