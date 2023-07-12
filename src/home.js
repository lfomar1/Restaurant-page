import Element from "./element";
const contentDiv = document.querySelector(".content");
function loadHome() {
  const homeElement = new Element("div");
  homeElement.setAttribute({ id: "home-tab", class: "home-tab centered" });
  homeElement.appendChild(
    new Element("h1").setInnerText("Welcome to the Bakery")
  );
  homeElement.appendChild(
    new Element("img").setAttribute({ id: "tab-img", class: "home-img" })
  );
  homeElement.appendChild(
    new Element("p")
      .setAttribute({
        class: "description",
      })
      .setInnerText(
        "This is one the best bakeries  around the globe, hopefully you have a good taste!"
      )
  );
  homeElement.appendChild(
    new Element("button")
      .setAttribute({ class: "menu-tab" })
      .setInnerText("MENU")
  );
  contentDiv.appendChild(homeElement.build());
}
export default loadHome;
