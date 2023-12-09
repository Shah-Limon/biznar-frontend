import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import StickyHeader from "./StickyHeader";

const NavBar = () => {
  const [logo, setLogo] = useState([]);
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState([]);
  const location = useLocation();

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setAdmin(info));
  }, []);

  const getDashboardLink = () => {
    if (admin && admin.length > 0) {
      const isAdmin = admin.some(
        (userData) =>
          userData.userEmail === user.email && userData.userRole === "Admin"
      );
      if (isAdmin) {
        return "/admin/dashboard";
      } else {
        return "/user-dashboard";
      }
    }
    return "/login";
  };

  const isHomePage = location.pathname === "/";
  const shouldRenderPageHero = !isHomePage;

  return (
    <>
      {/* <header id="header_main" className="header">
        <div className="container big">
          <div className="row">
            <div className="col-12">
              <div className="header__body">
                <div className="header__logo">
                  {logo.map((showLogo, index) => (
                    <Link to="/" key={index}>
                      <img
                        id="site-logo"
                        src={showLogo.logo}
                        alt="Logo"
                        width={160}
                        height={38}
                        data-width={160}
                        data-height={38}
                      />
                    </Link>
                  ))}
                </div>
                <div className="header__right">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item">
                        <Link to="/">Home</Link>
                      </li>

                      <li className="menu-item">
                        <Link to="/services">Our Services</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                      <li className="menu-item menu-item__dashlink">
                        <Link to="/user-dashboard">Dashboard</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="mobile-button">
                    <span />
                  </div>
                </div>
                <div className="header__action">
                  {user ? (
                    <Link className="action-btn" to={getDashboardLink()}>
                      <span>Dashboard</span>
                    </Link>
                  ) : (
                    <Link to="/login" className="action-btn">
                      <span>Login Now</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <div>
     
        <div className="top-bar-area d-none topbar-before-off">
          <div className="container">
            <div className="topbar-content bg-clr-1 topbar-white topbar-before-off py-3 px-5">
              <div className="row">
                <div className="col-xl-4 col-lg-3">
                  <div className="top-phone top-box">
                    <i className="fa-solid fa-phone" />
                    <span>+8801688005654</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="top-email top-box">
                    <i className="fa-solid fa-envelope" />
                    <span>info@example.com</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <div className="top-box top-location">
                    <i className="fa-solid fa-location-dot" />
                    <span>123 street melbourne new york </span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2">
                  <div className="top-box top-login">
                    <a href="login.html" className="text-white">
                      <i className="fa-solid fa-right-to-bracket" />
                      <span>Login</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="header header-before-off">
          <div className="main-wrapper">
            <div className="navbar navbar-expand-lg bsnav bsnav-sticky bsnav-sticky-slide bsnav-transparent">
              <div className="container ">
                {logo.map((e) => (
                  <Link className="navbar-brand" to="/">
                    <img src={e.logo} className="logo-display" alt="thumb" />
                    <img src={e.logo} className="logo-scrolled" alt="thumb" />
                  </Link>
                ))}

                <button className="navbar-toggler toggler-spring">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-md-end">
                  <ul className="navbar-nav navbar-mobile mr-0">
                    <li className="nav-item dropdown fadeup">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="search-cart nav-profile ml-40">
                  {user ? (
                    <Link
                      className="btn-1 btn-circle btn-gradient"
                      to={getDashboardLink()}
                    >
                      <span>Dashboard</span>
                    </Link>
                  ) : (
                    <Link to="/login" className="btn-1 btn-circle btn-gradient">
                      <span>Login Now</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="bsnav-mobile">
              <div className="bsnav-mobile-overlay" />
              <div className="navbar" />
            </div>
          </div>
        </header>
        {shouldRenderPageHero && <StickyHeader/>}
      </div>
    </>
  );
};

export default NavBar;
