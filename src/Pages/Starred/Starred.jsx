import { useContext } from "react";
import { AppContext } from "../..";
import { MovieCard } from "../../Components/MovieCard/MovieCard";

export function StarredMovies() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="main-page">
      <h3 className="page-heading">Starred Movies</h3>
      {!state.starredMoviesList.length && (
        <h2 className="empty-tag">Nothing is Here</h2>
      )}
      <ul className="card-list">
        {state.starredMoviesList.map((movie) => {
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
