import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import { AuthProvider } from "../../UserContext/UserContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthProvider);

  const signOut = () => {
    userSignOut()
      .then((res) => {
        console.log("get out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="navbar">
      <div className="menu-wrapper">
        <div className="brand">
          <Link to={"/"}>
            <img src={logo} alt="" className="logo" />
          </Link>
        </div>

        <ul className="menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/courses"}>Courses</Link>
          </li>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
        </ul>

        <div className="userProfile">
          <div>
            <MdOutlineDarkMode className="dark-icon" />
          </div>
          <div className="user-login-logout">
            {user && user.uid ? (
              user.photoURL ? (
                <>
                  <img
                    title={user.displayName}
                    src={user.photoURL}
                    alt="profile"
                    className="profile"
                  />
                  <Link className="login" onClick={signOut}>
                    Logout
                  </Link>
                </>
              ) : (
                <div className="logout">
                  <FaUser className="empty-user" title={user.displayName} />
                  <Link className="login" onClick={signOut}>
                    Logout
                  </Link>
                </div>
              )
            ) : (
              <Link className="login" to={"/login"}>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
