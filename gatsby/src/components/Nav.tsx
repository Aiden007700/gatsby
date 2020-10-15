import React from "react";
import { Link } from "gatsby";

const Nav: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizzas/">Pizza Menu</Link>
      </li>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="sliceMasters">Slice Masters</Link>
      </li>
      <li>
        <Link to="orders">Orders</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
