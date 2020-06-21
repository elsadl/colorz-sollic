import "./styles/main.scss";

let burger = document.querySelector(".burger");
let nav = document.querySelector("header nav");

let ready = () => {
  burger.addEventListener("click", (e) => {
    console.log(burger);
    burger.classList.toggle("burger-closed");
    burger.classList.toggle("burger-open");

    nav.classList.toggle("nav-open");
  });
};

document.addEventListener("DOMContentLoaded", ready);
