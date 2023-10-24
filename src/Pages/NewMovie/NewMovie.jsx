import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AppContext } from "../..";
import "./NewMovie.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function NewMovie() {
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    id: uuid(),
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

  const [cast, setCast] = useState("");
  const [genre, setGenre] = useState("");

  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="form-page">
      <form className="new-product-form">
        <h3 className="page-heading">Add New Movie</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setNewMovie(() => ({
              ...newMovie,
              title: event.target.value
            }));
          }}
        />
        <label htmlFor="summary">Summary</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setNewMovie(() => ({
              ...newMovie,
              summary: event.target.value
            }));
          }}
        />
        <label htmlFor="year">Year</label>
        <input
          type="number"
          required
          onChange={(event) => {
            setNewMovie(() => ({
              ...newMovie,
              year: event.target.value
            }));
          }}
        />
        <label htmlFor="cast">Cast</label>
        <ul className="details-page-list">
          {newMovie?.cast.map((person) => (
            <p className="new-page-list-item">{person}</p>
          ))}
        </ul>
        <input
          type="text"
          value={cast}
          onChange={(event) => {
            setCast(event.target.value);
          }}
        />
        <button
          className="new-page-add-btn"
          onClick={() => {
            if (cast) {
              setNewMovie(() => ({
                ...newMovie,
                cast: [...newMovie.cast, cast]
              }));
              setCast("");
            }
          }}
        >
          +
        </button>
        <label htmlFor="genre">Genre</label>
        <ul className="details-page-list">
          {newMovie?.genre.map((item) => (
            <p className="new-page-list-item">{item}</p>
          ))}
        </ul>
        <input
          type="text"
          value={genre}
          onChange={(event) => {
            setGenre(event.target.value);
          }}
        />
        <button
          className="new-page-add-btn"
          onClick={() => {
            if (genre) {
              setNewMovie(() => ({
                ...newMovie,
                genre: [...newMovie.genre, genre]
              }));
              setGenre("");
            }
          }}
        >
          +
        </button>
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          required
          onChange={(event) => {
            setNewMovie(() => ({
              ...newMovie,
              rating: event.target.value
            }));
          }}
        />
        <label htmlFor="director">Director</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setNewMovie(() => ({
              ...newMovie,
              director: event.target.value
            }));
          }}
        />
        <label htmlFor="writer">Writer</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setNewMovie(() => ({
              ...newMovie,
              writer: event.target.value
            }));
          }}
        />
        <label htmlFor="url">Image URL</label>
        <input
          type="text"
          required
          onChange={(event) => {
            setNewMovie(() => ({
              ...newMovie,
              imageURL: event.target.value
            }));
          }}
        />
        <button
          type="submit"
          className="new-form-btn"
          onClick={() => {
            if (
              newMovie.id &&
              newMovie.title &&
              newMovie.year &&
              newMovie.genre &&
              newMovie.rating &&
              newMovie.director &&
              newMovie.writer &&
              newMovie.cast &&
              newMovie.summary &&
              newMovie.imageURL
            ) {
              dispatch({ type: "ADD_NEW_MOVIE", payload: newMovie });
              toast.success("Movie Added Successfully!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored"
              });
              navigate("/");
            }
          }}
        >
          Add Movie
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
