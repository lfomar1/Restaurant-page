import loadHTML from "./loadPage";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAboutUs from "./about-us";

loadHTML();
loadHome();

//Load Menu
document.addEventListener("click", function (event) {
  if (event.target.matches(".menu-tab")) {
    clearContentBox();
    loadMenu();
  } else if (event.target.matches(".menu-btn")) {
    clearContentBox();
    loadMenu();
  }
});

//Load Home
const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", function () {
  clearContentBox();
  loadHome();
});

//Load About Us
const aboutBtn = document.querySelector(".about-us-btn");
aboutBtn.addEventListener("click", function () {
  clearContentBox();
  loadAboutUs();
});
function clearContentBox() {
  const contentBox = document.querySelector(".content");
  contentBox.replaceChildren();
  return;
}
