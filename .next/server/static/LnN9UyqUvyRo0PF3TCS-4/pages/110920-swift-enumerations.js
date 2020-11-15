module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+YBj":
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
  title: `Swift Types`,
  description: `Back to basics with Swift types`,
  date: "2020-11-07T12:00:00.000Z",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `In the Swift programming language, nearly everything is based on a named type or compound type. Named types can be assigned names when created. These include `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `classes`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `structures`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `enumerations`), `, and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `protocols`), `. Instances of user-defined named types carry the name of the given type. For example, a class named `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `MyClass`), ` will have the type `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `MyClass`), `. Swift also includes many standard named types for arrays, dictionaries and optional values.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3f0T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("/_next/static/media/shapes.1f28e72c952e4264057dbb2a1eb25da2.jpg");

/***/ }),

/***/ "493F":
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
  title: `Swift Access Control`,
  description: `The basics of Swift Access Control.`,
  date: "2020-11-09T16:00:00.000Z",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `When writing stuctures, class and functions you need to let other code or even other developers know what is available and what is not. This is done by access control prefixing with `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `public`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `open`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `internal`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `private`), `, and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `fileprivate`), `. Access control is another foundational concept that eluded me for years while learning the Swift language.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "4MTE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStaticProps; });
/* harmony import */ var _getAllPostPreviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mnGC");

async function getStaticProps() {
  return {
    props: {
      posts: Object(_getAllPostPreviews__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().map(post => ({
        title: post.module.meta.title,
        link: post.link
      }))
    }
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8Bvx");


/***/ }),

/***/ "8Bvx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CZVI");
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iBhN");
/* harmony import */ var _getStaticProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4MTE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return _getStaticProps__WEBPACK_IMPORTED_MODULE_4__["a"]; });

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* @jsx mdx */




const meta = {
  title: `Swift Enumerations`,
  description: `The basics of Swift Enumerations.`,
  date: "2020-11-09T12:00:00.000Z",
  authors: [_authors__WEBPACK_IMPORTED_MODULE_3__[/* waynedahlberg */ "a"]],
  discussion: "https://github.com/tailwindlabs/tailwindcss/discussions/2511"
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", props);
};

const layoutProps = {
  meta
};

const MDXLayout = props => Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_Post__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extends({
  meta: meta
}, props));

function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `An enumeration defines a common type for a group of related values and enables you to work with those values in a type-safe way within your code.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "rounded-md bg-blue-50 p-4"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "flex"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "flex-shrink-0"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("svg", {
    class: "h-5 w-5 text-blue-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    clipRule: "evenodd"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", {
    class: "ml-3 flex-1 md:flex md:justify-between"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    class: "text-sm leading-5 text-blue-700"
  }, "This is a another post in a series intended as a personal growth exercise. As I learn and digest new things, I want to write about them to solidify my understanding."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    class: "mt-3 text-sm leading-5 md:mt-0 md:ml-6"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "https://fs.blog/2015/01/richard-feynman-knowing-something/",
    class: "whitespace-no-wrap font-medium text-blue-700 hover:text-blue-600 transition ease-in-out duration-150"
  }, "Feynman \u2192"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `Creating an enum:`), ` You can declare an enum like this in swift`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `enum`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `TimePeriod`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `{`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` morning
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` noon
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` afternoon
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` night
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `}`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The name of this enum is "TimePeriod" and it has four cases: `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `morning`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `noon`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `afternoon`), `, and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `night`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Enumerations, or `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `enum`), `s can also be declared in a single line, like this:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `enum`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `TimePeriod`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `{`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` morning`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` noon`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` afternoon`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` night
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `}`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `enum type:`), ` When we define an enum, it defines itself as a new type in Swift. New variables of that type can be declared like this:`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `var`), ` presentTime `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `=`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `TimePeriod`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `morning
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), `presentType`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-gray-400 italic"
  }), `// morning`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `presentTime`), ` variable is of type `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `TimePeriod`), `, and we can set the value using the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `.`), ` operation.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), `presentTime `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `=`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `noon
presentTime `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `=`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `afternoon
presentTime `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `=`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `night
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `Matching enum value:`), ` The Swift `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "li"
  }, `switch`), ` statement is a simple and straightforward solution for matching the enum value.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `switch`), ` presentTime `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `{`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `morning`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), `
        `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-green"
  }), `"Foggy morning"`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `noon`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), `
        `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-green"
  }), `"Sunny noon"`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `afternoon`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), `
        `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-green"
  }), `"Cloudy afternoon"`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `night`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), `
        `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-green"
  }), `"Rainy night"`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `}`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `Iterate enum cases:`), ` To iterator over the cases in an enumeration, we declare it with the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "li"
  }, `CaseIterable`), ` type.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `enum`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `TimePeriod`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `CaseIterable`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `{`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` morning
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` noon
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` afternoon
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` night
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `}`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Now we can iterate over all the cases.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `let`), ` numberOfChoices `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `=`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `TimePeriod`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `allCases`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `count`), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-green"
  }), `"`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `numberOfChoices`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), ` choices available"`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `

`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `for`), ` timeperiod `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `in`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `TimePeriod`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `allCases `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `{`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), `timeperiod`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `}`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `Raw value:`), ` Each case can provide a `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "li"
  }, `rawValue`), `. It can be implicit and explicit. We must provide the type in the declaration of the enumeration.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `enum`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Institute`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Int`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `{`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` school
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` college
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` university
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `}`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `Institute`), ` will be of `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `Int`), ` type raw value for every case. It can be any type in Swift. In this case the value for `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `school`), ` is 0, and so on.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Raw values for every case can be checked like this:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Institute`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `school`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `rawValue`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `            `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-gray-400 italic"
  }), `// 0`), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Institute`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `college`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `rawValue`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `           `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-gray-400 italic"
  }), `// 1`), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Institute`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `university`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), `rawValue`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `        `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-gray-400 italic"
  }), `// 2`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `You can also provide explicit raw values for every case if you want.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `enum`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Institute`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Int`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `{`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` school `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `=`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `10`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` college `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `=`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `12`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` university `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `=`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `14`), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `|`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "li"
  }, `Associate values with enum cases:`), ` Sometimes you want to set values with cases. We can also assign tuple values for cases as that enum type. Here we define a variable `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "li"
  }, `sampleArea`), ` as an enum with a value of `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "li"
  }, `Area.square`), ` with an associated tuple value of 10 and 15.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `enum`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Area`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `{`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `square`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Double`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Double`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `cube`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Double`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Double`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Double`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `}`), `

`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `var`), ` sampleArea `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `=`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `Area`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `square`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `10`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": ""
  }), `15`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Here we can match the enum value with a switch statement. This time we have some assocated values with every enum case. Those values can be extracted as variables or constants for use inside the switch statment.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `switch`), ` sampleArea `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `{`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `square`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `let`), ` height`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `let`), ` width`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), `
        `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-green"
  }), `"Square of: `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `height`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `width`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), `."`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `cube`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `let`), ` height`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `let`), ` width`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `let`), ` length`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), `
        `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-green"
  }), `"Square of: `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `height`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `width`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `length`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), `"`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `}`), `
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `If associated values are constant or variable, we can simply place `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `var`), ` or `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p"
  }, `let`), ` before the case name.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    "className": "language-swift"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-Swift"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `switch`), ` sampleArea `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `{`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `let`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `square`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), `height`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` width`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), `
        `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-green"
  }), `"Square of: `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `height`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `width`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), `."`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
    `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `case`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-purple"
  }), `let`), ` `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `cube`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), `height`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` width`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `,`), ` length`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `:`), `
        `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-blue"
  }), `print`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `(`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-green"
  }), `"Square of: `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `height`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `width`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `\\(`), `length`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "span"
  }, {
    "className": ""
  }), `)`)), `"`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `)`), `
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", _extends({
    parentName: "code"
  }, {
    "className": "text-code-white"
  }), `}`), `
`)));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "97ET":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/variants.32da84dc9221b2ea2391500538df1f55.jpg");

/***/ }),

/***/ "C2Yc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/combine-marble-count.f6966c3cd646b43700113017a8549ee8.jpg");

/***/ }),

/***/ "CZVI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Post; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/components/PageTitle.js

var __jsx = external_react_default.a.createElement;
function PageTitle({
  children
}) {
  return __jsx("h1", {
    className: "text-5xl leading-14 font-bold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
  }, children);
}
// EXTERNAL MODULE: external "tinytime"
var external_tinytime_ = __webpack_require__("Jlc+");
var external_tinytime_default = /*#__PURE__*/__webpack_require__.n(external_tinytime_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@mdx-js/react"
var react_ = __webpack_require__("c2Xn");

// CONCATENATED MODULE: ./src/components/Post.js

var Post_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const mdxComponents = {
  pre: (_ref) => {
    let {
      className
    } = _ref,
        props = _objectWithoutProperties(_ref, ["className"]);

    return Post_jsx("pre", _extends({
      className: `${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`
    }, props));
  },
  'pre.code': (_ref2) => {
    let {
      className
    } = _ref2,
        props = _objectWithoutProperties(_ref2, ["className"]);

    return Post_jsx("code", _extends({
      className: `${className} text-gray-200`
    }, props));
  }
};
const postDateTemplate = external_tinytime_default()('{dddd}, {MMMM} {DD}, {YYYY}');
function Post({
  meta,
  children,
  posts
}) {
  const router = Object(router_["useRouter"])();
  const postIndex = posts.findIndex(post => post.link === router.pathname);
  const previous = posts[postIndex + 1];
  const next = posts[postIndex - 1];
  return Post_jsx("article", {
    className: "xl:divide-y xl:divide-gray-200"
  }, Post_jsx(head_default.a, null, Post_jsx("title", null, meta.title, " \u2013 Tailwind CSS"), Post_jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), Post_jsx("meta", {
    name: "twitter:site",
    content: "@waynedahlberg"
  }), Post_jsx("meta", {
    name: "twitter:creator",
    content: "@waynedahlberg"
  }), Post_jsx("meta", {
    name: "twitter:title",
    content: `${meta.title} – Wayne Dahlberg`
  }), Post_jsx("meta", {
    name: "twitter:description",
    content: meta.description
  }), Post_jsx("meta", {
    name: "twitter:image",
    content: `https://blog.tailwindcss.com${meta.image}`
  }), Post_jsx("meta", {
    property: "og:url",
    content: `https://blog.tailwindcss.com${router.pathname}`
  }), Post_jsx("meta", {
    property: "og:type",
    content: "article"
  }), Post_jsx("meta", {
    property: "og:title",
    content: `${meta.title} – Wayne Dahlberg`
  }), Post_jsx("meta", {
    property: "og:description",
    content: meta.description
  }), Post_jsx("meta", {
    property: "og:image",
    content: `https://blog.tailwindcss.com${meta.image}`
  }), Post_jsx("meta", {
    name: "description",
    content: meta.description
  })), Post_jsx("header", {
    className: "pt-6 xl:pb-10"
  }, Post_jsx("div", {
    className: "space-y-1 text-center"
  }, Post_jsx("dl", {
    className: "space-y-10"
  }, Post_jsx("div", null, Post_jsx("dt", {
    className: "sr-only"
  }, "Published on"), Post_jsx("dd", {
    className: "text-sm leading-6 font-medium text-gray-500"
  }, Post_jsx("time", {
    dateTime: meta.date
  }, postDateTemplate.render(new Date(meta.date)))))), Post_jsx("div", null, Post_jsx(PageTitle, null, meta.title)))), Post_jsx("div", {
    className: "divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20",
    style: {
      gridTemplateRows: 'auto 1fr'
    }
  }, Post_jsx("dl", {
    className: "pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200"
  }, Post_jsx("dt", {
    className: "sr-only"
  }, "Authors"), Post_jsx("dd", null, Post_jsx("ul", {
    className: "flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"
  }, meta.authors.map(author => Post_jsx("li", {
    key: author.twitter,
    className: "flex items-center space-x-2"
  }, Post_jsx("img", {
    src: author.avatar,
    alt: "",
    className: "w-10 h-10 rounded-full"
  }), Post_jsx("dl", {
    className: "text-sm font-medium leading-5 whitespace-no-wrap"
  }, Post_jsx("dt", {
    className: "sr-only"
  }, "Name"), Post_jsx("dd", {
    className: "text-gray-900"
  }, author.name), Post_jsx("dt", {
    className: "sr-only"
  }, "Twitter"), Post_jsx("dd", null, Post_jsx("a", {
    href: `https://twitter.com/${author.twitter}`,
    className: "text-teal-500 hover:text-teal-700"
  }, author.twitter)))))))), Post_jsx("div", {
    className: "divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2"
  }, Post_jsx("div", {
    className: "prose max-w-none pt-10 pb-8"
  }, Post_jsx(react_["MDXProvider"], {
    components: mdxComponents
  }, children))), Post_jsx("footer", {
    className: "text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2"
  }, (next || previous) && Post_jsx("div", {
    className: "space-y-8 py-8"
  }, next && Post_jsx("div", null, Post_jsx("h2", {
    className: "text-xs tracking-wide uppercase text-gray-500"
  }, "Next Article"), Post_jsx("div", {
    className: "text-teal-500 hover:text-teal-600"
  }, Post_jsx(link_default.a, {
    href: next.link
  }, Post_jsx("a", null, next.title)))), previous && Post_jsx("div", null, Post_jsx("h2", {
    className: "text-xs tracking-wide uppercase text-gray-500"
  }, "Previous Article"), Post_jsx("div", {
    className: "text-teal-500 hover:text-teal-700"
  }, Post_jsx(link_default.a, {
    href: previous.link
  }, Post_jsx("a", null, previous.title))))), Post_jsx("div", {
    className: "pt-8"
  }, Post_jsx(link_default.a, {
    href: "/"
  }, Post_jsx("a", {
    className: "text-teal-500 hover:text-teal-700"
  }, "\u2190 All Posts"))))));
}

/***/ }),

/***/ "GhaY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/combine-marble-zip.09d6404d9a918d07ac140c43d2cf8b9c.jpg");

/***/ }),

/***/ "H14B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/combine-marble-map.881a09428ca018f5c654e27c25f090d2.jpg");

/***/ }),

/***/ "H2oo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/combine-marble-first.99c7d6612ba63def941084fb088fdfcf.jpg");

/***/ }),

/***/ "Jlc+":
/***/ (function(module, exports) {

module.exports = require("tinytime");

/***/ }),

/***/ "LRld":
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
/* harmony import */ var _figma_variants_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cpim");
/* harmony import */ var _variants_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("97ET");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */




const meta = {
  title: `Figma Variants`,
  description: `Designing extensible components in Figma is fun!`,
  date: "2020-11-05T12:00:00.000Z",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `The team at Chatbooks has been fully invested in Figma for several years now. We found it replaced a host of 3rd party solutions that never quite played well together.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "ObFj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("/_next/static/media/silver-surfer.e9d87671c732146764222d2582340101.jpg");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QbZa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/hero-combine-marbles.176db294fcec71f11dca5341b8646ce3.jpg");

/***/ }),

/***/ "SckI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/combine-marble-merge.38d8beb7cde2d6f3d9838610e59004a5.jpg");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Uq/p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/nextjs-tailwind-vercel.ae80dcab9d9c1975b77d2f44d91565ed.jpg");

/***/ }),

/***/ "VD1D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/combine-marble-last.dd6b870f20baa7075829428182d596ea.jpg");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLsQ":
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
/* harmony import */ var _combine_marble_merge_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SckI");
/* harmony import */ var _combine_marble_map_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H14B");
/* harmony import */ var _combine_marble_first_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H2oo");
/* harmony import */ var _combine_marble_last_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VD1D");
/* harmony import */ var _combine_marble_count_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("C2Yc");
/* harmony import */ var _combine_marble_debounce_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("fQ/H");
/* harmony import */ var _combine_marble_zip_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("GhaY");
/* harmony import */ var _hero_combine_marbles_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("QbZa");
/* harmony import */ var _silver_surfer_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ObFj");
/* harmony import */ var _shapes_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("3f0T");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */












const meta = {
  title: `What is Combine?`,
  description: `An Introduction to Combine.`,
  date: "2020-11-10T14:00:00.000Z",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    src: _hero_combine_marbles_jpg__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
    alt: "What is Combine? Apple's reactive programming framework."
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Combine is the new reactive programming framework from `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://developer.apple.com/documentation/combine"
  }), `Apple`), `. Like SwiftUI (which it pairs beautifully with), Combine is declarative. It provides tools for managing streams of your app's events over time, and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("em", {
    parentName: "p"
  }, `react`), ` accordingly. Because it has the blessing of Apple, you know it's here to stay.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cpim":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/figma-variants.b3f26a09b9f67881069a6506dbf380b3.jpg");

/***/ }),

/***/ "cwgS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/ia-writer-working-copy.0e0efda5bed38e84d0dcb052d125a911.jpg");

/***/ }),

/***/ "dHPk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/waynedahlberg.ec5a7624841b4d34c6fd54883892118f.jpg");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fFf7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/swiftui-basics-02.ba1f87f1dd1de6ba98b238d9e15f280e.jpg");

/***/ }),

/***/ "fQ/H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/combine-marble-debounce.6a0fc7ae8e1c49de07ae0450a3bf915e.jpg");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "ggzO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/swiftui-basics-05.bcda486776d5a6b080ed986f26a5d910.jpg");

/***/ }),

/***/ "h2Ty":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/swiftui-basics-01.3727074fee1f59334ca7c472db5659bd.jpg");

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

/***/ "jybU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/swiftui-basics-03.e25b52a881c87c0e50b714165c1ba49a.jpg");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kcoj":
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
  title: `Swift Generics`,
  description: `The basics of Swift Generics.`,
  date: "2020-11-09T14:00:00.000Z",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `Generics are one thing that completely escaped me as I started learning Swift. Turns out they are one of the most powerful features in the entire Swift Language. Generics allow you to write flexible, reusable functions by writing code that is independent of Types.`));
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

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "njY4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/swiftui-basics-07.f515ced8782d5125691550e3c85f29fe.jpg");

/***/ }),

/***/ "qCJp":
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
  title: `Swift Enumerations`,
  description: `The basics of Swift Enumerations.`,
  date: "2020-11-09T12:00:00.000Z",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `An enumeration defines a common type for a group of related values and enables you to work with those values in a type-safe way within your code.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "tFF7":
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
/* harmony import */ var _ia_writer_working_copy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cwgS");
/* harmony import */ var _nextjs_tailwind_vercel_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Uq/p");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */




const meta = {
  title: `Hello World 👋`,
  description: `This is the first post of my blog.`,
  date: "2020-11-02T19:00:00.000Z",
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, `This blog is a long time coming. The rise of social media has largely replaced the desire for self-publishing on the web. This is my attempt to recapture that desire, build my writing skills, and possibly share some things with others. I've noticed friends and peers firing up their own blogging engines lately. So with this post I am turning the ignition to `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("strong", {
    parentName: "p"
  }, `START`), `.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "uCkV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/swiftui-basics-04.23fa79e7dfc07b112dd5285318cb3b0d.jpg");

/***/ }),

/***/ "wzIJ":
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
/* harmony import */ var _swiftui_basics_01_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h2Ty");
/* harmony import */ var _swiftui_basics_02_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fFf7");
/* harmony import */ var _swiftui_basics_03_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("jybU");
/* harmony import */ var _swiftui_basics_04_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uCkV");
/* harmony import */ var _swiftui_basics_05_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ggzO");
/* harmony import */ var _swiftui_basics_06_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zqH2");
/* harmony import */ var _swiftui_basics_07_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("njY4");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsx mdx */









const meta = {
  title: `SwiftUI Basics`,
  description: `The basics of the SwiftUI layout framework.`,
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://developer.apple.com/tutorials/swiftui?ref=madewithvuejs.com"
  }), `Apple`), ` describes SwiftUI is a modern way to declare user interfaces for any Apple platform. Unlike imperative UI layout tools like Interface Builder and Auto Layout, the declarative nature of SwiftUI Views allows developers to concentrate on composition and state.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "xk/1":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./110220-hello-world/index.mdx": "tFF7",
	"./110520-figma-variants/index.mdx": "LRld",
	"./110720-swift-types/index.mdx": "+YBj",
	"./110820-swiftui-basics/index.mdx": "wzIJ",
	"./110920-swift-access-control/index.mdx": "493F",
	"./110920-swift-enumerations/index.mdx": "qCJp",
	"./110920-swift-generics/index.mdx": "kcoj",
	"./111020-what-is-combine/index.mdx": "YLsQ"
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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zqH2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/_next/static/media/swiftui-basics-06.a57fa0e4919620b18926e8b21755f005.jpg");

/***/ })

/******/ });