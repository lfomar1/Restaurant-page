const HTMLbody = document.querySelector("body");
const content = document.querySelector(".content");

function loadHTML() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("home-btn");
  homeBtn.innerText = "Home";

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn");
  menuBtn.innerText = "Menu";

  const aboutBtn = document.createElement("button");
  aboutBtn.classList.add("about-us-btn");
  aboutBtn.innerText = "About Us";

  nav.append(homeBtn, menuBtn, aboutBtn);
  HTMLbody.insertAdjacentElement("afterbegin", header);
  header.append(nav);
}
export default loadHTML;
