/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n\n\nconst content = document.querySelector(\".content\");\n\nfunction loadAboutUs() {\n  const aboutUsElement = new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"div\").setAttribute({\n    class: \"about-us-element\",\n  });\n  aboutUsElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"h1\")\n      .setAttribute({ class: \"about-us-title\" })\n      .setInnerText(\"About Us\")\n  );\n  aboutUsElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"p\")\n      .setAttribute({ class: \"about-us-description\" })\n      .setInnerText(\n        \"Delicious Delights Bakery is a beloved local bakery known for its mouthwatering assortment of freshly baked goods. Owned by passionate baker Sarah, the bakery offers artisanal bread, delectable pastries, and customized cakes. With a cozy atmosphere and friendly staff, it has become a go-to destination for quality treats. Delicious Delights Bakery also caters to dietary restrictions with gluten-free, vegan, and sugar-free options. It has become a cherished part of the community's culinary landscape, satisfying cravings and delighting customers for over a decade.\"\n      )\n  );\n  content.appendChild(aboutUsElement.build());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutUs);\n\n\n//# sourceURL=webpack://restaurant-page/./src/about-us.js?");

/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Element)\n/* harmony export */ });\nclass Element {\n  constructor(newElement) {\n    this.newElement = newElement;\n    this.attributes = {};\n    this.children = [];\n    this.innerText = undefined;\n  }\n  setAttribute(attribute) {\n    for (const k of Object.keys(attribute)) {\n      this.attributes[k] = attribute[k];\n    }\n    return this;\n  }\n  appendChild(element) {\n    this.innerText = undefined;\n    this.children.push(element);\n    return this;\n  }\n  setInnerText(string) {\n    this.appendChild = [];\n    this.innerText = string;\n    return this;\n  }\n  build() {\n    let DOMelement = document.createElement(this.newElement);\n\n    //set attributes\n    for (const k of Object.keys(this.attributes)) {\n      DOMelement.setAttribute(k, this.attributes[k]);\n    }\n    //build children\n    if (this.innerText === undefined) {\n      for (const child of this.children) {\n        const childElement = child.build();\n        DOMelement.appendChild(childElement);\n      }\n    } else {\n      let DOMinnerText = document.createTextNode(this.innerText);\n      DOMelement.appendChild(DOMinnerText);\n    }\n    return DOMelement;\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/element.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n\nconst contentDiv = document.querySelector(\".content\");\nfunction loadHome() {\n  const homeElement = new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"div\");\n  homeElement.setAttribute({ id: \"home-tab\", class: \"home-tab centered\" });\n  homeElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"h1\").setInnerText(\"Welcome to the Bakery\")\n  );\n  homeElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"img\").setAttribute({ id: \"tab-img\", class: \"home-img\" })\n  );\n  homeElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"p\")\n      .setAttribute({\n        class: \"description\",\n      })\n      .setInnerText(\n        \"This is one the best bakeries  around the globe, hopefully you have a good taste!\"\n      )\n  );\n  homeElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"button\")\n      .setAttribute({ class: \"menu-tab\" })\n      .setInnerText(\"MENU\")\n  );\n  contentDiv.appendChild(homeElement.build());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ \"./src/loadPage.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us */ \"./src/about-us.js\");\n\n\n\n\n\n(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//Load Menu\ndocument.addEventListener(\"click\", function (event) {\n  if (event.target.matches(\".menu-tab\")) {\n    clearContentBox();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  } else if (event.target.matches(\".menu-btn\")) {\n    clearContentBox();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n});\n\n//Load Home\nconst homeBtn = document.querySelector(\".home-btn\");\nhomeBtn.addEventListener(\"click\", function () {\n  clearContentBox();\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n//Load About Us\nconst aboutBtn = document.querySelector(\".about-us-btn\");\naboutBtn.addEventListener(\"click\", function () {\n  clearContentBox();\n  (0,_about_us__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\nfunction clearContentBox() {\n  const contentBox = document.querySelector(\".content\");\n  contentBox.replaceChildren();\n  return;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst HTMLbody = document.querySelector(\"body\");\nconst content = document.querySelector(\".content\");\n\nfunction loadHTML() {\n  const header = document.createElement(\"header\");\n  const nav = document.createElement(\"nav\");\n\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.classList.add(\"home-btn\");\n  homeBtn.innerText = \"Home\";\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.classList.add(\"menu-btn\");\n  menuBtn.innerText = \"Menu\";\n\n  const aboutBtn = document.createElement(\"button\");\n  aboutBtn.classList.add(\"about-us-btn\");\n  aboutBtn.innerText = \"About Us\";\n\n  nav.append(homeBtn, menuBtn, aboutBtn);\n  HTMLbody.insertAdjacentElement(\"afterbegin\", header);\n  header.append(nav);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHTML);\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadPage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n\n\nconst content = document.querySelector(\".content\");\nfunction loadMenu() {\n  const menuElement = new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"div\");\n  menuElement.setAttribute({ class: \"menu-ident\" });\n  menuElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"h1\").setAttribute({ class: \"menu-title\" }).setInnerText(\"MENU\")\n  );\n  menuElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"h3\")\n      .setAttribute({ class: \"menu-option\" })\n      .setInnerText(\"🧁 Blueberry Muffin 🧁\")\n  );\n  menuElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"p\")\n      .setAttribute({ class: \"menu-description\" })\n      .setInnerText(\n        \"A moist and fluffy muffin bursting with juicy blueberries, perfect for a quick breakfast or a delightful snack.\"\n      )\n  );\n  menuElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"h3\")\n      .setAttribute({ class: \"menu-option\" })\n      .setInnerText(\"🍩 Cinnamon Roll 🍩\")\n  );\n  menuElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"p\")\n      .setAttribute({ class: \"menu-description\" })\n      .setInnerText(\n        \"Indulge in the heavenly aroma of freshly baked cinnamon rolls, generously coated with sweet cinnamon and drizzled with luscious cream cheese frosting.\"\n      )\n  );\n  menuElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"h3\")\n      .setAttribute({ class: \"menu-option\" })\n      .setInnerText(\"🥐 Croissant 🥐\")\n  );\n  menuElement.appendChild(\n    new _element__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"p\")\n      .setAttribute({ class: \"menu-description\" })\n      .setInnerText(\n        \"Experience the flaky and buttery goodness of our handcrafted croissants, made with delicate pastry dough and available in both savory and sweet options.\"\n      )\n  );\n\n  content.appendChild(menuElement.build());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;