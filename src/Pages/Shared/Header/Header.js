import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const handlelogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar bg-base-100 h-15 mb-10">
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

          {user?.email ? (
            <>
              {" "}
              <li tabIndex={0}>
                <Link onClick={handlelogOut}>LogOut</Link>
                <ul className="p-2 bg-base-100"></ul>
              </li>
              <li>
                <Link to="/reviews">My Reviews</Link>
              </li>
              <li>
                <Link to="/reviews">Add Service</Link>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
