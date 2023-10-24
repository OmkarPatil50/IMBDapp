import { useContext } from "react";
import { AppContext } from "../..";
import { Link } from "react-router-dom";
import "./LandingTopBar.css";

export function LandingTopBar() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="top-bar-landing">
      <h3 className="page-heading">Movies</h3>
      <select
        className="topbar-select"
        name="genre"
        value={state.filterByGenre}
        onChange={(event) =>
          dispatch({ type: "FILTER_BY_GENRE", payload: event.target.value })
        }
      >
        <option>All</option>
        <option>Action</option>
        <option>Adventure</option>
        <option>Biography</option>
        <option>Crime</option>
        <option>Drama</option>
        <option>Fantasy</option>
        <option>Romance</option>
        <option>Sci-Fi</option>
      </select>
      <select
        className="topbar-select"
        name="year"
        value={state.filterByYear}
        onChange={(event) =>
          dispatch({ type: "FILTER_BY_YEAR", payload: event.target.value })
        }
      >
        <option>All</option>
        <option>1990</option>
        <option>1991</option>
        <option>1992</option>
        <option>1993</option>
        <option>1994</option>
        <option>1995</option>
        <option>1996</option>
        <option>1997</option>
        <option>1998</option>
        <option>1999</option>
        <option>2000</option>
        <option>2001</option>
        <option>2002</option>
        <option>2003</option>
        <option>2004</option>
        <option>2005</option>
        <option>2006</option>
        <option>2007</option>
        <option>2008</option>
        <option>2009</option>
        <option>2010</option>
        <option>2011</option>
        <option>2012</option>
        <option>2013</option>
        <option>2014</option>
        <option>2015</option>
        <option>2016</option>
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </select>
      <select
        className="topbar-select"
        name="rating"
        value={state.filterByRating}
        onChange={(event) =>
          dispatch({ type: "FILTER_BY_RATING", payload: event.target.value })
        }
      >
        <option>All</option>
        <option>9.0</option>
        <option>8.0</option>
        <option>7.0</option>
        <option>6.0</option>
        <option>5.0</option>
        <option>4.0</option>
        <option>3.0</option>
        <option>2.0</option>
        <option>1.0</option>
      </select>
      <Link to="/add-new" className="link">
        <button className="btn-topbar">Add a Movie</button>
      </Link>
    </div>
  );
}
