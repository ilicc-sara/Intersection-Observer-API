"use strict";
import "./style.css";

const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

// const nav = document.querySelector("nav");
const height = header.getBoundingClientRect().height;

console.log(height);

const sectionOneOptions = {
  // rootMargin: "-200px 0px 0px 0px",
  rootMargin: `-${height}px`,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
