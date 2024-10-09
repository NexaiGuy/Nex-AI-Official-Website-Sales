exports.id = "component---src-pages-contact-tsx";
exports.ids = ["component---src-pages-contact-tsx"];
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

/***/ "./src/pages/contact.tsx?export=default":
/*!**********************************************!*\
  !*** ./src/pages/contact.tsx?export=default ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/components/header */ "./src/components/header.tsx");
/* harmony import */ var _components_layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout.css */ "./src/components/layout.css");
/* harmony import */ var _components_layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_layout_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_3__);





const ContactPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContactContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title, {
    className: "animate__animated animate__fadeInUp"
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Description, null, "Whether you have a question about our services or just want to say hi, feel free to reach out to us. We'll get back to you as soon as possible!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label, {
    htmlFor: "name"
  }, "Your Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Input, {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Enter your name",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label, {
    htmlFor: "email"
  }, "Your Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Input, {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Enter your email",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label, {
    htmlFor: "message"
  }, "Your Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Textarea, {
    id: "message",
    name: "message",
    placeholder: "Write your message here",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SubmitButton, {
    type: "submit"
  }, "Send Message")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SocialLinks, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

// Styled Components
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "contact__Wrapper"
})(["background:linear-gradient(180.44deg,#0C0D31 25.57%,#000000);font-family:\"Rubik\",sans-serif;color:white;padding-top:50px;"]);
const ContactContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "contact__ContactContainer"
})(["display:flex;flex-direction:column;align-items:center;padding:50px 20px;max-width:800px;margin:0 auto;text-align:center;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "contact__Title"
})(["font-size:36px;margin-bottom:20px;color:#24B7A5;text-shadow:0px 10px 20px rgba(36,183,165,0.5);"]);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "contact__Description"
})(["font-size:18px;margin-bottom:40px;color:#9EE0EC;max-width:600px;"]);
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "contact__FormWrapper"
})(["width:100%;"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "contact__Form"
})(["display:grid;gap:20px;"]);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "contact__InputWrapper"
})(["display:flex;flex-direction:column;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].label.withConfig({
  displayName: "contact__Label"
})(["font-size:14px;margin-bottom:8px;color:rgba(255,255,255,0.8);"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input.withConfig({
  displayName: "contact__Input"
})(["padding:12px;font-size:16px;border-radius:8px;border:1px solid #24B7A5;background:rgba(255,255,255,0.1);color:white;outline:none;transition:all 0.3s ease;&:focus{border-color:#76d1f9;}"]);
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].textarea.withConfig({
  displayName: "contact__Textarea"
})(["padding:12px;font-size:16px;border-radius:8px;border:1px solid #24B7A5;background:rgba(255,255,255,0.1);color:white;outline:none;min-height:150px;transition:all 0.3s ease;&:focus{border-color:#76d1f9;}"]);
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "contact__SubmitButton"
})(["padding:12px 24px;font-size:16px;color:white;background-color:#24B7A5;border:none;border-radius:8px;cursor:pointer;transition:all 0.3s ease;&:hover{background-color:#76d1f9;}"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].footer.withConfig({
  displayName: "contact__Footer"
})(["background:rgba(183,36,229,0.1);padding:40px 20px;text-align:center;color:#fff;margin-top:100px;border-top:2px solid #B724E5;border-bottom:2px solid #B724E5;box-shadow:0px -8px 16px rgba(183,36,229,0.2),0px 8px 16px rgba(183,36,229,0.2);"]);
const FooterContent = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "contact__FooterContent"
})(["display:flex;flex-direction:column;align-items:center;gap:20px;"]);
const SocialLinks = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "contact__SocialLinks"
})(["display:flex;gap:20px;a{color:#24B7A5;text-decoration:none;font-size:1.1rem;transition:color 0.3s ease;&:hover{color:#76d1f9;}}"]);
const Copyright = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "contact__Copyright"
})(["font-size:0.9rem;color:rgba(255,255,255,0.6);margin-top:20px;"]);

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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-tsx.js.map