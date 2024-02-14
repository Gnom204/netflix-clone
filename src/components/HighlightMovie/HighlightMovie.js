import React, { useState } from "react";
import play from "../../source/images/Play.svg";
import detail from "../../source/images/Detail.svg";
import PopularSlider from "../PopularSlider/PopularSlider";
export default function HighlightMovie({
  nameRu,
  description,
  coverUrl,
  slogan,
  webUrl,
}) {
  return (
    <div className="highlight">
      <img src={coverUrl} className="highlight__img" alt="Огромная картинка" />

      <div className="highlight__text">
        <h1
          className={
            "highlight__header " +
            (/\s/.test(nameRu) <= 1
              ? "highlight__header_small"
              : "highlight__header_big")
          }
        >
          {nameRu.toUpperCase()}
        </h1>
        <p className="highlight__slogan">{slogan}</p>
        <p className="highlight__description">{description}</p>
        <div className="highlight__button-container">
          <button className="highlight__button highlight__button_light">
            <img src={play} alt="смотреть" />
            <a className="highlight__url highlight__url_dark" href="#">
              Смотреть
            </a>
          </button>
          <button className="highlight__button highlight__button_opacity">
            <img src={detail} alt="подробнее" />
            <a
              className="highlight__url highlight__url_light"
              target="_blank"
              href={webUrl}
              rel="noopener noreferrer"
            >
              Подробнее
            </a>
          </button>
        </div>
        <h2>Популярное на Netflix</h2>
        <PopularSlider />
      </div>
    </div>
  );
}
