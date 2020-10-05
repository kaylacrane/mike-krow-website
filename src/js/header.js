"use strict";

const header = document.querySelector(".header");
const headerLinks = header.querySelectorAll("a");
const headerImage = header.querySelector("img");

function sizeHeader() {
  header.classList.toggle("size-header");
}

headerImage.addEventListener("click", sizeHeader);
headerLinks.forEach((link) => link.addEventListener("click", sizeHeader));
