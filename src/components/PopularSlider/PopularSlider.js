import React from "react";
import leftArrow from "../../source/images/ArrowLeft.svg";
import rightArrow from "../../source/images/ArrowRight.svg";
import FilmElement from "../FilmElement/FilmElement";

export default function PopularSlider({ premieres }) {
  let premierList = premieres.map((film) => (
    <FilmElement
      key={film.kinopoiskId}
      posterName={film.nameRu}
      posterImg={film.posterUrl}
    />
  ));
  console.log(premierList);
  console.log(premieres);

  return (
    <div className="slider">
      <img src={leftArrow} className="slider__left-arrow" alt="левая стрелка" />
      <ul className="slider__list">{premierList}</ul>
      <img
        src={rightArrow}
        className="slider__right-arrow"
        alt="правая стрелка"
      />
    </div>
  );
}
