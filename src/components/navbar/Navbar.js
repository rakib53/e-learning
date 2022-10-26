import React, { useContext, useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaBars, FaUser } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../images/logo.jpg";
import { AuthProvider } from "../../UserContext/UserContext";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkLight, setDarkLight] = useState(true);
  const { user, userSignOut } = useContext(AuthProvider);

  const notify = (msg) => toast(msg);

  const signOut = () => {
    userSignOut()
      .then((res) => {
        notify("Log out Successfully!");
      })
      .catch((err) => {
        notify(err.message);
      });
  };

  const getToggle = () => {
    setToggle(!toggle);
  };

  const getTheme = () => {
    console.log(darkLight);
    setDarkLight(!darkLight);
  };

  return (
    <div className="navbar">
      <div className="menu-wrapper">
        <div className="brand">
          <Link to={"/"}>
            <img src={logo} alt="" className="logo" />
          </Link>
        </div>

        <FaBars className="mobile-menu" onClick={getToggle} />

        <ul className="menu" style={toggle ? { left: 0 } : { left: "-1000px" }}>
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
            <Link to={"/blog"}>Blogs</Link>
          </li>
        </ul>

        <div
          className="userProfile"
          style={toggle ? { left: 0 } : { left: "-1000px" }}
        >
          <div onClick={getTheme}>
            {darkLight ? (
              <CiLight className="dark-icon" />
            ) : (
              <MdOutlineDarkMode className="dark-icon" />
            )}
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
      <ToastContainer />
    </div>
  );
};

export default Navbar;
