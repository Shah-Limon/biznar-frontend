import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const StickyHeader = () => {
  const [logo, setLogo] = useState([]);
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState([]);

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

  // Function to determine the dashboard link based on user role
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

  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: "url(https://i.ibb.co/zNKXFNV/shape-12.png)",
          height: "10vh",
        }}
      ></div>
    </>
  );
};

export default StickyHeader;
