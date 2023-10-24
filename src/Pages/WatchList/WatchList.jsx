import { useContext } from "react";
import { AppContext } from "../..";
import { MovieCard } from "../../Components/MovieCard/MovieCard";

export function WatchList() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="main-page">
      <h3 className="page-heading">WatchList Movies</h3>
      {!state.watchListedMoviesList.length && (
        <h2 className="empty-tag">Nothing is Here</h2>
      )}
      <ul className="card-list">
        {state.watchListedMoviesList.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
