import React from "react";

export default function FilmElement({ posterImg, posterName }) {
  return (
    <div className="poster">
      <img className="poster__img" src={posterImg} alt="Превью фильма" />
      <p className="poster__name">{posterName}</p>
    </div>
  );
}
