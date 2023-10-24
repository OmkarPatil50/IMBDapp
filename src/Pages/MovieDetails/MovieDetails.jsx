import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../..";
import "./MovieDetails.css";

export function MovieDetails() {
  const { movieID } = useParams();
  const [individualMovie, setIndividualMovie] = useState({
    id: "",
    title: "",
    year: "",
    genre: [],
    rating: "",
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: ""
  });

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
  } = individualMovie;

  const { state, dispatch } = useContext(AppContext);

  const getIndividualMovie = () => {
    const movie = state.moviesList.find(({ id }) => id == movieID);
    setIndividualMovie(movie);
  };

  useEffect(() => {
    getIndividualMovie();
  }, [movieID]);

  return (
    <div className="main-page">
      <div className="details-page-details">
        <img src={imageURL} alt="movie" className="details-page-img" />
        <div className="individual-movie-details">
          <h1 className="details-page-heading">{title}</h1>
          <h3 className="details-page-summary">{summary}</h3>
          <p className="details-page-desc">Year: {year}</p>
          <p className="details-page-desc">
            Genre:{" "}
            <ul className="details-page-list">
              {genre?.map((item) => {
                return <li className="details-page-list-item">{item}</li>;
              })}
            </ul>
          </p>
          <p className="details-page-desc">Rating: {rating}</p>
          <p className="details-page-desc">Director: {director}</p>
          <p className="details-page-desc">Writer: {writer}</p>
          <p className="details-page-desc">
            Cast:{" "}
            <ul className="details-page-list">
              {cast?.map((item) => {
                return <li className="details-page-list-item">{item}</li>;
              })}
            </ul>
          </p>
          <div className="details-btn-section">
            <button
              className="details-btn"
              onClick={() => {
                dispatch({
                  type: isStarred(id) ? "UNSTAR_MOVIE" : "STAR_MOVIE",
                  payload: individualMovie
                });
              }}
            >
              {isStarred(id) ? "Unstar" : "Star"}
            </button>
            <button
              className="details-btn"
              onClick={() => {
                dispatch({
                  type: isWatchListed(id)
                    ? "REMOVE_FROM_WATCHLIST_MOVIE"
                    : "ADD_TO_WATCHLIST_MOVIE",
                  payload: individualMovie
                });
              }}
            >
              {isWatchListed(id) ? "Remove From Watchlist" : "Add to Watchlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
