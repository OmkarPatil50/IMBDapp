import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../..";
import "./Navbar.css";

export function Navbar() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h3 className="app-heading">IMBD</h3>
      <input
        className="search-bar-nav"
        type="search"
        placeholder="Search movies by title, cast and director..."
        onChange={(event) => {
          navigate("/");
          dispatch({ type: "UPDATE_SEARCH_TEXT", payload: event.target.value });
        }}
      />
      <div className="navlink-section">
        <NavLink activeclassname="active" className="link navlink-item" to="/">
          Movies
        </NavLink>
        <NavLink
          activeclassname="active"
          className="link navlink-item"
          to="/watchlist"
        >
          Watchlist
        </NavLink>
        <NavLink
          activeclassname="active"
          className="link navlink-item"
          to="/starred"
        >
          Starred
        </NavLink>
      </div>
    </nav>
  );
}
