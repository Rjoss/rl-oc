var oc=oc||{};oc.reactComponents=oc.reactComponents||{};oc.reactComponents['c4b131f7009243a70271dde246bc7a56ff286555']=oc.reactComponents['c4b131f7009243a70271dde246bc7a56ff286555']||(function(){var module = /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./prototype/_package/temp/reactOCProvider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./prototype/_package/temp/reactOCProvider.js":
/*!****************************************************!*\
  !*** ./prototype/_package/temp/reactOCProvider.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ross_www_altruist_registry_prototype_template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prototype/template.js */ \"./prototype/template.js\");\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\nvar OCProvider = function (_React$Component) {\n  _inherits(OCProvider, _React$Component);\n\n  function OCProvider() {\n    _classCallCheck(this, OCProvider);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  OCProvider.prototype.componentDidMount = function componentDidMount() {\n    var _props = this.props,\n        _staticPath = _props._staticPath,\n        _baseUrl = _props._baseUrl,\n        _componentName = _props._componentName,\n        _componentVersion = _props._componentVersion,\n        rest = _objectWithoutProperties(_props, ['_staticPath', '_baseUrl', '_componentName', '_componentVersion']);\n\n    window.oc.events.fire('oc:componentDidMount', rest);\n  };\n\n  OCProvider.prototype.getChildContext = function getChildContext() {\n    var _this2 = this;\n\n    var getData = function getData(parameters, cb) {\n      return window.oc.getData({\n        name: _this2.props._componentName,\n        version: _this2.props._componentVersion,\n        baseUrl: _this2.props._baseUrl,\n        parameters: parameters\n      }, function (err, data) {\n        if (err) {\n          return cb(err);\n        }\n\n        var _data$reactComponent$ = data.reactComponent.props,\n            _staticPath = _data$reactComponent$._staticPath,\n            _baseUrl = _data$reactComponent$._baseUrl,\n            _componentName = _data$reactComponent$._componentName,\n            _componentVersion = _data$reactComponent$._componentVersion,\n            rest = _objectWithoutProperties(_data$reactComponent$, ['_staticPath', '_baseUrl', '_componentName', '_componentVersion']);\n\n        cb(null, rest, data.reactComponent.props);\n      });\n    };\n    var getSetting = function getSetting(setting) {\n      var settingHash = {\n        name: _this2.props._componentName,\n        version: _this2.props._componentVersion,\n        baseUrl: _this2.props._baseUrl,\n        staticPath: _this2.props._staticPath\n      };\n      return settingHash[setting];\n    };\n    return { getData: getData, getSetting: getSetting };\n  };\n\n  OCProvider.prototype.render = function render() {\n    var _props2 = this.props,\n        _staticPath = _props2._staticPath,\n        _baseUrl = _props2._baseUrl,\n        _componentName = _props2._componentName,\n        _componentVersion = _props2._componentVersion,\n        rest = _objectWithoutProperties(_props2, ['_staticPath', '_baseUrl', '_componentName', '_componentVersion']);\n\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Users_ross_www_altruist_registry_prototype_template_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], rest);\n  };\n\n  return OCProvider;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\nOCProvider.childContextTypes = {\n  getData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,\n  getSetting: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (OCProvider);\n\n//# sourceURL=webpack:///./prototype/_package/temp/reactOCProvider.js?");

/***/ }),

/***/ "./prototype/node_modules/oc-template-react-compiler/utils/index.js":
/*!**************************************************************************!*\
  !*** ./prototype/node_modules/oc-template-react-compiler/utils/index.js ***!
  \**************************************************************************/
/*! exports provided: withDataProvider, withSettingProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _withDataProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withDataProvider */ \"./prototype/node_modules/oc-template-react-compiler/utils/withDataProvider.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"withDataProvider\", function() { return _withDataProvider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _withSettingProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withSettingProvider */ \"./prototype/node_modules/oc-template-react-compiler/utils/withSettingProvider.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"withSettingProvider\", function() { return _withSettingProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./prototype/node_modules/oc-template-react-compiler/utils/index.js?");

/***/ }),

/***/ "./prototype/node_modules/oc-template-react-compiler/utils/withDataProvider.js":
/*!*************************************************************************************!*\
  !*** ./prototype/node_modules/oc-template-react-compiler/utils/withDataProvider.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\nvar withDataProvider = function withDataProvider(BaseComponent) {\n  var Enhanced = function Enhanced(props, context) {\n    var propsWithGetData = _extends({}, props, {\n      getData: context.getData\n    });\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, propsWithGetData);\n  };\n\n  Enhanced.contextTypes = {\n    getData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n  };\n\n  return Enhanced;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withDataProvider);\n\n//# sourceURL=webpack:///./prototype/node_modules/oc-template-react-compiler/utils/withDataProvider.js?");

/***/ }),

/***/ "./prototype/node_modules/oc-template-react-compiler/utils/withSettingProvider.js":
/*!****************************************************************************************!*\
  !*** ./prototype/node_modules/oc-template-react-compiler/utils/withSettingProvider.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\nvar withSettingProvider = function withSettingProvider(BaseComponent) {\n  var Enhanced = function Enhanced(props, context) {\n    var propsWithGetSetting = _extends({}, props, {\n      getSetting: context.getSetting\n    });\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, propsWithGetSetting);\n  };\n\n  Enhanced.contextTypes = {\n    getSetting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n  };\n\n  return Enhanced;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withSettingProvider);\n\n//# sourceURL=webpack:///./prototype/node_modules/oc-template-react-compiler/utils/withSettingProvider.js?");

/***/ }),

/***/ "./prototype/styles.css":
/*!******************************!*\
  !*** ./prototype/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"cmp_drawer\":\"oc__prototype-styles-css__cmp_drawer__2UbYCLSV\",\"cmpDrawer\":\"oc__prototype-styles-css__cmp_drawer__2UbYCLSV\",\"cmp_drawer__link\":\"oc__prototype-styles-css__cmp_drawer__link__3fLa2vWm\",\"cmpDrawerLink\":\"oc__prototype-styles-css__cmp_drawer__link__3fLa2vWm\",\"cmp_drawer__content\":\"oc__prototype-styles-css__cmp_drawer__content__3SroRViD\",\"cmpDrawerContent\":\"oc__prototype-styles-css__cmp_drawer__content__3SroRViD\",\"metadata\":\"oc__prototype-styles-css__metadata__GhTN-QGN\"};\n\n//# sourceURL=webpack:///./prototype/styles.css?");

/***/ }),

/***/ "./prototype/template.js":
/*!*******************************!*\
  !*** ./prototype/template.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./prototype/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var oc_template_react_compiler_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! oc-template-react-compiler/utils */ \"./prototype/node_modules/oc-template-react-compiler/utils/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\nvar Drawer = function (_Component) {\n  _inherits(Drawer, _Component);\n\n  function Drawer(props) {\n    _classCallCheck(this, Drawer);\n\n    var _this = _possibleConstructorReturn(this, _Component.call(this));\n\n    _this.state = {\n      name: props.name,\n      visible: props.visible\n    };\n    return _this;\n  }\n\n  Drawer.prototype.componentDidMount = function componentDidMount() {\n    // get the props, change them, and set the state\n    // this.props.getData({ name: 'Pippo' }, (err, data) => {\n    //   if (err) throw err;\n    //   this.setState({ name: data.name });\n    // });\n\n    // Don't do this if you don't want to be fired\n    // oc.events.on('oc:componentDidMount', (ev, props) => {\n    //   console.group('OC Component Mounted');\n    //   console.log('initial props');\n    //   console.log(props);\n    //   console.groupEnd();\n    // });\n  };\n\n  Drawer.prototype.toggleVisibility = function toggleVisibility(e) {\n    var _this2 = this;\n\n    e.preventDefault();\n    var isVisible = this.state.visible ? false : true;\n\n    this.props.getData({ visible: isVisible }, function (err, data) {\n      if (err) throw err;\n      _this2.setState({ visible: data.visible });\n    });\n    return false;\n  };\n\n  Drawer.prototype.render = function render() {\n    var getSetting = this.props.getSetting;\n    var name = this.state.name;\n\n    var visible = this.state.visible ? 'is-visible' : 'is-hidden';\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: '' + _styles_css__WEBPACK_IMPORTED_MODULE_1___default.a['cmp_drawer'], 'data-visible': visible },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'h4',\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'a',\n          { className: _styles_css__WEBPACK_IMPORTED_MODULE_1___default.a['cmp_drawer__link'], href: '#', onClick: this.toggleVisibility.bind(this) },\n          this.state.name\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: _styles_css__WEBPACK_IMPORTED_MODULE_1___default.a['cmp_drawer__content'] },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'p',\n          null,\n          'Eu tempor dolore adipisicing minim excepteur enim adipisicing eiusmod sunt voluptate irure enim non.'\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'code',\n        { className: '' + _styles_css__WEBPACK_IMPORTED_MODULE_1___default.a['metadata'] },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'p',\n          null,\n          'component name: ',\n          getSetting('name')\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'p',\n          null,\n          'component version: ',\n          getSetting('version')\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'p',\n          null,\n          'registry baseUrl: ',\n          getSetting('baseUrl')\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'p',\n          null,\n          'component staticPath: ',\n          getSetting('staticPath')\n        )\n      )\n    );\n  };\n\n  return Drawer;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n// export default App;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(oc_template_react_compiler_utils__WEBPACK_IMPORTED_MODULE_2__[\"withSettingProvider\"])(Object(oc_template_react_compiler_utils__WEBPACK_IMPORTED_MODULE_2__[\"withDataProvider\"])(Drawer)));\n\n//# sourceURL=webpack:///./prototype/template.js?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PropTypes;\n\n//# sourceURL=webpack:///external_%22PropTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ })

/******/ });; return module.default}())