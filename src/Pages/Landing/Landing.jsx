import { useContext, useEffect } from "react";
import { AppContext } from "../..";
import { LandingTopBar } from "../../Components/LandingTopBar/LandingTopBar";
import { MovieCard } from "../../Components/MovieCard/MovieCard";
import "./Landing.css";

export function Landing() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="main-page">
      <LandingTopBar />
      <div className="landing-page">
        {!state.filteredList.length && (
          <h2 className="empty-tag">No Movies Found</h2>
        )}
        <ul className="card-list">
          {state.filteredList.map((movie) => {
            return (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
