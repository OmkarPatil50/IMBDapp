import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing/Landing";
import { MovieDetails } from "./Pages/MovieDetails/MovieDetails";
import { StarredMovies } from "./Pages/Starred/Starred";
import { WatchList } from "./Pages/WatchList/WatchList";
import { Navbar } from "./Components/Navbar/Navbar";
import { NewMovie } from "./Pages/NewMovie/NewMovie";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies/:movieID" element={<MovieDetails />} />
        <Route path="/starred" element={<StarredMovies />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/add-new" element={<NewMovie />} />
      </Routes>
    </div>
  );
}
