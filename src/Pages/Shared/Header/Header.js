import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/cleaner.svg";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl text-blue-500"
        >
          All cleaner service
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/">Parent</Link>
            <ul className="p-2 bg-base-100"></ul>
          </li>
          <li>
            <Link to="/">Item 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
