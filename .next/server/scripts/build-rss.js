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

/***/ "AbmP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/card.eca2e0b364c20a23b42f6bb247f17149.jpg");

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

/***/ "HSmI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/card.eca2e0b364c20a23b42f6bb247f17149.jpg");

/***/ }),

/***/ "R4zG":
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
/* harmony import */ var _card_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AbmP");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */



const meta = {
  title: `Hello World!`,
  description: `My first blog post. `,
  date: "2020-10-31T14:24:00.000Z",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`));
}
;
MDXContent.isMDXComponent = true;

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

/***/ "iBhN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ authors_waynedahlberg; });

// UNUSED EXPORTS: adamwathan, bradlc, steveschoger, robinmalfait, simonswiss

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
const authors_bradlc = {
  name: 'Brad Cornes',
  twitter: '@bradlc',
  avatar: bradlc
};
const authors_steveschoger = {
  name: 'Steve Schoger',
  twitter: '@steveschoger',
  avatar: steveschoger
};
const authors_robinmalfait = {
  name: 'Robin Malfait',
  twitter: '@malfaitrobin',
  avatar: robinmalfait
};
const authors_simonswiss = {
  name: 'Simon Vrachliotis',
  twitter: '@simonswiss',
  avatar: simonswiss
};

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

/***/ "ubmD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/early-days.7d00bec0649264aaa5ec96345a49d8cb.jpg");

/***/ }),

/***/ "xk/1":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./hello world/index.mdx": "R4zG",
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

/***/ })

/******/ });