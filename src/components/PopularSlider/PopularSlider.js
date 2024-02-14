import React from "react";
import { getPremieres } from "../../utils/api";
import leftArrow from "../../source/images/ArrowLeft.svg";
import rightArrow from "../../source/images/ArrowRight.svg";

export default function PopularSlider() {
  getPremieres().then((res) => console.log(res));
  return (
    <div className="popularSlider">
      <img src={leftArrow} alt="левая стрелка" />
      <span className="popularSlider__left-arrow"></span>
      <img src={rightArrow} alt="правая стрелка" />
    </div>
  );
}
