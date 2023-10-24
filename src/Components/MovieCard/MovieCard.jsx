import { useContext } from "react";
import { AppContext } from "../..";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const { state, dispatch } = useContext(AppContext);

  const isStarred = (movieID) => {
    return state.starredMoviesList.some(({ id }) => id === movieID);
  };
  const isWatchListed = (movieID) => {
    return state.watchListedMoviesList.some(({ id }) => id === movieID);
  };

  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL
  } = movie;

  return (
    <div className="moviecard">
      <Link to={`/movies/${id}`} className="link">
        <img src={imageURL} alt="movie" className="moviecard-img" />
      </Link>
      <div className="moviecard-details">
        <Link to={`/movies/${id}`} className="link">
          <h3 className="moviecard-title">{title}</h3>
          <p className="moviecard-summary">{summary}</p>
        </Link>
      </div>
      <div className="moviecard-btn-section">
        <button
          className="moviecard-btn"
          onClick={() => {
            dispatch({
              type: isStarred(id) ? "UNSTAR_MOVIE" : "STAR_MOVIE",
              payload: movie
            });
          }}
        >
          {isStarred(id) ? "Unstar" : "Star"}
        </button>
        <button
          className="moviecard-btn"
          onClick={() => {
            dispatch({
              type: isWatchListed(id)
                ? "REMOVE_FROM_WATCHLIST_MOVIE"
                : "ADD_TO_WATCHLIST_MOVIE",
              payload: movie
            });
          }}
        >
          {isWatchListed(id) ? "Remove From Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}
