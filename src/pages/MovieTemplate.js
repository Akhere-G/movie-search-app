import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
const API_KEY = process.env.REACT_API_KEY;
const MovieTemplate = () => {
  const [loading, setloading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const { id } = useParams();
  const api_key = "&api_key=" + API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;

  const fetchMovie = useCallback(async () => {
    const response = await fetch(url + api_key);
    const data = await response.json();
    console.log(data);
  }, [id]);

  useEffect(() => {
    fetchMovie();
  }, [id, fetchMovie]);
  return (
    <section>
      <h1>{id}</h1>
      <h1>adf</h1>
    </section>
  );
};

export default MovieTemplate;
