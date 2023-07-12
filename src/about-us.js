import Element from "./element";

const content = document.querySelector(".content");

function loadAboutUs() {
  const aboutUsElement = new Element("div").setAttribute({
    class: "about-us-element",
  });
  aboutUsElement.appendChild(
    new Element("h1")
      .setAttribute({ class: "about-us-title" })
      .setInnerText("About Us")
  );
  aboutUsElement.appendChild(
    new Element("p")
      .setAttribute({ class: "about-us-description" })
      .setInnerText(
        "Delicious Delights Bakery is a beloved local bakery known for its mouthwatering assortment of freshly baked goods. Owned by passionate baker Sarah, the bakery offers artisanal bread, delectable pastries, and customized cakes. With a cozy atmosphere and friendly staff, it has become a go-to destination for quality treats. Delicious Delights Bakery also caters to dietary restrictions with gluten-free, vegan, and sugar-free options. It has become a cherished part of the community's culinary landscape, satisfying cravings and delighting customers for over a decade."
      )
  );
  content.appendChild(aboutUsElement.build());
}
export default loadAboutUs;
