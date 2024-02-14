import React, { useEffect, useState } from "react";
import HighlightMovie from "../HighlightMovie/HighlightMovie";
import { getRandomFilms } from "../../utils/api";

export default function Main({
  nameRu,
  description,
  coverUrl,
  slogan,
  webUrl,
}) {
  return (
    <main className="main">
      <HighlightMovie
        nameRu={nameRu}
        description={description}
        coverUrl={coverUrl}
        slogan={slogan}
        webUrl={webUrl}
      />
    </main>
  );
}
