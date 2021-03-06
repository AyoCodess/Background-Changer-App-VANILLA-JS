"use-strict";

const css = document.querySelector(".inputField2");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const bgColor = document.getElementById("bgColor");

const bgChanger = function () {
  bgColor.style.background =
    "linear-gradient(to right bottom," +
    color1.value +
    "," +
    color2.value +
    ")";

  css.value =
    "linear-gradient(to right bottom," +
    color1.value +
    "," +
    color2.value +
    ")";
};

color1.addEventListener("input", bgChanger);
color2.addEventListener("input", bgChanger);
