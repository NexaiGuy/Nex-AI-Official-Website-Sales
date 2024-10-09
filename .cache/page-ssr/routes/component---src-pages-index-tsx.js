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
    clickProjects === null || clickProjects === void 0 ? void 0 : clickProjects.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#LearnHow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Ring, {
    src: _src_images_icons_icon_ring_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Icon Ring"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    src: _src_images_icons_check_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Credit Icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "\"Who are we\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Subtitle, null, "Scroll Down"))));
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
})(["position:absolute;top:-15px;left:-16.01px;transition:transform 0.3s ease;filter:hue-rotate(240deg) brightness(1.2) saturate(1.5);", ":hover &{transform:rotate(30deg) scale(1.1) translate(1px,1px);}"], Wrapper);
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





const menuData = [{
  title: "How It Works",
  icon: _src_images_icons_courses_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  link: "#HowItWorks"
}, {
  title: "Your Control",
  icon: _src_images_icons_tutorials_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  link: "#YourControl"
}, {
  title: "About",
  icon: _src_images_icons_certificates_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  link: "#About"
}, {
  title: "Contact",
  icon: _src_images_icons_profile_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  link: "/contact"
}, {
  title: "",
  icon: _src_images_icons_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  link: "/account"
}];
const tooltipData = [{
  title: "How It Works",
  icon: _src_images_icons_courses_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  link: "#HowItWorks"
}, {
  title: "Your Control",
  icon: _src_images_icons_tutorials_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  link: "#YourControl"
}, {
  title: "About",
  icon: _src_images_icons_certificates_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  link: "#About"
}, {
  title: "Contact",
  icon: _src_images_icons_profile_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  link: "#Contact"
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
    $count: _data_menuData__WEBPACK_IMPORTED_MODULE_2__.menuData.length,
    ref: ref
  }, " ", _data_menuData__WEBPACK_IMPORTED_MODULE_2__.menuData.map((item, index) => item.link === "/account" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_buttons_MenuButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
})(["display:grid;gap:30px;grid-template-columns:repeat(", ",auto);a{transition:transform 0.3s ease-in-out;}a:hover{transform:translateY(-10px);}@media (max-width:768px){> a{display:none;}grid-template-columns:auto;}"], props => props.$count);
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
})(["position:relative;display:flex;flex-direction:column;max-width:1200px;margin:0 auto;margin-top:160px;text-align:center;gap:20px;padding:50px 20px;font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;background:rgba(183,36,229,0.1);border-radius:20px;box-shadow:0px 16px 32px rgba(183,36,229,0.2),0px 0px 8px 2px rgba(180,35,227,0.5);"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "BioSection__Title"
})(["font-size:2.5rem;font-weight:700;line-height:130%;text-transform:uppercase;color:#24B7A5;margin-bottom:20px;border-bottom:2px solid #B724E5;padding-bottom:10px;background:rgba(36,183,165,0.1);border-radius:10px;transition:transform 0.6s ease;box-shadow:0px 0px 8px 2px rgba(180,35,227,0.5);&:hover{transform:rotateY(360deg);transition:transform 0.5s ease-in-out;}"]);
const BodyText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "BioSection__BodyText"
})(["max-width:800px;font-size:1.2rem;line-height:1.6;color:#fff;margin:0 auto;padding:0 20px;font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;"]);
const TeamTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "BioSection__TeamTitle"
})(["font-size:2rem;font-weight:700;line-height:130%;text-transform:uppercase;color:#24B7A5;margin-bottom:20px;border-bottom:2px solid #B724E5;padding:0 40px 0 40px;background:rgba(36,183,165,0.1);border-radius:10px;box-shadow:0px 0px 8px 2px rgba(180,35,227,0.5);"]);
const TeamBodyText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "BioSection__TeamBodyText"
})(["max-width:800px;font-size:1.1rem;line-height:1.6;color:#fff;margin:0 auto;padding:0 20px;font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;"]);
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _src_images_illustrations_NotionHomepage_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/images/illustrations/NotionHomepage.png */ "./src/images/illustrations/NotionHomepage.png");



function OverviewNexAI() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title, null, "What is Nex AI?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BodyText, null, "Nex AI is an automation solution designed to simplify your content management and publishing process. We build a custom system that allows companies to upload and manage their content just like in \u2018Notion,\u2019 and integrate it with powerful AI tools like ChatGPT, Perplexity.ai, and platforms like Make.com to automate and optimize content across various channels."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Image, {
    src: _src_images_illustrations_NotionHomepage_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Nex AI Overview Image",
    style: {
      width: '600px',
      height: '360px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeaturesList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Upload and organize content with ease."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Automate content workflows with AI-driven tools."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Gain full control over the content before it is published."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Save time, effort, and resources by integrating everything in one place.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CTAButton, {
    href: "#HowItWorks"
  }, "See How It Works"));
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ClickProjects__Wrapper"
})(["position:relative;display:flex;flex-direction:column;max-width:1200px;margin:160px auto;margin-bottom:70px;text-align:center;gap:20px;padding:50px 20px;font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;background:rgba(183,36,229,0.1);border-radius:20px;box-shadow:0px 16px 32px rgba(183,36,229,0.2),0px 0px 8px 2px rgba(180,35,227,0.5);"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "ClickProjects__Title"
})(["font-size:2.5rem;font-weight:700;line-height:150%;text-transform:uppercase;color:#24B7A5;margin:0 auto;margin-bottom:20px;border-bottom:2px solid #B724E5;padding:0 40px 0 40px;background:rgba(36,183,165,0.1);border-radius:10px;transition:transform 0.6s ease;box-shadow:0px 0px 8px 2px rgba(180,35,227,0.5);&:hover{transform:rotateY(360deg);transition:transform 0.5s ease-in-out;}"]);
const BodyText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "ClickProjects__BodyText"
})(["max-width:800px;font-size:1.2rem;line-height:1.6;color:#fff;margin:0 auto;padding:0 20px;font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "ClickProjects__Image"
})(["max-width:100%;height:auto;margin:20px auto;border-radius:15px;border-radius:20px;box-shadow:0px 16px 32px rgba(183,36,229,0.2),0px 0px 8px 2px rgba(180,35,227,0.5);transition:transform 2s;&:hover{transform:scale(1.26);}"]);
const FeaturesList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "ClickProjects__FeaturesList"
})(["list-style-type:none;padding:0;margin-bottom:40px;li{font-size:1.1rem;color:#fff;margin:10px 0;text-align:center;}"]);
const CTAButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "ClickProjects__CTAButton"
})(["display:inline-block;background-color:#B724E5;color:#fff;margin:0 auto;padding:15px 30px;border-radius:8px;text-decoration:none;font-size:1.2rem;font-weight:500;transition:background-color 0.3s ease;box-shadow:0px 0px 8px 2px rgba(180,35,227,0.5);&:hover{background-color:#d24ff0;}"]);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _src_images_illustrations_BufferManage_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/images/illustrations/BufferManage.png */ "./src/images/illustrations/BufferManage.png");



function FinalControlSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "Complete Control Before Publishing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BodyText, null, "Before your content is posted online, Nex AI ensures that everything is under your control. Our system connects with a final platform where you can review, edit, and approve all content before it goes live."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeaturesList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Final approval dashboard to check all content."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Schedule or manually publish content to ensure it aligns with your company\u2019s strategies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Custom rules and permissions to ensure only approved content is published.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Example, null, "Imagine you\u2019ve scheduled a month\u2019s worth of social media content. Before anything is posted, you have the chance to review every post, ensuring they meet your standards and vision."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Visual, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, {
    src: _src_images_illustrations_BufferManage_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Final Approval Interface",
    style: {
      width: '600px',
      height: '360px'
    }
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinalControlSection);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "GridProjects__Wrapper"
})(["position:relative;display:flex;flex-direction:column;max-width:1200px;margin:0 auto;margin-top:160px;text-align:center;gap:20px;padding:50px 20px;font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;background:rgba(183,36,229,0.1);border-radius:20px;box-shadow:0px 16px 32px rgba(183,36,229,0.2),0px 0px 8px 2px rgba(180,35,227,0.5);"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "GridProjects__Title"
})(["font-size:2.5rem;font-weight:700;line-height:130%;text-transform:uppercase;color:#24B7A5;margin:0 auto;margin-bottom:20px;border-bottom:2px solid #B724E5;padding:0 40px 0 40px;background:rgba(36,183,165,0.1);border-radius:10px;transition:transform 0.6s ease;box-shadow:0px 0px 8px 2px rgba(180,35,227,0.5);&:hover{transform:rotateY(360deg);transition:transform 0.5s ease-in-out;}"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "GridProjects__Image"
})(["max-width:100%;height:auto;margin:20px auto;border-radius:15px;border-radius:20px;box-shadow:0px 16px 32px rgba(183,36,229,0.2),0px 0px 8px 2px rgba(180,35,227,0.5);transition:transform 2s;&:hover{transform:scale(1.26);}"]);
const BodyText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "GridProjects__BodyText"
})(["max-width:800px;font-size:1.2rem;line-height:1.6;color:#fff;margin:0 auto;padding:0 20px;font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;"]);
const FeaturesList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "GridProjects__FeaturesList"
})(["list-style-type:none;padding:0;margin:30px 0;li{font-size:1.1rem;color:#fff;margin:10px 0;}"]);
const Example = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "GridProjects__Example"
})(["font-size:1.1rem;color:#fff;margin-top:20px;max-width:800px;margin:0 auto;padding:0 20px;font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;"]);
const Visual = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "GridProjects__Visual"
})(["margin:30px 0;img{max-width:100%;height:auto;border-radius:10px;box-shadow:0px 16px 32px rgba(183,36,229,0.2),0px 0px 8px 2px rgba(180,35,227,0.5);}"]);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _src_images_illustrations_NotionTemplate_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/images/illustrations/NotionTemplate.png */ "./src/images/illustrations/NotionTemplate.png");



function ContentStep() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    id: "ContentUpload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "Organize Your Content in One Place"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BodyText, null, "Our system starts by allowing you to upload and store all your company\u2019s content in a database that works much like Notion. Whether your company is big or small, you\u2019ll have a flexible space to organize your content. From images, documents, posts, and more, everything is centralized."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeaturesList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Easy-to-use content management dashboard."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Flexible folder structure for content categorization."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Multi-user access and permissions for team collaboration.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Visual, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, {
    src: _src_images_illustrations_NotionTemplate_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Content Management Interface",
    style: {
      width: '600px',
      height: '360px'
    }
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentStep);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "GridSection__Wrapper"
})(["position:relative;display:flex;flex-direction:column;max-width:1200px;margin:0 auto;margin-top:160px;text-align:center;gap:20px;padding:50px 20px;font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;background:rgba(183,36,229,0.1);border-radius:20px;box-shadow:0px 16px 32px rgba(183,36,229,0.2),0px 0px 8px 2px rgba(180,35,227,0.5);"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "GridSection__Title"
})(["font-size:2.5rem;font-weight:700;line-height:130%;text-transform:uppercase;color:#24B7A5;margin:0 auto;margin-bottom:20px;border-bottom:2px solid #B724E5;padding:0 40px 0 40px;background:rgba(36,183,165,0.1);border-radius:10px;transition:transform 0.6s ease;box-shadow:0px 0px 8px 2px rgba(180,35,227,0.5);&:hover{transform:rotateY(360deg);transition:transform 0.5s ease-in-out;}"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "GridSection__Image"
})(["max-width:100%;height:auto;margin:20px auto;border-radius:15px;box-shadow:0px 8px 16px rgba(0,0,0,0.2);transition:transform 2s;&:hover{transform:scale(1.26);}"]);
const BodyText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "GridSection__BodyText"
})(["max-width:800px;font-size:1.2rem;line-height:1.6;color:#fff;margin:0 auto;padding:0 20px;font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;"]);
const FeaturesList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "GridSection__FeaturesList"
})(["list-style-type:none;padding:0;margin:30px 0;li{font-size:1.1rem;color:#fff;margin:10px 0;}"]);
const Visual = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "GridSection__Visual"
})(["margin:30px 0;img{max-width:100%;height:auto;border-radius:10px;box-shadow:0px 16px 32px rgba(183,36,229,0.2),0px 0px 8px 2px rgba(180,35,227,0.5);}"]);

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




function MenuTooltip({
  isOpen
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    style: {
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
      transform: isOpen ? 'skewY(0deg) rotate(0deg) translateY(0px)' : 'skewY(-5deg) rotate(5deg) translateY(-30px)'
    }
  }, _data_menuData__WEBPACK_IMPORTED_MODULE_1__.tooltipData.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_buttons_MenuButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: item,
    key: index
  })));
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuTooltip__Wrapper"
})(["background:rgba(15,14,71,0.3);box-shadow:0px 50px 100px rgba(0,0,0,0.25),inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);backdrop-filter:blur(40px);border-radius:20px;padding:20px;position:absolute;top:60px;right:150px;z-index:1;display:grid;gap:10px;grid-template-columns:150px;transition:0.3s ease-in-out;"]);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HoverableWord, null, "Automate Your Content Workflow.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_buttons_PurchaseButton__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SmallText, null, "\u201CFrom content creation to publication, Nex AI connects your company\u2019s data with the power of artificial intelligence for a seamless, automated process.\u201D"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "LearnHow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_ClickProjects__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "HowItWorks"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_GridSection__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "YourControl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider2, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_GridProjects__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "About"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Divider3, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_BioSection__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SocialLinks, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://x.com/Nex_AI_Official",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Twitter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.linkedin.com/in/kev-b-4aaa39315/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "LinkedIn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/NexaiGuy",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "GitHub")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Copyright, null, "\xA9 ", new Date().getFullYear(), " Nex AI. All rights reserved."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].footer.withConfig({
  displayName: "pages__Footer"
})(["background:rgba(183,36,229,0.1);padding:40px 20px;text-align:center;color:#fff;margin-top:270px;border-top:2px solid #B724E5;border-bottom:2px solid #B724E5;box-shadow:0px -8px 16px rgba(183,36,229,0.2),0px 8px 16px rgba(183,36,229,0.2);font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;"]);
const FooterContent = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__FooterContent"
})(["display:flex;flex-direction:column;align-items:center;gap:20px;"]);
const SocialLinks = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__SocialLinks"
})(["display:flex;gap:20px;a{color:#24B7A5;text-decoration:none;font-size:1.1rem;transition:color 0.3s ease;&:hover{color:#76d1f9;}}"]);
const Copyright = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].p.withConfig({
  displayName: "pages__Copyright"
})(["font-size:0.9rem;color:rgba(255,255,255,0.6);margin-top:20px;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__Wrapper"
})(["background:linear-gradient(180.44deg,#0C0D31 25.57%,#000000);font-family:\"Rubik\",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;height:7500px;"]);
const ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__ContainerWrapper"
})(["margin-top:90px;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__ContentWrapper"
})(["overflow:hidden;"]);
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__TextWrapper"
})(["position:relative;display:grid;gap:20px;margin-top:-142px;margin-left:20px;@media (max-width:768px){justify-items:center;text-align:center;margin-left:0;margin-top:36px;}"]);
const HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__HeroWrapper"
})(["display:grid;max-width:1234px;grid-template-columns:360px auto;gap:60px;padding:200px 20px 0px;justify-content:center;margin:0 auto;margin-bottom:60px;.courseCard{margin-top:74px;}@media (max-width:780px){grid-template-columns:1fr;justify-items:center;padding-top:150px;}"]);
const LogoWrap = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__LogoWrap"
})(["display:flex;margin-left:-28px;@media (max-width:1920px){margin-left:0;margin-top:0;}@media (max-width:768px){margin-left:0;margin-top:50px;}@media (max-width:480px){margin-top:30px;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h1.withConfig({
  displayName: "pages__Title"
})(["max-width:500px;font-size:27px;font-weight:400;line-height:72px;margin-top:-38px;color:#ffffff;mix-blend-mode:normal;text-shadow:0px 20px 40px rgba(0,0,0,0.1);animation-duration:1.4s;text-align:center;@media (max-width:768px){font-size:36px;line-height:50px;text-align:center;}@media (max-width:480px){font-size:32px;line-height:40px;}"]);
const HoverableWord = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].span.withConfig({
  displayName: "pages__HoverableWord"
})(["display:inline-block;padding:0 30px;transition:transform 0.5s ease;background:rgba(183,36,229,0.1);font-size:21px;text-transform:uppercase;border-radius:7px;border-right:5px solid #A922CB;border-top:1px solid #A922CB;border-left:1px solid #24B7A5;border-bottom:5px solid #24B7A5;box-shadow:0px 16px 23px rgba(36,183,165,0.3),0px 0px 24px 2px rgba(180,35,227,0.7),5px 5px 12px rgba(169,34,203,0.1),-5px -5px 10px rgba(36,183,165,0.4),0px 0px 105px 45px rgba(251,255,138,0.03);&:hover{transform:translateY(-10px);}"]);
const SmallText = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].p.withConfig({
  displayName: "pages__SmallText"
})(["max-width:285px;font-size:13px;line-height:200%;color:#9EE0EC;animation:HeroAnimation 3s ease;@media (max-width:768px){text-align:center;}@media (max-width:480px){font-size:11px;}"]);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__Divider"
})(["width:300px;height:0.5px;background:rgba(255,255,255,0.3);margin:54px auto;@media (max-width:768px){margin:100px auto 20px;}@media (max-width:480px){margin:80px auto 16px;}"]);
const Divider2 = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__Divider2"
})(["width:300px;height:0.5px;background:rgba(255,255,255,0.3);margin:70px auto 32px;margin-bottom:93px;@media (max-width:768px){margin:60px auto 20px;}@media (max-width:480px){margin:60px auto 16px;}"]);
const Divider3 = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__Divider3"
})(["width:300px;height:0.5px;background:rgba(255,255,255,0.3);margin:88px auto 32px;@media (max-width:768px){margin:60px auto 20px;}@media (max-width:480px){margin:40px auto 16px;}"]);
const LogoCon = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__LogoCon"
})(["transition:transform 0.6s ease;transform-style:preserve-3d;&:hover{transform:translateY(-20px);}"]);
const LogoCon2 = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__LogoCon2"
})(["transition:transform 0.6s ease;transform-style:preserve-3d;&:hover{transform:translateY(-20px);}"]);

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

/***/ "./src/images/illustrations/BufferManage.png":
/*!***************************************************!*\
  !*** ./src/images/illustrations/BufferManage.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/BufferManage-0debd1f9946e71117b1495c6201b8e9d.png");

/***/ }),

/***/ "./src/images/illustrations/NotionHomepage.png":
/*!*****************************************************!*\
  !*** ./src/images/illustrations/NotionHomepage.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/NotionHomepage-0c6550536dae10f24a3868563b7e7ab4.png");

/***/ }),

/***/ "./src/images/illustrations/NotionTemplate.png":
/*!*****************************************************!*\
  !*** ./src/images/illustrations/NotionTemplate.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/NotionTemplate-66aafef69190b181a28edafdc4528a3c.png");

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