exports.id = "component---src-pages-index-tsx";
exports.ids = ["component---src-pages-index-tsx"];
exports.modules = {

/***/ "./src/components/buttons/MenuButton.tsx":
/*!***********************************************!*\
  !*** ./src/components/buttons/MenuButton.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



function MenuButton(props) {
  const {
    item
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.link,
    onClick: props.onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuItem, {
    title: item.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: item.icon,
    alt: item.title
  }), item.title));
}
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MenuButton__MenuItem"
})(["color:rgba(255,255,255,0.7);display:grid;grid-template-columns:24px auto;gap:", ";align-items:center;padding:10px;transition:0.5s ease-out;border-radius:10px;img{width:24px;height:24px;}:hover{background:rgba(255,255,255,0.1);box-shadow:0px 10px 20px rgba(0,0,0,0.1),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);}"], props => props.title ? "10px" : "0px");

/***/ }),

/***/ "./src/components/buttons/PurchaseButton.tsx":
/*!***************************************************!*\
  !*** ./src/components/buttons/PurchaseButton.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _src_images_icons_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/images/icons/check.svg */ "./src/images/icons/check.svg");
/* harmony import */ var _src_images_icons_icon_ring_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/images/icons/icon-ring.svg */ "./src/images/icons/icon-ring.svg");




function PurchaseButton() {
  const handleClick = () => {
    const clickProjects = document.getElementById('click-projects');
    clickProjects.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#click-projects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Ring, {
    src: _src_images_icons_icon_ring_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Icon Ring"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    src: _src_images_icons_check_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Credit Icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "\"Learn How\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Subtitle, null, "Scroll Down"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseButton);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PurchaseButton__Wrapper"
})(["width:280px;height:77px;margin-top:120px;padding:12px;background:linear-gradient(180deg,rgba(255,255,255,0.63) 0%,rgba(217,223,255,0.9) 100%);box-shadow:0px 1px 3px rgba(0,0,0,0.1),0px 20px 40px rgba(23,0,102,0.2),inset 0px 0px 0px 0.5px rgba(255,255,255,0.5);border-radius:20px;display:grid;grid-template-columns:63px auto;align-items:center;gap:20px;animation:HeroAnimation;animation-duration:3s;transition:transform 0.5s ease;transform-style:preserve-3d;&:hover{transform:translateY(-4px);}"]);
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PurchaseButton__TextWrapper"
})(["display:grid;gap:8px;text-align:start;font-family:\"SUSE\",sans-serif;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "PurchaseButton__Title"
})(["font-style:normal;font-weight:600;font-size:15px;color:black;text-transform:uppercase;"]);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "PurchaseButton__Subtitle"
})(["font-style:normal;font-weight:bold;font-size:13px;color:black;opacity:0.7;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "PurchaseButton__Icon"
})(["width:29px;height:29px;"]);
const Ring = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "PurchaseButton__Ring"
})(["position:absolute;top:-15px;left:-16px;transition:transform 0.3s ease;", ":hover &{transform:rotate(30deg) scale(1.1) translate(1px,1px);}"], Wrapper);
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PurchaseButton__IconWrapper"
})(["width:45px;height:45px;background:linear-gradient(200.44deg,#4316db 4.57%,#3EB0F3 98.38%);border-radius:50%;display:grid;justify-content:center;align-content:center;justify-self:center;position:relative;transition:filter 0.3s ease;", ":hover &{filter:brightness(120%) saturate(120%);}"], Wrapper);

/***/ }),

/***/ "./src/components/cards/CourseCard.tsx":
/*!*********************************************!*\
  !*** ./src/components/cards/CourseCard.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _src_images_illustrations_illustration_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/images/illustrations/illustration-1.png */ "./src/images/illustrations/illustration-1.png");



function CourseCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    className: "courseCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "illustration animate__animated animate__fadeInDownBig illustration"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Illustration, {
    src: _src_images_illustrations_illustration_1_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Credit Icon"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCard);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CourseCard__Wrapper"
})(["position:relative;display:grid;justify-content:center;align-content:center;max-width:162px;width:100%;height:230px;border-radius:20px;margin-top:-120px;perspective:1000px;transition:transform 0.8s ease;transform-style:preserve-3d;&:hover{transform:rotateX(-15deg) rotateY(-12deg) translateY(-42px);opacity:94%;transition:1.5s;}@media (max-width:1024px){height:400px;margin-top:-80px;}@media (max-width:768px){height:350px;margin-top:-60px;}@media (max-width:480px){height:40px;margin-top:-40px;}"]);
const Illustration = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "CourseCard__Illustration"
})(["width:460px;height:485px;border-radius:7px;@media (max-width:1920px){width:400px;height:420px;margin-bottom:278px;}@media (max-width:1024px){width:400px;height:420px;}@media (max-width:768px){width:340px;height:360px;}@media (max-width:480px){width:280px;height:300px;margin-bottom:100px;}"]);

/***/ }),

/***/ "./src/components/data/menuData.ts":
/*!*****************************************!*\
  !*** ./src/components/data/menuData.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuData: () => (/* binding */ menuData),
/* harmony export */   tooltipData: () => (/* binding */ tooltipData)
/* harmony export */ });
/* harmony import */ var _src_images_icons_courses_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../src/images/icons/courses.svg */ "./src/images/icons/courses.svg");
/* harmony import */ var _src_images_icons_tutorials_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/images/icons/tutorials.svg */ "./src/images/icons/tutorials.svg");
/* harmony import */ var _src_images_icons_certificates_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/images/icons/certificates.svg */ "./src/images/icons/certificates.svg");
/* harmony import */ var _src_images_icons_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/images/icons/hamburger.svg */ "./src/images/icons/hamburger.svg");
/* harmony import */ var _src_images_icons_profile_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../src/images/icons/profile.svg */ "./src/images/icons/profile.svg");
/* harmony import */ var _src_images_icons_settings_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../src/images/icons/settings.svg */ "./src/images/icons/settings.svg");
/* harmony import */ var _src_images_icons_signout_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../src/images/icons/signout.svg */ "./src/images/icons/signout.svg");







const menuData = [{
  title: "How It Works",
  icon: _src_images_icons_courses_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  link: "#Skills"
}, {
  title: "Your Control",
  icon: _src_images_icons_tutorials_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  link: "#Projects"
}, {
  title: "Bio",
  icon: _src_images_icons_certificates_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  link: "#Bio"
}, {
  title: "",
  icon: _src_images_icons_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  link: "/account"
}];
const tooltipData = [{
  title: "Skills",
  icon: _src_images_icons_profile_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  link: "#Skills"
}, {
  title: "Projects",
  icon: _src_images_icons_settings_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  link: "#Projects"
}, {
  title: "About",
  icon: _src_images_icons_signout_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  link: "#Bio"
}];

/***/ }),

/***/ "./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_menuData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/menuData */ "./src/components/data/menuData.ts");
/* harmony import */ var _buttons_MenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/MenuButton */ "./src/components/buttons/MenuButton.tsx");
/* harmony import */ var _tooltip_MenuTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip/MenuTooltip */ "./src/components/tooltip/MenuTooltip.tsx");
/* harmony import */ var _src_images_icons_logo3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../src/images/icons/logo3.png */ "./src/images/icons/logo3.png");



 // Import the updated menuData



function Header() {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  function handleClick(event) {
    setIsOpen(!isOpen);
    event.preventDefault();
  }
  const handleClickOutside = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event => {
    var _tooltipRef$current;
    if (ref.current && !ref.current.contains(event.target) && !((_tooltipRef$current = tooltipRef.current) !== null && _tooltipRef$current !== void 0 && _tooltipRef$current.contains(event.target))) {
      console.log("Document is clicked");
      setIsOpen(false);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MyLink, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: _src_images_icons_logo3_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MenuWrapper, {
    count: _data_menuData__WEBPACK_IMPORTED_MODULE_2__.menuData.length,
    ref: ref
  }, _data_menuData__WEBPACK_IMPORTED_MODULE_2__.menuData.map((item, index) => item.link === "/account" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_buttons_MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: item,
    key: index,
    onClick: event => handleClick(event)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_buttons_MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: item,
    key: index
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HamburgerWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_buttons_MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: {
      title: "",
      icon: _data_menuData__WEBPACK_IMPORTED_MODULE_2__.menuData[3].icon,
      link: "/"
    },
    onClick: event => handleClick(event)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    ref: tooltipRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_tooltip_MenuTooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isOpen
  })));
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "header__Wrapper"
})(["position:sticky;top:20px;display:grid;grid-template-columns:44px auto;width:100%;justify-content:space-between;padding-left:19.4%;padding-right:19.22%;align-items:center;z-index:1000;@media (max-width:768px){top:30px;}@media (max-width:450px){top:20px;padding:0 20px;}"]);
const MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "header__MenuWrapper"
})(["display:grid;gap:30px;grid-template-columns:repeat(", ",auto);a{transition:transform 0.3s ease-in-out;}a:hover{transform:translateY(-10px);}@media (max-width:768px){> a{display:none;}grid-template-columns:auto;}"], props => props.count);
const HamburgerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "header__HamburgerWrapper"
})(["display:none;@media (max-width:768px){display:block;}"]);
const MyLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link).withConfig({
  displayName: "header__MyLink"
})(["img{width:49px;height:49px;transition:transform 0.3s ease-in-out;}:hover{transform:translateY(-10px);}"]);

/***/ }),

/***/ "./src/components/sections/BioSection.tsx":
/*!************************************************!*\
  !*** ./src/components/sections/BioSection.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CompanyOverview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


function CompanyOverview() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title, null, "About Nex AI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BodyText, null, "Founded by Kevin Blancaflor, Nex AI was created to help businesses of all sizes automate and optimize their content workflows. Our mission is to make content management easier, faster, and more effective by leveraging AI and automation technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TeamTitle, null, "Meet Our Team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TeamBodyText, null, "Our team is composed of skilled professionals with backgrounds in tech, AI, and content management. Together, we aim to deliver innovative solutions to improve your business operations."));
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BioSection__Wrapper"
})(["position:relative;display:flex;flex-direction:column;max-width:1200px;margin:20px auto;text-align:center;gap:20px;padding:50px 20px;font-family:\"Orbitron\",sans-serif;background:rgba(63,178,244,0.1);border-radius:20px;box-shadow:0px 16px 32px rgba(63,176,244,0.2);"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "BioSection__Title"
})(["font-style:normal;font-size:2.5rem;font-weight:bold;line-height:130%;text-transform:uppercase;color:#3FB2F4;margin-bottom:20px;border-bottom:2px solid #3FB2F4;padding-bottom:10px;background:rgba(63,178,244,0.1);border-radius:10px;transition:transform 0.6s ease;&:hover{transform:rotateY(360deg);transition:transform 0.5s ease-in-out;}"]);
const BodyText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "BioSection__BodyText"
})(["max-width:800px;font-size:1.2rem;line-height:1.6;color:#fff;margin:0 auto;padding:0 20px;font-family:\"Open Sans\",sans-serif;"]);
const TeamTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "BioSection__TeamTitle"
})(["font-size:2rem;font-weight:bold;line-height:130%;text-transform:uppercase;color:#3FB2F4;margin-bottom:20px;border-bottom:2px solid #3FB2F4;"]);
const TeamBodyText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "BioSection__TeamBodyText"
})(["max-width:800px;font-size:1.1rem;line-height:1.6;color:#fff;margin:0 auto;padding:0 20px;font-family:\"Open Sans\",sans-serif;"]);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BioSection__Divider"
})(["width:270px;height:0.5px;background:rgba(255,255,255,0.3);margin:32px auto;"]);

/***/ }),

/***/ "./src/components/sections/ClickProjects.tsx":
/*!***************************************************!*\
  !*** ./src/components/sections/ClickProjects.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OverviewNexAI)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


function OverviewNexAI() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title, null, "What is Nex AI?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BodyText, null, "Nex AI is an automation solution designed to simplify your content management and publishing process. We build a custom system that allows companies to upload and manage their content just like in \u2018Notion,\u2019 and integrate it with powerful AI tools like ChatGPT, Perplexity.ai, and platforms like Make.com to automate and optimize content across various channels."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeaturesList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Upload and organize content with ease."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Automate content workflows with AI-driven tools."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Gain full control over the content before it is published."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Save time, effort, and resources by integrating everything in one place.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CTAButton, {
    href: "#how-it-works"
  }, "See How It Works"));
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ClickProjects__Wrapper"
})(["position:relative;display:flex;flex-direction:column;max-width:1200px;margin:140px auto;margin-bottom:70px;text-align:center;gap:20px;padding:50px 20px;font-family:\"Orbitron\",sans-serif;background:rgba(63,178,244,0.1);border-radius:20px;box-shadow:0px 16px 32px rgba(63,176,244,0.2);"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "ClickProjects__Title"
})(["font-style:normal;font-size:2.5rem;font-weight:bold;line-height:130%;text-transform:uppercase;color:#3FB2F4;margin:0 auto;margin-bottom:20px;border-bottom:2px solid #3FB2F4;padding-bottom:10px;background:rgba(63,178,244,0.1);border-radius:10px;transition:transform 0.6s ease;&:hover{transform:rotateY(360deg);transition:transform 0.5s ease-in-out;}"]);
const BodyText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "ClickProjects__BodyText"
})(["max-width:800px;font-size:1.2rem;line-height:1.6;color:#fff;margin:0 auto;padding:0 20px;font-family:\"Open Sans\",sans-serif;"]);
const FeaturesList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "ClickProjects__FeaturesList"
})(["list-style-type:none;padding:0;margin-bottom:40px;font-family:\"Open Sans\",sans-serif;li{font-size:1.1rem;color:#fff;margin:10px 0;text-align:center;}"]);
const CTAButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "ClickProjects__CTAButton"
})(["display:inline-block;background-color:#3FB2F4;color:#fff;margin:0 auto;padding:15px 30px;border-radius:8px;text-decoration:none;font-size:1.2rem;transition:background-color 0.3s ease;&:hover{background-color:#76d1f9;}"]);

/***/ }),

/***/ "./src/components/sections/GridProjects.tsx":
/*!**************************************************!*\
  !*** ./src/components/sections/GridProjects.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


function FinalControlSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "Complete Control Before Publishing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BodyText, null, "Before your content is posted online, Nex AI ensures that everything is under your control. Our system connects with a final platform where you can review, edit, and approve all content before it goes live."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeaturesList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Final approval dashboard to check all content."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Schedule or manually publish content to ensure it aligns with your company\u2019s strategies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Custom rules and permissions to ensure only approved content is published.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Example, null, "Imagine you\u2019ve scheduled a month\u2019s worth of social media content. Before anything is posted, you have the chance to review every post, ensuring they meet your standards and vision."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Visual, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/path/to/final-approval-mockup.png",
    alt: "Final Approval Interface"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinalControlSection);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "GridProjects__Wrapper"
})(["position:relative;display:flex;flex-direction:column;max-width:1200px;margin:20px auto;margin-top:150px;text-align:center;gap:20px;padding:50px 20px;font-family:\"Orbitron\",sans-serif;background:rgba(63,178,244,0.1);border-radius:20px;box-shadow:0px 16px 32px rgba(63,176,244,0.2);"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "GridProjects__Title"
})(["font-style:normal;font-size:2.5rem;font-weight:bold;line-height:130%;text-transform:uppercase;color:#3FB2F4;margin:0 auto;margin-bottom:20px;border-bottom:2px solid #3FB2F4;padding-bottom:10px;background:rgba(63,178,244,0.1);border-radius:10px;transition:transform 0.6s ease;&:hover{transform:rotateY(360deg);transition:transform 0.5s ease-in-out;}"]);
const BodyText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "GridProjects__BodyText"
})(["max-width:800px;font-size:1.2rem;line-height:1.6;color:#fff;margin:0 auto;padding:0 20px;font-family:\"Open Sans\",sans-serif;"]);
const FeaturesList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "GridProjects__FeaturesList"
})(["list-style-type:none;padding:0;margin:30px 0;font-family:\"Open Sans\",sans-serif;li{font-size:1.1rem;color:#fff;margin:10px 0;}"]);
const Example = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "GridProjects__Example"
})(["font-size:1.1rem;color:#fff;margin-top:20px;max-width:800px;margin:0 auto;padding:0 20px;font-family:\"Open Sans\",sans-serif;"]);
const Visual = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "GridProjects__Visual"
})(["margin:30px 0;img{max-width:100%;height:auto;border-radius:10px;box-shadow:0px 16px 32px rgba(99,30,187,0.2);}"]);

/***/ }),

/***/ "./src/components/sections/GridSection.tsx":
/*!*************************************************!*\
  !*** ./src/components/sections/GridSection.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


function ContentStep() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    id: "ContentUpload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "Organize Your Content in One Place"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BodyText, null, "Our system starts by allowing you to upload and store all your company\u2019s content in a database that works much like Notion. Whether your company is big or small, you\u2019ll have a flexible space to organize your content. From images, documents, posts, and more, everything is centralized."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeaturesList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Easy-to-use content management dashboard."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Flexible folder structure for content categorization."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Multi-user access and permissions for team collaboration.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Visual, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/path/to/mockup.png",
    alt: "Content Management Interface"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentStep);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "GridSection__Wrapper"
})(["position:relative;display:flex;flex-direction:column;max-width:1200px;margin:0 auto;margin-top:160px;text-align:center;gap:20px;padding:50px 20px;font-family:\"Orbitron\",sans-serif;background:rgba(63,178,244,0.1);border-radius:20px;box-shadow:0px 16px 32px rgba(63,176,244,0.2);"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "GridSection__Title"
})(["font-style:normal;font-size:2.5rem;font-weight:bold;line-height:130%;text-transform:uppercase;color:#3FB2F4;margin:0 auto;margin-bottom:20px;border-bottom:2px solid #3FB2F4;padding-bottom:10px;background:rgba(63,178,244,0.1);border-radius:10px;transition:transform 0.6s ease;&:hover{transform:rotateY(360deg);transition:transform 0.5s ease-in-out;}"]);
const BodyText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "GridSection__BodyText"
})(["max-width:800px;font-size:1.2rem;line-height:1.6;color:#fff;margin:0 auto;padding:0 20px;font-family:\"Open Sans\",sans-serif;"]);
const FeaturesList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "GridSection__FeaturesList"
})(["list-style-type:none;padding:0;margin:30px 0;font-family:\"Open Sans\",sans-serif;li{font-size:1.1rem;color:#fff;margin:10px 0;}"]);
const Visual = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "GridSection__Visual"
})(["margin:30px 0;img{max-width:100%;height:auto;border-radius:10px;box-shadow:0px 16px 32px rgba(99,30,187,0.2);}"]);

/***/ }),

/***/ "./src/components/tooltip/MenuTooltip.tsx":
/*!************************************************!*\
  !*** ./src/components/tooltip/MenuTooltip.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_menuData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/menuData */ "./src/components/data/menuData.ts");
/* harmony import */ var _buttons_MenuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons/MenuButton */ "./src/components/buttons/MenuButton.tsx");




function MenuTooltip(props) {
  const {
    isOpen
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    isOpen: isOpen
  }, _data_menuData__WEBPACK_IMPORTED_MODULE_1__.tooltipData.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons_MenuButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: item,
    key: index
  })));
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuTooltip__Wrapper"
})(["background:rgba(15,14,71,0.3);box-shadow:0px 50px 100px rgba(0,0,0,0.25),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);backdrop-filter:blur(40px);border-radius:20px;padding:20px;position:absolute;top:60px;right:150px;opacity:", ";z-index:1;display:grid;gap:10px;grid-template-columns:150px;transition:0.3s ease-in-out;visibility:", ";transform:", ";"], props => props.isOpen ? 1 : 0, props => props.isOpen ? "visible" : "hidden", props => props.isOpen ? "skewY(0deg) rotate(0deg) translateY(0px)" : "skewY(-5deg) rotate(5deg) translateY(-30px)");

/***/ }),

/***/ "./src/pages/index.tsx?export=default":
/*!********************************************!*\
  !*** ./src/pages/index.tsx?export=default ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/useWindowSize.js");
/* harmony import */ var _components_layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout.css */ "./src/components/layout.css");
/* harmony import */ var _components_layout_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_layout_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/components/header */ "./src/components/header.tsx");
/* harmony import */ var _components_cards_CourseCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cards/CourseCard */ "./src/components/cards/CourseCard.tsx");
/* harmony import */ var _components_sections_GridSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/GridSection */ "./src/components/sections/GridSection.tsx");
/* harmony import */ var _components_sections_ClickProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/ClickProjects */ "./src/components/sections/ClickProjects.tsx");
/* harmony import */ var _components_sections_GridProjects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/GridProjects */ "./src/components/sections/GridProjects.tsx");
/* harmony import */ var _components_sections_BioSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/BioSection */ "./src/components/sections/BioSection.tsx");
/* harmony import */ var _components_buttons_PurchaseButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/buttons/PurchaseButton */ "./src/components/buttons/PurchaseButton.tsx");













const IndexPage = () => {
  const {
    width
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Replace the old Vanta and Three.js script with the new p5.js and Topology script
    const scriptP5 = document.createElement("script");
    scriptP5.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
    scriptP5.async = true;
    document.body.appendChild(scriptP5);
    const scriptTopology = document.createElement("script");
    scriptTopology.src = "https://cdn.jsdelivr.net/npm/vanta/dist/vanta.topology.min.js";
    scriptTopology.async = true;
    document.body.appendChild(scriptTopology);
    scriptTopology.onload = () => {
      if (window.VANTA) {
        window.VANTA.TOPOLOGY({
          el: "#my-background",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xc62ceb,
          backgroundColor: 0x80022
        });
      }
    };
    return () => {
      document.body.removeChild(scriptP5);
      document.body.removeChild(scriptTopology);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, {
    id: "my-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContainerWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeroWrapper, {
    id: "my-background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_cards_CourseCard__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoCon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoCon2, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title, {
    className: "animate__animated animate__lightSpeedInRight illustration"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HoverableWord, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HoverableWord, null, "Automate Your Content Workflow")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_buttons_PurchaseButton__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SmallText, null, "\u201CFrom content creation to publication, Nex AI connects your company\u2019s data with the power of artificial intelligence for a seamless, automated process.\u201D"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "click-projects"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_ClickProjects__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "Skills"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_GridSection__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "Projects"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider2, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_GridProjects__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "Bio"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider3, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_BioSection__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

// Styled components remain unchanged as before

// Styled components
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__Wrapper"
})(["background:linear-gradient(180.44deg,#0C0D31 25.57%,#000000);font-family:\"Orbitron\",sans-serif;font-optical-sizing:auto;height:10000px;@keyframes HeroAnimation{0%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0px);}}"]);
const ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__ContainerWrapper"
})(["margin-top:90px;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__ContentWrapper"
})(["overflow:hidden;"]);
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__TextWrapper"
})(["position:relative;display:grid;gap:20px;margin-top:-142px;margin-left:20px;@media (max-width:768px){justify-items:center;text-align:center;margin-left:0;margin-top:36px;}"]);
const AuthorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__AuthorWrapper"
})(["display:flex;align-items:center;gap:16px;"]);
const HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__HeroWrapper"
})(["display:grid;max-width:1234px;grid-template-columns:360px auto;gap:60px;padding:200px 20px 0px;justify-content:center;margin:0 auto;margin-bottom:60px;.courseCard{margin-top:74px;}@media (max-width:780px){grid-template-columns:1fr;justify-items:center;padding-top:150px;}"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img.withConfig({
  displayName: "pages__Logo"
})(["width:84px;height:84px;margin-right:18px;margin-top:17px;@media (max-width:768px){width:64px;height:64px;}@media (max-width:480px){width:50px;height:50px;}"]);
const LogoCon = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__LogoCon"
})(["transition:transform 0.6s ease;transform-style:preserve-3d;&:hover{transform:translateY(-20px);}"]);
const Logo2 = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img.withConfig({
  displayName: "pages__Logo2"
})(["width:120px;height:120px;@media (max-width:768px){width:93px;height:93px;margin-top:3px;}@media (max-width:480px){width:70px;height:70px;margin-top:8px;}"]);
const LogoCon2 = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__LogoCon2"
})(["transition:transform 0.6s ease;transform-style:preserve-3d;&:hover{transform:translateY(-20px);}"]);
const LogoWrap = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__LogoWrap"
})(["display:flex;margin-left:-28px;@media (max-width:1920px){margin-left:0;margin-top:0;}@media (max-width:768px){margin-left:0;margin-top:50px;}@media (max-width:480px){margin-top:30px;}.animate__fadeInDownBig{animation-duration:1.3s;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h1.withConfig({
  displayName: "pages__Title"
})(["max-width:500px;font-size:40px;line-height:72px;margin-top:-40px;color:#ffffff;mix-blend-mode:normal;text-shadow:0px 20px 40px rgba(0,0,0,0.1);animation-duration:1.4s;text-align:center;@media (max-width:768px){font-size:40px;line-height:50px;text-align:center;}@media (max-width:480px){font-size:32px;line-height:40px;}"]);
const HoverableWord = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].span.withConfig({
  displayName: "pages__HoverableWord"
})(["display:inline-block;transition:transform 0.5s ease;&:hover{transform:translateY(-10px);}box-shadow:0px 0px 105px 45px rgba(251,255,138,0.03);border-radius:7px;"]);
const SmallText = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p.withConfig({
  displayName: "pages__SmallText"
})(["max-width:285px;font-size:13px;font-family:\"SUSE\",sans-serif;line-height:200%;color:#9EE0EC;animation:HeroAnimation 3s ease;@media (max-width:768px){text-align:center;}@media (max-width:480px){font-size:11px;}"]);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__Divider"
})(["width:300px;height:0.5px;background:rgba(255,255,255,0.3);margin:54px auto;@media (max-width:768px){margin:100px auto 20px;}@media (max-width:480px){margin:80px auto 16px;}"]);
const Divider2 = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__Divider2"
})(["width:300px;height:0.5px;background:rgba(255,255,255,0.3);margin:70px auto 32px;margin-bottom:93px;@media (max-width:768px){margin:60px auto 20px;}@media (max-width:480px){margin:60px auto 16px;}"]);
const Divider3 = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__Divider3"
})(["width:300px;height:0.5px;background:rgba(255,255,255,0.3);margin:87px auto 32px;@media (max-width:768px){margin:60px auto 20px;}@media (max-width:480px){margin:40px auto 16px;}"]);

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/layout.css":
/*!***********************************!*\
  !*** ./src/components/layout.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-use/esm/misc/util.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/misc/util.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBrowser: () => (/* binding */ isBrowser),
/* harmony export */   isNavigator: () => (/* binding */ isNavigator),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   off: () => (/* binding */ off),
/* harmony export */   on: () => (/* binding */ on)
/* harmony export */ });
var noop = function () { };
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
var isBrowser = typeof window !== 'undefined';
var isNavigator = typeof navigator !== 'undefined';


/***/ }),

/***/ "./node_modules/react-use/esm/useEffectOnce.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useEffectOnce.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEffectOnce = function (effect) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEffectOnce);


/***/ }),

/***/ "./node_modules/react-use/esm/useRafState.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useRafState.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "./node_modules/react-use/esm/useUnmount.js");


var useRafState = function (initialState) {
    var frame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), state = _a[0], setState = _a[1];
    var setRafState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    (0,_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafState);


/***/ }),

/***/ "./node_modules/react-use/esm/useUnmount.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useUnmount.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "./node_modules/react-use/esm/useEffectOnce.js");


var useUnmount = function (fn) {
    var fnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () { return function () { return fnRef.current(); }; });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUnmount);


/***/ }),

/***/ "./node_modules/react-use/esm/useWindowSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useWindowSize.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "./node_modules/react-use/esm/useRafState.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "./node_modules/react-use/esm/misc/util.js");



var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = (0,_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        width: _misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser ? window.innerWidth : initialWidth,
        height: _misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (_misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'resize', handler_1);
            return function () {
                (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.off)(window, 'resize', handler_1);
            };
        }
    }, []);
    return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowSize);


/***/ }),

/***/ "./src/images/icons/certificates.svg":
/*!*******************************************!*\
  !*** ./src/images/icons/certificates.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDEyTDEyIDVMOCAxMkwzIDVMNCAxOEgyMEwyMSA1TDE2IDEyWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNSAyMUgyLjVDMi4yMiAyMSAyIDIwLjc4IDIgMjAuNVYxOC41QzIgMTguMjIgMi4yMiAxOCAyLjUgMThIMjEuNUMyMS43OCAxOCAyMiAxOC4yMiAyMiAxOC41VjIwLjVDMjIgMjAuNzggMjEuNzggMjEgMjEuNSAyMVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNiIvPgo8cGF0aCBkPSJNMyA1QzMuNTUyMjggNSA0IDQuNTUyMjggNCA0QzQgMy40NDc3MiAzLjU1MjI4IDMgMyAzQzIuNDQ3NzIgMyAyIDMuNDQ3NzIgMiA0QzIgNC41NTIyOCAyLjQ0NzcyIDUgMyA1WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGQ9Ik0yMSA1QzIxLjU1MjMgNSAyMiA0LjU1MjI4IDIyIDRDMjIgMy40NDc3MiAyMS41NTIzIDMgMjEgM0MyMC40NDc3IDMgMjAgMy40NDc3MiAyMCA0QzIwIDQuNTUyMjggMjAuNDQ3NyA1IDIxIDVaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZD0iTTEyIDVDMTIuNTUyMyA1IDEzIDQuNTUyMjggMTMgNEMxMyAzLjQ0NzcyIDEyLjU1MjMgMyAxMiAzQzExLjQ0NzcgMyAxMSAzLjQ0NzcyIDExIDRDMTEgNC41NTIyOCAxMS40NDc3IDUgMTIgNVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/images/icons/check.svg":
/*!************************************!*\
  !*** ./src/images/icons/check.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMzM5ODQgMTIuNzRMOC40Njk4NCAxOC44NyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjQ2OTczIDE4Ljg3TDIyLjMzOTcgNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/icons/courses.svg":
/*!**************************************!*\
  !*** ./src/images/icons/courses.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIxSDNDMi40NSAyMSAyIDIwLjU1IDIgMjBWNEMyIDMuNDUgMi40NSAzIDMgM0gxMlYyMVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8cGF0aCBkPSJNMjEgMjFIMTJWM0gyMUMyMS41NSAzIDIyIDMuNDUgMjIgNFYyMEMyMiAyMC41NSAyMS41NSAyMSAyMSAyMVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8cGF0aCBkPSJNNCAxMkgxMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNNCA4SDEwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik00IDE2SDEwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0xNCAxMkgyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMTQgOEgyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/images/icons/hamburger.svg":
/*!****************************************!*\
  !*** ./src/images/icons/hamburger.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNkgyMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMiAxMkgxNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMiAxOEgyMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/images/icons/icon-ring.svg":
/*!****************************************!*\
  !*** ./src/images/icons/icon-ring.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCA4NiA3NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8Y2lyY2xlIGN4PSIzOC41IiBjeT0iMzcuNSIgcj0iMjYuNSIgc3Ryb2tlPSJ1cmwoI3BhaW50MF9hbmd1bGFyKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjMgMjAgOCAxIDEwIDgiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSItOSIgeT0iMCIgd2lkdGg9Ijk1IiBoZWlnaHQ9Ijk1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iMTAiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC43MTM3MjYgMCAwIDAgMCAwLjYgMCAwIDAgMCAxIDAgMCAwIDAuMyAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9hbmd1bGFyIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDM4LjUgMzcuNSkgcm90YXRlKDEwNy45MDQpIHNjYWxlKDM0LjE1NDEpIj4KPHN0b3Agb2Zmc2V0PSIwLjA4NzA4MjIiIHN0b3AtY29sb3I9IiM4NDRGRkMiLz4KPHN0b3Agb2Zmc2V0PSIwLjY5MTkxIiBzdG9wLWNvbG9yPSIjRTE0NjdDIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/icons/logo3.png":
/*!************************************!*\
  !*** ./src/images/icons/logo3.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/logo3-e025cc107333cd709fe70a6752f19319.png");

/***/ }),

/***/ "./src/images/icons/profile.svg":
/*!**************************************!*\
  !*** ./src/images/icons/profile.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDEwVjIySDRWMkgxNCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjxwYXRoIGQ9Ik0xOCAxOEg4VjE3QzggMTQuMjQgMTAuMjQgMTIgMTMgMTJDMTUuNzYgMTIgMTggMTQuMjQgMTggMTdWMThaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZD0iTTEzIDEyQzE0LjY1NjkgMTIgMTYgMTAuNjU2OSAxNiA5QzE2IDcuMzQzMTUgMTQuNjU2OSA2IDEzIDZDMTEuMzQzMSA2IDEwIDcuMzQzMTUgMTAgOUMxMCAxMC42NTY5IDExLjM0MzEgMTIgMTMgMTJaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZD0iTTUgMTEuNUgyVjEyLjVINVYxMS41WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01IDE4SDJWMTlINVYxOFoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNSA1SDJWNkg1VjVaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3LjU5OTYgMy4zNDk5TDE5LjM5OTYgNS4xNDk5TDIyLjM5OTYgMi4xNDk5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/icons/settings.svg":
/*!***************************************!*\
  !*** ./src/images/icons/settings.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi44Njk2IDIuODlMMTIuNTU5NiAwLjQ0QzEyLjUyOTYgMC4xOSAxMi4zMTk2IDAgMTIuMDU5NiAwSDguOTQ5NjJDOC42OTk2MiAwIDguNDc5NjIgMC4xOSA4LjQ0OTYyIDAuNDRMOC4xNzk2MiAyLjU5QzguMTU5NjIgMi43NyA4LjAyOTYyIDIuOTMgNy44NTk2MiAyLjk5QzcuMDE5NjIgMy4zIDYuMjE5NjIgMy43OCA1LjUyOTYyIDQuNEwzLjI0OTYyIDMuNDRDMy4wMTk2MiAzLjM0IDIuNzQ5NjIgMy40MyAyLjYxOTYyIDMuNjVMMS4wNTk2MiA2LjM1QzAuOTM5NjE3IDYuNTcgMC45OTk2MTcgNi44NSAxLjE5OTYyIDdMMy4xNjk2MiA4LjQ5QzIuOTU5NjIgOS41IDIuOTU5NjIgMTAuNTMgMy4xNTk2MiAxMS41MUgzLjE2OTYyTDEuMTk5NjIgMTNDMC45OTk2MTcgMTMuMTUgMC45Mzk2MTcgMTMuNDMgMS4wNjk2MiAxMy42NUwyLjYyOTYyIDE2LjM1QzIuNzU5NjIgMTYuNTcgMy4wMjk2MiAxNi42NiAzLjI1OTYyIDE2LjU2TDUuNTM5NjIgMTUuNkw1LjUyOTYyIDE1LjYxQzUuODk5NjIgMTUuOTQgNi4zMTk2MiAxNi4yNCA2Ljc2OTYyIDE2LjVDNy4yMTk2MiAxNi43NiA3LjY3OTYyIDE2Ljk3IDguMTU5NjIgMTcuMTNWMTcuMTFMOC40Njk2MiAxOS41NkM4LjQ3OTYyIDE5LjgxIDguNjk5NjIgMjAgOC45NDk2MiAyMEgxMi4wNjk2QzEyLjMxOTYgMjAgMTIuNTI5NiAxOS44MSAxMi41Njk2IDE5LjU2TDEyLjgzOTYgMTcuNDFDMTIuODU5NiAxNy4yMyAxMi45ODk2IDE3LjA3IDEzLjE1OTYgMTcuMDFDMTMuOTk5NiAxNi43IDE0Ljc5OTYgMTYuMjIgMTUuNDg5NiAxNS42TDE3Ljc2OTYgMTYuNTZDMTcuOTk5NiAxNi42NiAxOC4yNjk2IDE2LjU3IDE4LjM5OTYgMTYuMzVMMTkuOTU5NiAxMy42NUMyMC4wODk2IDEzLjQzIDIwLjAyOTYgMTMuMTUgMTkuODI5NiAxM0wxNy44NTk2IDExLjUxQzE4LjA2OTYgMTAuNSAxOC4wNjk2IDkuNDcgMTcuODY5NiA4LjQ5SDE3Ljg1OTZMMTkuODA5NiA3QzIwLjAwOTYgNi44NSAyMC4wNjk2IDYuNTcgMTkuOTM5NiA2LjM1TDE4LjM3OTYgMy42NUMxOC4yNDk2IDMuNDMgMTcuOTc5NiAzLjM0IDE3Ljc0OTYgMy40NEwxNS40Nzk2IDQuNEwxNS40ODk2IDQuMzlDMTUuMTE5NiA0LjA2IDE0LjY5OTYgMy43NiAxNC4yNDk2IDMuNUMxMy43OTk2IDMuMjQgMTMuMzM5NiAzLjAzIDEyLjg1OTYgMi44NyIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjxwYXRoIGQ9Ik0xMC41MDk4IDE0QzEyLjcxODkgMTQgMTQuNTA5OCAxMi4yMDkxIDE0LjUwOTggMTBDMTQuNTA5OCA3Ljc5MDg2IDEyLjcxODkgNiAxMC41MDk4IDZDOC4zMDA2MyA2IDYuNTA5NzcgNy43OTA4NiA2LjUwOTc3IDEwQzYuNTA5NzcgMTIuMjA5MSA4LjMwMDYzIDE0IDEwLjUwOTggMTRaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/icons/signout.svg":
/*!**************************************!*\
  !*** ./src/images/icons/signout.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDExLjY2VjIxQzE4IDIxLjU1IDE3LjU1IDIyIDE3IDIySDNDMi40NSAyMiAyIDIxLjU1IDIgMjFWN0MyIDYuNDUgMi40NSA2IDMgNkgxMi4zNCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDAwNCAxLjM5OTlDMTUuNjY5IDEuMzk5OSAxNS40MDA0IDEuNjY4NTMgMTUuNDAwNCAxLjk5OTlDMTUuNDAwNCAyLjMzMTI3IDE1LjY2OSAyLjU5OTkgMTYuMDAwNCAyLjU5OTlIMjAuNTUxOUw5LjU3NjEzIDEzLjU3NTZDOS4zNDE4MSAxMy44MSA5LjM0MTgxIDE0LjE4OTkgOS41NzYxMyAxNC40MjQyQzkuODEwNDQgMTQuNjU4NSAxMC4xOTAzIDE0LjY1ODUgMTAuNDI0NyAxNC40MjQyTDIxLjQwMDQgMy40NDg0M1Y3Ljk5OTlDMjEuNDAwNCA4LjMzMTI3IDIxLjY2OSA4LjU5OTkgMjIuMDAwNCA4LjU5OTlDMjIuMzMxOCA4LjU5OTkgMjIuNjAwNCA4LjMzMTI3IDIyLjYwMDQgNy45OTk5VjEuOTk5OUMyMi42MDA0IDEuNjY4NTMgMjIuMzMxOCAxLjM5OTkgMjIuMDAwNCAxLjM5OTlIMTYuMDAwNFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/images/icons/tutorials.svg":
/*!****************************************!*\
  !*** ./src/images/icons/tutorials.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjAwMDIgMkM4LjY2MDE2IDIgNS43MTAxNiAzLjcyIDUuNzYwMTYgOC4xNkwyLjA0MDE2IDEyLjk4QzEuOTMwMTYgMTMuMTIgMi4wNjAxNiAxMy4zIDIuMjYwMTYgMTMuM0w0Ljc0MDE2IDE0LjUzQzQuODcwMTYgMTUuNDUgNS4zNTAxNiAxOC4xMyA1LjYxMDE2IDE5LjQ3QzUuNzAwMTYgMTkuODkgOS44MDAxNiAxOS41NyA5LjgwMDE2IDE5LjU3TDExLjAwMDIgMjIiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ljg0NDcgMi4yMDIyNEMxNS45NTYzIDEuODkwMjUgMTUuNzkzOSAxLjU0NjgyIDE1LjQ4MTkgMS40MzUxNkMxNS4xNyAxLjMyMzUgMTQuODI2NSAxLjQ4NTkgMTQuNzE0OSAxLjc5Nzg5TDEzLjY5NDkgNC42NDc4OUMxMy41ODMyIDQuOTU5ODggMTMuNzQ1NiA1LjMwMzMyIDE0LjA1NzYgNS40MTQ5OEMxNC4zNjk2IDUuNTI2NjQgMTQuNzEzIDUuMzY0MjQgMTQuODI0NyA1LjA1MjI0TDE1Ljg0NDcgMi4yMDIyNFpNMjIuMDQ5MSA1LjIyMDM5QzIyLjMxNDQgNS4wMjE4MiAyMi4zNjg0IDQuNjQ1NzkgMjIuMTY5OSA0LjM4MDUxQzIxLjk3MTMgNC4xMTUyMiAyMS41OTUzIDQuMDYxMTQgMjEuMzMgNC4yNTk3MkwxNy45MSA2LjgxOTcyQzE3LjY0NDcgNy4wMTgyOSAxNy41OTA2IDcuMzk0MzIgMTcuNzg5MiA3LjY1OTYxQzE3Ljk4NzggNy45MjQ4OSAxOC4zNjM4IDcuOTc4OTcgMTguNjI5MSA3Ljc4MDM5TDIyLjA0OTEgNS4yMjAzOVpNMTguMTMxMSAxMS44MjYxQzE4LjE1NTQgMTEuNDk1NyAxOC40NDI5IDExLjI0NzQgMTguNzczNCAxMS4yNzE3TDIyLjA0MzQgMTEuNTExN0MyMi4zNzM5IDExLjUzNTkgMjIuNjIyMSAxMS44MjM1IDIyLjU5NzkgMTIuMTU0QzIyLjU3MzYgMTIuNDg0NSAyMi4yODYxIDEyLjczMjcgMjEuOTU1NiAxMi43MDg1TDE4LjY4NTYgMTIuNDY4NUMxOC4zNTUxIDEyLjQ0NDIgMTguMTA2OCAxMi4xNTY2IDE4LjEzMTEgMTEuODI2MVpNMTEuNzE5NyAxNy4zMTAxQzExLjM4ODQgMTcuMzEwMSAxMS4xMTk3IDE3LjU3ODcgMTEuMTE5NyAxNy45MTAxQzExLjExOTcgMTguMjQxNSAxMS4zODg0IDE4LjUxMDEgMTEuNzE5NyAxOC41MTAxSDE0LjM0OTdDMTQuNjgxMSAxOC41MTAxIDE0Ljk0OTcgMTguMjQxNSAxNC45NDk3IDE3LjkxMDFDMTQuOTQ5NyAxNy41Nzg3IDE0LjY4MTEgMTcuMzEwMSAxNC4zNDk3IDE3LjMxMDFIMTEuNzE5N1pNMTEuMTE5NyAxNS4zM0MxMS4xMTk3IDE0Ljk5ODcgMTEuMzg4NCAxNC43MyAxMS43MTk3IDE0LjczSDExLjg3OTFDMTAuNTU5OSAxMy42MjI3IDguNzUzODYgMTEuMTkzIDEwLjIyOTggOS4yNTAwOUMxMS42Njk4IDcuMzYwMDkgMTQuMzk5OCA3LjM2MDA5IDE1LjgzOTggOS4yNTAwOUMxNy4zMTQyIDExLjE5MSAxNS41MjA0IDEzLjYyNDUgMTQuMTk4MSAxNC43M0gxNC4zNDk3QzE0LjY4MTEgMTQuNzMgMTQuOTQ5NyAxNC45OTg3IDE0Ljk0OTcgMTUuMzNDMTQuOTQ5NyAxNS42NjE0IDE0LjY4MTEgMTUuOTMgMTQuMzQ5NyAxNS45M0gxMS43MTk3QzExLjM4ODQgMTUuOTMgMTEuMTE5NyAxNS42NjE0IDExLjExOTcgMTUuMzNaTTEzLjYzOTggMTQuNzNWMTIuMTc0OEMxMy45MTgzIDExLjk3NTIgMTQuMDk5OCAxMS42NDg5IDE0LjA5OTggMTEuMjgwMUMxNC4wOTk4IDEwLjY3MjYgMTMuNjA3MyAxMC4xODAxIDEyLjk5OTggMTAuMTgwMUMxMi4zOTIzIDEwLjE4MDEgMTEuODk5OCAxMC42NzI2IDExLjg5OTggMTEuMjgwMUMxMS44OTk4IDExLjY4MzEgMTIuMTE2NSAxMi4wMzU1IDEyLjQzOTggMTIuMjI3MVYxNC43M0gxMy42Mzk4Wk0xMi45NzI3IDExLjE4MzhDMTIuOTg1NSAxMS4xODI0IDEyLjk5ODQgMTEuMTgxNCAxMy4wMTE0IDExLjE4MDhDMTMuMDA3NiAxMS4xODAzIDEzLjAwMzcgMTEuMTgwMSAxMi45OTk4IDExLjE4MDFDMTIuOTkwNCAxMS4xODAxIDEyLjk4MTMgMTEuMTgxNCAxMi45NzI3IDExLjE4MzhaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/images/illustrations/illustration-1.png":
/*!*****************************************************!*\
  !*** ./src/images/illustrations/illustration-1.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/illustration-1-aeba7113093971486f824611dde7e134.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map