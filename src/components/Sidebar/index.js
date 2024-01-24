import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const openMenu = useSelector((state) => state.app.isMenuOpen);
  if (!openMenu) return null;
  return (
    <div className="shadow-lg p-2 w-48 h-screen">
      <ul>
        {/* <li><Link to="/">Home</Link></li> */}
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movie</li>
        <li>Games</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movie</li>
        <li>Games</li>
      </ul>
    </div>
  );
}

export default Sidebar;
