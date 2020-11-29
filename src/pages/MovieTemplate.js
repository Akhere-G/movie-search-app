import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MovieTemplate = () => {
  const { id } = useParams();
  return (
    <section>
      <h1>{id}</h1>
      <h1>adf</h1>
    </section>
  );
};

export default MovieTemplate;
