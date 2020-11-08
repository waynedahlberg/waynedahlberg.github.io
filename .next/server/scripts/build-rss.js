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

/***/ "1C1/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/nextjs-tailwind-vercel.ae80dcab9d9c1975b77d2f44d91565ed.jpg");

/***/ }),

/***/ "2xIF":
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
/* harmony import */ var _figma_variants_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Yoym");
/* harmony import */ var _variants_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fVAh");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */




const meta = {
  title: `Figma Variants`,
  description: `Designing extensible components in Figma is fun!`,
  date: "2020-11-08T12:00:00.000Z",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Our team at Chatbooks has been fully invested in Figma for several years now. We found it replaced a host of 3rd party solutions that never quite played well together.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `One of the great things about Figma is their ability to push the envelope, listen to our feedback, and implement reasoned, smart and functional solutions. Their latest feature, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `variants`), `, comes at a great time as we're finalizing our company's design system — Breakfast.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: _variants_jpg__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    alt: "Status Bar variations"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Variants allow us to package visual `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `state`), ` within singular or even nested components. These states can be described by a simple key-value relationship for each property. For example, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `type:`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `size:`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `color:`), ` could all be properties of the state of a button.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Once a valid group of similar and consistent component states are selected, you simple click `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `Create Variant`), `. Once created, you can add and edit the properties that define your variant states.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `To test my knowledge of variants, I decided to make my first published component in the Figma Community; an iOS 14 Status Bar. The status bar contains much more variable information than expected. My component is limited to appearance (light and dark mode), battery charging, battery level, wifi signal, network signal, notch and isCameraRecording.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `You can check out the file in the Figma Community by clicking the image below.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "https://www.figma.com/community/file/904065746347450024/iOS-14-Status-Bar"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: _figma_variants_jpg__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    alt: "iOS 14 Status Bar Figma Component"
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Here's a embedded view as well. You may need to zoom in a bit.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("iframe", {
    width: "800",
    height: "450",
    src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQQHcyX67RRbKHnshLOJRsL%2FiOS-14-Status-Bar-Community%3Fnode-id%3D1%253A21",
    allowfullscreen: true
  }));
}
;
MDXContent.isMDXComponent = true;

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
  site_url: 'https://wayne.work/',
  feed_url: 'https://wayne.work/feed.xml'
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
    url: `https://wayne.work${link}`,
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

/***/ "Iksx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/ia-writer-working-copy.0e0efda5bed38e84d0dcb052d125a911.jpg");

/***/ }),

/***/ "PaVW":
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
/* harmony import */ var _ia_writer_working_copy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Iksx");
/* harmony import */ var _nextjs_tailwind_vercel_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1C1/");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */




const meta = {
  title: `Hello World 👋`,
  description: `This is the first post of my blog.`,
  date: "2020-11-07T19:00:00.000Z",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `This blog is a long time coming. Like many others, the rise of social media in the last decade had all but squashed my desire for self-publishing. This is my attempt to recapture that desire, and any lingering writing skills and habits. Numerous friends and peers have also revved up their blogging engines, and so with this post I symbolically turn the ignition to `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "strong"
  }, `—START—`)), `.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "Yoym":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/figma-variants.b3f26a09b9f67881069a6506dbf380b3.jpg");

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

/***/ "dHPk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/waynedahlberg.ec5a7624841b4d34c6fd54883892118f.jpg");

/***/ }),

/***/ "fVAh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/variants.32da84dc9221b2ea2391500538df1f55.jpg");

/***/ }),

/***/ "iBhN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return waynedahlberg; });
/* harmony import */ var _img_waynedahlberg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dHPk");

const waynedahlberg = {
  name: 'Wayne Dahlberg',
  twitter: '@waynedahlberg',
  avatar: _img_waynedahlberg_jpg__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
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

/***/ "xk/1":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./110720-hello-world/index.mdx": "PaVW",
	"./110820-figma-variants/index.mdx": "2xIF"
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