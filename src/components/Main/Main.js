import React, { useEffect, useState } from "react";
import HighlightMovie from "../HighlightMovie/HighlightMovie";
import { getRandomFilms } from "../../utils/api";

export default function Main({ randomFilm, premieres }) {
  return (
    <main className="main">
      <HighlightMovie randomFilm={randomFilm} premieres={premieres} />
    </main>
  );
}
