import Element from "./element";

const content = document.querySelector(".content");
function loadMenu() {
  const menuElement = new Element("div");
  menuElement.setAttribute({ class: "menu-ident" });
  menuElement.appendChild(
    new Element("h1").setAttribute({ class: "menu-title" }).setInnerText("MENU")
  );
  menuElement.appendChild(
    new Element("h3")
      .setAttribute({ class: "menu-option" })
      .setInnerText("🧁 Blueberry Muffin 🧁")
  );
  menuElement.appendChild(
    new Element("p")
      .setAttribute({ class: "menu-description" })
      .setInnerText(
        "A moist and fluffy muffin bursting with juicy blueberries, perfect for a quick breakfast or a delightful snack."
      )
  );
  menuElement.appendChild(
    new Element("h3")
      .setAttribute({ class: "menu-option" })
      .setInnerText("🍩 Cinnamon Roll 🍩")
  );
  menuElement.appendChild(
    new Element("p")
      .setAttribute({ class: "menu-description" })
      .setInnerText(
        "Indulge in the heavenly aroma of freshly baked cinnamon rolls, generously coated with sweet cinnamon and drizzled with luscious cream cheese frosting."
      )
  );
  menuElement.appendChild(
    new Element("h3")
      .setAttribute({ class: "menu-option" })
      .setInnerText("🥐 Croissant 🥐")
  );
  menuElement.appendChild(
    new Element("p")
      .setAttribute({ class: "menu-description" })
      .setInnerText(
        "Experience the flaky and buttery goodness of our handcrafted croissants, made with delicate pastry dough and available in both savory and sweet options."
      )
  );

  content.appendChild(menuElement.build());
}
export default loadMenu;
