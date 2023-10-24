import { useEffect, useReducer } from "react";
import { AppContext } from "..";
import { movies } from "../Data/Data";

export function AppContextProvider({ children }) {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "STAR_MOVIE": {
        return {
          ...state,
          starredMoviesList: [...state.starredMoviesList, action.payload]
        };
      }

      case "UNSTAR_MOVIE": {
        return {
          ...state,
          starredMoviesList: state.starredMoviesList.filter(
            ({ id }) => id !== action.payload.id
          )
        };
      }
      case "ADD_TO_WATCHLIST_MOVIE": {
        return {
          ...state,
          watchListedMoviesList: [
            ...state.watchListedMoviesList,
            action.payload
          ]
        };
      }

      case "REMOVE_FROM_WATCHLIST_MOVIE": {
        return {
          ...state,
          watchListedMoviesList: state.watchListedMoviesList.filter(
            ({ id }) => id !== action.payload.id
          )
        };
      }

      case "UPDATE_FILTERED_LIST": {
        return { ...state, filteredList: action.payload };
      }

      case "FILTER_BY_GENRE": {
        return { ...state, filterByGenre: action.payload };
      }

      case "FILTER_BY_YEAR": {
        return { ...state, filterByYear: action.payload };
      }
      case "FILTER_BY_RATING": {
        return { ...state, filterByRating: action.payload };
      }
      case "UPDATE_SEARCH_TEXT": {
        return { ...state, searchText: action.payload };
      }

      case "ADD_NEW_MOVIE": {
        return { ...state, moviesList: [...state.moviesList, action.payload] };
      }
      default:
        return state;
    }
  };

  const initialValue = {
    moviesList: movies,
    filteredList: movies,
    starredMoviesList: [],
    watchListedMoviesList: [],
    filterByGenre: "All",
    filterByYear: "All",
    filterByRating: "All",
    searchText: ""
  };
  const initialize = localStorage.getItem("appState");

  const initializeState = initialize ? JSON.parse(initialize) : initialValue;

  const [state, dispatch] = useReducer(reducerFunction, initializeState);

  useEffect(() => {
    let data = state.moviesList;
    if (state.filterByGenre !== "All") {
      data = data.filter(({ genre }) => {
        return genre.some((item) => item === state.filterByGenre);
      });
    }

    if (state.filterByYear !== "All") {
      data = data.filter(({ year }) => {
        return year === Number(state.filterByYear);
      });
    }

    if (state.filterByRating !== "All") {
      data = data.filter(({ rating }) => {
        return rating === Number(state.filterByRating);
      });
    }

    if (state.searchText) {
      data = data.filter(({ title, director, cast }) => {
        return (
          title.toLowerCase().includes(state.searchText.toLowerCase()) ||
          director.toLowerCase().includes(state.searchText.toLowerCase()) ||
          cast.some((item) =>
            item.toLowerCase().includes(state.searchText.toLowerCase())
          )
        );
      });
    }

    dispatch({ type: "UPDATE_FILTERED_LIST", payload: data });
  }, [
    state.filterByGenre,
    state.filterByYear,
    state.filterByRating,
    state.searchText,
    state.moviesList
  ]);

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
