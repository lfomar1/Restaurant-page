export default class Element {
  constructor(newElement) {
    this.newElement = newElement;
    this.attributes = {};
    this.children = [];
    this.innerText = undefined;
  }
  setAttribute(attribute) {
    for (const k of Object.keys(attribute)) {
      this.attributes[k] = attribute[k];
    }
    return this;
  }
  appendChild(element) {
    this.innerText = undefined;
    this.children.push(element);
    return this;
  }
  setInnerText(string) {
    this.appendChild = [];
    this.innerText = string;
    return this;
  }
  build() {
    let DOMelement = document.createElement(this.newElement);

    //set attributes
    for (const k of Object.keys(this.attributes)) {
      DOMelement.setAttribute(k, this.attributes[k]);
    }
    //build children
    if (this.innerText === undefined) {
      for (const child of this.children) {
        const childElement = child.build();
        DOMelement.appendChild(childElement);
      }
    } else {
      let DOMinnerText = document.createTextNode(this.innerText);
      DOMelement.appendChild(DOMinnerText);
    }
    return DOMelement;
  }
}
