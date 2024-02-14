import React from "react";
import logo from "../../source/images/NetflixLogoSvg.svg";
import search from "../../source/images/search.svg";
import bell from "../../source/images/bell.svg";
import present from "../../source/images/present.svg";
import profile from "../../source/images/ProfileIMG.svg";
export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Нетфликс лого" className="header__logo" />
      <nav className="header__menu">
        <ul className="header__categories">
          <li className="header__categorie">Главная</li>
          <li className="header__categorie">Сериалы</li>
          <li className="header__categorie">Фильмы</li>
          <li className="header__categorie">Популярные новинки</li>
          <li className="header__categorie">Избранные</li>
        </ul>
        <ul className="header__icons">
          <li>
            <img className="header__icon" src={search} alt="Иконка поиска" />
          </li>
          <li>
            <img className="header__icon" alt="Иконка колокола" src={bell} />
          </li>
          <li>
            <img className="header__icon" src={present} alt="иконка подарка" />
          </li>
          <li>
            <img className="header__icon" src={profile} alt="иконка подарка" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
