module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "60g7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _IMG_696626613127380_edit_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gDdj");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */



const meta = {
  title: `Mid-year R2D2 update`,
  description: `It's been a while`,
  date: "2020-06-06T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `2020 has been a year, and we're barely in June. I'm really looking forward to WWDC on the 22nd. I've spent a lot of quarantine time studying SwiftUI and Combine, and creating an every growing list of iOS app and game ideas.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "/RxE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7624.92c509987acda7f12bdc1ba93f4289e7.jpg");

/***/ }),

/***/ "0cUc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2-build-7707.a6d792feb9e54c99041277fabadf1ff4.jpg");

/***/ }),

/***/ "0nOX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/radarEye.521f2f414df930de3f5a756a5012bf57.jpg");

/***/ }),

/***/ "2Gzl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("/_next/static/media/card-flip-gif.9d429dd363ab6468b9858a768dfe5e6f.gif");

/***/ }),

/***/ "3EDE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7623.e3e614063394c9cc1cb7026f2171fda6.jpg");

/***/ }),

/***/ "4/v/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2-build-7710.592c335a93aa16e89c76a7e820c4641c.jpg");

/***/ }),

/***/ "4gQv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7590.5aad7e5e9ecd1f84e3d8b95788ee05d8.jpg");

/***/ }),

/***/ "60g7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bHcg");
/* harmony import */ var rss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_getAllPostPreviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mnGC");



const feed = new rss__WEBPACK_IMPORTED_MODULE_1___default.a({
  title: 'Blog – Wayne Dahlberg',
  site_url: 'https://blog.waynedahlberg.com',
  feed_url: 'https://blog.waynedahlberg.com/feed.xml'
});
Object(_src_getAllPostPreviews__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])().forEach(({
  link,
  module: {
    meta
  }
}) => {
  feed.item({
    title: meta.title,
    guid: link,
    url: `https://blog.waynedahlberg.com${link}`,
    date: meta.date,
    description: meta.description,
    custom_elements: [].concat(meta.authors.map(author => ({
      author: [{
        name: author.name
      }]
    })))
  });
});
fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync('./out/feed.xml', feed.xml({
  indent: true
}));

/***/ }),

/***/ "7ry3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7625.083b9b3a5d10cb9b74cb17fdfe9e04e4.jpg");

/***/ }),

/***/ "7t5s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/sundace-jewelry-class-2.285380255b1cbed9cff2479ad64b7fcb.jpg");

/***/ }),

/***/ "8cKi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/astromech.2f4f9db9521a0da1df70e231af6f5127.jpg");

/***/ }),

/***/ "9/8r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/IMG_8552.b565167dbf2c96220d4dc3030e7ab52f.jpg");

/***/ }),

/***/ "Cevy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _card_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HSmI");
/* harmony import */ var _early_days_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ubmD");
/* harmony import */ var _astromech_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("QP+J");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */





const meta = {
  title: `Introducing Verses`,
  description: `A beautifully designed reading companion app for The Book of Mormon. `,
  date: "2020-11-04T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  image: _card_jpg__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The year 2020 has really thrown a wrench into all our lifestyles. Here at home, and around the world, the LDS Church has all but cancelled Sunday services due to the global COVID-19 pandemic. In addition to the great resources the Church has provided for home-centered learning, I wanted a convenient way to keep up with my daily reading of `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `The Book of Mormon`), `.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "DHJU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7512.12c6a5f56241f4242575f04591bcbbc8.jpg");

/***/ }),

/***/ "DJx9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2-build-7703.9e4343fb53a3280687aafebb77621b73.jpg");

/***/ }),

/***/ "Edfw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _IMG_0045_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ubdf");
/* harmony import */ var _IMG_0643_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YHX3");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */




const meta = {
  title: `Dome Motor & Holoprojectors`,
  description: `New deliveries`,
  date: "2016-06-23T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Today the Pittman drive motor showed up. It’s 24/12 VDC with a 19.7:1 gear ratio. It’s high torque, high speed, and going to do a great job spinning R2’s head around in circles. I’ll stash it away until I’m able to source a CS:R frame, which from the sound of it will be this fall.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "Eh/F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7594.779d134809874d813f7092a32d57faf1.jpg");

/***/ }),

/***/ "F2q1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/image2.ea5fa00888f2aa81601ff522bc662c35.jpg");

/***/ }),

/***/ "G/Zf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _astromech_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8cKi");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */



const meta = {
  title: `May the force be with me`,
  description: `A journey of a thousand light years.`,
  date: "2016-02-07T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The last thing I needed was another expensive hobby. Motorcycling and film photography have all but drained me of any extra cash I should be saving for a rainy day. This weekend I’ve begun the multi-year journey of building a full-size replica the galaxy's favorite astromech droid.
Unfamiliar? Maybe you recognize this little guy.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "GJzq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/domes.28cc56155f173996fd9e01c6d3b67e71.jpg");

/***/ }),

/***/ "GOb7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _sundace_jewelry_class_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("GScm");
/* harmony import */ var _sundace_jewelry_class_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7t5s");
/* harmony import */ var _sundace_jewelry_class_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ul9P");
/* harmony import */ var _sundace_jewelry_class_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pT+Q");
/* harmony import */ var _sundace_jewelry_class_5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("o1f7");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */







const meta = {
  title: `Sundance Offsite`,
  description: `Jewelery Making`,
  date: "2019-05-21T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Today was a welcome diversion to staring at screens. The Chatbooks Product Team took a trip to Sundance Resort as part of an offsite activity. It's so nice to work with amazing people. It was a real treat to hang out, have fun, be creative outside of the daily routine.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "GScm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/sundace-jewelry-class-1.3e3c447ce7e824e9762450304be06c7a.jpg");

/***/ }),

/***/ "GXkD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/IMG_8470.e4665cc47c0d3d793dc188cfc6848ad2.jpg");

/***/ }),

/***/ "HSmI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/card.eca2e0b364c20a23b42f6bb247f17149.jpg");

/***/ }),

/***/ "Hc6Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2-build-7686.8b93c3201f12687e4c518d8d34b6e10c.jpg");

/***/ }),

/***/ "HrBi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/IMG_0924.1bb4efcf1efc5e7d56e6a2368e266ced.jpg");

/***/ }),

/***/ "JQkT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _r2d2_7590_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4gQv");
/* harmony import */ var _r2d2_7594_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Eh/F");
/* harmony import */ var _r2d2_7600_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ngR4");
/* harmony import */ var _r2d2_7623_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3EDE");
/* harmony import */ var _r2d2_7624_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/RxE");
/* harmony import */ var _r2d2_7625_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("7ry3");
/* harmony import */ var _r2d2_7632_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("yU5b");
/* harmony import */ var _r2d2_7636_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("zmjd");
/* harmony import */ var _r2d2_7637_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("SKrB");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */











const meta = {
  title: `Logic Display Assembly`,
  description: `All of the lights`,
  date: "2016-02-24T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Cutting the fiber optic cables was so tedious. It took a very long time, and the perfectionist in me made it all worse. But wow, what a reward. Placing the last piece was so liberating. You’ve got to follow the color coded pattern to get the optics to line up with the right LED components.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "La1G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/IMG_0481.cf41fed4b9d1b46f6ac905bbbcee7ad7.jpg");

/***/ }),

/***/ "N1Gj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _image1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cMp7");
/* harmony import */ var _image2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F2q1");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */




const meta = {
  title: `Finishing the Dome pt. II`,
  description: `Wax on, wax off`,
  date: "2016-05-08T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Just a small update. I’ve been waiting on some key parts to become available, namely the 3 Holoprojectors with mounts and control mechanisms. They should be here in the next 2 weeks.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "P+sn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _r2_build_7685_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iX4y");
/* harmony import */ var _r2_build_7686_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Hc6Y");
/* harmony import */ var _r2_build_7703_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("DJx9");
/* harmony import */ var _r2_build_7706_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("RBbj");
/* harmony import */ var _r2_build_7707_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0cUc");
/* harmony import */ var _r2_build_7708_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("q1db");
/* harmony import */ var _r2_build_7709_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("rA34");
/* harmony import */ var _r2_build_7710_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("4/v/");
/* harmony import */ var _lazysusan_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("hmeE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */











const meta = {
  title: `Finishing the Dome pt. I`,
  description: `Wax on, wax off 2`,
  date: "2016-04-02T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I started out with the idea of using a scotch-brite pad on the dome while on some kind of ‘Lazy Susan’ rotating platter. Turns out there was one in the house that fit perfectly. If you need a rotating platter for working on your dome, I highly recommend `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "http://d.pr/GCT1"
  }), `this one`), `.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "QP+J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/astromech.2f4f9db9521a0da1df70e231af6f5127.jpg");

/***/ }),

/***/ "RBbj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2-build-7706.a13525f3802f2b5003f9f01b22366ebb.jpg");

/***/ }),

/***/ "SKrB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7637.4ca0893cb88405866e9d6e3c7de570b4.jpg");

/***/ }),

/***/ "TLBp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/R2D2-July1-8306.3ad1dc5c0c7a9b31c2efc9a8f3072bbe.jpg");

/***/ }),

/***/ "TYXk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/IMG_1125.27a62c7d03c7d4e26d8834f808f81c47.jpg");

/***/ }),

/***/ "U09B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _IMG_0481_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("La1G");
/* harmony import */ var _IMG_0924_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HrBi");
/* harmony import */ var _IMG_0950_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fYYi");
/* harmony import */ var _IMG_1125_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TYXk");
/* harmony import */ var _R2D2_July1_8306_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TLBp");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */







const meta = {
  title: `July Update`,
  description: `A lot has happened`,
  date: "2016-07-13T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Waiting for parts is the name of the game at this point. Critical parts suppliers are hit and miss. I’ve been attached to the Tapatalk mobile app to keep tabs on parts runs and availability countdowns.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "U09f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/figma-cards.d85fa8f1c780c8cbf55d086ed783849b.jpg");

/***/ }),

/***/ "Uo48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _surrounds_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cEQn");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */



const meta = {
  title: `Aluminum Logic Surrounds`,
  description: `Very first part has arrived`,
  date: "2016-02-10T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Pretty pumped right now. The very first of many parts arrived today. I was lucky to get in on the 2nd batch of `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "http://astromech.net/forums/showthread.php?26696-BC-Approved-Aluminum-Logic-Surrounds-Set-100-(January-2016)-Closed-Manufacturing&p=356528#post356528"
  }), `Jose Medina’s Aluminum Logic Surrounds run`), `.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "WYA/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _card_flip_gif_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2Gzl");
/* harmony import */ var _figma_cards_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("U09f");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */




const meta = {
  title: `Flipping Cards`,
  description: `Chatbooks Cards`,
  date: "2019-05-19T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The other day I wanted to represent a physical 2-sided card in a design. The previous design had the user selecting the front or back of the card, with the new view being presented showing that side of the card. We can do better. Let's make this more interactive!`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "YHX3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/IMG_0643.5d612bb01d5a23e2b8a22d02014fb0c9.jpg");

/***/ }),

/***/ "a4MZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7513.d273eb408a27584107c5b37f816aba8c.jpg");

/***/ }),

/***/ "bHcg":
/***/ (function(module, exports) {

module.exports = require("rss");

/***/ }),

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cEQn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/surrounds.2fd3244eabd01335326680fe59c0e59b.jpg");

/***/ }),

/***/ "cMp7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/image1.30c3874f1dc8a52809d650ca2c9f445d.jpg");

/***/ }),

/***/ "ecsZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _r2d2_7512_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("DHJU");
/* harmony import */ var _r2d2_7513_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a4MZ");
/* harmony import */ var _r2d2_7514_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("f9n2");
/* harmony import */ var _r2d2_7515_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vRmz");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */






const meta = {
  title: `Hydro Dome Arrived`,
  description: `Now this is podracing.`,
  date: "2016-02-15T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `This evening I unboxed the Hydrodomes (inner, outer, and support rings) from GraniteEarth.com.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "f9n2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7514.73bcb808351f87c86e6f18a22849cbb6.jpg");

/***/ }),

/***/ "fYYi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/IMG_0950.8b5573f770e7075ffce619a982d2efec.jpg");

/***/ }),

/***/ "gDdj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/IMG_696626613127380-edit.febeb8cf9cd203becc6849ffd88f6cfc.jpg");

/***/ }),

/***/ "hmeE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/lazysusan.d24acd8f7509e0b20207d03c23ed9882.gif");

/***/ }),

/***/ "iBhN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ authors_waynedahlberg; });

// UNUSED EXPORTS: adamwathan

// CONCATENATED MODULE: ./src/img/adamwathan.jpg
/* harmony default export */ var adamwathan = ("/_next/static/media/adamwathan.689c56542418d0427d9f13696efd4ab7.jpg");
// CONCATENATED MODULE: ./src/img/bradlc.jpg
/* harmony default export */ var bradlc = ("/_next/static/media/bradlc.7664d4915ab9e8caa44ecf1524fe1b60.jpg");
// CONCATENATED MODULE: ./src/img/steveschoger.jpg
/* harmony default export */ var steveschoger = ("/_next/static/media/steveschoger.e91ee2aaa6c334322e7aad33e7d4e3c0.jpg");
// CONCATENATED MODULE: ./src/img/robinmalfait.jpg
/* harmony default export */ var robinmalfait = ("/_next/static/media/robinmalfait.186f1b4780780bcef11f3ddf68361646.jpg");
// CONCATENATED MODULE: ./src/img/simonswiss.jpg
/* harmony default export */ var simonswiss = ("/_next/static/media/simonswiss.a06770d7877d0238d6944e3f9616105f.jpg");
// CONCATENATED MODULE: ./src/img/waynedahlberg.jpg
/* harmony default export */ var waynedahlberg = ("/_next/static/media/waynedahlberg.ec5a7624841b4d34c6fd54883892118f.jpg");
// CONCATENATED MODULE: ./src/authors.js






const authors_waynedahlberg = {
  name: 'Wayne Dahlberg',
  twitter: '@waynedahlberg',
  avatar: waynedahlberg
};
const authors_adamwathan = {
  name: 'Adam Wathan',
  twitter: '@adamwathan',
  avatar: adamwathan
};

/***/ }),

/***/ "iKMi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _wwdc19_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oWnL");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */



const meta = {
  title: `WWDC Thoughts`,
  description: `Apple's Developer Conference`,
  date: "2019-06-03T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The WWDC19 Keynote is just moments away. WWDC has become increasingly important to me the last few years. This is the last opportunity I'll have to catalog my thoughts before major and minor changes alter the landscape I find myself in daily. Here goes...`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "iX4y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2-build-7685.b4d2618352460d1720fc542c14422291.jpg");

/***/ }),

/***/ "mmm0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _domes_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("GJzq");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */



const meta = {
  title: `Hydrodomes ordered`,
  description: `A journey of a thousand light years.`,
  date: "2016-02-08T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Today I ordered the Hydro Dome set with swivel ring. This set is definitely one of the more expensive segments on the build list. Glad to have this one behind me.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "mnGC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllPostPreviews; });
function importAll(r) {
  return r.keys().map(fileName => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
    module: r(fileName)
  }));
}

function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

function getAllPostPreviews() {
  return importAll(__webpack_require__("xk/1")).sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date));
}

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nA91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _IMG_8470_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("GXkD");
/* harmony import */ var _radarEye_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0nOX");
/* harmony import */ var _CSL_RadarEye_Rev1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("u81G");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */





const meta = {
  title: `Radar Eye`,
  description: `The eye has it.`,
  date: "2016-03-15T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I’ve been very interested in 3d printing lately. The R2 Radar Eye is on the top of my list as a 3d printed part candidate.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "ngR4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7600.584eda76c74ba630ed2fb0d0644a77db.jpg");

/***/ }),

/***/ "o1f7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/sundace-jewelry-class-5.dbf68b0341a232482c8efabaac2289c7.jpg");

/***/ }),

/***/ "oWnL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/wwdc19.3e5890068e4ff7303ffd5770a874a01b.jpg");

/***/ }),

/***/ "pT+Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/sundace-jewelry-class-4.de5e38a8c4b5b2e28edae7bf81917199.jpg");

/***/ }),

/***/ "q1db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2-build-7708.34d4ea7ba1938a1e4dd3ec257d095f89.jpg");

/***/ }),

/***/ "rA34":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2-build-7709.0a1bbe806b70e855e269c09c8ae20ee6.jpg");

/***/ }),

/***/ "u81G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/CSL_RadarEye_Rev1.55c0828f9ab74082f7b2bb27c4508332.png");

/***/ }),

/***/ "uVkp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */


const meta = {
  title: `End of year update`,
  description: `A lot has happened`,
  date: "2016-12-27T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Most updates for this project are happening on Instagram. It’s easy for me snap a few pics and post there, and at the same time, each post will be printed in my R2D2 `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "http://www.chatbooks.com/"
  }), `Chatbook`), `.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "ubdf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/IMG_0045.3d01a6701a3ed6c83d34e040ce1a6f31.jpg");

/***/ }),

/***/ "ubmD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/early-days.7d00bec0649264aaa5ec96345a49d8cb.jpg");

/***/ }),

/***/ "ul9P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/sundace-jewelry-class-3.a9089637794e1d1f84a979ad53ff0ad7.jpg");

/***/ }),

/***/ "vRmz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7515.345144a76a4da5ca3fa5ef2aef6b9bc6.jpg");

/***/ }),

/***/ "w27z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iBhN");
/* harmony import */ var _IMG_8552_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9/8r");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */



const meta = {
  title: `Mothers Polish`,
  description: `Shine on you crazy diamond`,
  date: "2016-02-26T14:24:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_2__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `I read yesterday a post by a metallurgist in the Astromech forum. He said the best way to polish billet is to avoid sanding and removing material, just use some Mothers Billet Metal Polish. You put a small amount on a terry cloth and just rub on the dome until a black residue appears.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "xk/1":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./001-may-the-force-be-with-me/index.mdx": "G/Zf",
	"./002-hydrodomes-ordered/index.mdx": "mmm0",
	"./003-aluminum-logic-surrounds/index.mdx": "Uo48",
	"./004-hydro-dome/index.mdx": "ecsZ",
	"./005-logic-display-assembly/index.mdx": "JQkT",
	"./006-mothers-polish/index.mdx": "w27z",
	"./007-radar-eye/index.mdx": "nA91",
	"./008-dome-finished/index.mdx": "P+sn",
	"./009-dome-finished-2/index.mdx": "N1Gj",
	"./010-dome-motor/index.mdx": "Edfw",
	"./011-july-update/index.mdx": "U09B",
	"./012-end-of-year-update/index.mdx": "uVkp",
	"./013-flipping-cards/index.mdx": "WYA/",
	"./014-sundance-offsite/index.mdx": "GOb7",
	"./015-wwdc-thoughts/index.mdx": "iKMi",
	"./016-mid-year-update/index.mdx": "/+2f",
	"./introducing-verses-for-ios/index.mdx": "Cevy"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "xk/1";

/***/ }),

/***/ "yU5b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7632.fe37ae4da626f9026c881ce0524b2348.jpg");

/***/ }),

/***/ "zmjd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/r2d2-7636.90c06524d813d147759da8ccc4f4461b.jpg");

/***/ })

/******/ });