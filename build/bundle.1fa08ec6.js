/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([317,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkOneProps = exports.MarkOneWrapper = void 0;
var MarkOneWrapper_1 = __webpack_require__(90);
Object.defineProperty(exports, "MarkOneWrapper", { enumerable: true, get: function () { return __importDefault(MarkOneWrapper_1).default; } });
Object.defineProperty(exports, "MarkOneProps", { enumerable: true, get: function () { return MarkOneWrapper_1.MarkOneProps; } });
__exportStar(__webpack_require__(290), exports);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(984);
__exportStar(__webpack_require__(88), exports);
__exportStar(__webpack_require__(985), exports);
__exportStar(__webpack_require__(986), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(987), exports);
__exportStar(__webpack_require__(988), exports);
__exportStar(__webpack_require__(989), exports);
__exportStar(__webpack_require__(203), exports);
__exportStar(__webpack_require__(991), exports);
__exportStar(__webpack_require__(992), exports);
__exportStar(__webpack_require__(127), exports);
__exportStar(__webpack_require__(993), exports);
__exportStar(__webpack_require__(994), exports);
__exportStar(__webpack_require__(73), exports);
__exportStar(__webpack_require__(995), exports);
__exportStar(__webpack_require__(996), exports);


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredSymbol = exports.StyledInputLabelText = exports.StyledInputLabel = exports.POSITION = void 0;
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var const_1 = __webpack_require__(73);
var Theme_1 = __webpack_require__(8);
var POSITION;
(function (POSITION) {
    POSITION["TOP"] = "top";
    POSITION["LEFT"] = "left";
    POSITION["RIGHT"] = "right";
})(POSITION = exports.POSITION || (exports.POSITION = {}));
var generateGrid = function (labelPosition, isLabelVisible) {
    if (!isLabelVisible) {
        return "\"i i i\"\n            \"e e e\"";
    }
    if (labelPosition === POSITION.TOP) {
        return "\"l l l\"\n            \"i i i\"\n            \"e e e\"";
    }
    return "\"l i i\"\n          \". e e\"";
};
exports.StyledInputLabel = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: ", ";\n  grid-template-areas: ", ";\n  align-items: baseline;\n  gap: ", ";\n"], ["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: ", ";\n  grid-template-areas: ", ";\n  align-items: baseline;\n  gap: ", ";\n"])), function (_a) {
    var hideError = _a.hideError;
    return ((hideError)
        ? '1fr'
        : '1fr minmax(1em, max-content)');
}, function (_a) {
    var labelPosition = _a.labelPosition, isLabelVisible = _a.isLabelVisible;
    return (generateGrid(labelPosition, isLabelVisible));
}, function (_a) {
    var hideError = _a.hideError, isLabelVisible = _a.isLabelVisible, theme = _a.theme;
    return ((!isLabelVisible && hideError)
        ? '0px'
        : (theme.ws.xsmall) + ' ' + (theme.ws.xsmall));
});
exports.StyledInputLabelText = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  grid-area: l;\n  justify-self: ", ";\n  color: ", ";\n"], ["\n  ", ";\n  grid-area: l;\n  justify-self: ", ";\n  color: ", ";\n"])), function (_a) {
    var isLabelVisible = _a.isLabelVisible;
    return (isLabelVisible ? '' : const_1.hideFromDisplay);
}, function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === POSITION.TOP
        ? 'start'
        : 'end');
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return ((disabled)
        ? "".concat(theme.color.text.medium)
        : "".concat(theme.color.text.dark));
});
exports.RequiredSymbol = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), (0, Theme_1.fromTheme)('color', 'text', 'negative'));
var InputLabel = function (props) {
    var htmlFor = props.htmlFor, label = props.label, labelPosition = props.labelPosition, isLabelVisible = props.isLabelVisible, children = props.children, isRequired = props.isRequired, disabled = props.disabled, hideError = props.hideError;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(exports.StyledInputLabel, { htmlFor: htmlFor, labelPosition: labelPosition, theme: theme, isLabelVisible: isLabelVisible, hideError: hideError },
        react_1.default.createElement(exports.StyledInputLabelText, { isLabelVisible: isLabelVisible, labelPosition: labelPosition, disabled: disabled },
            react_1.default.createElement(react_1.default.Fragment, null,
                label,
                isRequired && react_1.default.createElement(exports.RequiredSymbol, null, "*"))),
        children));
};
InputLabel.defaultProps = {
    labelPosition: POSITION.LEFT,
    isLabelVisible: true,
    disabled: false,
    hideError: false,
    isRequired: false,
};
exports.StyledInputLabel.defaultProps = {
    labelPosition: POSITION.LEFT,
    isLabelVisible: true,
    hideError: false,
};
exports.default = InputLabel;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var StyledValidationErrorMessage = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  grid-area: e;\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  grid-area: e;\n"])), (0, Theme_1.fromTheme)('color', 'text', 'negative'), (0, Theme_1.fromTheme)('font', 'error', 'family'), (0, Theme_1.fromTheme)('font', 'error', 'size'), (0, Theme_1.fromTheme)('font', 'error', 'weight'));
var ValidationErrorMessage = function (props) {
    var id = props.id, children = props.children;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledValidationErrorMessage, { id: id, theme: theme, role: "alert", "aria-live": "assertive" }, children));
};
exports.default = ValidationErrorMessage;
var templateObject_1;


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hideFromDisplay = exports.ARIA_LIVE_VARIANT = void 0;
var ARIA_LIVE_VARIANT;
(function (ARIA_LIVE_VARIANT) {
    ARIA_LIVE_VARIANT["OFF"] = "off";
    ARIA_LIVE_VARIANT["ASSERTIVE"] = "assertive";
    ARIA_LIVE_VARIANT["POLITE"] = "polite";
})(ARIA_LIVE_VARIANT = exports.ARIA_LIVE_VARIANT || (exports.ARIA_LIVE_VARIANT = {}));
exports.hideFromDisplay = "\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n";


/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  &:hover {\n    background: ", ";\n    border: none;\n    color: ", ";\n  }\n"], ["\n  background: ", ";\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  &:hover {\n    background: ", ";\n    border: none;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.color.background[variant].medium;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (theme.color.text[variant === Theme_1.VARIANT.BASE ? 'dark' : 'light']);
}, (0, Theme_1.fromTheme)('font', 'body', 'size'), (0, Theme_1.fromTheme)('font', 'body', 'weight'), function (_a) {
    var theme = _a.theme;
    return ("".concat(theme.ws.xsmall, " ").concat(theme.ws.small));
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.color.background[variant].dark;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (theme.color.text[variant === Theme_1.VARIANT.BASE ? 'dark' : 'light']);
});
StyledButton.defaultProps = {
    variant: Theme_1.VARIANT.BASE,
};
var Button = function (props) {
    var id = props.id, children = props.children, onClick = props.onClick, disabled = props.disabled, variant = props.variant, forwardRef = props.forwardRef, alt = props.alt, className = props.className, form = props.form, type = props.type;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledButton, { id: id, onClick: onClick, theme: theme, disabled: disabled, variant: variant, ref: forwardRef, "aria-label": alt, className: className, form: form, type: type }, children));
};
Button.defaultProps = {
    children: '',
    className: null,
    disabled: false,
    form: '',
    forwardRef: null,
    type: 'button',
};
exports.default = Button;
var templateObject_1;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonDropdownMenuItem = exports.ButtonDropdownMenu = exports.BorderlessButton = exports.Button = void 0;
var Button_1 = __webpack_require__(87);
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return __importDefault(Button_1).default; } });
var BorderlessButton_1 = __webpack_require__(171);
Object.defineProperty(exports, "BorderlessButton", { enumerable: true, get: function () { return __importDefault(BorderlessButton_1).default; } });
var ButtonDropdownMenu_1 = __webpack_require__(172);
Object.defineProperty(exports, "ButtonDropdownMenu", { enumerable: true, get: function () { return __importDefault(ButtonDropdownMenu_1).default; } });
var ButtonDropdownMenuItem_1 = __webpack_require__(177);
Object.defineProperty(exports, "ButtonDropdownMenuItem", { enumerable: true, get: function () { return __importDefault(ButtonDropdownMenuItem_1).default; } });


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var InputLabel_1 = __webpack_require__(40);
var generateGrid = function (labelPosition, isLabelVisible) {
    if (!isLabelVisible) {
        return "\"i i i\"\n            \"e e e\"";
    }
    if (labelPosition === InputLabel_1.POSITION.RIGHT) {
        return "\"i l l\"\n            \". e e\"";
    }
    return "\"l i i\"\n          \". e e\"";
};
var StyledCheckLabel = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: ", ";\n  grid-template-areas: ", ";\n  align-items: baseline;\n  gap: ", ";\n"], ["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: ", ";\n  grid-template-areas: ", ";\n  align-items: baseline;\n  gap: ", ";\n"])), function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === InputLabel_1.POSITION.RIGHT
        ? 'auto minmax(0, 1fr)'
        : 'repeat(3, 1fr)');
}, function (_a) {
    var hideError = _a.hideError;
    return ((hideError)
        ? '1fr'
        : '1fr minmax(1em, max-content)');
}, function (_a) {
    var labelPosition = _a.labelPosition, isLabelVisible = _a.isLabelVisible;
    return (generateGrid(labelPosition, isLabelVisible));
}, function (_a) {
    var theme = _a.theme;
    return (theme.ws.xsmall) + ' ' + (theme.ws.xsmall);
});
var StyledCheckLabelText = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: ", ";\n  grid-area: l;\n  justify-self: ", ";\n  color: ", ";\n"], ["\n  display: ", ";\n  grid-area: l;\n  justify-self: ", ";\n  color: ", ";\n"])), function (_a) {
    var isLabelVisible = _a.isLabelVisible;
    return (isLabelVisible ? 'inline' : 'none');
}, function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === InputLabel_1.POSITION.RIGHT
        ? 'start'
        : 'end');
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return ((disabled)
        ? "".concat(theme.color.text.medium)
        : "".concat(theme.color.text.dark));
});
var CheckLabel = function (props) {
    var htmlFor = props.htmlFor, label = props.label, labelPosition = props.labelPosition, isLabelVisible = props.isLabelVisible, children = props.children, isRequired = props.isRequired, disabled = props.disabled, hideError = props.hideError;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledCheckLabel, { htmlFor: htmlFor, labelPosition: labelPosition, theme: theme, isLabelVisible: isLabelVisible, hideError: hideError },
        react_1.default.createElement(StyledCheckLabelText, { isLabelVisible: isLabelVisible, labelPosition: labelPosition, disabled: disabled },
            react_1.default.createElement(react_1.default.Fragment, null,
                label,
                isRequired && react_1.default.createElement(InputLabel_1.RequiredSymbol, null, "*"))),
        children));
};
CheckLabel.defaultProps = {
    labelPosition: InputLabel_1.POSITION.LEFT,
    isLabelVisible: true,
    disabled: false,
    hideError: false,
    isRequired: false,
};
StyledCheckLabel.defaultProps = {
    labelPosition: InputLabel_1.POSITION.LEFT,
    isLabelVisible: true,
    hideError: false,
};
exports.default = CheckLabel;
var templateObject_1, templateObject_2;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var styled_components_1 = __webpack_require__(4);
var GlobalCSS_1 = __importDefault(__webpack_require__(166));
var MarkOneTheme_1 = __importDefault(__webpack_require__(544));
var MarkOneWrapper = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: MarkOneTheme_1.default },
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(GlobalCSS_1.default, { theme: MarkOneTheme_1.default }),
            children)));
};
exports.default = MarkOneWrapper;


/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = exports.List = exports.DropdownListItem = exports.DropdownList = void 0;
var DropdownList_1 = __webpack_require__(173);
Object.defineProperty(exports, "DropdownList", { enumerable: true, get: function () { return __importDefault(DropdownList_1).default; } });
var DropdownListItem_1 = __webpack_require__(174);
Object.defineProperty(exports, "DropdownListItem", { enumerable: true, get: function () { return __importDefault(DropdownListItem_1).default; } });
var List_1 = __webpack_require__(175);
Object.defineProperty(exports, "List", { enumerable: true, get: function () { return __importDefault(List_1).default; } });
var ListItem_1 = __webpack_require__(176);
Object.defineProperty(exports, "ListItem", { enumerable: true, get: function () { return __importDefault(ListItem_1).default; } });


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALIGN = exports.ALIGN = void 0;
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var ALIGN;
(function (ALIGN) {
    ALIGN["LEFT"] = "left";
    ALIGN["RIGHT"] = "right";
    ALIGN["CENTER"] = "center";
})(ALIGN = exports.ALIGN || (exports.ALIGN = {}));
var VALIGN;
(function (VALIGN) {
    VALIGN["TOP"] = "top";
    VALIGN["BOTTOM"] = "bottom";
    VALIGN["CENTER"] = "center";
})(VALIGN = exports.VALIGN || (exports.VALIGN = {}));
var StyledCell = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-left: ", ";\n  border-right: ", ";\n  font-size:  ", ";\n  font-weight: ", ";\n  color: ", ";\n  padding: ", ";\n  text-align: ", ";\n  vertical-align: ", ";\n  background-color: ", ";\n"], ["\n  border-left: ", ";\n  border-right: ", ";\n  font-size:  ", ";\n  font-weight: ", ";\n  color: ", ";\n  padding: ", ";\n  text-align: ", ";\n  vertical-align: ", ";\n  background-color: ", ";\n"])), (0, Theme_1.fromTheme)('border', 'light'), (0, Theme_1.fromTheme)('border', 'light'), (0, Theme_1.fromTheme)('font', 'data', 'size'), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (theme.font[[Theme_1.TEXT_VARIANT.NEGATIVE, Theme_1.TEXT_VARIANT.MEDIUM]
        .includes(variant)
        ? 'bold' : 'data'].weight);
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    if (variant === Theme_1.TEXT_VARIANT.NEGATIVE) {
        return theme.color.text.negative;
    }
    if (variant === Theme_1.TEXT_VARIANT.MEDIUM) {
        return theme.color.text.medium;
    }
    return theme.color.text.base;
}, (0, Theme_1.fromTheme)('ws', 'xsmall'), function (_a) {
    var alignment = _a.alignment;
    return alignment;
}, function (_a) {
    var verticalAlignment = _a.verticalAlignment;
    return verticalAlignment;
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
});
StyledCell.defaultProps = {
    alignment: ALIGN.LEFT,
    verticalAlignment: VALIGN.CENTER,
    variant: Theme_1.TEXT_VARIANT.BASE,
};
var TableCell = StyledCell;
exports.default = TableCell;
var templateObject_1;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTextInput = void 0;
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(54));
var InputLabel_1 = __importStar(__webpack_require__(40));
exports.StyledTextInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: ", ";\n  width: 100%;\n  padding: ", ";\n  padding-right: ", ";\n  grid-area: i;\n"], ["\n  border: ", ";\n  width: 100%;\n  padding: ", ";\n  padding-right: ", ";\n  grid-area: i;\n"])), (0, Theme_1.fromTheme)('border', 'hairline'), (0, Theme_1.fromTheme)('ws', 'xsmall'), (0, Theme_1.fromTheme)('ws', 'zero'));
var TextInput = function (props) {
    var id = props.id, onChange = props.onChange, type = props.type, name = props.name, placeholder = props.placeholder, value = props.value, errorMessage = props.errorMessage, disabled = props.disabled, label = props.label, labelPosition = props.labelPosition, isLabelVisible = props.isLabelVisible, isRequired = props.isRequired, forwardRef = props.forwardRef, hideError = props.hideError;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(InputLabel_1.default, { htmlFor: id, label: label, labelPosition: labelPosition, isLabelVisible: isLabelVisible, isRequired: isRequired, hideError: hideError },
        react_1.default.createElement(exports.StyledTextInput, { onChange: onChange, id: id, name: name, placeholder: placeholder, type: type, theme: theme, value: value, disabled: disabled, label: label, "aria-errormessage": "".concat(id, "-error"), "aria-invalid": errorMessage ? true : null, "aria-required": isRequired, required: isRequired, ref: forwardRef }),
        errorMessage && !hideError
            && (react_1.default.createElement(ValidationErrorMessage_1.default, { id: "".concat(id, "-error") }, errorMessage))));
};
TextInput.defaultProps = {
    type: 'text',
    disabled: false,
    labelPosition: InputLabel_1.POSITION.LEFT,
    isLabelVisible: true,
    hideError: false,
    placeholder: '',
    errorMessage: '',
    isRequired: false,
    forwardRef: null,
};
exports.default = TextInput;
var templateObject_1;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPINNER_TEXT = void 0;
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var SPINNER_TEXT;
(function (SPINNER_TEXT) {
    SPINNER_TEXT["LIGHT"] = "light";
    SPINNER_TEXT["DARK"] = "dark";
})(SPINNER_TEXT = exports.SPINNER_TEXT || (exports.SPINNER_TEXT = {}));
var StyledLoadSpinnerText = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: transparent;\n  color: ", "; \n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  margin-top: ", ";\n"], ["\n  background: transparent;\n  color: ", "; \n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  margin-top: ", ";\n"])), function (_a) {
    var color = _a.color, theme = _a.theme;
    return theme.color.text[color];
}, (0, Theme_1.fromTheme)('font', 'heading', 'family'), (0, Theme_1.fromTheme)('font', 'heading', 'weight'), (0, Theme_1.fromTheme)('font', 'heading', 'size'), (0, Theme_1.fromTheme)('ws', 'large'));
var LoadSpinnerText = function (props) {
    var children = props.children, color = props.color;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledLoadSpinnerText, { theme: theme, color: color }, children));
};
LoadSpinnerText.defaultProps = {
    color: SPINNER_TEXT.DARK,
};
exports.default = LoadSpinnerText;
var templateObject_1;


/***/ }),
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(4);
__webpack_require__(500);
__webpack_require__(522);
var utils_1 = __webpack_require__(290);
exports.default = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   html, body {\n    background: ", ";\n    box-sizing: border-box;\n    color: ", " ;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n }\n*, *:before, *:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"], ["\n   html, body {\n    background: ", ";\n    box-sizing: border-box;\n    color: ", " ;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n }\n*, *:before, *:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"])), (0, utils_1.fromTheme)('color', 'background', 'light'), (0, utils_1.fromTheme)('color', 'text', 'dark'), (0, utils_1.fromTheme)('font', 'base', 'family'), (0, utils_1.fromTheme)('font', 'base', 'size'), (0, utils_1.fromTheme)('font', 'base', 'weight'));
var templateObject_1;


/***/ }),
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Button_1 = __importDefault(__webpack_require__(87));
var const_1 = __webpack_require__(73);
var Theme_1 = __webpack_require__(8);
var TextContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  grid-area: text;\n"], ["\n  grid-area: text;\n"])));
var ButtonContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: right;\n  grid-area: button;\n"], ["\n  text-align: right;\n  grid-area: button;\n"])));
var StyledGlobalMessage = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  padding: ", ";\n  z-index: 1000;\n  display: grid;\n  grid-template: \". text button\" / 1fr 2fr 1fr;\n"], ["\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  padding: ", ";\n  z-index: 1000;\n  display: grid;\n  grid-template: \". text button\" / 1fr 2fr 1fr;\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.color.background[variant].dark;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (theme.color.text[variant === Theme_1.VARIANT.BASE ? 'dark' : 'light']);
}, (0, Theme_1.fromTheme)('ws', 'small'));
var GlobalMessage = function (props) {
    var id = props.id, children = props.children, variant = props.variant, role = props.role, ariaLive = props.ariaLive, buttonLabel = props.buttonLabel, buttonAlt = props.buttonAlt, forwardRef = props.forwardRef, onClick = props.onClick;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGlobalMessage, { id: id, variant: variant, theme: theme, role: role, "aria-live": ariaLive },
            react_1.default.createElement(TextContainer, null, children),
            react_1.default.createElement(ButtonContainer, null,
                react_1.default.createElement(Button_1.default, { id: "".concat(id, " button"), alt: buttonAlt, onClick: onClick, variant: Theme_1.VARIANT.BASE, forwardRef: forwardRef }, buttonLabel)))));
};
GlobalMessage.defaultProps = {
    variant: Theme_1.VARIANT.BASE,
    role: 'alert',
    ariaLive: const_1.ARIA_LIVE_VARIANT.ASSERTIVE,
    forwardRef: null,
};
exports.default = GlobalMessage;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var StyledBorderlessButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: transparent;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  &:hover {\n    background: transparent;\n    color: ", ";\n  }\n"], ["\n  background: transparent;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  &:hover {\n    background: transparent;\n    color: ", ";\n  }\n"])), function (_a) {
    var variant = _a.variant, theme = _a.theme;
    return theme.color.background[variant].medium;
}, (0, Theme_1.fromTheme)('font', 'body', 'size'), (0, Theme_1.fromTheme)('font', 'body', 'weight'), function (_a) {
    var theme = _a.theme;
    return ("".concat(theme.ws.xsmall, " ").concat(theme.ws.small));
}, function (_a) {
    var variant = _a.variant, theme = _a.theme;
    return theme.color.background[variant].dark;
});
StyledBorderlessButton.defaultProps = {
    variant: Theme_1.VARIANT.BASE,
};
var BorderlessButton = function (props) {
    var id = props.id, onClick = props.onClick, children = props.children, disabled = props.disabled, variant = props.variant, forwardRef = props.forwardRef, alt = props.alt;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledBorderlessButton, { id: id, onClick: onClick, theme: theme, disabled: disabled, variant: variant, ref: forwardRef, "aria-label": alt }, children));
};
BorderlessButton.defaultProps = {
    disabled: false,
};
exports.default = BorderlessButton;
var templateObject_1;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var Button_1 = __importDefault(__webpack_require__(87));
var Lists_1 = __webpack_require__(127);
var ButtonDropdownMenu = function (props) {
    var id = props.id, label = props.label, forwardRef = props.forwardRef, alt = props.alt, variant = props.variant, children = props.children;
    var _a = (0, react_1.useState)(false), isMenuVisible = _a[0], setMenuVisible = _a[1];
    var handleDocumentBodyClick = (0, react_1.useCallback)(function () {
        setMenuVisible(false);
    }, [setMenuVisible]);
    (0, react_1.useEffect)(function () {
        if (isMenuVisible) {
            document.addEventListener('click', handleDocumentBodyClick);
        }
        else {
            document.removeEventListener('click', handleDocumentBodyClick);
        }
    }, [isMenuVisible, handleDocumentBodyClick]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Button_1.default, { id: id, onClick: function () {
                setMenuVisible(!isMenuVisible);
            }, forwardRef: forwardRef, alt: alt, variant: variant }, label),
        isMenuVisible && (react_1.default.createElement(Lists_1.DropdownList, null, children))));
};
ButtonDropdownMenu.defaultProps = {
    forwardRef: null,
};
exports.default = ButtonDropdownMenu;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var DropdownList = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border: ", ";\n  min-height: 3em;\n  min-width: 6em;\n  position: absolute;\n  transform: translate3d(0em, 0.1em, 0em);\n  z-index: 100;\n  list-style-type: none;\n"], ["\n  background: ", ";\n  border: ", ";\n  min-height: 3em;\n  min-width: 6em;\n  position: absolute;\n  transform: translate3d(0em, 0.1em, 0em);\n  z-index: 100;\n  list-style-type: none;\n"])), (0, Theme_1.fromTheme)('color', 'background', 'light'), (0, Theme_1.fromTheme)('border', 'hairline'));
exports.default = DropdownList;
var templateObject_1;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var DropdownListItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
exports.default = DropdownListItem;
var templateObject_1;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var List = styled_components_1.default.ol.attrs(function (_a) {
    var ordered = _a.ordered;
    return ({
        as: ordered ? 'ol' : 'ul',
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style: none;\n  > li {\n    border-top: ", ";\n    &:first-child {\n      border-top: none;\n    }\n  }\n"], ["\n  list-style: none;\n  > li {\n    border-top: ", ";\n    &:first-child {\n      border-top: none;\n    }\n  }\n"])), (0, Theme_1.fromTheme)('border', 'hairline'));
List.defaultProps = {
    ordered: false,
};
exports.default = List;
var templateObject_1;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var ListItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", " 0px;\n"], ["\n  padding: ", " 0px;\n"])), (0, Theme_1.fromTheme)('ws', 'small'));
exports.default = ListItem;
var templateObject_1;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var Lists_1 = __webpack_require__(127);
var StyledMenuListItem = (0, styled_components_1.default)(Lists_1.DropdownListItem)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n"], ["\n  &:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n"])), (0, Theme_1.fromTheme)('color', 'background', 'medium'));
var StyledMenuButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: transparent;\n  border: none;\n  padding: ", ";\n  width: 100%;\n  &:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n"], ["\n  background: transparent;\n  border: none;\n  padding: ", ";\n  width: 100%;\n  &:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n"])), (0, Theme_1.fromTheme)('ws', 'small'), (0, Theme_1.fromTheme)('color', 'background', 'medium'));
var ButtonDropdownMenuItem = function (props) {
    var onClick = props.onClick, children = props.children;
    return (react_1.default.createElement(StyledMenuListItem, null,
        react_1.default.createElement(StyledMenuButton, { onClick: onClick }, children)));
};
exports.default = ButtonDropdownMenuItem;
var templateObject_1, templateObject_2;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Header = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: baseline;\n  background-color: ", ";\n  display: flex;\n  justify-content: ", ";\n  padding: ", ";\n  width: 100%;\n"], ["\n  align-items: baseline;\n  background-color: ", ";\n  display: flex;\n  justify-content: ", ";\n  padding: ", ";\n  width: 100%;\n"])), function (_a) {
    var background = _a.background;
    return background;
}, function (_a) {
    var justify = _a.justify;
    return justify;
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.ws.medium, " ").concat(theme.ws.small);
});
Header.defaultProps = {
    background: 'transparent',
    justify: 'space-between',
};
exports.default = Header;
var templateObject_1;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Logo = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-self: stretch;\n  background-image: url(", ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  color: transparent;\n  display: inline-block;\n  font-size: 0;\n  line-height: 0;\n  margin: ", ";\n  width: ", ";\n  min-width: 100px;\n  height: ", ";\n"], ["\n  align-self: stretch;\n  background-image: url(", ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  color: transparent;\n  display: inline-block;\n  font-size: 0;\n  line-height: 0;\n  margin: ", ";\n  width: ", ";\n  min-width: 100px;\n  height: ", ";\n"])), function (_a) {
    var image = _a.image;
    return image;
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.ws.zero, " ").concat(theme.ws.small);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
});
Logo.defaultProps = {
    href: '',
    image: '',
    width: '175px',
    height: '50px',
};
exports.default = Logo;
var templateObject_1;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var PageBody = styled_components_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", ";\n  padding: ", ";\n"], ["\n  margin: ", ";\n  padding: ", ";\n"])), (0, Theme_1.fromTheme)('ws', 'small'), function (_a) {
    var padding = _a.padding, theme = _a.theme;
    return (padding || "0 0 ".concat(theme.ws.xlarge));
});
exports.default = PageBody;
var templateObject_1;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Footer = styled_components_1.default.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: baseline;\n  background: ", ";\n  display: flex;\n  justify-content: ", ";\n  padding: ", ";\n  width: 100%;\n  position: ", ";\n  bottom: 0;\n  font-size: ", ";\n  font-weight: ", ";\n  ul {\n    list-style: none;\n    display: flex;\n    li {\n      padding: 0 0.5rem;\n      border-right: 1px solid black;\n      &:last-of-type {\n        border: 0px;\n      }\n  };\n"], ["\n  align-items: baseline;\n  background: ", ";\n  display: flex;\n  justify-content: ", ";\n  padding: ", ";\n  width: 100%;\n  position: ", ";\n  bottom: 0;\n  font-size: ", ";\n  font-weight: ", ";\n  ul {\n    list-style: none;\n    display: flex;\n    li {\n      padding: 0 0.5rem;\n      border-right: 1px solid black;\n      &:last-of-type {\n        border: 0px;\n      }\n  };\n"])), function (_a) {
    var theme = _a.theme;
    return theme.color.background.light;
}, function (_a) {
    var justify = _a.justify;
    return justify;
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.ws.medium, " ").concat(theme.ws.small);
}, function (_a) {
    var position = _a.position;
    return position;
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.font.footer.size);
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.font.footer.weight);
});
Footer.defaultProps = {
    background: 'transparent',
    justify: 'space-between',
    position: 'sticky',
};
exports.default = Footer;
var templateObject_1;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var Paragraph = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-right: 25%;\n  margin-bottom: ", ";\n"], ["\n  padding-right: 25%;\n  margin-bottom: ", ";\n"])), (0, Theme_1.fromTheme)('ws', 'medium'));
exports.default = Paragraph;
var templateObject_1;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var MenuFlex = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n  align-self: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n  align-self: center;\n"])));
exports.default = MenuFlex;
var templateObject_1;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var StyledCallout = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  background: ", ";\n  margin: ", ";\n  padding: ", ";\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  background: ", ";\n  margin: ", ";\n  padding: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.font.callout.family;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.callout.size;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.callout.weight;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.text.dark;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.color.background[variant].light;
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.ws.medium, " ").concat(theme.ws.large, " ").concat(theme.ws.small, " ").concat(theme.ws.large);
}, function (_a) {
    var theme = _a.theme;
    return theme.ws.large;
});
var Callout = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? Theme_1.VARIANT.INFO : _b, _c = _a.role, role = _c === void 0 ? 'info' : _c, children = _a.children;
    return (react_1.default.createElement(StyledCallout, { variant: variant, role: role }, children));
};
Callout.defaultProps = {
    variant: Theme_1.VARIANT.INFO,
    role: 'note',
};
exports.default = Callout;
var templateObject_1;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var styled_components_1 = __importDefault(__webpack_require__(4));
var StyledGridWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: ", ";\n\n  @media (max-width: 768px) {\n    gap: ", "; /* Smaller gap for mobile devices */\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: ", ";\n\n  @media (max-width: 768px) {\n    gap: ", "; /* Smaller gap for mobile devices */\n  }\n"])), function (_a) {
    var theme = _a.theme, gap = _a.gap;
    return theme.ws[gap || 'small'];
}, function (_a) {
    var theme = _a.theme, gap = _a.gap;
    return theme.ws[gap || 'xsmall'];
});
var GridWrapper = function (_a) {
    var children = _a.children, gap = _a.gap;
    return (react_1.default.createElement(StyledGridWrapper, { gap: gap }, children));
};
GridWrapper.defaultProps = {
    gap: null,
};
exports.default = GridWrapper;
var templateObject_1;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGridColumnStyles = void 0;
var styled_components_1 = __importDefault(__webpack_require__(4));
var react_1 = __importDefault(__webpack_require__(0));
var getGridColumnStyles = function (placement, width) {
    switch (placement) {
        case 'left':
            return "span ".concat(width);
        case 'center': {
            var startColumn = Math.floor((12 - width) / 2) + 1;
            return "".concat(startColumn, " / span ").concat(width);
        }
        case 'right': {
            var endColumn = 13 - width;
            return "".concat(endColumn, " / span ").concat(width);
        }
        default:
            return "".concat(placement, " / span ").concat(width);
    }
};
exports.getGridColumnStyles = getGridColumnStyles;
var StyledGridContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  grid-column: ", "; \n"], ["\n  grid-column: ", "; \n"])), function (_a) {
    var placement = _a.placement, width = _a.width;
    return (0, exports.getGridColumnStyles)(placement, width);
});
var GridContainer = function (_a) {
    var width = _a.width, placement = _a.placement, children = _a.children;
    return (react_1.default.createElement(StyledGridContainer, { width: width, placement: placement }, children));
};
exports.default = GridContainer;
var templateObject_1;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var TabList = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: transparent;\n  border-bottom: ", ";\n  border-collapse: collapse;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n"], ["\n  background-color: transparent;\n  border-bottom: ", ";\n  border-collapse: collapse;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n"])), (0, Theme_1.fromTheme)('border', 'hairline'));
exports.default = TabList;
var templateObject_1;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var TabListItemBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border: ", ";\n  border-bottom: ", ";\n  color: ", ";\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  &:hover {\n    border: ", ";\n    border-bottom: ", ";\n    color: ", ";\n  }\n"], ["\n  background: ", ";\n  border: ", ";\n  border-bottom: ", ";\n  color: ", ";\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  &:hover {\n    border: ", ";\n    border-bottom: ", ";\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, isActive = _a.isActive;
    return (isActive ? theme.color.background.light : 'transparent');
}, function (_a) {
    var theme = _a.theme, isActive = _a.isActive;
    return (isActive ? theme.border.hairline : '1px solid transparent');
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? '1px solid transparent' : 'none');
}, (0, Theme_1.fromTheme)('color', 'text', 'dark'), (0, Theme_1.fromTheme)('border', 'hairline'), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? '1px solid transparent' : 'none');
}, (0, Theme_1.fromTheme)('color', 'text', 'dark'));
var TabListItemWrapper = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: -1px;\n  padding: 0 1em;\n"], ["\n  margin-bottom: -1px;\n  padding: 0 1em;\n"])));
var TabListItem = function (props) {
    var children = props.children, isActive = props.isActive;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(TabListItemWrapper, { "aria-selected": isActive, role: "tab" },
        react_1.default.createElement(TabListItemBox, { theme: theme, isActive: isActive }, children)));
};
TabListItemBox.defaultProps = {
    isActive: false,
};
TabListItem.defaultProps = {
    isActive: false,
};
exports.default = TabListItem;
var templateObject_1, templateObject_2;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var StyledTable = styled_components_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-collapse: separate;\n    border-spacing: 0;\n    width: 100%;\n    & thead {\n      & th {\n        border: none;\n      }\n      & tr > th {\n        border-top: ", ";\n        border-right: ", ";\n      }\n      & tr > th:first-of-type {\n        border-left: ", ";\n      }\n      & tr > th[rowspan]:not([rowspan='1']) {\n        border-bottom: ", ";\n      }\n      & tr:last-of-type > th {\n        border-bottom: ", ";\n      }\n    }\n    & tbody {\n      & tr > td, th {\n        border: none;\n      }\n      & tr > *:first-child {\n        border-left: ", ";\n      }\n      & tr > :is(td,th) {\n        border-right: ", ";\n      }\n      & tr:last-of-type > :is(td,th) {\n        border-bottom: ", ";\n      }\n    }\n"], ["\n    border-collapse: separate;\n    border-spacing: 0;\n    width: 100%;\n    & thead {\n      & th {\n        border: none;\n      }\n      & tr > th {\n        border-top: ", ";\n        border-right: ", ";\n      }\n      & tr > th:first-of-type {\n        border-left: ", ";\n      }\n      & tr > th[rowspan]:not([rowspan='1']) {\n        border-bottom: ", ";\n      }\n      & tr:last-of-type > th {\n        border-bottom: ", ";\n      }\n    }\n    & tbody {\n      & tr > td, th {\n        border: none;\n      }\n      & tr > *:first-child {\n        border-left: ", ";\n      }\n      & tr > :is(td,th) {\n        border-right: ", ";\n      }\n      & tr:last-of-type > :is(td,th) {\n        border-bottom: ", ";\n      }\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.border.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.border.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.border.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.border.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.border.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.border.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.border.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.border.light;
});
var Table = StyledTable;
exports.default = Table;
var templateObject_1;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var TableCellList = styled_components_1.default.ol(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style: none;\n"], ["\n  list-style: none;\n"])));
exports.default = TableCellList;
var templateObject_1;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var TableCellListItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-top: ", ";\n  padding: ", " 0px;\n  &:first-child {\n    border-top: none;\n  }\n"], ["\n  border-top: ", ";\n  padding: ", " 0px;\n  &:first-child {\n    border-top: none;\n  }\n"])), (0, Theme_1.fromTheme)('border', 'hairline'), (0, Theme_1.fromTheme)('ws', 'small'));
exports.default = TableCellListItem;
var templateObject_1;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var StyledTableRow = styled_components_1.default.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, isStriped = _a.isStriped;
    return (isStriped
        ? theme.color.background.subtle
        : theme.color.background.light);
}, function (_a) {
    var theme = _a.theme, noHighlight = _a.noHighlight;
    return (noHighlight
        ? null
        : theme.color.background.medium);
});
StyledTableRow.defaultProps = {
    isStriped: false,
};
var TableRow = StyledTableRow;
exports.default = TableRow;
var templateObject_1;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var StyledTableHead = styled_components_1.default.thead(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  ", "\n"], ["\n  background-color: ", ";\n  ", "\n"])), (0, Theme_1.fromTheme)('color', 'background', 'medium'), function (_a) {
    var isSticky = _a.isSticky;
    return (isSticky && "\n    position: sticky;\n    top: 0;\n    z-index: 0;\n  ");
});
var TableHead = StyledTableHead;
exports.default = TableHead;
var templateObject_1;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var StyledTableHeadingCell = styled_components_1.default.th(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: ", ";\n  border: ", ";\n  font-weight: ", ";\n  text-align: 'center';\n"], ["\n  background-color: ", ";\n  padding: ", ";\n  border: ", ";\n  font-weight: ", ";\n  text-align: 'center';\n"])), function (_a) {
    var theme = _a.theme, backgroundColor = _a.backgroundColor;
    return (backgroundColor || theme.color.background.medium);
}, (0, Theme_1.fromTheme)('ws', 'xsmall'), (0, Theme_1.fromTheme)('border', 'light'), (0, Theme_1.fromTheme)('font', 'bold', 'weight'));
var TableHeadingCell = StyledTableHeadingCell;
exports.default = TableHeadingCell;
var templateObject_1;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var TableHeadingSpacer = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: none;\n  border: none;\n  color: transparent;\n  &:hover {\n    background-color: none;\n  }\n"], ["\n  background-color: none;\n  border: none;\n  color: transparent;\n  &:hover {\n    background-color: none;\n  }\n"])));
exports.default = TableHeadingSpacer;
var templateObject_1;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var StyledTableBody = styled_components_1.default.tbody(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: ", ";\n  overflow: ", ";\n"], ["\n  border: ", ";\n  overflow: ", ";\n"])), (0, Theme_1.fromTheme)('border', 'light'), function (_a) {
    var isScrollable = _a.isScrollable;
    return (isScrollable ? 'scroll' : 'visible');
});
var TableBody = StyledTableBody;
TableBody.defaultProps = {
    isScrollable: false,
};
exports.default = TableBody;
var templateObject_1;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var TableCell_1 = __webpack_require__(128);
var Theme_1 = __webpack_require__(8);
var StyledTableRowHeadingCell = styled_components_1.default.th(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-left: ", ";\n  border-right: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  padding: ", ";\n  vertical-align: ", ";\n  background-color: ", ";\n"], ["\n  border-left: ", ";\n  border-right: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  padding: ", ";\n  vertical-align: ", ";\n  background-color: ", ";\n"])), (0, Theme_1.fromTheme)('border', 'light'), (0, Theme_1.fromTheme)('border', 'light'), (0, Theme_1.fromTheme)('font', 'data', 'weight'), (0, Theme_1.fromTheme)('font', 'data', 'size'), function (_a) {
    var alignment = _a.alignment;
    return alignment;
}, (0, Theme_1.fromTheme)('ws', 'xsmall'), function (_a) {
    var verticalAlignment = _a.verticalAlignment;
    return verticalAlignment;
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
});
StyledTableRowHeadingCell.defaultProps = {
    alignment: TableCell_1.ALIGN.LEFT,
    verticalAlignment: TableCell_1.VALIGN.CENTER,
};
var TableRowHeadingCell = StyledTableRowHeadingCell;
exports.default = TableRowHeadingCell;
var templateObject_1;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var StyledIconLink = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: transparent;\n  color: ", ";\n  &:hover {\n    color: ", ";\n    cursor: pointer;\n  }\n  display: inline-block;\n"], ["\n  background: transparent;\n  color: ", ";\n  &:hover {\n    color: ", ";\n    cursor: pointer;\n  }\n  display: inline-block;\n"])), (0, Theme_1.fromTheme)('color', 'background', 'medium'), (0, Theme_1.fromTheme)('color', 'background', 'dark'));
var IconLink = function (props) {
    var clickHandler = props.clickHandler, href = props.href, title = props.title, alt = props.alt, children = props.children;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledIconLink, { onClick: clickHandler, href: href, title: title, theme: theme, "aria-label": alt, role: "link" }, children));
};
IconLink.defaultProps = {
    href: '',
};
exports.default = IconLink;
var templateObject_1;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(54));
var InputLabel_1 = __importStar(__webpack_require__(40));
var StyledDropdown = styled_components_1.default.select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  width: 100%;\n  grid-area: i;\n"], ["\n  color: ", ";\n  width: 100%;\n  grid-area: i;\n"])), (0, Theme_1.fromTheme)('color', 'text', 'dark'));
var Dropdown = function (props) {
    var id = props.id, onChange = props.onChange, name = props.name, options = props.options, value = props.value, defaultValue = props.defaultValue, isRequired = props.isRequired, errorMessage = props.errorMessage, label = props.label, labelPosition = props.labelPosition, isLabelVisible = props.isLabelVisible, forwardRef = props.forwardRef, hideError = props.hideError, disabled = props.disabled;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(InputLabel_1.default, { htmlFor: id, label: label, labelPosition: labelPosition, isLabelVisible: isLabelVisible, isRequired: isRequired, hideError: hideError },
        react_1.default.createElement(StyledDropdown, { id: id, onChange: onChange, theme: theme, name: name, value: value, defaultValue: defaultValue, "aria-errormessage": "".concat(id, "-error"), "aria-invalid": errorMessage ? true : null, "aria-required": isRequired, required: isRequired, ref: forwardRef, disabled: disabled }, options.map(function (option) { return (react_1.default.createElement("option", { value: option.value, key: option.value, disabled: option.disabled }, option.label)); })),
        errorMessage && !hideError
            && (react_1.default.createElement(ValidationErrorMessage_1.default, { id: "".concat(id, "-error") }, errorMessage))));
};
Dropdown.defaultProps = {
    labelPosition: InputLabel_1.POSITION.TOP,
    isLabelVisible: true,
    hideError: false,
    isRequired: false,
    errorMessage: '',
    forwardRef: null,
    disabled: false,
    value: '',
    defaultValue: '',
};
exports.default = Dropdown;
var templateObject_1;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var CheckLabel_1 = __importDefault(__webpack_require__(89));
var InputLabel_1 = __webpack_require__(40);
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(54));
var Checkmark = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fill: none;\n  stroke: ", ";\n  stroke-width: 0.5em;\n"], ["\n  fill: none;\n  stroke: ", ";\n  stroke-width: 0.5em;\n"])), function (_a) {
    var checked = _a.checked, disabled = _a.disabled, theme = _a.theme;
    if (checked && disabled) {
        return "".concat(theme.color.text.medium);
    }
    if (checked) {
        return "".concat(theme.color.text.dark);
    }
    return 'none';
});
var CustomCheckbox = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  border: ", ";\n  grid-area: i;\n  width: 1.25em;\n  height: 1.25em;\n  cursor: ", ";\n  box-shadow: ", ";\n  margin-right: ", ";\n  align-self: center;\n  justify-self: ", ";\n"], ["\n  display: inline-block;\n  border: ", ";\n  grid-area: i;\n  width: 1.25em;\n  height: 1.25em;\n  cursor: ", ";\n  box-shadow: ", ";\n  margin-right: ", ";\n  align-self: center;\n  justify-self: ", ";\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (disabled
        ? "".concat(theme.border.light)
        : "2px solid ".concat(theme.color.text.base));
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled
        ? 'default'
        : 'pointer');
}, function (_a) {
    var checked = _a.checked, theme = _a.theme;
    return checked && "0 0px 8px ".concat(theme.color.background.dark);
}, (0, Theme_1.fromTheme)('ws', 'xsmall'), function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === InputLabel_1.POSITION.RIGHT
        ? 'end'
        : 'start');
});
var NativeCheckbox = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  opacity: 0;\n  height: 0;\n  width: 0;\n"], ["\n  opacity: 0;\n  height: 0;\n  width: 0;\n"])));
var Checkbox = function (props) {
    var id = props.id, label = props.label, value = props.value, name = props.name, disabled = props.disabled, checked = props.checked, onChange = props.onChange, isLabelVisible = props.isLabelVisible, labelPosition = props.labelPosition, isRequired = props.isRequired, errorMessage = props.errorMessage, forwardRef = props.forwardRef, hideError = props.hideError;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CheckLabel_1.default, { htmlFor: id, label: label, labelPosition: labelPosition, isLabelVisible: isLabelVisible, isRequired: isRequired, disabled: disabled, hideError: hideError },
            react_1.default.createElement(NativeCheckbox, { id: id, type: "checkbox", value: value, name: name, "aria-required": isRequired, required: isRequired, onChange: onChange, disabled: disabled, ref: forwardRef, theme: theme, checked: checked }),
            react_1.default.createElement(CustomCheckbox, { role: "checkbox", checked: checked, disabled: disabled, labelPosition: labelPosition, hideError: hideError },
                react_1.default.createElement(Checkmark, { viewBox: "0 0 60 60", checked: checked, disabled: disabled },
                    react_1.default.createElement("polyline", { points: "10 25 25 40 50 7" }))),
            errorMessage && !hideError
                && (react_1.default.createElement(ValidationErrorMessage_1.default, { id: "".concat(id, "-error") }, errorMessage)))));
};
Checkbox.defaultProps = {
    disabled: false,
    isLabelVisible: true,
    labelPosition: InputLabel_1.POSITION.RIGHT,
    checked: false,
    hideError: false,
    name: '',
    value: '',
    isRequired: false,
    errorMessage: '',
    forwardRef: null,
};
exports.default = Checkbox;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var downshift_1 = __webpack_require__(1126);
var react_fontawesome_1 = __webpack_require__(64);
var free_solid_svg_icons_1 = __webpack_require__(65);
var styled_components_1 = __importDefault(__webpack_require__(4));
var InputLabel_1 = __webpack_require__(40);
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(54));
var TextInput_1 = __webpack_require__(129);
var Buttons_1 = __webpack_require__(88);
var Lists_1 = __webpack_require__(127);
var Theme_1 = __webpack_require__(8);
var const_1 = __webpack_require__(73);
var ComboboxWrapper = (0, styled_components_1.default)(InputLabel_1.StyledInputLabel).attrs({
    as: 'div',
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: baseline;\n  width: 100%;\n"], ["\n  align-items: baseline;\n  width: 100%;\n"])));
var ComboboxLabel = (0, styled_components_1.default)(InputLabel_1.StyledInputLabelText).attrs({
    as: 'label',
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  grid-area: l;\n"], ["\n  grid-area: l;\n"])));
var InputWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  grid-area: i;\n  display: flex;\n  flex-direction: row;\n"], ["\n  position: relative;\n  grid-area: i;\n  display: flex;\n  flex-direction: row;\n"])));
var ComboboxMenu = (0, styled_components_1.default)(Lists_1.DropdownList)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  top: 1.8em;\n  width: 100%;\n  max-height: 16em;\n  overflow-y: scroll;\n  ", ";\n"], ["\n  top: 1.8em;\n  width: 100%;\n  max-height: 16em;\n  overflow-y: scroll;\n  ", ";\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '' : const_1.hideFromDisplay);
});
var ComboboxMenuItem = (0, styled_components_1.default)(Lists_1.DropdownListItem)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (_a) {
    var highlight = _a.highlight, theme = _a.theme;
    return (highlight
        ? theme.color.background.info.light
        : null);
});
var ComboboxNoResultsItem = (0, styled_components_1.default)(Lists_1.DropdownListItem)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-style: italic;\n  text-align: right;\n  color: ", ";\n"], ["\n  font-style: italic;\n  text-align: right;\n  color: ", ";\n"])), (0, Theme_1.fromTheme)('color', 'text', 'medium'));
var ComboboxButton = (0, styled_components_1.default)(Buttons_1.Button)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border: ", ";\n  border-left: none;\n  &:hover {\n    border: ", ";\n    border-left: none;\n  }\n"], ["\n  border: ", ";\n  border-left: none;\n  &:hover {\n    border: ", ";\n    border-left: none;\n  }\n"])), (0, Theme_1.fromTheme)('border', 'hairline'), (0, Theme_1.fromTheme)('border', 'hairline'));
var Combobox = function (_a) {
    var currentValue = _a.currentValue, errorMessage = _a.errorMessage, filterFunction = _a.filterFunction, forwardRef = _a.forwardRef, hideError = _a.hideError, isLabelVisible = _a.isLabelVisible, isRequired = _a.isRequired, label = _a.label, labelPosition = _a.labelPosition, onOptionSelected = _a.onOptionSelected, options = _a.options, placeholder = _a.placeholder;
    var _b = (0, react_1.useState)(options), filteredOptions = _b[0], setFilteredOptions = _b[1];
    var _c = (0, downshift_1.useCombobox)({
        items: filteredOptions,
        itemToString: function (item) { return (item ? item.label : ''); },
        onSelectedItemChange: onOptionSelected,
        onInputValueChange: function (_a) {
            var inputValue = _a.inputValue;
            setFilteredOptions(options.filter(function (option) { return (filterFunction(option, inputValue)); }));
        },
        selectedItem: currentValue,
    }), getComboboxProps = _c.getComboboxProps, getItemProps = _c.getItemProps, getInputProps = _c.getInputProps, getLabelProps = _c.getLabelProps, getMenuProps = _c.getMenuProps, getToggleButtonProps = _c.getToggleButtonProps, highlightedIndex = _c.highlightedIndex, isOpen = _c.isOpen;
    var _d = getInputProps(), inputId = _d.id, inputValue = _d.value;
    return (react_1.default.createElement(ComboboxWrapper, { labelPosition: labelPosition, isLabelVisible: isLabelVisible, hideError: hideError },
        react_1.default.createElement(ComboboxLabel, __assign({ isLabelVisible: isLabelVisible, labelPosition: labelPosition }, getLabelProps()),
            label,
            isRequired && react_1.default.createElement(InputLabel_1.RequiredSymbol, null, "*")),
        react_1.default.createElement(InputWrapper, __assign({}, getComboboxProps()),
            react_1.default.createElement(TextInput_1.StyledTextInput, __assign({}, getInputProps({ ref: forwardRef }), { placeholder: placeholder })),
            react_1.default.createElement(ComboboxMenu, __assign({ isOpen: isOpen }, getMenuProps({ refKey: 'ref' })), filteredOptions.length > 0
                ? filteredOptions.map(function (item, index) { return (react_1.default.createElement(ComboboxMenuItem, __assign({ key: item.value, highlight: highlightedIndex === index }, getItemProps({ item: item, index: index })), item.label)); })
                : (react_1.default.createElement(ComboboxNoResultsItem, null, "No results for \"".concat(inputValue, "\"")))),
            react_1.default.createElement(ComboboxButton, __assign({ type: "button", alt: "Show all options for ".concat(label) }, getToggleButtonProps({ refKey: 'forwardRef' })),
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faChevronDown }))),
        errorMessage && !hideError
            && (react_1.default.createElement(ValidationErrorMessage_1.default, { id: "".concat(inputId, "-error") }, errorMessage))));
};
Combobox.defaultProps = {
    filterFunction: function (option, inputValue) { return (option.label
        .toLowerCase()
        .startsWith(inputValue.toLowerCase())); },
    hideError: false,
    isLabelVisible: true,
    isRequired: false,
    placeholder: '',
    errorMessage: '',
    forwardRef: null,
    labelPosition: InputLabel_1.POSITION.TOP,
};
exports.default = Combobox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var Typography_1 = __webpack_require__(203);
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(54));
var InputLabel_1 = __webpack_require__(40);
var StyledFieldset = styled_components_1.default.fieldset(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  border: ", ";\n  padding-inline-start: ", ";\n  padding-inline-end: 0.75em;\n  min-inline-size: min-content;\n  & > * {\n    margin-top: ", ";\n    margin-bottom: ", ";\n  }\n"], ["\n  display: block;\n  border: ", ";\n  padding-inline-start: ", ";\n  padding-inline-end: 0.75em;\n  min-inline-size: min-content;\n  & > * {\n    margin-top: ", ";\n    margin-bottom: ", ";\n  }\n"])), function (_a) {
    var isBorderVisible = _a.isBorderVisible, theme = _a.theme;
    return (isBorderVisible
        ? "".concat(theme.border.light)
        : 'none');
}, function (_a) {
    var isBorderVisible = _a.isBorderVisible, isLegendVisible = _a.isLegendVisible;
    return (!isBorderVisible && !isLegendVisible
        ? null
        : '0.75em');
}, (0, Theme_1.fromTheme)('ws', 'small'), (0, Theme_1.fromTheme)('ws', 'small'));
var StyledLegend = styled_components_1.default.legend(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", ";\n  position: ", ";\n  left: ", ";\n"], ["\n  padding: ", ";\n  position: ", ";\n  left: ", ";\n"])), function (_a) {
    var isBorderVisible = _a.isBorderVisible;
    return (isBorderVisible
        ? '0.25em'
        : null);
}, function (_a) {
    var isLegendVisible = _a.isLegendVisible;
    return (isLegendVisible
        ? null
        : 'absolute');
}, function (_a) {
    var isLegendVisible = _a.isLegendVisible;
    return (isLegendVisible
        ? null
        : '-100vw');
});
var Fieldset = function (props) {
    var legend = props.legend, form = props.form, children = props.children, legendDescription = props.legendDescription, errorMessage = props.errorMessage, isBorderVisible = props.isBorderVisible, isLegendVisible = props.isLegendVisible, isRequired = props.isRequired;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledFieldset, { form: form, theme: theme, isBorderVisible: isBorderVisible },
        react_1.default.createElement(StyledLegend, { isLegendVisible: isLegendVisible, "aria-required": isRequired }, isRequired
            ? (react_1.default.createElement(react_1.default.Fragment, null,
                legend,
                react_1.default.createElement(InputLabel_1.RequiredSymbol, null, "*")))
            : legend),
        legendDescription
            && (react_1.default.createElement(Typography_1.NoteText, null, legendDescription)),
        children,
        errorMessage
            && (react_1.default.createElement(ValidationErrorMessage_1.default, { id: "".concat(legend, "-error") }, errorMessage))));
};
Fieldset.defaultProps = {
    isBorderVisible: true,
    isLegendVisible: true,
    form: '',
    legendDescription: '',
    errorMessage: '',
    isRequired: false,
};
exports.default = Fieldset;
var templateObject_1, templateObject_2;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stat = exports.TextDisplay = exports.SectionSubHeading = exports.NoteText = exports.SectionHeading = exports.PageTitle = void 0;
var PageTitle_1 = __webpack_require__(204);
Object.defineProperty(exports, "PageTitle", { enumerable: true, get: function () { return __importDefault(PageTitle_1).default; } });
var SectionHeading_1 = __webpack_require__(205);
Object.defineProperty(exports, "SectionHeading", { enumerable: true, get: function () { return __importDefault(SectionHeading_1).default; } });
var NoteText_1 = __webpack_require__(206);
Object.defineProperty(exports, "NoteText", { enumerable: true, get: function () { return __importDefault(NoteText_1).default; } });
var SectionSubHeading_1 = __webpack_require__(207);
Object.defineProperty(exports, "SectionSubHeading", { enumerable: true, get: function () { return __importDefault(SectionSubHeading_1).default; } });
var TextDisplay_1 = __webpack_require__(208);
Object.defineProperty(exports, "TextDisplay", { enumerable: true, get: function () { return __importDefault(TextDisplay_1).default; } });
var Stat_1 = __webpack_require__(209);
Object.defineProperty(exports, "Stat", { enumerable: true, get: function () { return __importDefault(Stat_1).default; } });


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Heading = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.font.title.family;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.title.size;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.title.weight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.title.color;
});
var PageTitle = function (props) {
    var children = props.children;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(Heading, { theme: theme }, children));
};
exports.default = PageTitle;
var templateObject_1;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var StyledSectionHeading = styled_components_1.default.h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-bottom: ", ";\n  color: ", ";\n  font-family: ", "; \n  font-size: ", ";\n  font-weight: ", "; \n  width: 100%;\n"], ["\n  border-bottom: ", ";\n  color: ", ";\n  font-family: ", "; \n  font-size: ", ";\n  font-weight: ", "; \n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.border.hairline);
}, function (_a) {
    var theme = _a.theme;
    return (theme.color.text.dark);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.heading.family);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.heading.size);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.heading.weight);
});
exports.default = StyledSectionHeading;
var templateObject_1;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var StyledNoteText = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.font.note.color);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.note.family);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.note.size);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.note.weight);
});
var NoteText = function (props) {
    var children = props.children;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledNoteText, { theme: theme }, children));
};
exports.default = NoteText;
var templateObject_1;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var StyledSectionSubHeading = styled_components_1.default.h3(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.color.text.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.subheading.family;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.subheading.size;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.subheading.weight;
}, function (_a) {
    var theme = _a.theme;
    return theme.ws.medium;
}, function (_a) {
    var theme = _a.theme;
    return theme.ws.small;
});
exports.default = StyledSectionSubHeading;
var templateObject_1;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledContainer = exports.StyledDisplayLabel = exports.StyledTextDisplay = exports.POSITION = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var POSITION;
(function (POSITION) {
    POSITION["TOP"] = "top";
    POSITION["LEFT"] = "left";
})(POSITION = exports.POSITION || (exports.POSITION = {}));
exports.StyledTextDisplay = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: ", ";\n  padding: ", ";\n  display: inline-block;\n  width: fit-content;\n  ", "\n"], ["\n  border: ", ";\n  padding: ", ";\n  display: inline-block;\n  width: fit-content;\n  ", "\n"])), (0, Theme_1.fromTheme)('border', 'hairline'), (0, Theme_1.fromTheme)('ws', 'xsmall'), function (_a) {
    var labelPosition = _a.labelPosition;
    return labelPosition === POSITION.LEFT
        && "display: flex;\n    align-items: center;\n  ";
});
exports.StyledDisplayLabel = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: bold;\n  margin-bottom: ", ";\n  margin-right: ", ";\n"], ["\n  font-weight: bold;\n  margin-bottom: ", ";\n  margin-right: ", ";\n"])), function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === POSITION.TOP ? '0.5em' : '0');
}, function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === POSITION.LEFT ? '0.5em' : '0');
});
exports.StyledContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n"])), function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === POSITION.LEFT ? 'row' : 'column');
}, function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === POSITION.LEFT ? 'center' : 'flex-start');
});
var TextDisplay = function (props) {
    var id = props.id, label = props.label, name = props.name, value = props.value, isLabelVisible = props.isLabelVisible, labelPosition = props.labelPosition;
    return (react_1.default.createElement(exports.StyledContainer, { labelPosition: labelPosition },
        isLabelVisible && (react_1.default.createElement(exports.StyledDisplayLabel, { labelPosition: labelPosition }, label)),
        react_1.default.createElement(exports.StyledTextDisplay, { id: id, name: name, label: label, value: value, labelPosition: labelPosition }, value)));
};
TextDisplay.defaultProps = {
    isLabelVisible: true,
    labelPosition: POSITION.LEFT,
};
exports.default = TextDisplay;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var StyledStat = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.font.data.family;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.data.size;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.data.weight;
});
exports.default = StyledStat;
var templateObject_1;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var CheckLabel_1 = __importDefault(__webpack_require__(89));
var InputLabel_1 = __webpack_require__(40);
var SelectMark = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: ", ";\n  border-radius: 50%;\n  position: absolute;\n  transition: opacity 0.2s ease-in-out;\n  align-self: center;\n  justify-self: center;\n"], ["\n  border: ", ";\n  border-radius: 50%;\n  position: absolute;\n  transition: opacity 0.2s ease-in-out;\n  align-self: center;\n  justify-self: center;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (disabled
        ? "6px solid ".concat(theme.color.text.medium)
        : "6px solid ".concat(theme.color.text.base));
});
var SelectMarkContainer = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  display: grid;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  display: grid;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"])));
var CustomRadioButton = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  grid-area: i;\n  height: 1.25em;\n  width: 1.25em;\n  border: ", ";\n  border-radius: 50%;\n  margin-right: ", ";\n  align-self: center;\n  cursor: ", ";\n  box-shadow: ", ";\n  justify-self: ", ";\n  position: relative;\n"], ["\n  display: inline-block;\n  grid-area: i;\n  height: 1.25em;\n  width: 1.25em;\n  border: ", ";\n  border-radius: 50%;\n  margin-right: ", ";\n  align-self: center;\n  cursor: ", ";\n  box-shadow: ", ";\n  justify-self: ", ";\n  position: relative;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (disabled
        ? "".concat(theme.border.light)
        : "2px solid ".concat(theme.color.text.base));
}, (0, Theme_1.fromTheme)('ws', 'xsmall'), function (_a) {
    var disabled = _a.disabled;
    return (disabled
        ? 'default'
        : 'pointer');
}, function (_a) {
    var checked = _a.checked, theme = _a.theme;
    return checked && "0 0px 10px ".concat(theme.color.background.darker);
}, function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === InputLabel_1.POSITION.RIGHT
        ? 'end'
        : 'start');
});
var NativeRadioButton = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  opacity: 0;\n  height: 0;\n  width: 0;\n"], ["\n  opacity: 0;\n  height: 0;\n  width: 0;\n"])));
var RadioButton = function (props) {
    var id = props.id, value = props.value, name = props.name, label = props.label, labelPosition = props.labelPosition, checked = props.checked, disabled = props.disabled, onChange = props.onChange, isRequired = props.isRequired, forwardRef = props.forwardRef;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CheckLabel_1.default, { htmlFor: id, label: label, labelPosition: labelPosition, isRequired: isRequired, disabled: disabled },
            react_1.default.createElement(NativeRadioButton, { type: "radio", id: id, label: label, value: value, name: name, onChange: onChange, "aria-required": isRequired, required: isRequired, ref: forwardRef, theme: theme, checked: checked, disabled: disabled }),
            react_1.default.createElement(CustomRadioButton, { role: "radio", labelPosition: labelPosition, checked: checked, disabled: disabled }, checked
                && (react_1.default.createElement(SelectMarkContainer, null,
                    react_1.default.createElement(SelectMark, { disabled: disabled })))))));
};
RadioButton.defaultProps = {
    labelPosition: InputLabel_1.POSITION.RIGHT,
    disabled: false,
    checked: false,
    isRequired: false,
    forwardRef: null,
};
exports.default = RadioButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var Form = styled_components_1.default
    .form.attrs(function (props) { return ({
    id: props.id,
    'aria-label': props.label,
    onSubmit: function (e) {
        e.preventDefault();
        props.submitHandler(e);
    },
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > * {\n    margin: ", ";\n  }\n"], ["\n  & > * {\n    margin: ", ";\n  }\n"])), (0, Theme_1.fromTheme)('ws', 'small'));
Form.defaultProps = {
    submitHandler: function () { },
};
exports.default = Form;
var templateObject_1;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTextArea = void 0;
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var InputLabel_1 = __importStar(__webpack_require__(40));
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(54));
exports.StyledTextArea = styled_components_1.default.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: ", ";\n  width: 100%;\n  padding: ", ";\n  padding-right: ", ";\n  grid-area: i;\n"], ["\n  border: ", ";\n  width: 100%;\n  padding: ", ";\n  padding-right: ", ";\n  grid-area: i;\n"])), (0, Theme_1.fromTheme)('border', 'hairline'), (0, Theme_1.fromTheme)('ws', 'xsmall'), (0, Theme_1.fromTheme)('ws', 'zero'));
var MultiLineTextInput = function (props) {
    var id = props.id, value = props.value, onChange = props.onChange, errorMessage = props.errorMessage, isRequired = props.isRequired, label = props.label, isLabelVisible = props.isLabelVisible, isDisabled = props.isDisabled, labelPosition = props.labelPosition, forwardRef = props.forwardRef, name = props.name, placeholder = props.placeholder;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(InputLabel_1.default, { htmlFor: id, label: label, isRequired: isRequired, isLabelVisible: isLabelVisible, labelPosition: labelPosition },
        react_1.default.createElement(exports.StyledTextArea, { id: id, value: value, onChange: onChange, "aria-invalid": errorMessage ? true : null, "aria-errormessage": "".concat(id, "-error"), "aria-required": isRequired, required: isRequired, theme: theme, disabled: isDisabled, "aria-disabled": isDisabled, ref: forwardRef, name: name, placeholder: placeholder }),
        errorMessage && (react_1.default.createElement(ValidationErrorMessage_1.default, { id: "".concat(id, "-error") }, errorMessage))));
};
MultiLineTextInput.defaultProps = {
    errorMessage: '',
    isRequired: false,
    isLabelVisible: true,
    isDisabled: false,
    labelPosition: InputLabel_1.POSITION.LEFT,
    forwardRef: null,
};
exports.default = MultiLineTextInput;
var templateObject_1;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var react_transition_group_1 = __webpack_require__(1124);
var react_dom_1 = __webpack_require__(22);
var styled_components_1 = __importStar(__webpack_require__(4));
var FADE_TIME = 250;
var ModalBackdrop = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  &.modal-fade-appear {\n    opacity: 0;\n    visibility: hidden;\n  }\n  &.modal-fade-appear-active {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-appear-done {\n    visibility: visible;\n    opacity: 1;\n  }\n  &.modal-fade-enter {\n    opacity: 0;\n    visibility: hidden;\n  }\n  &.modal-fade-enter-active {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-enter-done {\n    visibility: visible;\n    opacity: 1;\n  }\n  &.modal-fade-exit {\n    opacity: 1;\n    visibility: visible;\n  }\n  &.modal-fade-exit-active {\n    opacity: 0;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-exit-done {\n    visibility: hidden;\n    opacity: 0;\n  }\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  &.modal-fade-appear {\n    opacity: 0;\n    visibility: hidden;\n  }\n  &.modal-fade-appear-active {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-appear-done {\n    visibility: visible;\n    opacity: 1;\n  }\n  &.modal-fade-enter {\n    opacity: 0;\n    visibility: hidden;\n  }\n  &.modal-fade-enter-active {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-enter-done {\n    visibility: visible;\n    opacity: 1;\n  }\n  &.modal-fade-exit {\n    opacity: 1;\n    visibility: visible;\n  }\n  &.modal-fade-exit-active {\n    opacity: 0;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-exit-done {\n    visibility: hidden;\n    opacity: 0;\n  }\n"])), FADE_TIME, FADE_TIME, FADE_TIME);
var StyledModal = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-width: 40em;\n  max-height: 100%;\n  visibility: inherit;\n"], ["\n  background-color: ", ";\n  border: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-width: 40em;\n  max-height: 100%;\n  visibility: inherit;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.color.background.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.border.light;
});
var Modal = function (_a) {
    var isVisible = _a.isVisible, children = _a.children, closeHandler = _a.closeHandler, ariaLabelledBy = _a.ariaLabelledBy, forwardRef = _a.forwardRef;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    var backupRef = (0, react_1.useRef)(null);
    var finalForwardRef = forwardRef != null ? forwardRef : backupRef;
    var focusables = 'button, [href], input, select, textarea,'
        + ' [tabindex]:not([tabindex="-1"])';
    (0, react_1.useEffect)(function () {
        var listener = function (event) {
            if (!finalForwardRef.current)
                return;
            var modal = finalForwardRef.current;
            if (!modal.contains(event.target)) {
                var firstFocusable = modal.querySelector(focusables);
                if (firstFocusable != null) {
                    firstFocusable.focus();
                }
            }
        };
        if (isVisible) {
            document.body.style.overflow = 'hidden';
            document.body.addEventListener('focus', listener, true);
        }
        return function () {
            document.body.style.overflow = '';
            document.body.removeEventListener('focus', listener);
        };
    }, [finalForwardRef, focusables, isVisible]);
    var _b = (0, react_1.useState)(false), mouseDownOnModal = _b[0], setMouseDownOnModal = _b[1];
    return (0, react_dom_1.createPortal)((react_1.default.createElement(react_transition_group_1.CSSTransition, { appear: true, classNames: "modal-fade", in: isVisible, timeout: FADE_TIME },
        react_1.default.createElement(ModalBackdrop, { key: "modal-backdrop", onClick: function (evt) {
                if (!mouseDownOnModal) {
                    closeHandler();
                }
                evt.stopPropagation();
                setMouseDownOnModal(false);
            } }, isVisible && (react_1.default.createElement(StyledModal, { role: "dialog", "aria-labelledby": ariaLabelledBy, "aria-modal": "true", onMouseDown: function () {
                setMouseDownOnModal(true);
            }, onClick: function (evt) { evt.stopPropagation(); }, theme: theme, ref: finalForwardRef }, children))))), document.body);
};
exports.default = Modal;
var templateObject_1, templateObject_2;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var ModalBody = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n  overflow: auto;\n"], ["\n  padding: ", ";\n  overflow: auto;\n"])), (0, Theme_1.fromTheme)('ws', 'medium'));
exports.default = ModalBody;
var templateObject_1;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
var ModalFooter = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  padding: ", " ", ";\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  padding: ", " ", ";\n  width: 100%;\n"])), (0, Theme_1.fromTheme)('ws', 'small'), (0, Theme_1.fromTheme)('ws', 'medium'));
exports.default = ModalFooter;
var templateObject_1;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var react_fontawesome_1 = __webpack_require__(64);
var free_solid_svg_icons_1 = __webpack_require__(65);
var Buttons_1 = __webpack_require__(88);
var Theme_1 = __webpack_require__(8);
var Typography_1 = __webpack_require__(203);
var ModalTitle = (0, styled_components_1.default)(Typography_1.SectionHeading)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-bottom: none;\n"], ["\n  border-bottom: none;\n"])));
var StyledModalHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border-bottom: ", ";\n  display: flex;\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n"], ["\n  background-color: ", ";\n  border-bottom: ", ";\n  display: flex;\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.color.background.subtle);
}, function (_a) {
    var theme = _a.theme;
    return (theme.border.light);
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.ws.small, " ").concat(theme.ws.medium);
});
var ModalHeader = function (_a) {
    var closeButtonHandler = _a.closeButtonHandler, children = _a.children, forwardRef = _a.forwardRef, tabIndex = _a.tabIndex;
    var markOneTheme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledModalHeader, { theme: markOneTheme, ref: forwardRef, tabIndex: tabIndex },
        react_1.default.createElement(ModalTitle, null, children),
        react_1.default.createElement(Buttons_1.BorderlessButton, { id: "modalCloseButton", variant: Theme_1.VARIANT.NEGATIVE, onClick: closeButtonHandler },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { title: "Close Modal", icon: free_solid_svg_icons_1.faTimes }))));
};
ModalHeader.defaultProps = {
    forwardRef: null,
    tabIndex: 0,
};
exports.default = ModalHeader;
var templateObject_1, templateObject_2;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var const_1 = __webpack_require__(73);
var Theme_1 = __webpack_require__(8);
var StyledModalMessage = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n"], ["\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.color.background[variant].medium;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (theme.color.text[variant === Theme_1.VARIANT.BASE ? 'dark' : 'light']);
}, (0, Theme_1.fromTheme)('ws', 'small'));
var ModalMessage = function (props) {
    var id = props.id, children = props.children, variant = props.variant, role = props.role, ariaLive = props.ariaLive;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledModalMessage, { id: id, variant: variant, theme: theme, role: role, "aria-live": ariaLive }, children));
};
ModalMessage.defaultProps = {
    role: 'alert',
    ariaLive: const_1.ARIA_LIVE_VARIANT.ASSERTIVE,
};
exports.default = ModalMessage;
var templateObject_1;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var react_router_dom_1 = __webpack_require__(296);
var Theme_1 = __webpack_require__(8);
var StyledLink = (0, styled_components_1.default)(react_router_dom_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  color: ", ";\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n  &:visited {\n    text-decoration: none;\n    color: ", ";\n  }\n"], ["\n  text-decoration: none;\n  color: ", ";\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n  &:visited {\n    text-decoration: none;\n    color: ", ";\n  }\n"])), (0, Theme_1.fromTheme)('color', 'background', Theme_1.VARIANT.INFO, 'medium'), (0, Theme_1.fromTheme)('color', 'background', Theme_1.VARIANT.INFO, 'dark'), (0, Theme_1.fromTheme)('color', 'background', Theme_1.VARIANT.INFO, 'medium'));
var Link = function (props) {
    var children = props.children, to = props.to;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledLink, { to: to, theme: theme }, children));
};
exports.default = Link;
var templateObject_1;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(4));
var Theme_1 = __webpack_require__(8);
exports.default = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  color: ", ";\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n  &:visited {\n    text-decoration: none;\n    color: ", ";\n  }\n"], ["\n  text-decoration: none;\n  color: ", ";\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n  &:visited {\n    text-decoration: none;\n    color: ", ";\n  }\n"])), (0, Theme_1.fromTheme)('color', 'background', Theme_1.VARIANT.INFO, 'medium'), (0, Theme_1.fromTheme)('color', 'background', Theme_1.VARIANT.INFO, 'dark'), (0, Theme_1.fromTheme)('color', 'background', Theme_1.VARIANT.INFO, 'medium'));
var templateObject_1;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var styled_components_1 = __importDefault(__webpack_require__(4));
var mark_one_1 = __webpack_require__(9);
var PopoverPlaceholder = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  width: 0px;\n  height: 0px;\n"], ["\n  position: absolute;\n  width: 0px;\n  height: 0px;\n"])));
var PopoverWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: ", ";\n  box-shadow: ", ";\n  position: absolute;\n  left: ", ";\n  bottom: ", ";\n  color: ", ";\n  max-width: 10em;\n  width: max-content;\n  z-index: 10;\n  > div.mark-one__popover-heading {\n    background-color: ", ";\n    padding: ", ";\n    border-bottom: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n  }\n  > div.mark-one__popover-body {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    padding: ", ";\n  }\n"], ["\n  border: ", ";\n  box-shadow: ", ";\n  position: absolute;\n  left: ", ";\n  bottom: ", ";\n  color: ", ";\n  max-width: 10em;\n  width: max-content;\n  z-index: 10;\n  > div.mark-one__popover-heading {\n    background-color: ", ";\n    padding: ", ";\n    border-bottom: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n  }\n  > div.mark-one__popover-body {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    padding: ", ";\n  }\n"])), (0, mark_one_1.fromTheme)('border', 'hairline'), (0, mark_one_1.fromTheme)('shadow', 'xlight'), function (_a) {
    var left = _a.left;
    return left;
}, function (_a) {
    var bottom = _a.bottom;
    return bottom;
}, (0, mark_one_1.fromTheme)('color', 'text', 'dark'), (0, mark_one_1.fromTheme)('color', 'background', 'subtle'), (0, mark_one_1.fromTheme)('ws', 'xsmall'), (0, mark_one_1.fromTheme)('border', 'hairline'), (0, mark_one_1.fromTheme)('font', 'bold', 'family'), (0, mark_one_1.fromTheme)('font', 'bold', 'size'), (0, mark_one_1.fromTheme)('font', 'bold', 'weight'), (0, mark_one_1.fromTheme)('color', 'background', 'light'), (0, mark_one_1.fromTheme)('font', 'note', 'family'), (0, mark_one_1.fromTheme)('font', 'note', 'weight'), (0, mark_one_1.fromTheme)('font', 'note', 'size'), (0, mark_one_1.fromTheme)('ws', 'xsmall'));
var Popover = function (_a) {
    var children = _a.children, className = _a.className, forwardRef = _a.forwardRef, isVisible = _a.isVisible, title = _a.title, xOffset = _a.xOffset, yOffset = _a.yOffset;
    return (react_1.default.createElement(PopoverPlaceholder, null, isVisible
        ? (react_1.default.createElement(PopoverWrapper, { className: className, left: xOffset, bottom: yOffset },
            title
                ? (react_1.default.createElement("div", { className: "mark-one__popover-heading" }, title))
                : null,
            react_1.default.createElement("div", { className: "mark-one__popover-body", ref: forwardRef }, children)))
        : null));
};
Popover.defaultProps = {
    xOffset: '0',
    yOffset: '0',
    className: '',
    forwardRef: null,
    title: '',
};
exports.default = Popover;
var templateObject_1, templateObject_2;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var react_fontawesome_1 = __webpack_require__(64);
var free_solid_svg_icons_1 = __webpack_require__(65);
var Theme_1 = __webpack_require__(8);
var LoadSpinnerText_1 = __importStar(__webpack_require__(130));
var StyledLoadSpinner = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: transparent;\n  color: ", ";\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width:100%;\n"], ["\n  background: transparent;\n  color: ", ";\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width:100%;\n"])), (0, Theme_1.fromTheme)('color', 'background', Theme_1.VARIANT.INFO, 'medium'));
var LoadSpinner = function (props) {
    var children = props.children, textColor = props.textColor;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledLoadSpinner, { role: "alert", theme: theme },
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleNotch, size: "8x", spin: true }),
        react_1.default.createElement(LoadSpinnerText_1.default, { color: textColor }, children)));
};
LoadSpinner.defaultProps = {
    textColor: LoadSpinnerText_1.SPINNER_TEXT.DARK,
};
exports.default = LoadSpinner;
var templateObject_1;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageReducer = exports.AppMessage = exports.MESSAGE_ACTION = exports.MESSAGE_TYPE = exports.MessageContext = void 0;
var react_1 = __webpack_require__(0);
exports.MessageContext = (0, react_1.createContext)(null);
var MESSAGE_TYPE;
(function (MESSAGE_TYPE) {
    MESSAGE_TYPE["ERROR"] = "ERROR";
    MESSAGE_TYPE["SUCCESS"] = "SUCCESS";
    MESSAGE_TYPE["INFO"] = "INFO";
})(MESSAGE_TYPE = exports.MESSAGE_TYPE || (exports.MESSAGE_TYPE = {}));
var MESSAGE_ACTION;
(function (MESSAGE_ACTION) {
    MESSAGE_ACTION["PUSH"] = "PUSH";
    MESSAGE_ACTION["CLEAR"] = "CLEAR";
})(MESSAGE_ACTION = exports.MESSAGE_ACTION || (exports.MESSAGE_ACTION = {}));
var AppMessage = (function () {
    function AppMessage(message, variant) {
        if (variant === void 0) { variant = MESSAGE_TYPE.INFO; }
        this.variant = variant;
        this.text = message;
    }
    return AppMessage;
}());
exports.AppMessage = AppMessage;
var messageReducer = function (state, action) {
    var currentMessage = state.currentMessage, queue = state.queue;
    switch (action.type) {
        case (MESSAGE_ACTION.PUSH): {
            if (!currentMessage) {
                return (__assign(__assign({}, state), { currentMessage: action.message }));
            }
            var newQueue = __spreadArray(__spreadArray([], queue, true), [action.message], false);
            return __assign(__assign({}, state), { queue: newQueue });
        }
        case (MESSAGE_ACTION.CLEAR): {
            var nextQueue = __spreadArray([], queue, true);
            var nextMessage = nextQueue.shift();
            return {
                queue: nextQueue,
                currentMessage: nextMessage,
            };
        }
        default:
            return state;
    }
};
exports.messageReducer = messageReducer;
exports.default = exports.MessageContext;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(4));
var const_1 = __webpack_require__(73);
var Theme_1 = __webpack_require__(8);
var Buttons_1 = __webpack_require__(88);
var Header = styled_components_1.default.h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n"], ["\n  color: ", ";\n  font-size: ", ";\n"])), (0, Theme_1.fromTheme)('color', 'text', 'dark'), (0, Theme_1.fromTheme)('font', 'bold', 'size'));
var TextContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  grid-area: text;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  grid-area: text;\n"])), (0, Theme_1.fromTheme)('color', 'text', 'dark'), (0, Theme_1.fromTheme)('font', 'note', 'size'));
var ButtonContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-self: center;\n  text-align: right;\n  grid-area: button;\n"], ["\n  align-self: center;\n  text-align: right;\n  grid-area: button;\n"])));
var StyledToastNotification = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: ", ";\n  border: 3px solid ", ";\n  display: grid;\n  grid-template: \"text button\" / 3fr 1fr;\n  margin-bottom: 0.25em;\n  padding: 1em;\n  width: 20em;\n  z-index: 1000;\n"], ["\n  background: ", ";\n  border: 3px solid ", ";\n  display: grid;\n  grid-template: \"text button\" / 3fr 1fr;\n  margin-bottom: 0.25em;\n  padding: 1em;\n  width: 20em;\n  z-index: 1000;\n"])), (0, Theme_1.fromTheme)('color', 'background', 'light'), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.color.background[variant].dark;
});
var ToastNotification = function (props) {
    var id = props.id, header = props.header, children = props.children, variant = props.variant, role = props.role, ariaLive = props.ariaLive, forwardRef = props.forwardRef, onClick = props.onClick;
    var theme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledToastNotification, { id: id, variant: variant, theme: theme, role: role, "aria-live": ariaLive, tabIndex: -1, ref: forwardRef },
        react_1.default.createElement(TextContainer, null,
            header && (react_1.default.createElement(Header, null, header)),
            children),
        react_1.default.createElement(ButtonContainer, null,
            react_1.default.createElement(Buttons_1.Button, { id: "".concat(id, " button"), alt: "".concat(id, " close button"), onClick: onClick, variant: Theme_1.VARIANT.BASE }, "Close"))));
};
ToastNotification.defaultProps = {
    header: '',
    variant: Theme_1.VARIANT.INFO,
    role: 'alert',
    ariaLive: const_1.ARIA_LIVE_VARIANT.ASSERTIVE,
    forwardRef: null,
};
exports.default = ToastNotification;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var styled_components_1 = __importDefault(__webpack_require__(4));
var Buttons_1 = __webpack_require__(88);
var Theme_1 = __webpack_require__(8);
var StyledToastNotificationWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-self: flex-end;\n  flex-direction: column;\n  height: 100vh;\n  overflow-y: scroll;\n  padding-bottom: 0.75em;\n  position: fixed;\n  top: 0.25em;\n  right: 0.25em;\n  scrollbar-gutter: stable;\n  z-index: 1000;\n"], ["\n  display: flex;\n  align-self: flex-end;\n  flex-direction: column;\n  height: 100vh;\n  overflow-y: scroll;\n  padding-bottom: 0.75em;\n  position: fixed;\n  top: 0.25em;\n  right: 0.25em;\n  scrollbar-gutter: stable;\n  z-index: 1000;\n"])));
var CenterContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  justify-content: center;\n  display: flex;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  justify-content: center;\n  display: flex;\n"])), (0, Theme_1.fromTheme)('color', 'text', 'dark'), (0, Theme_1.fromTheme)('font', 'note', 'size'));
var renderNotificationMessage = function (numNotifications) {
    if (numNotifications === 0) {
        return '';
    }
    if (numNotifications === 1) {
        return "".concat(numNotifications, " notification to review");
    }
    return "".concat(numNotifications, " notifications to review");
};
var ToastNotificationWrapper = function (props) {
    var children = props.children, onClick = props.onClick, numNotifications = props.numNotifications;
    return (react_1.default.createElement(StyledToastNotificationWrapper, null,
        react_1.default.createElement(CenterContainer, null, renderNotificationMessage(numNotifications)),
        children,
        react_1.default.createElement(CenterContainer, null,
            react_1.default.createElement(Buttons_1.Button, { id: "close all button", variant: Theme_1.VARIANT.BASE, onClick: onClick }, "Close All Notifications"))));
};
ToastNotificationWrapper.defaultProps = {
    numNotifications: 0,
};
exports.default = ToastNotificationWrapper;
var templateObject_1, templateObject_2;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfirm = void 0;
var react_1 = __webpack_require__(0);
var confirmMessage = "You have unsaved changes. Click 'OK' to disregard changes, or 'Cancel' to continue editing.";
var useConfirm = function () {
    var _a = (0, react_1.useState)(false), isChanged = _a[0], setIsChanged = _a[1];
    (0, react_1.useEffect)(function () {
        var onBeforeUnload = function (event) {
            if (!isChanged)
                return;
            event.preventDefault();
            event.returnValue = false;
            return confirmMessage;
        };
        window.addEventListener('beforeunload', onBeforeUnload);
        return function () {
            window.removeEventListener('beforeunload', onBeforeUnload);
        };
    }, [isChanged]);
    return {
        markAsChanged: function (state) {
            setIsChanged(state);
        },
        confirmDiscard: function () {
            if (isChanged) {
                if (!window.confirm(confirmMessage)) {
                    return false;
                }
                setIsChanged(false);
            }
            return true;
        },
    };
};
exports.useConfirm = useConfirm;


/***/ }),
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TEXT_VARIANT = exports.VARIANT = exports.fromTheme = void 0;
function getRecursiveProp(theme, key, next) {
    var nextValue = theme[key];
    if (next.length > 0) {
        var thirdLevel = next.shift();
        return getRecursiveProp(nextValue, thirdLevel, next);
    }
    if (typeof nextValue === 'string') {
        return nextValue;
    }
    return null;
}
function fromTheme(key, next, more, last) {
    return function (_a) {
        var theme = _a.theme;
        if (more) {
            if (last) {
                return getRecursiveProp(theme, key, [next, more, last]);
            }
            return getRecursiveProp(theme, key, [next, more]);
        }
        return getRecursiveProp(theme, key, [next]);
    };
}
exports.fromTheme = fromTheme;
var VARIANT;
(function (VARIANT) {
    VARIANT["BASE"] = "base";
    VARIANT["INFO"] = "info";
    VARIANT["POSITIVE"] = "positive";
    VARIANT["PRIMARY"] = "positive";
    VARIANT["NEGATIVE"] = "negative";
    VARIANT["SECONDARY"] = "base";
    VARIANT["DANGER"] = "negative";
    VARIANT["DEFAULT"] = "base";
})(VARIANT = exports.VARIANT || (exports.VARIANT = {}));
var TEXT_VARIANT;
(function (TEXT_VARIANT) {
    TEXT_VARIANT["MEDIUM"] = "medium";
    TEXT_VARIANT["NEGATIVE"] = "negative";
    TEXT_VARIANT["BASE"] = "base";
})(TEXT_VARIANT = exports.TEXT_VARIANT || (exports.TEXT_VARIANT = {}));


/***/ }),
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53adae7e04b94384b103e6884cbad7ab.svg";

/***/ }),
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1123);


/***/ }),
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var polished_1 = __webpack_require__(1125);
var FONT;
(function (FONT) {
    FONT["SANS"] = "\"Open Sans\", sans-serif";
    FONT["MONO"] = "\"Roboto Mono\", monospace";
})(FONT || (FONT = {}));
var WEIGHT;
(function (WEIGHT) {
    WEIGHT["LIGHT"] = "300";
    WEIGHT["MEDIUM"] = "400";
    WEIGHT["BOLD"] = "600";
})(WEIGHT || (WEIGHT = {}));
var WHITE = '#fefefe';
var BLACK = '#181818';
var MarkOneTheme = {
    color: {
        background: {
            light: WHITE,
            subtle: '#f2f2f2',
            medium: '#e8e8e8',
            dark: '#93a1ad',
            darker: (0, polished_1.darken)(0.75, WHITE),
            accent: '#a51c30',
            base: {
                light: WHITE,
                medium: (0, polished_1.darken)(0.175, WHITE),
                dark: '#93a1ad',
            },
            info: {
                light: '#95b5df',
                medium: '#4e88c7',
                dark: '#084161',
            },
            positive: {
                light: '#81e981',
                medium: '#4db848',
                dark: '#178717',
            },
            negative: {
                light: '#ff8f9c',
                medium: '#ff4040',
                dark: '#ed1b2a',
            },
        },
        text: {
            base: BLACK,
            light: (0, polished_1.lighten)(0.9, BLACK),
            medium: '#575757',
            dark: BLACK,
            info: '#4e88c7',
            positive: '#4db848',
            negative: '#bd0f24',
        },
        area: {
            acs: '#da373e',
            am: '#4eadab',
            ap: '#cedb51',
            be: '#f0b643',
            cs: '#6797db',
            ee: '#f9df57',
            ese: '#75c3d5',
            general: '#95b5df',
            'mat & me': '#b18cbb',
            mde: '#c0c0c0',
            msmba: '#946eb7',
            sem: '#ec8f9c',
        },
    },
    font: {
        base: {
            family: FONT.SANS,
            size: '16px',
            weight: WEIGHT.MEDIUM,
        },
        body: {
            family: FONT.SANS,
            size: '1em',
            weight: WEIGHT.MEDIUM,
        },
        data: {
            family: FONT.MONO,
            size: '0.9em',
            weight: WEIGHT.MEDIUM,
        },
        note: {
            family: FONT.SANS,
            size: '0.8em',
            weight: WEIGHT.MEDIUM,
            color: (0, polished_1.lighten)(0.35, BLACK),
        },
        bold: {
            family: FONT.SANS,
            size: '1em',
            weight: WEIGHT.BOLD,
        },
        title: {
            family: FONT.SANS,
            size: '1.66em',
            weight: WEIGHT.MEDIUM,
            color: (0, polished_1.lighten)(0.35, BLACK),
        },
        heading: {
            family: FONT.SANS,
            size: '1.33em',
            weight: WEIGHT.LIGHT,
        },
        subheading: {
            family: FONT.SANS,
            size: '1.13em',
            weight: WEIGHT.BOLD,
        },
        error: {
            family: FONT.SANS,
            size: '0.7em',
            weight: WEIGHT.BOLD,
        },
        callout: {
            family: FONT.SANS,
            size: '1.13em',
            weight: WEIGHT.BOLD,
        },
        footer: {
            family: FONT.SANS,
            size: '0.9em',
            weight: WEIGHT.MEDIUM,
        },
    },
    shadow: {
        xlight: '0 2px 4px rgba(0,0,0,0.24)',
        light: '0 4px 8px rgba(0,0,0,0.28)',
        medium: '0 4px 16px 2px rgba(0,0,0,0.24)',
    },
    border: {
        hairline: "1px solid ".concat(BLACK),
        light: "2px solid ".concat((0, polished_1.lighten)(0.5, BLACK)),
        heavy: "6px solid ".concat((0, polished_1.lighten)(0.3, BLACK)),
    },
    ws: {
        zero: '0px',
        xsmall: '5px',
        small: '10px',
        medium: '15px',
        large: '25px',
        xlarge: '40px',
    },
};
exports.default = MarkOneTheme;


/***/ }),
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Binary_Property/ASCII.js": 562,
	"./Binary_Property/ASCII_Hex_Digit.js": 563,
	"./Binary_Property/Alphabetic.js": 564,
	"./Binary_Property/Any.js": 565,
	"./Binary_Property/Assigned.js": 566,
	"./Binary_Property/Bidi_Control.js": 567,
	"./Binary_Property/Bidi_Mirrored.js": 568,
	"./Binary_Property/Case_Ignorable.js": 569,
	"./Binary_Property/Cased.js": 570,
	"./Binary_Property/Changes_When_Casefolded.js": 571,
	"./Binary_Property/Changes_When_Casemapped.js": 572,
	"./Binary_Property/Changes_When_Lowercased.js": 573,
	"./Binary_Property/Changes_When_NFKC_Casefolded.js": 574,
	"./Binary_Property/Changes_When_Titlecased.js": 575,
	"./Binary_Property/Changes_When_Uppercased.js": 576,
	"./Binary_Property/Dash.js": 577,
	"./Binary_Property/Default_Ignorable_Code_Point.js": 578,
	"./Binary_Property/Deprecated.js": 579,
	"./Binary_Property/Diacritic.js": 580,
	"./Binary_Property/Emoji.js": 581,
	"./Binary_Property/Emoji_Component.js": 582,
	"./Binary_Property/Emoji_Modifier.js": 583,
	"./Binary_Property/Emoji_Modifier_Base.js": 584,
	"./Binary_Property/Emoji_Presentation.js": 585,
	"./Binary_Property/Extended_Pictographic.js": 586,
	"./Binary_Property/Extender.js": 587,
	"./Binary_Property/Grapheme_Base.js": 588,
	"./Binary_Property/Grapheme_Extend.js": 589,
	"./Binary_Property/Hex_Digit.js": 590,
	"./Binary_Property/IDS_Binary_Operator.js": 591,
	"./Binary_Property/IDS_Trinary_Operator.js": 592,
	"./Binary_Property/ID_Continue.js": 593,
	"./Binary_Property/ID_Start.js": 594,
	"./Binary_Property/Ideographic.js": 595,
	"./Binary_Property/Join_Control.js": 596,
	"./Binary_Property/Logical_Order_Exception.js": 597,
	"./Binary_Property/Lowercase.js": 598,
	"./Binary_Property/Math.js": 599,
	"./Binary_Property/Noncharacter_Code_Point.js": 600,
	"./Binary_Property/Pattern_Syntax.js": 601,
	"./Binary_Property/Pattern_White_Space.js": 602,
	"./Binary_Property/Quotation_Mark.js": 603,
	"./Binary_Property/Radical.js": 604,
	"./Binary_Property/Regional_Indicator.js": 605,
	"./Binary_Property/Sentence_Terminal.js": 606,
	"./Binary_Property/Soft_Dotted.js": 607,
	"./Binary_Property/Terminal_Punctuation.js": 608,
	"./Binary_Property/Unified_Ideograph.js": 609,
	"./Binary_Property/Uppercase.js": 610,
	"./Binary_Property/Variation_Selector.js": 611,
	"./Binary_Property/White_Space.js": 612,
	"./Binary_Property/XID_Continue.js": 613,
	"./Binary_Property/XID_Start.js": 614,
	"./General_Category/Cased_Letter.js": 615,
	"./General_Category/Close_Punctuation.js": 616,
	"./General_Category/Connector_Punctuation.js": 617,
	"./General_Category/Control.js": 618,
	"./General_Category/Currency_Symbol.js": 619,
	"./General_Category/Dash_Punctuation.js": 620,
	"./General_Category/Decimal_Number.js": 621,
	"./General_Category/Enclosing_Mark.js": 622,
	"./General_Category/Final_Punctuation.js": 623,
	"./General_Category/Format.js": 624,
	"./General_Category/Initial_Punctuation.js": 625,
	"./General_Category/Letter.js": 626,
	"./General_Category/Letter_Number.js": 627,
	"./General_Category/Line_Separator.js": 628,
	"./General_Category/Lowercase_Letter.js": 629,
	"./General_Category/Mark.js": 630,
	"./General_Category/Math_Symbol.js": 631,
	"./General_Category/Modifier_Letter.js": 632,
	"./General_Category/Modifier_Symbol.js": 633,
	"./General_Category/Nonspacing_Mark.js": 634,
	"./General_Category/Number.js": 635,
	"./General_Category/Open_Punctuation.js": 636,
	"./General_Category/Other.js": 637,
	"./General_Category/Other_Letter.js": 638,
	"./General_Category/Other_Number.js": 639,
	"./General_Category/Other_Punctuation.js": 640,
	"./General_Category/Other_Symbol.js": 641,
	"./General_Category/Paragraph_Separator.js": 642,
	"./General_Category/Private_Use.js": 643,
	"./General_Category/Punctuation.js": 644,
	"./General_Category/Separator.js": 645,
	"./General_Category/Space_Separator.js": 646,
	"./General_Category/Spacing_Mark.js": 647,
	"./General_Category/Surrogate.js": 648,
	"./General_Category/Symbol.js": 649,
	"./General_Category/Titlecase_Letter.js": 650,
	"./General_Category/Unassigned.js": 651,
	"./General_Category/Uppercase_Letter.js": 652,
	"./Script/Adlam.js": 653,
	"./Script/Ahom.js": 654,
	"./Script/Anatolian_Hieroglyphs.js": 655,
	"./Script/Arabic.js": 656,
	"./Script/Armenian.js": 657,
	"./Script/Avestan.js": 658,
	"./Script/Balinese.js": 659,
	"./Script/Bamum.js": 660,
	"./Script/Bassa_Vah.js": 661,
	"./Script/Batak.js": 662,
	"./Script/Bengali.js": 663,
	"./Script/Bhaiksuki.js": 664,
	"./Script/Bopomofo.js": 665,
	"./Script/Brahmi.js": 666,
	"./Script/Braille.js": 667,
	"./Script/Buginese.js": 668,
	"./Script/Buhid.js": 669,
	"./Script/Canadian_Aboriginal.js": 670,
	"./Script/Carian.js": 671,
	"./Script/Caucasian_Albanian.js": 672,
	"./Script/Chakma.js": 673,
	"./Script/Cham.js": 674,
	"./Script/Cherokee.js": 675,
	"./Script/Chorasmian.js": 676,
	"./Script/Common.js": 677,
	"./Script/Coptic.js": 678,
	"./Script/Cuneiform.js": 679,
	"./Script/Cypriot.js": 680,
	"./Script/Cyrillic.js": 681,
	"./Script/Deseret.js": 682,
	"./Script/Devanagari.js": 683,
	"./Script/Dives_Akuru.js": 684,
	"./Script/Dogra.js": 685,
	"./Script/Duployan.js": 686,
	"./Script/Egyptian_Hieroglyphs.js": 687,
	"./Script/Elbasan.js": 688,
	"./Script/Elymaic.js": 689,
	"./Script/Ethiopic.js": 690,
	"./Script/Georgian.js": 691,
	"./Script/Glagolitic.js": 692,
	"./Script/Gothic.js": 693,
	"./Script/Grantha.js": 694,
	"./Script/Greek.js": 695,
	"./Script/Gujarati.js": 696,
	"./Script/Gunjala_Gondi.js": 697,
	"./Script/Gurmukhi.js": 698,
	"./Script/Han.js": 699,
	"./Script/Hangul.js": 700,
	"./Script/Hanifi_Rohingya.js": 701,
	"./Script/Hanunoo.js": 702,
	"./Script/Hatran.js": 703,
	"./Script/Hebrew.js": 704,
	"./Script/Hiragana.js": 705,
	"./Script/Imperial_Aramaic.js": 706,
	"./Script/Inherited.js": 707,
	"./Script/Inscriptional_Pahlavi.js": 708,
	"./Script/Inscriptional_Parthian.js": 709,
	"./Script/Javanese.js": 710,
	"./Script/Kaithi.js": 711,
	"./Script/Kannada.js": 712,
	"./Script/Katakana.js": 713,
	"./Script/Kayah_Li.js": 714,
	"./Script/Kharoshthi.js": 715,
	"./Script/Khitan_Small_Script.js": 716,
	"./Script/Khmer.js": 717,
	"./Script/Khojki.js": 718,
	"./Script/Khudawadi.js": 719,
	"./Script/Lao.js": 720,
	"./Script/Latin.js": 721,
	"./Script/Lepcha.js": 722,
	"./Script/Limbu.js": 723,
	"./Script/Linear_A.js": 724,
	"./Script/Linear_B.js": 725,
	"./Script/Lisu.js": 726,
	"./Script/Lycian.js": 727,
	"./Script/Lydian.js": 728,
	"./Script/Mahajani.js": 729,
	"./Script/Makasar.js": 730,
	"./Script/Malayalam.js": 731,
	"./Script/Mandaic.js": 732,
	"./Script/Manichaean.js": 733,
	"./Script/Marchen.js": 734,
	"./Script/Masaram_Gondi.js": 735,
	"./Script/Medefaidrin.js": 736,
	"./Script/Meetei_Mayek.js": 737,
	"./Script/Mende_Kikakui.js": 738,
	"./Script/Meroitic_Cursive.js": 739,
	"./Script/Meroitic_Hieroglyphs.js": 740,
	"./Script/Miao.js": 741,
	"./Script/Modi.js": 742,
	"./Script/Mongolian.js": 743,
	"./Script/Mro.js": 744,
	"./Script/Multani.js": 745,
	"./Script/Myanmar.js": 746,
	"./Script/Nabataean.js": 747,
	"./Script/Nandinagari.js": 748,
	"./Script/New_Tai_Lue.js": 749,
	"./Script/Newa.js": 750,
	"./Script/Nko.js": 751,
	"./Script/Nushu.js": 752,
	"./Script/Nyiakeng_Puachue_Hmong.js": 753,
	"./Script/Ogham.js": 754,
	"./Script/Ol_Chiki.js": 755,
	"./Script/Old_Hungarian.js": 756,
	"./Script/Old_Italic.js": 757,
	"./Script/Old_North_Arabian.js": 758,
	"./Script/Old_Permic.js": 759,
	"./Script/Old_Persian.js": 760,
	"./Script/Old_Sogdian.js": 761,
	"./Script/Old_South_Arabian.js": 762,
	"./Script/Old_Turkic.js": 763,
	"./Script/Oriya.js": 764,
	"./Script/Osage.js": 765,
	"./Script/Osmanya.js": 766,
	"./Script/Pahawh_Hmong.js": 767,
	"./Script/Palmyrene.js": 768,
	"./Script/Pau_Cin_Hau.js": 769,
	"./Script/Phags_Pa.js": 770,
	"./Script/Phoenician.js": 771,
	"./Script/Psalter_Pahlavi.js": 772,
	"./Script/Rejang.js": 773,
	"./Script/Runic.js": 774,
	"./Script/Samaritan.js": 775,
	"./Script/Saurashtra.js": 776,
	"./Script/Sharada.js": 777,
	"./Script/Shavian.js": 778,
	"./Script/Siddham.js": 779,
	"./Script/SignWriting.js": 780,
	"./Script/Sinhala.js": 781,
	"./Script/Sogdian.js": 782,
	"./Script/Sora_Sompeng.js": 783,
	"./Script/Soyombo.js": 784,
	"./Script/Sundanese.js": 785,
	"./Script/Syloti_Nagri.js": 786,
	"./Script/Syriac.js": 787,
	"./Script/Tagalog.js": 788,
	"./Script/Tagbanwa.js": 789,
	"./Script/Tai_Le.js": 790,
	"./Script/Tai_Tham.js": 791,
	"./Script/Tai_Viet.js": 792,
	"./Script/Takri.js": 793,
	"./Script/Tamil.js": 794,
	"./Script/Tangut.js": 795,
	"./Script/Telugu.js": 796,
	"./Script/Thaana.js": 797,
	"./Script/Thai.js": 798,
	"./Script/Tibetan.js": 799,
	"./Script/Tifinagh.js": 800,
	"./Script/Tirhuta.js": 801,
	"./Script/Ugaritic.js": 802,
	"./Script/Vai.js": 803,
	"./Script/Wancho.js": 804,
	"./Script/Warang_Citi.js": 805,
	"./Script/Yezidi.js": 806,
	"./Script/Yi.js": 807,
	"./Script/Zanabazar_Square.js": 808,
	"./Script_Extensions/Adlam.js": 809,
	"./Script_Extensions/Ahom.js": 810,
	"./Script_Extensions/Anatolian_Hieroglyphs.js": 811,
	"./Script_Extensions/Arabic.js": 812,
	"./Script_Extensions/Armenian.js": 813,
	"./Script_Extensions/Avestan.js": 814,
	"./Script_Extensions/Balinese.js": 815,
	"./Script_Extensions/Bamum.js": 816,
	"./Script_Extensions/Bassa_Vah.js": 817,
	"./Script_Extensions/Batak.js": 818,
	"./Script_Extensions/Bengali.js": 819,
	"./Script_Extensions/Bhaiksuki.js": 820,
	"./Script_Extensions/Bopomofo.js": 821,
	"./Script_Extensions/Brahmi.js": 822,
	"./Script_Extensions/Braille.js": 823,
	"./Script_Extensions/Buginese.js": 824,
	"./Script_Extensions/Buhid.js": 825,
	"./Script_Extensions/Canadian_Aboriginal.js": 826,
	"./Script_Extensions/Carian.js": 827,
	"./Script_Extensions/Caucasian_Albanian.js": 828,
	"./Script_Extensions/Chakma.js": 829,
	"./Script_Extensions/Cham.js": 830,
	"./Script_Extensions/Cherokee.js": 831,
	"./Script_Extensions/Chorasmian.js": 832,
	"./Script_Extensions/Common.js": 833,
	"./Script_Extensions/Coptic.js": 834,
	"./Script_Extensions/Cuneiform.js": 835,
	"./Script_Extensions/Cypriot.js": 836,
	"./Script_Extensions/Cyrillic.js": 837,
	"./Script_Extensions/Deseret.js": 838,
	"./Script_Extensions/Devanagari.js": 839,
	"./Script_Extensions/Dives_Akuru.js": 840,
	"./Script_Extensions/Dogra.js": 841,
	"./Script_Extensions/Duployan.js": 842,
	"./Script_Extensions/Egyptian_Hieroglyphs.js": 843,
	"./Script_Extensions/Elbasan.js": 844,
	"./Script_Extensions/Elymaic.js": 845,
	"./Script_Extensions/Ethiopic.js": 846,
	"./Script_Extensions/Georgian.js": 847,
	"./Script_Extensions/Glagolitic.js": 848,
	"./Script_Extensions/Gothic.js": 849,
	"./Script_Extensions/Grantha.js": 850,
	"./Script_Extensions/Greek.js": 851,
	"./Script_Extensions/Gujarati.js": 852,
	"./Script_Extensions/Gunjala_Gondi.js": 853,
	"./Script_Extensions/Gurmukhi.js": 854,
	"./Script_Extensions/Han.js": 855,
	"./Script_Extensions/Hangul.js": 856,
	"./Script_Extensions/Hanifi_Rohingya.js": 857,
	"./Script_Extensions/Hanunoo.js": 858,
	"./Script_Extensions/Hatran.js": 859,
	"./Script_Extensions/Hebrew.js": 860,
	"./Script_Extensions/Hiragana.js": 861,
	"./Script_Extensions/Imperial_Aramaic.js": 862,
	"./Script_Extensions/Inherited.js": 863,
	"./Script_Extensions/Inscriptional_Pahlavi.js": 864,
	"./Script_Extensions/Inscriptional_Parthian.js": 865,
	"./Script_Extensions/Javanese.js": 866,
	"./Script_Extensions/Kaithi.js": 867,
	"./Script_Extensions/Kannada.js": 868,
	"./Script_Extensions/Katakana.js": 869,
	"./Script_Extensions/Kayah_Li.js": 870,
	"./Script_Extensions/Kharoshthi.js": 871,
	"./Script_Extensions/Khitan_Small_Script.js": 872,
	"./Script_Extensions/Khmer.js": 873,
	"./Script_Extensions/Khojki.js": 874,
	"./Script_Extensions/Khudawadi.js": 875,
	"./Script_Extensions/Lao.js": 876,
	"./Script_Extensions/Latin.js": 877,
	"./Script_Extensions/Lepcha.js": 878,
	"./Script_Extensions/Limbu.js": 879,
	"./Script_Extensions/Linear_A.js": 880,
	"./Script_Extensions/Linear_B.js": 881,
	"./Script_Extensions/Lisu.js": 882,
	"./Script_Extensions/Lycian.js": 883,
	"./Script_Extensions/Lydian.js": 884,
	"./Script_Extensions/Mahajani.js": 885,
	"./Script_Extensions/Makasar.js": 886,
	"./Script_Extensions/Malayalam.js": 887,
	"./Script_Extensions/Mandaic.js": 888,
	"./Script_Extensions/Manichaean.js": 889,
	"./Script_Extensions/Marchen.js": 890,
	"./Script_Extensions/Masaram_Gondi.js": 891,
	"./Script_Extensions/Medefaidrin.js": 892,
	"./Script_Extensions/Meetei_Mayek.js": 893,
	"./Script_Extensions/Mende_Kikakui.js": 894,
	"./Script_Extensions/Meroitic_Cursive.js": 895,
	"./Script_Extensions/Meroitic_Hieroglyphs.js": 896,
	"./Script_Extensions/Miao.js": 897,
	"./Script_Extensions/Modi.js": 898,
	"./Script_Extensions/Mongolian.js": 899,
	"./Script_Extensions/Mro.js": 900,
	"./Script_Extensions/Multani.js": 901,
	"./Script_Extensions/Myanmar.js": 902,
	"./Script_Extensions/Nabataean.js": 903,
	"./Script_Extensions/Nandinagari.js": 904,
	"./Script_Extensions/New_Tai_Lue.js": 905,
	"./Script_Extensions/Newa.js": 906,
	"./Script_Extensions/Nko.js": 907,
	"./Script_Extensions/Nushu.js": 908,
	"./Script_Extensions/Nyiakeng_Puachue_Hmong.js": 909,
	"./Script_Extensions/Ogham.js": 910,
	"./Script_Extensions/Ol_Chiki.js": 911,
	"./Script_Extensions/Old_Hungarian.js": 912,
	"./Script_Extensions/Old_Italic.js": 913,
	"./Script_Extensions/Old_North_Arabian.js": 914,
	"./Script_Extensions/Old_Permic.js": 915,
	"./Script_Extensions/Old_Persian.js": 916,
	"./Script_Extensions/Old_Sogdian.js": 917,
	"./Script_Extensions/Old_South_Arabian.js": 918,
	"./Script_Extensions/Old_Turkic.js": 919,
	"./Script_Extensions/Oriya.js": 920,
	"./Script_Extensions/Osage.js": 921,
	"./Script_Extensions/Osmanya.js": 922,
	"./Script_Extensions/Pahawh_Hmong.js": 923,
	"./Script_Extensions/Palmyrene.js": 924,
	"./Script_Extensions/Pau_Cin_Hau.js": 925,
	"./Script_Extensions/Phags_Pa.js": 926,
	"./Script_Extensions/Phoenician.js": 927,
	"./Script_Extensions/Psalter_Pahlavi.js": 928,
	"./Script_Extensions/Rejang.js": 929,
	"./Script_Extensions/Runic.js": 930,
	"./Script_Extensions/Samaritan.js": 931,
	"./Script_Extensions/Saurashtra.js": 932,
	"./Script_Extensions/Sharada.js": 933,
	"./Script_Extensions/Shavian.js": 934,
	"./Script_Extensions/Siddham.js": 935,
	"./Script_Extensions/SignWriting.js": 936,
	"./Script_Extensions/Sinhala.js": 937,
	"./Script_Extensions/Sogdian.js": 938,
	"./Script_Extensions/Sora_Sompeng.js": 939,
	"./Script_Extensions/Soyombo.js": 940,
	"./Script_Extensions/Sundanese.js": 941,
	"./Script_Extensions/Syloti_Nagri.js": 942,
	"./Script_Extensions/Syriac.js": 943,
	"./Script_Extensions/Tagalog.js": 944,
	"./Script_Extensions/Tagbanwa.js": 945,
	"./Script_Extensions/Tai_Le.js": 946,
	"./Script_Extensions/Tai_Tham.js": 947,
	"./Script_Extensions/Tai_Viet.js": 948,
	"./Script_Extensions/Takri.js": 949,
	"./Script_Extensions/Tamil.js": 950,
	"./Script_Extensions/Tangut.js": 951,
	"./Script_Extensions/Telugu.js": 952,
	"./Script_Extensions/Thaana.js": 953,
	"./Script_Extensions/Thai.js": 954,
	"./Script_Extensions/Tibetan.js": 955,
	"./Script_Extensions/Tifinagh.js": 956,
	"./Script_Extensions/Tirhuta.js": 957,
	"./Script_Extensions/Ugaritic.js": 958,
	"./Script_Extensions/Vai.js": 959,
	"./Script_Extensions/Wancho.js": 960,
	"./Script_Extensions/Warang_Citi.js": 961,
	"./Script_Extensions/Yezidi.js": 962,
	"./Script_Extensions/Yi.js": 963,
	"./Script_Extensions/Zanabazar_Square.js": 964,
	"./index.js": 965,
	"./unicode-version.js": 966
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
webpackContext.id = 561;

/***/ }),
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = { 'react': __webpack_require__(0) };
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '# Mark One\n\n[![Travis](https://img.shields.io/travis/com/seas-computing/mark-one.svg)](https://travis-ci.com/seas-computing/mark-one)\n[![Codecov](https://img.shields.io/codecov/c/gh/seas-computing/mark-one.svg)](https://codecov.io/gh/seas-computing/mark-one)\n[![Styleguidist](https://img.shields.io/badge/docs-Styleguidist-red.svg)](https://seas-computing.github.io/mark-one/)\n![GitHub top language](https://img.shields.io/github/languages/top/seas-computing/mark-one.svg)\n[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)\n![BSD License](https://img.shields.io/github/license/seas-computing/mark-one)\n\nA React UI library in development at the Harvard John A. Paulson School of Engineering and Applied Sciences.\n\n## Installing\n\n> This project is currently under development, and all components are liable to change significantly between version. You should not use this in a production app unless you know what you\'re doing.\n\nMark One can be installed from NPM:\n\n```bash\n<span class="token function">npm</span> <span class="token function">install</span> mark-one\n```\n\nComponents can be imported and used individually in projects.\n\n```tsx\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BasicButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'mark-one\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BasicButton</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    Click Me!\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BasicButton</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n```\n\n## Structure\n\nAll components are defined under the `./src` directory, divided into subdirectories by category. Tests live alongside the code in `__tests__` directories.\n\n### Buttons\n\nDefines standard `Button` along with variants for confirm/deny actions, toggled labels, Icon-only buttons, and others.\n\n### Forms\n\nComponents for handling the layout and behavior of forms, such as field sets, collapsible panels, etc.\n\n### Inputs\n\nText fields, checkboxes, radio buttons, text areas, select boxes, etc.\n\n### Indicators\n\nElements to indicate whether an asynchronous process is in progress, such as a data upload or fetch from the server.\n\n### Layout\n\nHigh-level page structure components, including headers, modals, etc.\n\n## Adding Components\n\nGuidelines for adding components are defined in [`CONTRIBUTING.md`](CONTRIBUTING.md)\n\n## Documentation\n\nWe\'re using [React Styleguidist](https://react-styleguidist.js.org/) to generate our documentation.'
    }]
	

/***/ }),
/* 980 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = { 'react': __webpack_require__(0) };
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '# Adding Components to the Library\n\n## Code Style\n\nEach file should contain only one component, and that component should be the default export of the file.\n\nComponents should be re-exported from the `index.ts` file in its directory.\n\nPrefer functional components wherever possible, using [hooks](https://reactjs.org/docs/hooks-reference.html) to manage state if necessary.\n\nAll components should conform to eslint rules defined in `.eslintrc.json`. Check code with `npm run lint`.\n\n## Styled Components\n\nWe\'re using [`styled-components`](https://www.styled-components.com/) to apply css styles to components.\n\nValues for colors, spacing, text sizes/styles, etc. should be defined as part of [the global theme](https://www.styled-components.com/docs/advanced#theming) in `src/Theme/BaseTheme.ts`\n\n## Typescript\n\nAll components in the library should be written in Typescript with the `.tsx` extension.\n\nProps for each component should be defined in an interface, which should be a named export alongside the component.\n\nYou can check your typing by running `npm run typecheck`\n\n## Testing\n\nWe\'re using [`mocha`](https://mochajs.org/) and [`testing-library/react`](https://testing-library.com/docs/react-testing-library/intro) to test components.\n\n*   `npm run test` will run the test suite once and print a coverage report.\n*   `npm run test:watch` will watch the src directory and re-run tests on changes, without a coverage report.\n\nComponent tests should ensure that any conditional rendering logic works as expected, and that handlers/behaviors run in the expected situations.\n\nTests should be written in a file called `__tests__/Component.test.tsx` within the same subdirectory as the component.\n\n## Documentation\n\n[React Styleguidist](https://react-styleguidist.js.org) is used to create documentation.\n\n*   `npm run start` will bring up a hot-reloading dev server during development.\n\n*   `npm run build` will generate static html documentation.\n\nIn your component file, you can add additional context to your props interface by adding `/** jsdoc-style comments */` above the fields.\n\nAdditional details about the component should be added above the component definition in a docblock. For example:\n\n```tsx\n<span class="token comment">// src/demo/Test.tsx</span>\n\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>ReactChildren<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ITestProps</span> <span class="token punctuation">{</span>\n  <span class="token comment">/** Text to display in the div */</span>\n  children<span class="token operator">:</span> ReactChildren<span class="token punctuation">;</span>\n  <span class="token comment">/** background color of the div */</span>\n  color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n  \n<span class="token comment">/**\n * Test div\n **/</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Test</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> ITestProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token operator">:</span> props<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Test<span class="token punctuation">;</span>\n```\n\n## Component Examples\n\nStyleguidist will also render usage examples for components, which can be helpful during development.\n\nYou\'ll need to create an example file under the top-level `examples` directory for each component under `src`. This file should replicate the sub-directory structure of the `src` directory, with a `.md` extension. (e.g. `src/buttons/TestButton.tsx` would have an example file of `src/buttons/TestButton.md`)\n\nThe example file can use any valid markdown, and fenced code blocks with a `jsx` type will render as a modifiable component in the documentation.\n\n````markdown\n// examples/demo/Test.md\n\nRenders the children in a div, with an optional background color\n\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language"> jsx</span>\n<span class="token code-block language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Test</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#abcabc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Testing Color #abcabc</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Test</span></span><span class="token punctuation">></span></span></span>\n<span class="token punctuation">```</span></span>\n\nTesting another color\n\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language"> jsx</span>\n<span class="token code-block language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Test</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fafafa<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Testing color #fafafa</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Test</span></span><span class="token punctuation">></span></span></span>\n<span class="token punctuation">```</span></span>\n````\n\n## Folder Structure\n\nAfter adding your component, tests, and examples, your should have the following in your folder structure:\n\n```markdown\nmark-one/\n\u251C\u2500\u2500 examples/\n\u2502   \u2514\u2500\u2500 demo/\n\u2502       \u2514\u2500\u2500TestComponent.md\n\u2514\u2500\u2500 src/\n    \u251C\u2500\u2500 demo/\n    \u2502   \u251C\u2500\u2500 <span class="token bold"><span class="token punctuation">__</span><span class="token content">tests</span><span class="token punctuation">__</span></span>/\n    |   \u2502   \u2514\u2500\u2500TestComponent.test.tsx\n    \u2502   \u251C\u2500\u2500index.ts\n    \u2502   \u2514\u2500\u2500TestComponent.tsx\n    \u2514\u2500\u2500index.ts\n```'
    }]
	

/***/ }),
/* 981 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = { 'react': __webpack_require__(0) };
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': 'This is a dummy page to be filled with details about user interaction.'
    }]
	

/***/ }),
/* 982 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'GlobalMessage',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the alt text for screen readers',
            'name': 'buttonAlt',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                'name': 'GlobalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                    'name': 'GlobalMessageProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the text on the button',
            'name': 'buttonLabel',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                'name': 'GlobalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                    'name': 'GlobalMessageProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Text to be displayed',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                'name': 'GlobalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                    'name': 'GlobalMessageProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the modal message',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                'name': 'GlobalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                    'name': 'GlobalMessageProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'onClick',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                'name': 'GlobalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                    'name': 'GlobalMessageProps'
                }],
            'required': true,
            'type': { 'name': 'MouseEventHandler<Element>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'ARIA_LIVE_VARIANT.ASSERTIVE' },
            'description': 'The value of the aria-live property',
            'name': 'ariaLive',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                'name': 'GlobalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                    'name': 'GlobalMessageProps'
                }],
            'required': false,
            'type': { 'name': 'ARIA_LIVE_VARIANT' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Specifies the ref of the element',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                'name': 'GlobalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                    'name': 'GlobalMessageProps'
                }],
            'required': false,
            'type': { 'name': 'Ref<HTMLButtonElement>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'alert' },
            'description': 'The aria role of the message displayed. A list of the different role\nvalues that should be used can be found in the w3 docs:\nhttps://www.w3.org/TR/wai-aria-1.1/#live_region_roles\nThe default value role is \'alert.\'',
            'name': 'role',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                'name': 'GlobalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                    'name': 'GlobalMessageProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'VARIANT.BASE' },
            'description': 'Allows you to pass in a variant property from the VARIANT enum',
            'name': 'variant',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                'name': 'GlobalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/GlobalMessage.tsx',
                    'name': 'GlobalMessageProps'
                }],
            'required': false,
            'type': { 'name': 'VARIANT' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(983)
}
	

/***/ }),
/* 983 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Alerts/GlobalMessage.tsx': __webpack_require__(170)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst GlobalMessage$0 = require('./../../src/Alerts/GlobalMessage.tsx');\nconst GlobalMessage = GlobalMessage$0.default || (GlobalMessage$0['GlobalMessage'] || GlobalMessage$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of a global message in which the `variant` property is assigned the enum value `VARIANT.NEGATIVE`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<GlobalMessage\n  id="negativeMessage"\n  variant={VARIANT.NEGATIVE}\n  onClick={function() {\n    alert(\'You clicked the "Close" button.\')\n  }}\n  buttonAlt=\'Close Button\'\n  buttonLabel=\'Close\'\n>\n  Error: Please try again.\n</GlobalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a global message in which the `variant` property is assigned the enum value `VARIANT.PRIMARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<GlobalMessage\n  id="primaryMessage"\n  variant={VARIANT.PRIMARY}\n  onClick={function() {\n    alert(\'You clicked the "Close" button.\')\n  }}\n  buttonAlt=\'Close Button\'\n  buttonLabel=\'Close\'\n>\n  Success: The information has been updated.\n</GlobalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a global message in which the `variant` property is assigned the enum value `VARIANT.INFO`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<GlobalMessage\n  id="infoMessage"\n  variant={VARIANT.INFO}\n  onClick={function() {\n    alert(\'You clicked the "Close" button.\')\n  }}\n  buttonAlt=\'Close Button\'\n  buttonLabel=\'Close\'\n>\n  Info: Maintenance is scheduled to occur this evening at 7:00PM EST.\n</GlobalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 984 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(4);


/***/ }),
/* 985 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridContainer = exports.GridWrapper = exports.Callout = exports.MenuFlex = exports.Paragraph = exports.Footer = exports.PageBody = exports.Logo = exports.Header = void 0;
var Header_1 = __webpack_require__(178);
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return __importDefault(Header_1).default; } });
var Logo_1 = __webpack_require__(179);
Object.defineProperty(exports, "Logo", { enumerable: true, get: function () { return __importDefault(Logo_1).default; } });
var PageBody_1 = __webpack_require__(180);
Object.defineProperty(exports, "PageBody", { enumerable: true, get: function () { return __importDefault(PageBody_1).default; } });
var Footer_1 = __webpack_require__(181);
Object.defineProperty(exports, "Footer", { enumerable: true, get: function () { return __importDefault(Footer_1).default; } });
var Paragraph_1 = __webpack_require__(182);
Object.defineProperty(exports, "Paragraph", { enumerable: true, get: function () { return __importDefault(Paragraph_1).default; } });
var MenuFlex_1 = __webpack_require__(183);
Object.defineProperty(exports, "MenuFlex", { enumerable: true, get: function () { return __importDefault(MenuFlex_1).default; } });
var Callout_1 = __webpack_require__(184);
Object.defineProperty(exports, "Callout", { enumerable: true, get: function () { return __importDefault(Callout_1).default; } });
var GridWrapper_1 = __webpack_require__(185);
Object.defineProperty(exports, "GridWrapper", { enumerable: true, get: function () { return __importDefault(GridWrapper_1).default; } });
var GridContainer_1 = __webpack_require__(186);
Object.defineProperty(exports, "GridContainer", { enumerable: true, get: function () { return __importDefault(GridContainer_1).default; } });


/***/ }),
/* 986 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabListItem = exports.TabList = void 0;
var TabList_1 = __webpack_require__(187);
Object.defineProperty(exports, "TabList", { enumerable: true, get: function () { return __importDefault(TabList_1).default; } });
var TabListItem_1 = __webpack_require__(188);
Object.defineProperty(exports, "TabListItem", { enumerable: true, get: function () { return __importDefault(TabListItem_1).default; } });


/***/ }),
/* 987 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRowHeadingCell = exports.TableBody = exports.TableHeadingSpacer = exports.TableHeadingCell = exports.TableHead = exports.TableRow = exports.TableCellListItem = exports.TableCellList = exports.VALIGN = exports.ALIGN = exports.TableCell = exports.Table = void 0;
var Table_1 = __webpack_require__(189);
Object.defineProperty(exports, "Table", { enumerable: true, get: function () { return __importDefault(Table_1).default; } });
var TableCell_1 = __webpack_require__(128);
Object.defineProperty(exports, "TableCell", { enumerable: true, get: function () { return __importDefault(TableCell_1).default; } });
Object.defineProperty(exports, "ALIGN", { enumerable: true, get: function () { return TableCell_1.ALIGN; } });
Object.defineProperty(exports, "VALIGN", { enumerable: true, get: function () { return TableCell_1.VALIGN; } });
var TableCellList_1 = __webpack_require__(190);
Object.defineProperty(exports, "TableCellList", { enumerable: true, get: function () { return __importDefault(TableCellList_1).default; } });
var TableCellListItem_1 = __webpack_require__(191);
Object.defineProperty(exports, "TableCellListItem", { enumerable: true, get: function () { return __importDefault(TableCellListItem_1).default; } });
var TableRow_1 = __webpack_require__(192);
Object.defineProperty(exports, "TableRow", { enumerable: true, get: function () { return __importDefault(TableRow_1).default; } });
var TableHead_1 = __webpack_require__(193);
Object.defineProperty(exports, "TableHead", { enumerable: true, get: function () { return __importDefault(TableHead_1).default; } });
var TableHeadingCell_1 = __webpack_require__(194);
Object.defineProperty(exports, "TableHeadingCell", { enumerable: true, get: function () { return __importDefault(TableHeadingCell_1).default; } });
var TableHeadingSpacer_1 = __webpack_require__(195);
Object.defineProperty(exports, "TableHeadingSpacer", { enumerable: true, get: function () { return __importDefault(TableHeadingSpacer_1).default; } });
var TableBody_1 = __webpack_require__(196);
Object.defineProperty(exports, "TableBody", { enumerable: true, get: function () { return __importDefault(TableBody_1).default; } });
var TableRowHeadingCell_1 = __webpack_require__(197);
Object.defineProperty(exports, "TableRowHeadingCell", { enumerable: true, get: function () { return __importDefault(TableRowHeadingCell_1).default; } });


/***/ }),
/* 988 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconLink = void 0;
var IconLink_1 = __webpack_require__(198);
Object.defineProperty(exports, "IconLink", { enumerable: true, get: function () { return __importDefault(IconLink_1).default; } });


/***/ }),
/* 989 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiLineTextInput = exports.Form = exports.RadioButton = exports.Fieldset = exports.CheckLabel = exports.POSITION = exports.InputLabel = exports.Combobox = exports.Checkbox = exports.DropdownOptionProps = exports.DropdownProps = exports.Dropdown = exports.TextInput = exports.ValidationErrorMessage = void 0;
var ValidationErrorMessage_1 = __webpack_require__(54);
Object.defineProperty(exports, "ValidationErrorMessage", { enumerable: true, get: function () { return __importDefault(ValidationErrorMessage_1).default; } });
var TextInput_1 = __webpack_require__(129);
Object.defineProperty(exports, "TextInput", { enumerable: true, get: function () { return __importDefault(TextInput_1).default; } });
var Dropdown_1 = __webpack_require__(199);
Object.defineProperty(exports, "Dropdown", { enumerable: true, get: function () { return __importDefault(Dropdown_1).default; } });
Object.defineProperty(exports, "DropdownProps", { enumerable: true, get: function () { return Dropdown_1.DropdownProps; } });
Object.defineProperty(exports, "DropdownOptionProps", { enumerable: true, get: function () { return Dropdown_1.DropdownOptionProps; } });
var Checkbox_1 = __webpack_require__(200);
Object.defineProperty(exports, "Checkbox", { enumerable: true, get: function () { return __importDefault(Checkbox_1).default; } });
var Combobox_1 = __webpack_require__(201);
Object.defineProperty(exports, "Combobox", { enumerable: true, get: function () { return __importDefault(Combobox_1).default; } });
var InputLabel_1 = __webpack_require__(40);
Object.defineProperty(exports, "InputLabel", { enumerable: true, get: function () { return __importDefault(InputLabel_1).default; } });
Object.defineProperty(exports, "POSITION", { enumerable: true, get: function () { return InputLabel_1.POSITION; } });
var CheckLabel_1 = __webpack_require__(89);
Object.defineProperty(exports, "CheckLabel", { enumerable: true, get: function () { return __importDefault(CheckLabel_1).default; } });
var Fieldset_1 = __webpack_require__(202);
Object.defineProperty(exports, "Fieldset", { enumerable: true, get: function () { return __importDefault(Fieldset_1).default; } });
var RadioButton_1 = __webpack_require__(210);
Object.defineProperty(exports, "RadioButton", { enumerable: true, get: function () { return __importDefault(RadioButton_1).default; } });
var Form_1 = __webpack_require__(211);
Object.defineProperty(exports, "Form", { enumerable: true, get: function () { return __importDefault(Form_1).default; } });
var MultiLineTextInput_1 = __webpack_require__(212);
Object.defineProperty(exports, "MultiLineTextInput", { enumerable: true, get: function () { return __importDefault(MultiLineTextInput_1).default; } });


/***/ }),
/* 990 */,
/* 991 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalMessage = exports.ModalHeader = exports.ModalFooter = exports.ModalBody = exports.Modal = void 0;
var Modal_1 = __webpack_require__(213);
Object.defineProperty(exports, "Modal", { enumerable: true, get: function () { return __importDefault(Modal_1).default; } });
var ModalBody_1 = __webpack_require__(214);
Object.defineProperty(exports, "ModalBody", { enumerable: true, get: function () { return __importDefault(ModalBody_1).default; } });
var ModalFooter_1 = __webpack_require__(215);
Object.defineProperty(exports, "ModalFooter", { enumerable: true, get: function () { return __importDefault(ModalFooter_1).default; } });
var ModalHeader_1 = __webpack_require__(216);
Object.defineProperty(exports, "ModalHeader", { enumerable: true, get: function () { return __importDefault(ModalHeader_1).default; } });
var ModalMessage_1 = __webpack_require__(217);
Object.defineProperty(exports, "ModalMessage", { enumerable: true, get: function () { return __importDefault(ModalMessage_1).default; } });


/***/ }),
/* 992 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLink = exports.Link = void 0;
var Link_1 = __webpack_require__(218);
Object.defineProperty(exports, "Link", { enumerable: true, get: function () { return __importDefault(Link_1).default; } });
var ExternalLink_1 = __webpack_require__(219);
Object.defineProperty(exports, "ExternalLink", { enumerable: true, get: function () { return __importDefault(ExternalLink_1).default; } });


/***/ }),
/* 993 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = void 0;
var Popover_1 = __webpack_require__(220);
Object.defineProperty(exports, "Popover", { enumerable: true, get: function () { return __importDefault(Popover_1).default; } });


/***/ }),
/* 994 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPINNER_TEXT = exports.LoadSpinner = void 0;
var LoadSpinner_1 = __webpack_require__(221);
Object.defineProperty(exports, "LoadSpinner", { enumerable: true, get: function () { return __importDefault(LoadSpinner_1).default; } });
var LoadSpinnerText_1 = __webpack_require__(130);
Object.defineProperty(exports, "SPINNER_TEXT", { enumerable: true, get: function () { return LoadSpinnerText_1.SPINNER_TEXT; } });


/***/ }),
/* 995 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastNotificationWrapper = exports.ToastNotification = exports.MessageContext = exports.GlobalMessage = void 0;
var GlobalMessage_1 = __webpack_require__(170);
Object.defineProperty(exports, "GlobalMessage", { enumerable: true, get: function () { return __importDefault(GlobalMessage_1).default; } });
var MessageContext_1 = __webpack_require__(222);
Object.defineProperty(exports, "MessageContext", { enumerable: true, get: function () { return __importDefault(MessageContext_1).default; } });
var ToastNotification_1 = __webpack_require__(223);
Object.defineProperty(exports, "ToastNotification", { enumerable: true, get: function () { return __importDefault(ToastNotification_1).default; } });
var ToastNotificationWrapper_1 = __webpack_require__(224);
Object.defineProperty(exports, "ToastNotificationWrapper", { enumerable: true, get: function () { return __importDefault(ToastNotificationWrapper_1).default; } });


/***/ }),
/* 996 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UseConfirmFunctions = exports.useConfirm = void 0;
var useConfirm_1 = __webpack_require__(225);
Object.defineProperty(exports, "useConfirm", { enumerable: true, get: function () { return useConfirm_1.useConfirm; } });
Object.defineProperty(exports, "UseConfirmFunctions", { enumerable: true, get: function () { return useConfirm_1.UseConfirmFunctions; } });


/***/ }),
/* 997 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'MessageContext',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(998)
}
	

/***/ }),
/* 998 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Alerts/MessageContext.tsx': __webpack_require__(222)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst MessageContext$0 = require('./../src/Alerts/MessageContext.tsx');\nconst MessageContext = MessageContext$0.default || (MessageContext$0['MessageContext'] || MessageContext$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 999 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ToastNotification',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Text to be displayed',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                'name': 'ToastNotificationProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                    'name': 'ToastNotificationProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the notification',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                'name': 'ToastNotificationProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                    'name': 'ToastNotificationProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'onClick',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                'name': 'ToastNotificationProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                    'name': 'ToastNotificationProps'
                }],
            'required': true,
            'type': { 'name': 'MouseEventHandler<Element>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'ARIA_LIVE_VARIANT.ASSERTIVE' },
            'description': 'The value of the aria-live property',
            'name': 'ariaLive',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                'name': 'ToastNotificationProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                    'name': 'ToastNotificationProps'
                }],
            'required': false,
            'type': { 'name': 'ARIA_LIVE_VARIANT' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Specifies the ref of the element',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                'name': 'ToastNotificationProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                    'name': 'ToastNotificationProps'
                }],
            'required': false,
            'type': { 'name': 'Ref<HTMLDivElement>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Displays the overall purpose of the notification',
            'name': 'header',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                'name': 'ToastNotificationProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                    'name': 'ToastNotificationProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'alert' },
            'description': 'The aria role of the message displayed. A list of the different role\nvalues that should be used can be found in the w3 docs:\nhttps://www.w3.org/TR/wai-aria-1.1/#live_region_roles\nThe default value role is \'alert.\'',
            'name': 'role',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                'name': 'ToastNotificationProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                    'name': 'ToastNotificationProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'VARIANT.INFO' },
            'description': 'Allows you to pass in a variant property from the VARIANT enum',
            'name': 'variant',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                'name': 'ToastNotificationProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotification.tsx',
                    'name': 'ToastNotificationProps'
                }],
            'required': false,
            'type': { 'name': 'VARIANT' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1000)
}
	

/***/ }),
/* 1000 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Alerts/ToastNotification.tsx': __webpack_require__(223)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ToastNotification$0 = require('./../../src/Alerts/ToastNotification.tsx');\nconst ToastNotification = ToastNotification$0.default || (ToastNotification$0['ToastNotification'] || ToastNotification$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of a Toast Notification in which the `variant` property defaults to the enum value `VARIANT.INFO`.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Button, VARIANT } from \'mark-one\';\n\nconst [isVisible, setIsVisible] = useState(true);\n\n<>\n  {isVisible ?\n    <ToastNotification\n      id="test"\n      header="Upcoming Maintenance"\n      onClick={() => {\n        setIsVisible(false);\n      }}\n    >\n      System maintenance will occur on 9/22/24 between 8-10PM ET. (9/9/24 3:30PM ET).\n    </ToastNotification>\n  :\n    <Button\n      id="toast-notification-example-button-1"\n      onClick={() => {\n        setIsVisible(true);\n      }}\n    >\n      Show Toast Notification\n    </Button>\n  }\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a Toast Notification in which the `variant` property is set to the enum value `VARIANT.DANGER`.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Button, VARIANT } from \'mark-one\';\n\nconst [isVisible, setIsVisible] = useState(true);\n\n<>\n  {isVisible ?\n    <ToastNotification\n      id="test"\n      header="Unauthorized Login Attempt"\n      variant={VARIANT.DANGER}\n      onClick={() => {\n        setIsVisible(false);\n      }}\n    >\n      Unauthorized user Jane H. tried to log in (9/9/24 3:30PM ET).\n    </ToastNotification>\n  :\n    <Button\n      id="toast-notification-example-button-1"\n      onClick={() => {\n        setIsVisible(true);\n      }}\n    >\n      Show Toast Notification\n    </Button>\n  }\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a Toast Notification in which the `variant` property is set to the enum value `VARIANT.PRIMARY`.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Button, VARIANT } from \'mark-one\';\n\nconst [isVisible, setIsVisible] = useState(true);\n\n<>\n  {isVisible ?\n    <ToastNotification\n      id="test"\n      header="System Update"\n      variant={VARIANT.PRIMARY}\n      onClick={() => {\n        setIsVisible(false);\n      }}\n    >\n      The system update has completed successfully (9/9/24 3:30PM ET).\n    </ToastNotification>\n  :\n    <Button\n      id="toast-notification-example-button-1"\n      onClick={() => {\n        setIsVisible(true);\n      }}\n    >\n      Show Toast Notification\n    </Button>\n  }\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1001 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ToastNotificationWrapper',
    'tags': {},
    'description': 'A wrapper for the ToastNotification component to position them at the top\nright of the page.\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Elements to be displayed within the wrapper',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotificationWrapper.tsx',
                'name': 'ToastNotificationWrapperProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotificationWrapper.tsx',
                    'name': 'ToastNotificationWrapperProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'onClick',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotificationWrapper.tsx',
                'name': 'ToastNotificationWrapperProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotificationWrapper.tsx',
                    'name': 'ToastNotificationWrapperProps'
                }],
            'required': true,
            'type': { 'name': 'MouseEventHandler<Element>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 0 },
            'description': 'Indicates how many notifications there are within the wrapper',
            'name': 'numNotifications',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Alerts/ToastNotificationWrapper.tsx',
                'name': 'ToastNotificationWrapperProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Alerts/ToastNotificationWrapper.tsx',
                    'name': 'ToastNotificationWrapperProps'
                }],
            'required': false,
            'type': { 'name': 'number' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1002)
}
	

/***/ }),
/* 1002 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'styled-components': __webpack_require__(4),
    'mark-one': __webpack_require__(9),
    './../../src/Alerts/ToastNotificationWrapper.tsx': __webpack_require__(224)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ToastNotificationWrapper$0 = require('./../../src/Alerts/ToastNotificationWrapper.tsx');\nconst ToastNotificationWrapper = ToastNotificationWrapper$0.default || (ToastNotificationWrapper$0['ToastNotificationWrapper'] || ToastNotificationWrapper$0);", requireInRuntime);

module.exports = [{
        'type': 'code',
        'content': 'import { useState, useRef, useEffect } from \'react\';\nimport styled from \'styled-components\';\nimport { Button, VARIANT, ToastNotification } from \'mark-one\';\n\nconst notificationRef = useRef(null);\n\nconst [isExampleVisible, setIsExampleVisible] = useState(false);\nconst [isInfoToastVisible, setIsInfoToastVisible] = useState(false);\nconst [isDangerToast1Visible, setIsDangerToast1Visible] = useState(false);\nconst [isDangerToast2Visible, setIsDangerToast2Visible] = useState(false);\nconst [isDangerToast3Visible, setIsDangerToast3Visible] = useState(false);\nconst [isDangerToast4Visible, setIsDangerToast4Visible] = useState(false);\nconst [isDangerToast5Visible, setIsDangerToast5Visible] = useState(false);\nconst [isDangerToast6Visible, setIsDangerToast6Visible] = useState(false);\nconst [isDangerToast7Visible, setIsDangerToast7Visible] = useState(false);\nconst [isDangerToast8Visible, setIsDangerToast8Visible] = useState(false);\nconst [isPrimaryToastVisible, setIsPrimaryToastVisible] = useState(false);\nconst [visibleToastCount, setVisibleToastCount] = useState(0);\nconst [userStartedInteracting, setUserStartedInteracting] = useState(false);\n\nuseEffect(() => {\n    const count = [\n      isInfoToastVisible,\n      isDangerToast1Visible,\n      isDangerToast2Visible,\n      isDangerToast3Visible,\n      isDangerToast4Visible,\n      isDangerToast5Visible,\n      isDangerToast6Visible,\n      isDangerToast7Visible,\n      isDangerToast8Visible,\n      isPrimaryToastVisible,\n    ].filter(Boolean).length;\n    setVisibleToastCount(count);\n  }, [\n    isInfoToastVisible,\n    isDangerToast1Visible,\n    isDangerToast2Visible,\n    isDangerToast3Visible,\n    isDangerToast4Visible,\n    isDangerToast5Visible,\n    isDangerToast6Visible,\n    isDangerToast7Visible,\n    isDangerToast8Visible,\n    isPrimaryToastVisible,\n  ]);\n\nconst closeAllNotifications = () => {\n  setIsInfoToastVisible(false);\n  setIsDangerToast1Visible(false);\n  setIsPrimaryToastVisible(false);\n  setIsDangerToast2Visible(false);\n  setIsDangerToast3Visible(false);\n  setIsDangerToast4Visible(false);\n  setIsDangerToast5Visible(false);\n  setIsDangerToast6Visible(false);\n  setIsDangerToast7Visible(false);\n  setIsDangerToast8Visible(false);\n};\n\n<>\n  {!isExampleVisible || (!isInfoToastVisible && !isPrimaryToastVisible && !isDangerToast1Visible && !isDangerToast2Visible && !isDangerToast3Visible && !isDangerToast4Visible && !isDangerToast5Visible && !isDangerToast6Visible && !isDangerToast7Visible && !isDangerToast8Visible && userStartedInteracting) ?\n    <Button\n      id="toast-notification-wrapper-example-button-1"\n      onClick={() => {\n        setTimeout(() => { notificationRef.current.focus() }, 500);\n        setIsExampleVisible(true);\n        setIsInfoToastVisible(true);\n        setIsDangerToast1Visible(true);\n        setIsPrimaryToastVisible(true);\n        setIsDangerToast2Visible(true);\n        setIsDangerToast3Visible(true);\n        setIsDangerToast4Visible(true);\n        setIsDangerToast5Visible(true);\n        setIsDangerToast6Visible(true);\n        setIsDangerToast7Visible(true);\n        setIsDangerToast8Visible(true);\n        setUserStartedInteracting(true);\n      }}\n    >\n      Show Toast Notifications\n    </Button>\n    :\n    <>\n      <Button\n        id="toast-notification-wrapper-example-button-2"\n        variant={VARIANT.PRIMARY}\n        onClick={() => {\n          setIsExampleVisible(false);\n          closeAllNotifications();\n        }}\n      >\n        Hide Toast Notifications\n      </Button>\n      <ToastNotificationWrapper\n        numNotifications={visibleToastCount}\n        onClick={() => {\n          setIsExampleVisible(false);\n          closeAllNotifications();\n        }}\n      >\n        {isInfoToastVisible &&\n          <ToastNotification\n            id="toast-notification-wrapper-example-toast-1"\n            header="Upcoming Maintenance"\n            forwardRef={notificationRef}\n            onClick={function() {\n              setIsInfoToastVisible(false);\n            }}\n          >\n            System maintenance will occur on 9/22/24 between 8-10PM ET. (9/9/24 3:30PM ET).\n          </ToastNotification>\n        }\n        {isDangerToast1Visible &&\n          <ToastNotification\n            id="toast-notification-wrapper-example-toast-2"\n            header="Unauthorized Login Attempt"\n            variant={VARIANT.DANGER}\n            onClick={function() {\n              setIsDangerToast1Visible(false);\n            }}\n          >\n            Unauthorized user John H. tried to log in (9/9/24 2:11PM ET).\n          </ToastNotification>\n        }\n        {isPrimaryToastVisible &&\n          <ToastNotification\n            id="toast-notification-wrapper-example-toast-3"\n            header="System Update"\n            variant={VARIANT.PRIMARY}\n            onClick={function() {\n              setIsPrimaryToastVisible(false);\n            }}\n          >\n            The system update has completed successfully (9/9/24 2:09PM ET).\n          </ToastNotification>\n        }\n        {isDangerToast2Visible &&\n          <ToastNotification\n            id="toast-notification-wrapper-example-toast-4"\n            header="Unauthorized Login Attempt"\n            variant={VARIANT.DANGER}\n            onClick={function() {\n              setIsDangerToast2Visible(false);\n            }}\n          >\n            Unauthorized user Jane H. tried to log in (9/9/24 2:08PM ET).\n          </ToastNotification>\n        }\n        {isDangerToast3Visible &&\n          <ToastNotification\n            id="toast-notification-wrapper-example-toast-5"\n            header="Unauthorized Login Attempt"\n            variant={VARIANT.DANGER}\n            onClick={function() {\n              setIsDangerToast3Visible(false);\n            }}\n          >\n            Unauthorized user John H. tried to log in (9/9/24 2:03PM ET).\n          </ToastNotification>\n        }\n        {isDangerToast4Visible &&\n          <ToastNotification\n            id="toast-notification-wrapper-example-toast-6"\n            header="Unauthorized Login Attempt"\n            variant={VARIANT.DANGER}\n            onClick={function() {\n              setIsDangerToast4Visible(false);\n            }}\n          >\n            Unauthorized user John H. tried to log in (9/9/24 1:55PM ET).\n          </ToastNotification>\n        }\n        {isDangerToast5Visible &&\n          <ToastNotification\n            id="toast-notification-wrapper-example-toast-7"\n            header="Unauthorized Login Attempt"\n            variant={VARIANT.DANGER}\n            onClick={function() {\n              setIsDangerToast5Visible(false);\n            }}\n          >\n            Unauthorized user Jane H. tried to log in (9/9/24 1:48PM ET).\n          </ToastNotification>\n        }\n        {isDangerToast6Visible &&\n          <ToastNotification\n            id="toast-notification-wrapper-example-toast-8"\n            header="Unauthorized Login Attempt"\n            variant={VARIANT.DANGER}\n            onClick={function() {\n              setIsDangerToast6Visible(false);\n            }}\n          >\n            Unauthorized user Jane H. tried to log in (9/9/24 1:40PM ET).\n          </ToastNotification>\n        }\n        {isDangerToast7Visible &&\n          <ToastNotification\n            id="toast-notification-wrapper-example-toast-9"\n            header="Unauthorized Login Attempt"\n            variant={VARIANT.DANGER}\n            onClick={function() {\n              setIsDangerToast7Visible(false);\n            }}\n          >\n            Unauthorized user John H. tried to log in (9/9/24 1:37PM ET).\n          </ToastNotification>\n        }\n        {isDangerToast8Visible &&\n          <ToastNotification\n            id="toast-notification-wrapper-example-toast-10"\n            header="Unauthorized Login Attempt"\n            variant={VARIANT.DANGER}\n            onClick={function() {\n              setIsDangerToast8Visible(false);\n            }}\n          >\n            Unauthorized user Jane H. tried to log in (9/9/24 1:15PM ET).\n          </ToastNotification>\n        }\n      </ToastNotificationWrapper>\n    </>\n  }\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }]
	

/***/ }),
/* 1003 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'BorderlessButton',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the Font Awesome Icon(s)',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                'name': 'BorderlessButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                    'name': 'BorderlessButtonProps'
                }],
            'required': true,
            'type': { 'name': 'ReactElement<FontAwesomeIconProps, string | JSXElementConstructor<any>>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the button',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                'name': 'BorderlessButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                    'name': 'BorderlessButtonProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'onClick',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                'name': 'BorderlessButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                    'name': 'BorderlessButtonProps'
                }],
            'required': true,
            'type': { 'name': 'MouseEventHandler<Element>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the alt text for screen readers',
            'name': 'alt',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                    'name': 'MarkOneProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, button won\'t fire',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                'name': 'BorderlessButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                    'name': 'BorderlessButtonProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref of the element',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                    'name': 'MarkOneProps'
                }],
            'required': false,
            'type': { 'name': 'Ref<HTMLButtonElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Corresponds to HTML attribute tabindex',
            'name': 'tabIndex',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                    'name': 'MarkOneProps'
                }],
            'required': false,
            'type': { 'name': 'number' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'VARIANT.BASE' },
            'description': 'Allows you to pass in a variant property from the VARIANT enum',
            'name': 'variant',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                'name': 'BorderlessButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                    'name': 'BorderlessButtonProps'
                }],
            'required': false,
            'type': { 'name': 'VARIANT' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1004)
}
	

/***/ }),
/* 1004 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    '@fortawesome/react-fontawesome': __webpack_require__(64),
    '@fortawesome/free-solid-svg-icons': __webpack_require__(65),
    'react': __webpack_require__(0),
    './../../src/Buttons/BorderlessButton.tsx': __webpack_require__(171)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst BorderlessButton$0 = require('./../../src/Buttons/BorderlessButton.tsx');\nconst BorderlessButton = BorderlessButton$0.default || (BorderlessButton$0['BorderlessButton'] || BorderlessButton$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of a borderless button in which the `variant` property defaults to the enum value `VARIANT.BASE`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faArrowUp } from \'@fortawesome/free-solid-svg-icons\';\n\n<BorderlessButton\n  id="borderlessButton-example-borderlessButton-1"\n  onClick={function() {\n    alert(\'You clicked the borderless button in which variant equals VARIANT.BASE\')\n  }}\n  variant={VARIANT.BASE}\n>\n  <FontAwesomeIcon icon={faArrowUp} size="lg" />\n</BorderlessButton>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.PRIMARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faEnvelope } from \'@fortawesome/free-solid-svg-icons\';\n\n<BorderlessButton\n  id="borderlessButton-example-borderlessButton-2"\n  onClick={function() {\n    alert(\'You clicked the borderless button in which variant equals VARIANT.PRIMARY\')\n  }}\n  variant={VARIANT.PRIMARY}\n>\n  <FontAwesomeIcon icon={faEnvelope} size="lg" />\n</BorderlessButton>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.SECONDARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faTimes } from \'@fortawesome/free-solid-svg-icons\';\n\n<BorderlessButton\n  id="borderlessButton-example-borderlessButton-3"\n  onClick={function() {\n    alert(\'You clicked the borderless button in which variant equals VARIANT.SECONDARY\')\n  }}\n  variant={VARIANT.SECONDARY}\n>\n  <FontAwesomeIcon icon={faTimes} size="lg" />\n</BorderlessButton>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.INFO`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faQuestion } from \'@fortawesome/free-solid-svg-icons\';\n\n<BorderlessButton\n  id="borderlessButton-example-borderlessButton-4"\n  onClick={function() {\n    alert(\'You clicked the borderless button in which variant equals VARIANT.INFO\')\n  }}\n  variant={VARIANT.INFO}\n>\n  <FontAwesomeIcon icon={faQuestion} size="lg" />\n</BorderlessButton>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.DANGER`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faTrash } from \'@fortawesome/free-solid-svg-icons\';\n\n<BorderlessButton\n  id="borderlessButton-example-borderlessButton-5"\n  onClick={function() {\n    alert(\'You clicked the borderless button in which variant equals VARIANT.DANGER\')\n  }}\n  variant={VARIANT.DANGER}\n>\n  <FontAwesomeIcon icon={faTrash} size="lg" />\n</BorderlessButton>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the `forwardRef`\n\nRef example: The optional `forwardRef` property is set. When the primary themed button is clicked, the focus shifts to the borderless button.'
    },
    {
        'type': 'code',
        'content': 'import {\n  useState,\n  useRef,\n} from \'react\';\nimport {\n  Button,\n  VARIANT,\n  } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faTrash } from \'@fortawesome/free-solid-svg-icons\';\n\nconst BorderlessButtonRefExample = () => {\n  const ref = useRef(null);\n  const [value, setValue] = useState(\'\');\n  const onButtonClick = () => {\n    ref.current.focus();\n  }\n  return (\n    <>\n    <Button\n      id="borderlessButton-example-button-1"\n      onClick={onButtonClick}\n      variant={VARIANT.PRIMARY}\n    >\n      Focus the Borderless Button\n    </Button>\n    <BorderlessButton\n      id="borderlessButton-example-borderlessButton-6"\n      onClick={function() {\n        alert(\'You clicked the borderless button in which variant equals VARIANT.DANGER\')\n      }}\n      variant={VARIANT.DANGER}\n      forwardRef={ref}\n      alt="testing delete"\n    >\n      <FontAwesomeIcon icon={faTrash} size="lg" />\n    </BorderlessButton>\n    </>\n  );\n};\n<BorderlessButtonRefExample />',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1005 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Button',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The id of the button',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                    'name': 'ButtonProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'onClick',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                    'name': 'ButtonProps'
                }],
            'required': true,
            'type': { 'name': 'MouseEventHandler<Element> | (() => Promise<void>)' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the alt text for screen readers',
            'name': 'alt',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                    'name': 'MarkOneProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Text or components to be displayed on the button',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                    'name': 'ButtonProps'
                }],
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Pass through the className to allow wrapping with styled()',
            'name': 'className',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                    'name': 'ButtonProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, button won\'t fire',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                    'name': 'ButtonProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Pass through the form to allow the button to bind with that form',
            'name': 'form',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                    'name': 'ButtonProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Specifies the ref of the element',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                    'name': 'ButtonProps'
                }],
            'required': false,
            'type': { 'name': 'Ref<HTMLButtonElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Corresponds to HTML attribute tabindex',
            'name': 'tabIndex',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                    'name': 'MarkOneProps'
                }],
            'required': false,
            'type': { 'name': 'number' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'button' },
            'description': 'Specifies the button type',
            'name': 'type',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                    'name': 'ButtonProps'
                }],
            'required': false,
            'type': { 'name': '"submit" | "reset" | "button"' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'VARIANT.BASE' },
            'description': 'Allows you to pass in a variant property from the VARIANT enum',
            'name': 'variant',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                    'name': 'ButtonProps'
                }],
            'required': false,
            'type': { 'name': 'VARIANT' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1006)
}
	

/***/ }),
/* 1006 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Buttons/Button.tsx': __webpack_require__(87)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Button$0 = require('./../../src/Buttons/Button.tsx');\nconst Button = Button$0.default || (Button$0['Button'] || Button$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of a basic button in which the `variant` property defaults to the enum value `VARIANT.BASE`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Button\n  id="button-example-button-1"\n  onClick={function() {\n    alert(\'You clicked the button\')\n  }}\n  variant={VARIANT.BASE}\n>\n  Click Me!\n</Button>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a primary button in which the `variant` property is set to `VARIANT.PRIMARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Button\n  id="button-example-button-2"\n  onClick={function() {\n    alert(\'You clicked the primary button\')\n  }}\n  variant={VARIANT.PRIMARY}\n>\n  Click Me!\n</Button>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a secondary button in which the `variant` property is set to `VARIANT.SECONDARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Button\n  id="button-example-button-3"\n  onClick={function() {\n    alert(\'You clicked the secondary button\')\n  }}\n  variant={VARIANT.SECONDARY}\n>\n  Click Me!\n</Button>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of an info button in which the `variant` property is set to `VARIANT.INFO`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Button\n  id="button-example-button-4"\n  onClick={function() {\n    alert(\'You clicked the info button\')\n  }}\n  variant={VARIANT.INFO}\n>\n  Click Me!\n</Button>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a danger button in which the `variant` property is set to `VARIANT.DANGER`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Button\n  id="button-example-button-5"\n  onClick={function() {\n    alert(\'You clicked the danger button\')\n  }}\n  variant={VARIANT.DANGER}\n>\n  Click Me!\n</Button>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a `form` prop for `button`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Button, TextInput, VARIANT } from \'mark-one\';\n\nconst SimpleForm = () => {\n  \n  const [state, setState] = useState({ name: \'\' });\n  \n  const handleChange = ({ target }) => {\n    setState({ name: target.value });\n  };\n  \n  const handleSubmit = (event) => {\n    event.preventDefault();\n    alert(\'Your name is: \' + state.name);\n  };\n  \n  return(\n    <div>\n      <form id="simpleForm">\n        <TextInput\n           id="name"\n           name="name"\n           label="Name:"\n           onChange={handleChange}\n           value={state.name}\n         />\n      </form>\n\n      <Button\n        id="button-example-button-6"\n        variant={VARIANT.DEFAULT} \n        onClick={handleSubmit}\n        form="simpleForm">Submit</Button>\n\n    </div>\n  );\n}\n\n<SimpleForm />',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the `forwardRef`\n\nRef example: The optional `forwardRef` property is set. When the primary themed button is clicked, the focus shifts to the borderless button.'
    },
    {
        'type': 'code',
        'content': 'import {\n  useState,\n  useRef,\n} from \'react\';\nimport { VARIANT } from \'mark-one\';\n\nconst ButtonRefExample = () => {\n  const ref = useRef(null);\n  const onButtonClick = () => {\n    ref.current.focus();\n  }\n  return (\n    <>\n    <div>\n    <Button\n      id="button-example-button-7"\n      onClick={onButtonClick}\n      variant={VARIANT.PRIMARY}\n    >\n      Focus the Other Button\n    </Button>\n    </div>\n    <div>\n    <Button\n      id="button-example-button-8"\n      onClick={function() {\n        alert(\'You clicked the button in which variant equals VARIANT.DANGER\')\n      }}\n      variant={VARIANT.DANGER}\n      forwardRef={ref}\n    >\n      Other Button\n    </Button>\n    </div>\n    </>\n  );\n};\n<ButtonRefExample />',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1007 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ButtonDropdownMenu',
    'tags': {},
    'description': 'A component that allows users to specify a Font Awesome icon to be displayed\nin the button and options within the dropdown. When an option is clicked, the\nvalue that was selected is passed to the onChange function and the dropdown\nmenu collapses.\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the alt text for screen readers',
            'name': 'alt',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                    'name': 'ButtonDropdownProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Our ButtonDropdownMenuItem functional component serves as the children for ButtonDropdownMenu',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                    'name': 'ButtonDropdownProps'
                }],
            'required': true,
            'type': { 'name': 'ButtonDropdownMenuItem | ButtonDropdownMenuItem[]' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the button',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                    'name': 'ButtonDropdownProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the text or Font Awesome Icon displayed on the button',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                    'name': 'ButtonDropdownProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Allows user to pass in a variant property from the VARIANT enum',
            'name': 'variant',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                    'name': 'ButtonDropdownProps'
                }],
            'required': true,
            'type': { 'name': 'VARIANT' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Specifies the ref of the element',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                    'name': 'ButtonDropdownProps'
                }],
            'required': false,
            'type': { 'name': 'Ref<HTMLButtonElement>' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1008)
}
	

/***/ }),
/* 1008 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    '@fortawesome/react-fontawesome': __webpack_require__(64),
    '@fortawesome/free-solid-svg-icons': __webpack_require__(65),
    'mark-one': __webpack_require__(9),
    './../../src/Buttons/ButtonDropdownMenu.tsx': __webpack_require__(172)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ButtonDropdownMenu$0 = require('./../../src/Buttons/ButtonDropdownMenu.tsx');\nconst ButtonDropdownMenu = ButtonDropdownMenu$0.default || (ButtonDropdownMenu$0['ButtonDropdownMenu'] || ButtonDropdownMenu$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of the `ButtonDropdownMenu` component being used to outline timeslots. When the user clicks the button, a menu dropdown appears containing timeslot options. If the user clicks outside the menu, selects an item in the menu, or clicks the button that opened the menu a second time, the menu will minimize. Users can determine behavior when an option in the dropdown is selected.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faClock } from \'@fortawesome/free-solid-svg-icons\';\nimport { ButtonDropdownMenuItem } from \'mark-one\';\n\nconst times = [\n  { \n    startTime: \'09:00\',\n    endTime: \'10:00\',\n    value: \'09:00-10:00\',\n    label: \'9:00AM-10:00AM\',\n  },\n  {\n    startTime: \'10:00\',\n    endTime: \'11:00\',\n    value: \'10:00-11:00\',\n    label: \'10:00AM-11:00AM\',\n  },\n  {\n    startTime: \'11:00\',\n    endTime: \'12:00\',\n    value: \'11:00-12:00\',\n    label: \'11:00AM-12:00PM\',\n  },\n  {\n    startTime: \'12:00\',\n    endTime: \'13:00\',\n    value: \'12:00-13:00\',\n    label: \'12:00PM-1:00PM\',\n  },\n  {\n    startTime: \'13:00\',\n    endTime: \'14:00\',\n    value: \'13:00-14:00\',\n    label: \'1:00PM-2:00PM\',\n  },\n  ];\n\n<ButtonDropdownMenu\n  id="buttonDropdownMenu-example-buttonDropdownMenu-1"\n  alt="Timeslot button dropdown"\n  label={<FontAwesomeIcon icon={faClock} size="sm" />}\n>\n  {times.map(({ label, startTime, endTime }) => (\n    <ButtonDropdownMenuItem\n      onClick={function () {\n        alert(\'You chose \' + startTime + \'-\' + endTime);\n      }}\n      key={label}\n    >\n      {label}\n    </ButtonDropdownMenuItem>\n  ))}\n</ButtonDropdownMenu>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1009 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ButtonDropdownMenuItem',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The label of the button dropdown menu item',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenuItem.tsx',
                'name': 'ButtonDropdownMenuItemProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenuItem.tsx',
                    'name': 'ButtonDropdownMenuItemProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'onClick',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenuItem.tsx',
                'name': 'ButtonDropdownMenuItemProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenuItem.tsx',
                    'name': 'ButtonDropdownMenuItemProps'
                }],
            'required': true,
            'type': { 'name': 'MouseEventHandler<Element>' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1010)
}
	

/***/ }),
/* 1010 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Buttons/ButtonDropdownMenuItem.tsx': __webpack_require__(177)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ButtonDropdownMenuItem$0 = require('./../src/Buttons/ButtonDropdownMenuItem.tsx');\nconst ButtonDropdownMenuItem = ButtonDropdownMenuItem$0.default || (ButtonDropdownMenuItem$0['ButtonDropdownMenuItem'] || ButtonDropdownMenuItem$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1011 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Checkbox',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The id of the label tied to the checkbox',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'NativeCheckboxProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the label text',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'CheckboxProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on change event',
            'name': 'onChange',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'NativeCheckboxProps'
                }],
            'required': true,
            'type': { 'name': 'ChangeEventHandler<Element>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Specifies whether box is checked',
            'name': 'checked',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'NativeCheckboxProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, checkbox will be disabled',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'NativeCheckboxProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'The body of the error message, if applicable',
            'name': 'errorMessage',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'CheckboxProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Specifies the ref of the checkbox',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'CheckboxProps'
                }],
            'required': false,
            'type': { 'name': 'Ref<HTMLInputElement>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, omit the space for the error field',
            'name': 'hideError',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'CheckboxProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'If true, label will be visible',
            'name': 'isLabelVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'CheckboxProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, the checkbox is required to submit the form',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'CheckboxProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.RIGHT' },
            'description': 'Allows you to pass in a label position property from the POSITION enum',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'CheckboxProps'
                }],
            'required': false,
            'type': { 'name': 'CheckLabelPosition' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'The name of the checkbox',
            'name': 'name',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'NativeCheckboxProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Represents the value of the checkbox',
            'name': 'value',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                    'name': 'NativeCheckboxProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1012)
}
	

/***/ }),
/* 1012 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Forms/Checkbox.tsx': __webpack_require__(200)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Checkbox$0 = require('./../../src/Forms/Checkbox.tsx');\nconst Checkbox = Checkbox$0.default || (Checkbox$0['Checkbox'] || Checkbox$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `Fieldset` component should be used in conjunction with the `Checkbox` component for accessibility. The following `Checkbox` examples include non visible `Fieldset` components.\n\nLabel Position example: The optional `labelPosition` prop defaults to `POSITION.RIGHT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [value, setValue] = useState(false);\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      id="checkbox-example-checkbox-1"\n      checked={value}\n      label="Undergraduate"\n      onChange={(event) => {\n        setValue(!value);\n      }}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label Position example: The optional `labelPosition` prop is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(false);\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      id="checkbox-example-checkbox-2"\n      checked={value}\n      label="Undergraduate"\n      labelPosition={POSITION.LEFT}\n      onChange={(event) => {\n        setValue(!value);\n      }}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop defaults to `POSITION.RIGHT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [value, setValue] = useState(false);\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      id="checkbox-example-checkbox-3"\n      checked={value}\n      label="I agree to the terms and conditions."\n      onChange={(event) => {\n        setValue(!value);\n      }}\n      errorMessage="Please select this checkbox before proceeding."\n      isRequired\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(false);\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      id="checkbox-example-checkbox-4"\n      checked={value}\n      label="I agree to the terms and conditions."\n      labelPosition={POSITION.LEFT}\n      onChange={(event) => {\n        setValue(!value);\n      }}\n      errorMessage="Please select this checkbox before proceeding."\n      isRequired\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled example: The optional `disabled` prop is set to true.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      id="checkbox-example-checkbox-5"\n      label="Undergraduate"\n      disabled\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled and Checked example: The optional `disabled` and `checked` props are set to true.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      id="checkbox-example-checkbox-6"\n      label="Undergraduate"\n      disabled\n      checked\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1013 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'CheckLabel',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The native and custom checkboxes associated with the label along with the error, if any',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                    'name': 'LabelProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode[]' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the field tied to this label',
            'name': 'htmlFor',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                    'name': 'LabelProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the label text',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                    'name': 'LabelProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Used to style label text in a different style if disabled is true',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                    'name': 'LabelProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, hide the space allocated for the error message',
            'name': 'hideError',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                    'name': 'LabelProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'If true, label will be visible',
            'name': 'isLabelVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                    'name': 'LabelProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, the label will be styled to indicate that it labels a required field',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                    'name': 'LabelProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.LEFT' },
            'description': 'Allows you to pass in a label position property from the POSITION enum',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                    'name': 'LabelProps'
                }],
            'required': false,
            'type': { 'name': 'CheckLabelPosition' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1014)
}
	

/***/ }),
/* 1014 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Forms/CheckLabel.tsx': __webpack_require__(89)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst CheckLabel$0 = require('./../../src/Forms/CheckLabel.tsx');\nconst CheckLabel = CheckLabel$0.default || (CheckLabel$0['CheckLabel'] || CheckLabel$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `CheckLabel` component is used by the `RadioButton` and `Checkbox` components, while the `InputLabel` component is used by the `TextInput` and `Dropdown` components. These label variations were created to align input fields when using various form elements in tandem.\n\nAligning `RadioButton` and `Dropdown` fields example: The labelPosition for `RadioButton` is `POSITION.RIGHT`, and the `labelPosition` for the `Dropdown` is `POSITION.TOP`.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, RadioButton, Dropdown, POSITION } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\nconst [value, setValue] = useState(\'fall\');\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <RadioButton\n      id="checkLabel-example-radioButton-1"\n      label="Foo"\n      value="foo"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'foo\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n      labelPosition={POSITION.RIGHT}\n    />\n    <RadioButton\n      id="checkLabel-example-radioButton-2"\n      label="Bar"\n      value="bar"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'bar\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n      labelPosition={POSITION.RIGHT}\n    />\n    <Dropdown\n      options={[\n        {\n          value: \'all\',\n          label: \'All\',\n        },\n        {\n          value: \'fall\',\n          label: \'Fall\',\n        },\n        {\n          value: \'spring\',\n          label: \'Spring\',\n        },\n      ]}\n      value={value}\n      id="semesters"\n      name="semesters"\n      onChange={function(event){\n        setValue(event.target.value);\n        alert(\'You changed the selection to \' + event.target.value);\n      }}\n      label="Semester"\n      labelPosition={POSITION.TOP}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Aligning `RadioButton` and `Dropdown` fields example: The labelPosition for `RadioButton` and `Dropdown` is `POSITION.LEFT`.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, RadioButton, Dropdown, POSITION } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\nconst [value, setValue] = useState(\'fall\');\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <RadioButton\n      id="checkLabel-example-radioButton-3"\n      label="Foo"\n      value="foo"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'foo\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n      labelPosition={POSITION.LEFT}\n    />\n    <RadioButton\n      id="checkLabel-example-radioButton-4"\n      label="Bar"\n      value="bar"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'bar\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n      labelPosition={POSITION.LEFT}\n    />\n    <Dropdown\n      options={[\n        {\n          value: \'all\',\n          label: \'All\',\n        },\n        {\n          value: \'fall\',\n          label: \'Fall\',\n        },\n        {\n          value: \'spring\',\n          label: \'Spring\',\n        },\n      ]}\n      value={value}\n      id="semesters"\n      name="semesters"\n      onChange={function(event){\n        setValue(event.target.value);\n        alert(\'You changed the selection to \' + event.target.value);\n      }}\n      label="Semester"\n      labelPosition={POSITION.LEFT}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1015 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Combobox',
    'tags': {},
    'description': 'An autocompleting typeahead search box that allows the user to choose one\nentry from a list of options\n\nThe list of options will be filtered by the user\'s input, and will appear in\nthe dropdown box when the user starts typing. One of the options can be\nselected with the arrows/enter key, or by clicking with a mouse. The user\ncan also choose a value directly by clicking on the menu button, bypassing\nthe need to type\n\nThis is intended to be used as a controlled component, where the selected\noption will be stored in an external state value. Only a value selected from\nthe list will be passed to that state value; users cannot enter arbitrary\nvalues\n\nThe internal state and many of the accessibility features are implemented\nwith the downshift library\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The option selected by the user. This is intended to be used as a\ncontrolled component, where this value will be provided by an external\nstate',
            'name': 'currentValue',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': true,
            'type': { 'name': 'ComboboxOption' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'A description of the input. This is required for accessibility reasons,\nbut if you don\'t want it displayed visually you can set the isLabelVisible\nvalue to false',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'A handler to be called when the user selects an option. This is intended\nto be used as a controlled component, so this function should update the\nexternal state passed into currentValue',
            'name': 'onOptionSelected',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': true,
            'type': { 'name': '(changes: UseComboboxStateChange<ComboboxOption>) => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The list of items that should be selectable in the combobox',
            'name': 'options',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': true,
            'type': { 'name': 'ComboboxOption[]' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'A validation message displayed under the input',
            'name': 'errorMessage',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '(option, inputValue) => (option.label\n    .toLowerCase()\n    .startsWith(\n      inputValue.toLowerCase()\n    ))' },
            'description': 'The function used to filter the list of results based on the user input.\nBy default, it will perform a case-insensitive match of the user input\nagainst the beginning of the option\'s "label" value\n\nThe function passed here will be called inside of a `Array.filter()` call\non the complete list of options, so it should return true if the option\nshould be included as a valid result, and false if not',
            'name': 'filterFunction',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': false,
            'type': { 'name': '(option: ComboboxOption, inputValue: string) => boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Specifies the ref applied to the text input',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': false,
            'type': { 'name': 'Ref<HTMLInputElement>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Whether space for a validation error should be rendered, even if there is\nno value in errorMessage',
            'name': 'hideError',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'If false, hide the visual label but keep it rendered in the DOM for\naccessibility',
            'name': 'isLabelVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Whether to the mark the form element as a required field',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.TOP' },
            'description': 'Whether to render the label to the left of the input, or above',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': false,
            'type': { 'name': 'InputLabelPosition' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Temporary text that will be displayed in the input before the user types\nanything',
            'name': 'placeholder',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                    'name': 'ComboboxProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1016)
}
	

/***/ }),
/* 1016 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Forms/Combobox.tsx': __webpack_require__(201)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Combobox$0 = require('./../../src/Forms/Combobox.tsx');\nconst Combobox = Combobox$0.default || (Combobox$0['Combobox'] || Combobox$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `Combobox` is a typeahead-style autocomplete input, where the user can choose from among a number of different options by either clicking a button to show the whole list, or by starting to type the value they want and letting the autocomplete take over. The actual value stored in state will only update with one of the defined options; it does not allow for specifying arbitrary values.\n\nUnder the hood we\'re using [the Downshift library][downshift], which handles the state updates and accessibility features out of the box. However, we\'re intending it to be used as a controlled component, so the `currentValue` needs to be managed by a parent-level state value.\n\n[downshift]: https://www.downshift-js.com/\n\n### The standard Combobox'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst options = [\n  {\n    label: \'Apples\',\n    value: \'a\',\n  },\n  {\n    label: \'Bananas\',\n    value: \'b\',\n  },\n  {\n    label: \'Cucumbers\',\n    value: \'c\',\n  },\n  {\n    label: \'Donuts\',\n    value: \'d\',\n  }\n];\n\nconst [valueOne, setValueOne] = useState(null);\n\n<div>\n  <Combobox\n    isLabelVisible={true}\n    options={options}\n    label="Food"\n    currentValue={valueOne}\n    onOptionSelected={({ selectedItem }) => {setValueOne(selectedItem)}}\n  />\n  <p>\n    You chose: <strong>{valueOne ? valueOne.label : \'\'}</strong>\n  </p>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the label above the box:'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst options = [\n  {\n    label: \'Apples\',\n    value: \'a\',\n  },\n  {\n    label: \'Bananas\',\n    value: \'b\',\n  },\n  {\n    label: \'Cucumbers\',\n    value: \'c\',\n  },\n  {\n    label: \'Donuts\',\n    value: \'d\',\n  }\n];\n\nconst [valueTwo, setValueTwo] = useState(null);\n\n<div>\n  <Combobox\n    labelPosition={POSITION.TOP}\n    options={options}\n    label="Food"\n    currentValue={valueTwo}\n    onOptionSelected={({ selectedItem }) => {setValueTwo(selectedItem)}}\n  />\n\n  <p>\n    You chose: <strong>{valueTwo ? valueTwo.label : \'\'}</strong>\n  </p>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the label and error hidden'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst options = [\n  {\n    label: \'Apples\',\n    value: \'a\',\n  },\n  {\n    label: \'Bananas\',\n    value: \'b\',\n  },\n  {\n    label: \'Cucumbers\',\n    value: \'c\',\n  },\n  {\n    label: \'Donuts\',\n    value: \'d\',\n  }\n];\n\nconst [valueThree, setValueThree] = useState(null);\n\n<div>\n  <Combobox\n    isLabelVisible={false}\n    hideError={true}\n    options={options}\n    label="Food"\n    placeholder="Choose a Food"\n    currentValue={valueThree}\n    onOptionSelected={({ selectedItem }) => {setValueThree(selectedItem)}}\n  />\n  <p>\n    You chose: <strong>{valueThree ? valueThree.label : \'\'}</strong>\n  </p>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With an error message'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst options = [\n  {\n    label: \'Apples\',\n    value: \'a\',\n  },\n  {\n    label: \'Bananas\',\n    value: \'b\',\n  },\n  {\n    label: \'Cucumbers\',\n    value: \'c\',\n  },\n  {\n    label: \'Donuts\',\n    value: \'d\',\n  }\n];\n\nconst [valueFour, setValueFour] = useState(null);\n\n<div>\n  <Combobox\n    options={options}\n    label="Food"\n    isRequired\n    errorMessage={!valueFour ? \'You must select a valid option\' : null}\n    currentValue={valueFour}\n    onOptionSelected={({ selectedItem }) => {setValueFour(selectedItem)}}\n  />\n\n  <p>\n    You chose: <strong>{valueFour ? valueFour.label : \'\'}</strong>\n  </p>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Customizing the filter function\n\nBy default, the Combobox will perform a case-insensitive match of the user\'s input against the beginning of the `"label"` value for each option in the list. This can be customized with the `filterFunction` prop, which accepts a function that takes an option object and search string, and returns true if that option should be shown in the dropdown menu.\n\nNote that this function will only affect the options *shown in the menu*, it has no direct impact on the value *selected by the user*.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst options = [\n  {\n    label: \'Apples\',\n    value: \'a\',\n  },\n  {\n    label: \'Granny Smith Apples\',\n    value: \'g\',\n  },\n  {\n    label: \'Honeycrisp Apples\',\n    value: \'h\',\n  },\n  {\n    label: \'Macoun Apples\',\n    value: \'m\',\n  },\n  {\n    label: \'Red Delicious Apples\',\n    value: \'r\',\n  },\n  {\n    label: \'Bananas\',\n    value: \'b\',\n  },\n  {\n    label: \'Cucumbers\',\n    value: \'c\',\n  },\n  {\n    label: \'Donuts\',\n    value: \'d\',\n  },\n];\n\nconst [valueFive, setValueFive] = useState(null);\nconst [valueSix, setValueSix] = useState(null);\n\n<div>\n  <div>\n    <Combobox\n      options={options}\n      label="Food (Default Search)"\n      currentValue={valueFive}\n      onOptionSelected={({ selectedItem }) => {setValueOne(selectedItem)}}\n    />\n\n    <p>\n      You chose: <strong>{valueFive ? valueFive.label : \'\'}</strong>\n    </p>\n  </div>\n  <div>\n    <Combobox\n      options={options}\n      label="Food (Custom Regex Search)"\n      currentValue={valueSix}\n      onOptionSelected={({ selectedItem }) => {setValueOne(selectedItem)}}\n      filterFunction={(option, inputValue) => {\n        const re = new RegExp(inputValue, \'i\');\n        return re.test(option.label);\n      }}\n    />\n\n    <p>\n      You chose: <strong>{valueSix ? valueSix.label : \'\'}</strong>\n    </p>\n  </div>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1017 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Dropdown',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The id tied to this dropdown field',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the label text',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The name of the dropdown',
            'name': 'name',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on change event',
            'name': 'onChange',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': true,
            'type': { 'name': 'ChangeEventHandler<Element>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'An array of objects with the properties specified through DropdownOptions',
            'name': 'options',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': true,
            'type': { 'name': 'DropdownOptionProps[]' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'The dropdown value selected by default',
            'name': 'defaultValue',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Specifies whether the dropdown is disabled',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'The body of the error message, if applicable',
            'name': 'errorMessage',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Specifies the ref of the dropdown',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': false,
            'type': { 'name': 'Ref<HTMLSelectElement>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, hide the error msg and its style',
            'name': 'hideError',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'If true, label will be visible',
            'name': 'isLabelVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, the dropdown is required to submit the form',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.TOP' },
            'description': 'Allows you to pass in a label position property from the POSITION enum',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': false,
            'type': { 'name': 'InputLabelPosition' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'The currently selected dropdown value',
            'name': 'value',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                    'name': 'DropdownProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1018)
}
	

/***/ }),
/* 1018 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Forms/Dropdown.tsx': __webpack_require__(199)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Dropdown$0 = require('./../../src/Forms/Dropdown.tsx');\nconst Dropdown = Dropdown$0.default || (Dropdown$0['Dropdown'] || Dropdown$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Label example: The optional prop `labelPosition` defaults to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The prop `labelPosition` is set to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  labelPosition={POSITION.TOP}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The prop `labelPosition` is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  labelPosition={POSITION.LEFT}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The `isLabelVisible` prop is set to `false.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="isLabelVisibleDropExample"\n  name="isLabelVisibleDropExample"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  isLabelVisible={false}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled property example: The \'Summer\' selection is disabled. The optional `labelPosition` prop defaults to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n    {\n      value: \'summer\',\n      label: \'Summer\',\n      disabled: true,\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` prop is not set.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\nimport { POSITION } from \'mark-one\';\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  labelPosition={POSITION.TOP}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` prop is set, and the `labelPosition` prop defaults to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  errorMessage="Error: Please select a semester."\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` prop is set, and the `labelPosition` prop is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\nimport { POSITION } from \'mark-one\';\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  labelPosition={POSITION.LEFT}\n  errorMessage="Error: Please select a semester."\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error message example: The optional `errorMessage` prop is set, and the\n`hideError` prop is set while `isLabelVisible` is set to `false`,\nwhich removes the errorMessage and its style.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="hideErrorDropExample"\n  name="hideErrorDropExample"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  hideError={true}\n  isLabelVisible={false}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop defaults to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  isRequired\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\nimport { POSITION } from \'mark-one\';\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  labelPosition={POSITION.LEFT}\n  isRequired\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Ref example: The optional `forwardRef` property is set. When the test button is clicked, the focus shifts to the dropdown.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef } from \'react\';\nimport { Button, VARIANT } from \'mark-one\';\n\nconst ref = useRef(null);\nconst [value, setValue] = useState(\'\');\nconst onButtonClick = () => {\n  ref.current.focus();\n}\n\n<>\n  <Button\n    id="dropdown-example-button-1"\n    onClick={onButtonClick}\n    variant={VARIANT.INFO}\n  >\n    Focus the input\n  </Button>\n  <Dropdown\n    options={[\n      {\n        value: \'all\',\n        label: \'All\',\n      },\n      {\n        value: \'fall\',\n        label: \'Fall\',\n      },\n      {\n        value: \'spring\',\n        label: \'Spring\',\n      },\n    ]}\n    value={value}\n    id="semesters"\n    name="semesters"\n    onChange={function(event){\n      setValue(event.target.value);\n      alert(\'You changed the selection to \' + event.target.value);\n    }}\n    label="Semester"\n    forwardRef={ref}\n  />\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Ref example: The optional `forwardRef` property is set. When the test button is clicked, the focus shifts to the dropdown in the modal.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef, } from \'react\';\nimport { Button, Modal, ModalBody, VARIANT } from \'mark-one\';\n\nconst ref = useRef(null);\nconst [value, setValue] = useState(\'\');\nconst [modalVisible, setModalVisible] = useState(false);\nconst onButtonClick = () => {\n  setModalVisible(true);\n  /* Since modal may not have been rendered in DOM, wait for it to be\n  rendered by letting next task of event queue run first */\n  setTimeout(() => ref.current.focus(), 0);\n}\n\n<>\n  <Button\n    id="dropdown-example-button-2"\n    onClick={onButtonClick}\n    variant={VARIANT.INFO}\n  >\n    Focus the input\n  </Button>\n  <Modal\n    ariaLabelledBy="testButton"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalBody>\n      <Dropdown\n        options={[\n          {\n            value: \'all\',\n            label: \'All\',\n          },\n          {\n            value: \'fall\',\n            label: \'Fall\',\n          },\n          {\n            value: \'spring\',\n            label: \'Spring\',\n          },\n        ]}\n        value={value}\n        id="semesters"\n        name="semesters"\n        onChange={function(event){\n          setValue(event.target.value);\n          alert(\'You changed the selection to \' + event.target.value);\n        }}\n        label="Semester"\n        forwardRef={ref}\n      />\n      <Button\n        id="dropdown-example-button-3"\n        onClick={() => setModalVisible(false)}\n        variant={VARIANT.BASE}\n      >\n        Close Modal\n      </Button>\n    </ModalBody>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled dropdown example: The `disabled` property is set to `true` on the dropdown.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  disabled={true}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1019 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Fieldset',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The form elements in the fieldset',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                    'name': 'FieldsetProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Describes the elements within the fieldset',
            'name': 'legend',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                    'name': 'FieldsetProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'The error message for the overall form',
            'name': 'errorMessage',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                    'name': 'FieldsetProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Specifies the id of the associated form',
            'name': 'form',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                    'name': 'FieldsetProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'Specifies whether the border of fieldset is visible',
            'name': 'isBorderVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                    'name': 'FieldsetProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'Specifies whether the legend of the fieldset is visible',
            'name': 'isLegendVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                    'name': 'FieldsetProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, a choice within the fieldset is required',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                    'name': 'FieldsetProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Text within the fieldset that describes symbol(s) (e.g. *) used to denote required fields',
            'name': 'legendDescription',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                    'name': 'FieldsetProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1020)
}
	

/***/ }),
/* 1020 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Forms/Fieldset.tsx': __webpack_require__(202)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Fieldset$0 = require('./../../src/Forms/Fieldset.tsx');\nconst Fieldset = Fieldset$0.default || (Fieldset$0['Fieldset'] || Fieldset$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Fieldset Legend and Error message example: The `legend` property is set to "Fieldset Legend," the `isRequired` property is set to `true,` and the `errorMessage` property is set. Two of the fieldset children, required checkboxes, also have their individual error messages.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Checkbox } from \'mark-one\';\n\nconst [requiredCheckbox, setRequiredCheckbox] = useState(false);\nconst [anotherRequiredCheckbox, setAnotherRequiredCheckbox] = useState(false);\nconst [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);\n\n<Fieldset\n  legend="Fieldset Legend"\n  legendDescription="Note: * denoted required information"\n  errorMessage="Error: Please fill in the required fields in the form."\n  isRequired\n>\n  <Checkbox\n    id="fieldset-example-checkbox-1"\n    checked={requiredCheckbox}\n    label="Required Checkbox"\n    onChange={(event) => {\n      setRequiredCheckbox(!requiredCheckbox);\n    }}\n    errorMessage="Please select this checkbox before proceeding."\n    isRequired\n  />\n  <Checkbox\n    id="fieldset-example-checkbox-2"\n    checked={anotherRequiredCheckbox}\n    label="Another Required Checkbox"\n    onChange={(event) => {\n      setAnotherRequiredCheckbox(!anotherRequiredCheckbox);\n    }}\n    errorMessage="Please select this checkbox before proceeding."\n    isRequired\n  />\n  <Checkbox\n    id="fieldset-example-checkbox-3"\n    checked={nonRequiredCheckbox}\n    label="Non-Required Checkbox"\n    onChange={(event) => {\n      setNonRequiredCheckbox(!nonRequiredCheckbox);\n  }}\n  />\n</Fieldset>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Non Visible Border example: The `isBorderVisible` property is set to `false,` and the `isRequired` property is set to `true.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Checkbox } from \'mark-one\';\n\nconst [requiredCheckbox, setRequiredCheckbox] = useState(false);\nconst [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);\n\n<Fieldset\n  legend="Fieldset Legend"\n  legendDescription="Note: * denoted required information"\n  isBorderVisible={false}\n  isRequired\n>\n  <Checkbox\n    id="fieldset-example-checkbox-4"\n    checked={requiredCheckbox}\n    label="Required Checkbox"\n    onChange={(event) => {\n      setRequiredCheckbox(!requiredCheckbox);\n    }}\n    isRequired\n  />\n  <Checkbox\n    id="fieldset-example-checkbox-5"\n    checked={nonRequiredCheckbox}\n    label="Non-Required Checkbox"\n    onChange={(event) => {\n      setNonRequiredCheckbox(!nonRequiredCheckbox);\n    }}\n  />\n</Fieldset>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Non Visible Border and Non Visible Legend example: The `isBorderVisible` property is set to `false,` the `legend` property is set to "Fieldset Legend," the `isLegendVisible` property is set to `false,` and the `isRequired` property is set to `true.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Checkbox } from \'mark-one\';\n\nconst [requiredCheckbox, setRequiredCheckbox] = useState(false);\nconst [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);\n\n<Fieldset\n  legend="Fieldset Legend"\n  legendDescription="Note: * denoted required information"\n  isBorderVisible={false}\n  isLegendVisible={false}\n  isRequired\n>\n  <Checkbox\n    id="fieldset-example-checkbox-6"\n    checked={requiredCheckbox}\n    label="Required Checkbox"\n    onChange={(event) => {\n      setRequiredCheckbox(!requiredCheckbox);\n    }}\n    isRequired\n  />\n  <Checkbox\n    id="fieldset-example-checkbox-7"\n    checked={nonRequiredCheckbox}\n    label="Non-Required Checkbox"\n    onChange={(event) => {\n      setNonRequiredCheckbox(!nonRequiredCheckbox);\n    }}\n  />\n</Fieldset>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Visible Border and Non Visible Legend example: The `legend` property is set to "Fieldset Legend," and the `isLegendVisible` property is set to `false,` and the `isRequired` property is set to `true.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Checkbox } from \'mark-one\';\n\nconst [requiredCheckbox, setRequiredCheckbox] = useState(false);\nconst [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);\n\n<Fieldset\n  legend="Fieldset Legend"\n  legendDescription="Note: * denoted required information"\n  isLegendVisible={false}\n  isRequired\n>\n  <Checkbox\n    id="fieldset-example-checkbox-8"\n    checked={requiredCheckbox}\n    label="Required Checkbox"\n    onChange={(event) => {\n      setRequiredCheckbox(!requiredCheckbox);\n    }}\n    isRequired\n  />\n  <Checkbox\n    id="fieldset-example-checkbox-9"\n    checked={nonRequiredCheckbox}\n    label="Non-Required Checkbox"\n    onChange={(event) => {\n      setNonRequiredCheckbox(!nonRequiredCheckbox);\n    }}\n  />\n</Fieldset>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1021 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Form',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The id of the form',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Form.tsx',
                'name': 'FormProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Form.tsx',
                    'name': 'FormProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'A label that specifies the purpose of the form',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Form.tsx',
                'name': 'FormProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Form.tsx',
                    'name': 'FormProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '() => {}' },
            'description': 'Handler attached to the onSubmit handler',
            'name': 'submitHandler',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Form.tsx',
                'name': 'FormProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/Form.tsx',
                    'name': 'FormProps'
                }],
            'required': false,
            'type': { 'name': 'FormEventHandler<HTMLFormElement>' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1022)
}
	

/***/ }),
/* 1022 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Forms/Form.tsx': __webpack_require__(211)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Form$0 = require('./../../src/Forms/Form.tsx');\nconst Form = Form$0.default || (Form$0['Form'] || Form$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This Form component adds a margin to each of its direct children.'
    },
    {
        'type': 'code',
        'content': 'import {\n  TextInput,\n  Fieldset,\n  Checkbox,\n  Button,\n  Dropdown,\n  RadioButton,\n  VARIANT,\n  POSITION\n} from \'mark-one\';\nimport { useState } from \'react\';\n\nconst [requiredCheckbox, setRequiredCheckbox] = useState(false);\nconst [undergraduateCheckbox, setUndergraduateCheckbox] = useState(false);\nconst [checkboxValue, setCheckboxValue] = useState(\'fall\');\nconst [radioCheckedValue, setRadioCheckedValue] = useState(\'\');\nconst [notesValue, setNotesValue] = useState(\'\');\n\n<Form\n  id="testForm"\n  label="New Student Registration Form"\n>\n  <Fieldset\n    legend="Appointment Time Preference"\n    isBorderVisible\n    isLegendVisible\n  >\n    <RadioButton\n      id="form-example-radioButton-1"\n      label="Morning"\n      value="morning"\n      name="visibleFieldsetTest"\n      checked={radioCheckedValue === \'morning\'}\n      onChange={(event) => setRadioCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      id="form-example-radioButton-2"\n      label="Noon"\n      value="noon"\n      name="visibleFieldsetTest"\n      checked={radioCheckedValue === \'noon\'}\n      onChange={(event) => setRadioCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      id="form-example-radioButton-3"\n      label="Evening"\n      value="evening"\n      name="visibleFieldsetTest"\n      checked={radioCheckedValue === \'evening\'}\n      onChange={(event) => setRadioCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n  <Fieldset\n    legend="Class Level Information"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      id="form-example-checkbox-1"\n      checked={undergraduateCheckbox}\n      label="Undergraduate"\n      onChange={(event) => {\n        setUndergraduateCheckbox(!undergraduateCheckbox);\n      }}\n      hideError\n    />\n  </Fieldset>\n  <Dropdown\n    options={[\n      {\n        value: \'all\',\n        label: \'All\',\n      },\n      {\n        value: \'fall\',\n        label: \'Fall\',\n      },\n      {\n        value: \'spring\',\n        label: \'Spring\',\n      },\n    ]}\n    value={checkboxValue}\n    id="testSemestersDropdown"\n    name="semesters"\n    onChange={function(event){\n      setCheckboxValue(event.target.value);\n    }}\n    label="Semester"\n    labelPosition={POSITION.TOP}\n  />\n  <TextInput\n    id="testNotes"\n    name="notes"\n    value={notesValue}\n    labelPosition={POSITION.TOP}\n    label="Notes"\n    onChange={(event) => {\n    setNotesValue(event.target.value);\n  }}\n  />\n  <Button\n    id="form-example-button-1"\n    onClick={() => {\n      alert(\'You clicked the primary button\')\n    }}\n    variant={VARIANT.PRIMARY}\n  >\n    Submit\n  </Button>\n</Form>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'A `Form` component may also have an `onSubmit` handler too. This can be used to\nhandle the semantic submission of a form, like so:'
    },
    {
        'type': 'code',
        'content': 'import {\n  TextInput,\n  Button,\n  POSITION,\n  VARIANT,\n} from \'mark-one\';\nimport { useState } from \'react\';\n\nconst [text, setText] = useState(\'\');\nconst [items, setItems] = useState([\'Eggs\', \'Milk\']);\n\nconst submitHandler = () => {\n  setItems((prev) => prev.concat(text));\n  setText(\'\');\n}\n\n<Form\n  id="groceryListForm"\n  label="Grocery List"\n  submitHandler={submitHandler}\n>\n  <TextInput\n    name="add-item"\n    value={text}\n    labelPosition={POSITION.TOP}\n    label="Add Item"\n    onChange={(event) => {\n      setText(event.target.value);\n    }}\n  />\n  <ul>\n    {items.map((item, index) => (<li key={item+index}>{item}</li>))}\n  </ul>\n  <Button\n    id="form-example-button-2"\n    form="groceryListForm"\n    variant={VARIANT.PRIMARY}\n    type="submit"\n  >\n    Submit\n  </Button>\n</Form>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1023 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'InputLabel',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'declarations': [{
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                }],
            'required': false,
            'type': { 'name': 'void | WebTarget' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'declarations': [{
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                }],
            'required': false,
            'type': { 'name': 'void | WebTarget' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'declarations': void 0,
            'required': false,
            'type': { 'name': 'DefaultTheme' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1024)
}
	

/***/ }),
/* 1024 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Forms/InputLabel.tsx': __webpack_require__(40)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst InputLabel$0 = require('./../../src/Forms/InputLabel.tsx');\nconst InputLabel = InputLabel$0.default || (InputLabel$0['InputLabel'] || InputLabel$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `InputLabel` component is used by the `TextInput` and `Dropdown` components, while the `CheckLabel` component is used by the `RadioButton` and `Checkbox` components. These label variations were created to align input fields when using various form elements in tandem.\n\nAligning `TextInput` and `Checkbox` fields example: The labelPosition for `TextInput` is `POSITION.TOP`, and the `labelPosition` for the `Checkbox` is `POSITION.RIGHT`.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, TextInput, Checkbox, POSITION } from \'mark-one\';\n\nconst [checkValue, setCheckValue] = useState(false);\nconst [textValue, setTextValue] = useState(\'Some valid input\');\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      id="inputLabel-example-checkbox-1"\n      checked={checkValue}\n      label="Undergraduate"\n      labelPosition={POSITION.RIGHT}\n      onChange={(event) => {\n        setCheckValue(!checkValue);\n      }}\n    />\n    <TextInput\n      name="example"\n      id="example"\n      value={textValue}\n      label="Description"\n      labelPosition={POSITION.TOP}\n      onChange={(event) => {\n      setTextValue(event.target.value);\n      }}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Aligning `TextInput` and `Checkbox` fields example: The `labelPosition` for the `TextInput` and `Checkbox` is `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, TextInput, Checkbox, POSITION } from \'mark-one\';\n\nconst [checkValue, setCheckValue] = useState(false);\nconst [textValue, setTextValue] = useState(\'Some valid input\');\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      id="inputLabel-example-checkbox-2"\n      checked={checkValue}\n      label="Undergraduate"\n      labelPosition={POSITION.LEFT}\n      onChange={(event) => {\n        setCheckValue(!checkValue);\n      }}\n    />\n    <TextInput\n      name="example"\n      id="example"\n      value={textValue}\n      label="Description"\n      labelPosition={POSITION.LEFT}\n      onChange={(event) => {\n      setTextValue(event.target.value);\n      }}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1025 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'MultiLineTextInput',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'declarations': [{
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                }],
            'required': false,
            'type': { 'name': 'void | WebTarget' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'declarations': [{
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                }],
            'required': false,
            'type': { 'name': 'void | WebTarget' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'declarations': void 0,
            'required': false,
            'type': { 'name': 'DefaultTheme' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1026)
}
	

/***/ }),
/* 1026 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Forms/MultiLineTextInput.tsx': __webpack_require__(212)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst MultiLineTextInput$0 = require('./../../src/Forms/MultiLineTextInput.tsx');\nconst MultiLineTextInput = MultiLineTextInput$0.default || (MultiLineTextInput$0['MultiLineTextInput'] || MultiLineTextInput$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Basic multi-line text box'
    },
    {
        'type': 'code',
        'content': 'import { MultiLineTextInput } from \'mark-one\';\nimport { useState } from \'react\';\n\nconst [value, setValue] = useState(\'CS50 is an on-campus and online introductory course on computer science taught at Harvard University and Yale University.\');\n\n<MultiLineTextInput\n  value={value}\n  id="course-notes"\n  name="course-notes"\n  label="Course notes"\n  value={value}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Multi-line text box with an error'
    },
    {
        'type': 'code',
        'content': 'import { MultiLineTextInput } from \'mark-one\';\nimport { useState } from \'react\';\n\nconst [value, setValue] = useState(\'\');\n\n<MultiLineTextInput\n  value={value}\n  id="course-notes"\n  name="course-notes"\n  label="Course notes"\n  placeholder="Your text here"\n  errorMessage="Please provide a value for this field"\n  value={value}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Multi-line text box with a hidden label'
    },
    {
        'type': 'code',
        'content': 'import { MultiLineTextInput } from \'mark-one\';\nimport { useState } from \'react\';\n\nconst [value, setValue] = useState(\'\');\n\n<MultiLineTextInput\n  value={value}\n  id="course-notes"\n  name="course-notes"\n  label="Course notes"\n  placeholder="Your text here"\n  value={value}\n  isLabelVisible={false}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required multi-line text box'
    },
    {
        'type': 'code',
        'content': 'import { MultiLineTextInput } from \'mark-one\';\nimport { useState } from \'react\';\n\nconst [value, setValue] = useState(\'\');\n\n\n<MultiLineTextInput\n  value={value}\n  id="course-notes"\n  name="course-notes"\n  label="Course notes"\n  placeholder="Your text here"\n  value={value}\n  isRequired\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled multi-line text box'
    },
    {
        'type': 'code',
        'content': 'import { MultiLineTextInput } from \'mark-one\';\nimport { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some text that you can\\\'t change\');\n\n<MultiLineTextInput\n  value={value}\n  id="course-notes"\n  name="course-notes"\n  label="Course notes"\n  placeholder="Your text here"\n  value={value}\n  isDisabled\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Multi-line text box using `useRef` to focus the element programatically'
    },
    {
        'type': 'code',
        'content': 'import { MultiLineTextInput, Button, VARIANT } from \'mark-one\';\nimport { useState, useRef } from \'react\';\n\nconst [value, setValue] = useState(\'\');\n\nconst ref = useRef(null);\nconst onButtonClick = () => {\n  if (ref.current) {\n    ref.current.focus();\n  }\n};\n<>\n  <Button\n    id="multiLineTextInput-example-button-1"\n    onClick={onButtonClick}\n    variant={VARIANT.INFO}\n  >\n    Focus the input\n  </Button>\n  <MultiLineTextInput\n    id="text input"\n    name="course-notes"\n    label="Course Notes"\n    placeholder="Your text here"\n    value={value}\n    onChange={(event) => {\n      setValue(event.target.value);\n    }}\n    forwardRef={ref}\n  />\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Multi-line text box with a `placeholder` set'
    },
    {
        'type': 'code',
        'content': 'import { MultiLineTextInput, Button, VARIANT } from \'mark-one\';\nimport { useState, useRef } from \'react\';\n\nconst [value, setValue] = useState(\'\');\n<MultiLineTextInput\n  id="text input"\n  name="course-notes"\n  label="Course Notes"\n  placeholder="Your text here"\n  value={value}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1027 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'RadioButton',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The id tied to the radio button',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                    'name': 'NativeRadioButtonProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the label text',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                    'name': 'NativeRadioButtonProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The name of the radio button',
            'name': 'name',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                    'name': 'NativeRadioButtonProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on change event',
            'name': 'onChange',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                    'name': 'NativeRadioButtonProps'
                }],
            'required': true,
            'type': { 'name': 'ChangeEventHandler<Element>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The value of the radio button',
            'name': 'value',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                    'name': 'NativeRadioButtonProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Specifies whether button is checked',
            'name': 'checked',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                    'name': 'NativeRadioButtonProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, radio button will be disabled',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                    'name': 'NativeRadioButtonProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Specifies the ref of the radio button',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'RadioButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                    'name': 'RadioButtonProps'
                }],
            'required': false,
            'type': { 'name': 'Ref<HTMLInputElement>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, the radio button is required to submit the form',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'RadioButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                    'name': 'RadioButtonProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.RIGHT' },
            'description': 'Allows you to pass in a label position property from the POSITION enum',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'RadioButtonProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                    'name': 'RadioButtonProps'
                }],
            'required': false,
            'type': { 'name': 'CheckLabelPosition' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1028)
}
	

/***/ }),
/* 1028 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Forms/RadioButton.tsx': __webpack_require__(210)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst RadioButton$0 = require('./../../src/Forms/RadioButton.tsx');\nconst RadioButton = RadioButton$0.default || (RadioButton$0['RadioButton'] || RadioButton$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Non Visible Fieldset example: A radio button group should be wrapped with the `Fieldset` component for accessibility purposes. The following example includes a `Fieldset` in which is `isBorderVisible` and `isLegendVisible` props are set to `false.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <RadioButton\n      id="radioButton-example-radioButton-1"\n      label="Foo"\n      value="foo"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'foo\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      id="radioButton-example-radioButton-2"\n      label="Bar"\n      value="bar"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'bar\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      id="radioButton-example-radioButton-3"\n      label="Baz"\n      value="baz"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'baz\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Visible Fieldset example: A radio button group should be wrapped with the `Fieldset` component for accessibility purposes. The following example includes a `Fieldset` in which is `isBorderVisible` and `isLegendVisible` props are set to `true.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Fieldset\n    legend="Appointment Time Preference"\n    isBorderVisible\n    isLegendVisible\n  >\n    <RadioButton\n      id="radioButton-example-radioButton-4"\n      label="Morning"\n      value="morning"\n      name="visibleFieldsetTest"\n      checked={checkedValue === \'morning\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      id="radioButton-example-radioButton-5"\n      label="Noon"\n      value="noon"\n      name="visibleFieldsetTest"\n      checked={checkedValue === \'noon\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      id="radioButton-example-radioButton-6"\n      label="Evening"\n      value="evening"\n      name="visibleFieldsetTest"\n      checked={checkedValue === \'evening\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled example: The `disabled` property is `true` for the last radio button.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <RadioButton\n      id="radioButton-example-radioButton-7"\n      label="One"\n      value="one"\n      name="quantity"\n      checked={checkedValue === \'one\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      id="radioButton-example-radioButton-8"\n      label="Two"\n      value="two"\n      name="quantity"\n      checked={checkedValue === \'two\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      id="radioButton-example-radioButton-9"\n      label="Three"\n      value="three"\n      name="quantity"\n      checked={checkedValue === \'three\'}\n      disabled\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required example: The `isRequired` prop is present.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Fieldset\n    legend="Terms and Conditions"\n    isBorderVisible={false}\n    isLegendVisible={false}\n    legendDescription="Note: * denoted required information"\n  >\n    <RadioButton\n      id="radioButton-example-radioButton-10"\n      label="I accept the terms and conditions."\n      value="agree"\n      name="terms"\n      checked={checkedValue === \'agree\'}\n      isRequired\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      id="radioButton-example-radioButton-11"\n      label="I do not accept the terms and conditions."\n      value="disagree"\n      name="terms"\n      checked={checkedValue === \'disagree\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The `errorMessage` property of the Fieldset wrapping the radio buttons is set.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Fieldset\n    legend="Terms and Conditions"\n    isBorderVisible\n    isLegendVisible\n    legendDescription="Note: * denoted required information"\n    errorMessage="Error: Please make a selection before proceeding."\n  >\n    <RadioButton\n      id="radioButton-example-radioButton-12"\n      label="I accept the terms and conditions."\n      value="accept"\n      name="conditions"\n      checked={checkedValue === \'accept\'}\n      isRequired\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      id="radioButton-example-radioButton-13"\n      label="I do not accept the terms and conditions."\n      value="decline"\n      name="conditions"\n      checked={checkedValue === \'decline\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1029 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TextInput',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'declarations': [{
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                }],
            'required': false,
            'type': { 'name': 'void | WebTarget' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'declarations': [{
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                }],
            'required': false,
            'type': { 'name': 'void | WebTarget' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'declarations': void 0,
            'required': false,
            'type': { 'name': 'DefaultTheme' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1030)
}
	

/***/ }),
/* 1030 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Forms/TextInput.tsx': __webpack_require__(129)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TextInput$0 = require('./../../src/Forms/TextInput.tsx');\nconst TextInput = TextInput$0.default || (TextInput$0['TextInput'] || TextInput$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Label example: The optional `labelPosition` prop defaults to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The prop `labelPosition` is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  labelPosition={POSITION.LEFT}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The prop `labelPosition` is set to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  labelPosition={POSITION.TOP}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The `isLabelVisible` prop is set to `false.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="isLabelVisibleTextExample"\n  id="isLabelVisibleTextExample"\n  label="Description:"\n  isLabelVisible={false}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Text Input example: The `disabled` prop set to `true.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  disabled="disabled"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` prop is not set.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` property is set, and the `labelPosition` prop defaults to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Invalid value\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  errorMessage="Error: Please enter a valid ID"\n  label="Description:"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` property is set, and the `labelPosition` prop is set to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'Invalid value\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  errorMessage="Error: Please enter a valid ID"\n  label="Description:"\n  labelPosition={POSITION.TOP}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` prop is not set, and the\n`hideError` prop is set to `true`, which changes the errorMessage style.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  hideError={true}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` and `hideError` props\nare set to `true`, while `isLabelVisible` prop is set to false which removes\nthe errorMessage and its style.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="hideErrorTextExample"\n  id="hideErrorTextExample"\n  label="Description:"\n  errorMessage="Error: Please enter a valid ID"\n  hideError={true}\n  isLabelVisible={false}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n  labelPosition={POSITION.TOP}\n  isRequired\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n  labelPosition={POSITION.LEFT}\n  isRequired\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'onClick example: The optional `onClick` property is set.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n  onClick={() => {\n    alert(\'You clicked the text input component.\');\n  }}\n  labelPosition={POSITION.LEFT}\n  isLabelVisible={false}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Ref example: The optional `forwardRef` property is set. When the test button is clicked, the focus shifts from the button itself to the text input field.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef } from \'react\';\nimport { Button, VARIANT } from \'mark-one\';\n\nconst ref = useRef(null);\nconst [value, setValue] = useState(\'\');\nconst onButtonClick = () => {\n  ref.current.focus();\n}\n\n<>\n  <Button\n    id="textInput-example-button-1"\n    onClick={onButtonClick}\n    variant={VARIANT.INFO}\n  >\n    Focus the input\n  </Button>\n  <TextInput\n    id="example"\n    value={value}\n    name="example"\n    label="Description:"\n    onChange={(event) => {\n      setValue(event.target.value);\n    }}\n    forwardRef={ref}\n  />\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Ref example: The optional `forwardRef` property is set. When the button is clicked, the focus shifts from the button itself to the text input field inside a modal.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef } from \'react\';\nimport { Button, Modal, ModalBody, VARIANT } from \'mark-one\';\n\nconst ref = useRef(null);\nconst [value, setValue] = useState(\'\');\nconst [modalVisible, setModalVisible] = useState(false);\nconst onButtonClick = () => {\n  setModalVisible(true);\n  /* Since modal may not have been rendered in DOM, wait for it to be\n  rendered by letting next task of event queue run first */\n  setTimeout(() => ref.current.focus(), 0);\n}\n\n<>\n  <Button\n    id="textInput-example-button-2"\n    onClick={onButtonClick}\n    variant={VARIANT.INFO}\n  >\n    Focus the input\n  </Button>\n  <Modal\n    ariaLabelledBy="textInput-example-button-2"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalBody>\n      <TextInput\n        value={value}\n        name="example"\n        label="Description:"\n        onChange={(event) => {\n          setValue(event.target.value);\n        }}\n        forwardRef={ref}\n      />\n      <Button\n        id="textInput-example-button-3"\n        onClick={() => setModalVisible(false)}\n        variant={VARIANT.BASE}\n      >\n        Close Modal\n      </Button>\n    </ModalBody>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1031 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ValidationErrorMessage',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Text or components to be displayed',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/ValidationErrorMessage.tsx',
                'name': 'ValidationErrorMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/ValidationErrorMessage.tsx',
                    'name': 'ValidationErrorMessageProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'An html id used by the parent Input component to associate the error',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/ValidationErrorMessage.tsx',
                'name': 'ValidationErrorMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Forms/ValidationErrorMessage.tsx',
                    'name': 'ValidationErrorMessageProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1032)
}
	

/***/ }),
/* 1032 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Forms/ValidationErrorMessage.tsx': __webpack_require__(54)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ValidationErrorMessage$0 = require('./../../src/Forms/ValidationErrorMessage.tsx');\nconst ValidationErrorMessage = ValidationErrorMessage$0.default || (ValidationErrorMessage$0['ValidationErrorMessage'] || ValidationErrorMessage$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Used for displaying information related to validation errors in a form.'
    },
    {
        'type': 'code',
        'content': '<ValidationErrorMessage id="testValidationErrorMessage">\n  Error: This entry may only contain numbers.\n</ValidationErrorMessage>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1033 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'useConfirm',
    'tags': {},
    'description': 'A custom hook that implements a "confirm before discarding unsaved changes"\nprompt by returning a function to explicitly mark the local data as changed.\nIt adds an event listener that will prompt the user before navigating away,\nand also provides a function to explicitly prompt the user for use in a\ncancel button or other non-navigation exit.\n',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1034)
}
	

/***/ }),
/* 1034 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Hooks/useConfirm.tsx': __webpack_require__(225)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst useConfirm$0 = require('./../../src/Hooks/useConfirm.tsx');\nconst useConfirm = useConfirm$0.default || (useConfirm$0['useConfirm'] || useConfirm$0);", requireInRuntime);

module.exports = [{
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Button, TextInput, useConfirm } from \'mark-one\';\n\nconst {\n  markAsChanged,\n  confirmDiscard,\n} = useConfirm();\n\nconst [text, setText] = useState(\'\');\n\n<div>\n  <p>\n    <em>After entering text in the field below, click Cancel to see the confirm changes dialog</em>\n  </p>\n\n  <div>\n    <TextInput\n      isLabelVisible\n      label="Enter some text"\n      value={text}\n      onChange={({ target }) => {\n        markAsChanged(true);\n        setText(target.value);\n      }}\n    />\n  </div>\n\n  <div>\n    <Button\n      id="useConfirm-example-button-1"\n      onClick={() => {\n        if (confirmDiscard()) {\n          markAsChanged(false);\n          setText(\'\');\n        }\n      }}>\n      Cancel \n    </Button>\n  </div>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    }]
	

/***/ }),
/* 1035 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'IconLink',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the alt text for screen readers',
            'name': 'alt',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                'name': 'IconLinkProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                    'name': 'IconLinkProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the Font Awesome Icon(s)',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                'name': 'IconLinkProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                    'name': 'IconLinkProps'
                }],
            'required': true,
            'type': { 'name': 'ReactElement<FontAwesomeIconProps, string | JSXElementConstructor<any>>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'clickHandler',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                'name': 'IconLinkProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                    'name': 'IconLinkProps'
                }],
            'required': true,
            'type': { 'name': 'MouseEventHandler<Element>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the tooltip text',
            'name': 'title',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                'name': 'IconLinkProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                    'name': 'IconLinkProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Specifies the URL the user will be directed to when the link is clicked',
            'name': 'href',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                'name': 'IconLinkProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                    'name': 'IconLinkProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1036)
}
	

/***/ }),
/* 1036 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    '@fortawesome/react-fontawesome': __webpack_require__(64),
    '@fortawesome/free-solid-svg-icons': __webpack_require__(65),
    'react': __webpack_require__(0),
    './../../src/Icons/IconLink.tsx': __webpack_require__(198)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst IconLink$0 = require('./../../src/Icons/IconLink.tsx');\nconst IconLink = IconLink$0.default || (IconLink$0['IconLink'] || IconLink$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A specialized component for displaying icons as links.'
    },
    {
        'type': 'code',
        'content': 'import { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faEdit } from \'@fortawesome/free-solid-svg-icons\';\n\n<IconLink\n  title="Edit account information"\n  alt="Edit account information"\n  clickHandler={() => {alert(\'You clicked the icon!\')}}\n>\n  <FontAwesomeIcon icon={faEdit} size="small" />\n</IconLink>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1037 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Callout',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1038)
}
	

/***/ }),
/* 1038 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Layout/Callout.tsx': __webpack_require__(184)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Callout$0 = require('./../../src/Layout/Callout.tsx');\nconst Callout = Callout$0.default || (Callout$0['Callout'] || Callout$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Renders a styled `<p>` element for displaying a piece of text intended to stand out to the user.\n\nThe following is an example of the default callout in which the `variant` property is assigned the default enum value `VARIANT.INFO` and the role is assigned the default value `note`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Callout>You currently have 3 shop safety certifications.</Callout>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a callout in which the `variant` property is assigned the enum value `VARIANT.POSITIVE` and the role is assigned the default value `note`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Callout variant={VARIANT.POSITIVE}>Your submission has been received! Please check your inbox for a confirmation email. We will respond within the next 48 hours.</Callout>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a callout in which the `variant` property is assigned the enum value `VARIANT.NEGATIVE` and the role is assigned the value `alert`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Callout variant={VARIANT.NEGATIVE} role=\'alert\'>You must attend a lab safety training before taking this course.</Callout>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1039 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Footer',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1040)
}
	

/***/ }),
/* 1040 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Layout/Footer.tsx': __webpack_require__(181)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Footer$0 = require('./../../src/Layout/Footer.tsx');\nconst Footer = Footer$0.default || (Footer$0['Footer'] || Footer$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The Footer uses flexbox for positioning, and accepts a `justify` prop that controls the layout. The default value is `space-between`, which works well for multiple items:'
    },
    {
        'type': 'code',
        'content': '<Footer>\n  <div>Privacy Policy</div>\n  <div>Contact Us</div>\n  <div>Terms of Service</div>\n</Footer>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'A value of `center` be used to position content around the center. (See [MDN\'s docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) for all supported values).'
    },
    {
        'type': 'code',
        'content': '<Footer justify="center">\n  <div>Version 10.0</div>\n</Footer>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'You can also pass in a custom `background` prop to replace the default transparent background.'
    },
    {
        'type': 'code',
        'content': '<Footer justify="center" background="#eafeaf">\n  <div>Version 10.0</div>\n</Footer>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The `position` prop can be used to control how the footer is positioned on the\npage. By default, the footer will be `sticky`, appearing `fixed` while\nscrolling the page, then `relative` when it reaches the bottom of the content.\nYou can set it to always appear at the end of the content by setting position\nto `relative`."'
    },
    {
        'type': 'code',
        'content': '<Footer position="relative">\n  <div>Version 10.0</div>\n</Footer>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'An unordered list can be provided to the `Footer`, and each list item will be spaced accordingly.'
    },
    {
        'type': 'code',
        'content': 'import { ExternalLink } from \'mark-one\';\n\n<Footer justify="center">\n  <ul>\n    <li><ExternalLink href="https://seas.harvard.edu/office-diversity-inclusion-and-belonging/about-us" rel="nofollow">Diversity Mission</ExternalLink></li>\n    <li><ExternalLink href="https://trademark.harvard.edu/pages/trademark-notice" rel="nofollow">Trademark Notice</ExternalLink></li>\n    <li><ExternalLink href="https://accessibility.huit.harvard.edu/digital-accessibility-policy" rel="nofollow">Accessibility Policy</ExternalLink></li>\n    <li><ExternalLink href="https://seas.harvard.edu/privacy-policy" rel="nofollow">Privacy Policy</ExternalLink></li>\n  </ul>\n</Footer>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1041 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'GridContainer',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The content to display inside the GridContainer',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Layout/GridContainer.tsx',
                'name': 'GridContainerProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Layout/GridContainer.tsx',
                    'name': 'GridContainerProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Where in the grid the element should appear.\nValid values are `left`, `center`, `right`, or a value between 1-11,\nrepresenting the first column on which the element should appear.',
            'name': 'placement',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Layout/GridContainer.tsx',
                'name': 'GridContainerProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Layout/GridContainer.tsx',
                    'name': 'GridContainerProps'
                }],
            'required': true,
            'type': { 'name': 'Placement' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The number of columns covered by the element in our 12-column grid.\nMust be within 1-12.',
            'name': 'width',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Layout/GridContainer.tsx',
                'name': 'GridContainerProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Layout/GridContainer.tsx',
                    'name': 'GridContainerProps'
                }],
            'required': true,
            'type': { 'name': 'Width' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1042)
}
	

/***/ }),
/* 1042 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Layout/GridContainer.tsx': __webpack_require__(186)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst GridContainer$0 = require('./../../src/Layout/GridContainer.tsx');\nconst GridContainer = GridContainer$0.default || (GridContainer$0['GridContainer'] || GridContainer$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `GridContainer` is a low-level piece of the layout grid. It represents a sub-component of a larger grid, intended for use with multiple child components, and may itself contain another grid layout. It should be placed inside a `GridWrapper`.\n\nThis example demonstrates how **different widths** affect the layout of the grid items.'
    },
    {
        'type': 'code',
        'content': 'import { GridWrapper } from \'mark-one\';\n\n<GridWrapper gap="large">\n  <GridContainer width={2} placement="left">\n    <div style={{ backgroundColor: \'lightblue\', padding: \'10px\' }}>\n      Width 2\n    </div>\n  </GridContainer>\n  <GridContainer width={4} placement="left">\n    <div style={{ backgroundColor: \'lightgreen\', padding: \'10px\' }}>\n      Width 4\n    </div>\n  </GridContainer>\n  <GridContainer width={6} placement="left">\n    <div style={{ backgroundColor: \'lightcoral\', padding: \'10px\' }}>\n      Width 6\n    </div>\n  </GridContainer>\n</GridWrapper>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'This example demonstrates how **different placements** affect the alignment of the grid items.'
    },
    {
        'type': 'code',
        'content': 'import { GridWrapper } from \'mark-one\';\n\n<GridWrapper gap="large">\n  <GridContainer width={4} placement="left">\n    <div style={{ backgroundColor: \'lightblue\', padding: \'10px\' }}>\n      Left Placement\n    </div>\n  </GridContainer>\n  <GridContainer width={4} placement="center">\n    <div style={{ backgroundColor: \'lightgreen\', padding: \'10px\' }}>\n      Center Placement\n    </div>\n  </GridContainer>\n  <GridContainer width={4} placement="right">\n    <div style={{ backgroundColor: \'lightcoral\', padding: \'10px\' }}>\n      Right Placement\n    </div>\n  </GridContainer>\n</GridWrapper>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'This example demonstrates a combination of **different widths and placements**.'
    },
    {
        'type': 'code',
        'content': 'import { GridWrapper } from \'mark-one\';\n\n<GridWrapper gap="large">\n  <GridContainer width={3} placement="left">\n    <div style={{ backgroundColor: \'lightblue\', padding: \'10px\' }}>\n      Width 3, Left\n    </div>\n  </GridContainer>\n  <GridContainer width={6} placement="center">\n    <div style={{ backgroundColor: \'lightgreen\', padding: \'10px\' }}>\n      Width 6, Center\n    </div>\n  </GridContainer>\n  <GridContainer width={3} placement="right">\n    <div style={{ backgroundColor: \'lightcoral\', padding: \'10px\' }}>\n      Width 3, Right\n    </div>\n  </GridContainer>\n</GridWrapper>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'This example demonstrates how to place items starting from **specific columns**.'
    },
    {
        'type': 'code',
        'content': 'import { GridWrapper } from \'mark-one\';\n\n<GridWrapper gap="small">\n  <GridContainer width={4} placement={2}>\n    <div style={{ backgroundColor: \'lightblue\', padding: \'10px\' }}>\n      Start at Column 2\n    </div>\n  </GridContainer>\n  <GridContainer width={4} placement={6}>\n    <div style={{ backgroundColor: \'lightgreen\', padding: \'10px\' }}>\n      Start at Column 6\n    </div>\n  </GridContainer>\n  <GridContainer width={4} placement={8}>\n    <div style={{ backgroundColor: \'lightcoral\', padding: \'10px\' }}>\n      Start at Column 8\n    </div>\n  </GridContainer>\n</GridWrapper>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'This example demonstrates how the Grid system handles multiple `GridContainers` with maximum widths. It may be helpful to use the Firefox DevTools to view the column layout of these components (in the DOM inspector click the `grid` button next to the `div` that surrounds these components).'
    },
    {
        'type': 'code',
        'content': 'import { GridWrapper } from \'mark-one\';\n\n<GridWrapper gap="small">\n  <GridContainer width={12} placement={1}>\n    <div style={{ backgroundColor: \'lightblue\', padding: \'10px\' }}>\n      Start at Column 2\n    </div>\n  </GridContainer>\n  <GridContainer width={12} placement={6}>\n    <div style={{ backgroundColor: \'lightgreen\', padding: \'10px\' }}>\n      Start at Column 6\n    </div>\n  </GridContainer>\n  <GridContainer width={12} placement={8}>\n    <div style={{ backgroundColor: \'lightcoral\', padding: \'10px\' }}>\n      Start at Column 8\n    </div>\n  </GridContainer>\n</GridWrapper>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1043 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'GridWrapper',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The content to display inside the GridWrapper',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Layout/GridWrapper.tsx',
                'name': 'GridWrapperProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Layout/GridWrapper.tsx',
                    'name': 'GridWrapperProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Optional gap size to override the default and responsive gap sizes',
            'name': 'gap',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Layout/GridWrapper.tsx',
                'name': 'GridWrapperProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Layout/GridWrapper.tsx',
                    'name': 'GridWrapperProps'
                }],
            'required': false,
            'type': { 'name': 'string | number | symbol' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1044)
}
	

/***/ }),
/* 1044 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Layout/GridWrapper.tsx': __webpack_require__(185)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst GridWrapper$0 = require('./../../src/Layout/GridWrapper.tsx');\nconst GridWrapper = GridWrapper$0.default || (GridWrapper$0['GridWrapper'] || GridWrapper$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `GridWrapper` is the top-level of the grid structure. It defines the 12-column grid, with space between rows and columns. It can be used to embed grids within other components, letting us define sub-grid arrangements when needed.\n\nIt does not apply any margins, padding, additional borders shadows, or other styling, which should be handled by parent/child components instead.\n\nThe `gap` prop defaults to `null`, allowing the gap size to be set conditionally. If `gap` is not provided, it defaults to `small` for screen widths above 768px and `xsmall` for screen widths 768px and below.\n\n<br />\n\nThe following example shows the **`xsmall`** gap size. To demonstrate how this gap size will appear, the `xsmall` gap size is being passed in here, but would not need to be for screen widths 768px and below.'
    },
    {
        'type': 'code',
        'content': '  <GridWrapper gap="xsmall">\n    <div style={{ backgroundColor: \'lightblue\', padding: \'10px\' }}>Item 1</div>\n    <div style={{ backgroundColor: \'lightgreen\', padding: \'10px\' }}>Item 2</div>\n    <div style={{ backgroundColor: \'lightcoral\', padding: \'10px\' }}>Item 3</div>\n  </GridWrapper>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following example shows the default **`small`** gap size. If gap is not provided, small will be used for screen widths above 768px.'
    },
    {
        'type': 'code',
        'content': '<GridWrapper>\n  <div style={{ backgroundColor: \'lightblue\', padding: \'10px\' }}>Item 1</div>\n  <div style={{ backgroundColor: \'lightgreen\', padding: \'10px\' }}>Item 2</div>\n  <div style={{ backgroundColor: \'lightcoral\', padding: \'10px\' }}>Item 3</div>\n</GridWrapper>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following example shows the **`medium`** gap size.'
    },
    {
        'type': 'code',
        'content': '  <GridWrapper gap="medium">\n    <div style={{ backgroundColor: \'lightblue\', padding: \'10px\' }}>Item 1</div>\n    <div style={{ backgroundColor: \'lightgreen\', padding: \'10px\' }}>Item 2</div>\n    <div style={{ backgroundColor: \'lightcoral\', padding: \'10px\' }}>Item 3</div>\n  </GridWrapper>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following example shows the **`large`** gap size.'
    },
    {
        'type': 'code',
        'content': '<GridWrapper gap="large">\n  <div style={{ backgroundColor: \'lightblue\', padding: \'10px\' }}>Item 1</div>\n  <div style={{ backgroundColor: \'lightgreen\', padding: \'10px\' }}>Item 2</div>\n  <div style={{ backgroundColor: \'lightcoral\', padding: \'10px\' }}>Item 3</div>\n</GridWrapper>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1045 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Header',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1046)
}
	

/***/ }),
/* 1046 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    './H_SEAS_logo_RGB.svg': __webpack_require__(295),
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Layout/Header.tsx': __webpack_require__(178)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Header$0 = require('./../../src/Layout/Header.tsx');\nconst Header = Header$0.default || (Header$0['Header'] || Header$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The Header uses flexbox for positioning, and accepts a `justify` prop that controls the layout. The default value is `space-between`, which works well for multiple items:'
    },
    {
        'type': 'code',
        'content': 'import logo from \'./H_SEAS_logo_RGB.svg\';\nimport { Logo, PageTitle } from \'mark-one\';\n\n<Header>\n  <Logo\n    image={logo}\n    width="175px"\n    href="#"\n  >\n    The Link Description\n  </Logo>\n  <PageTitle>Application Title</PageTitle>\n  <div>three</div>\n  <div>menu</div>\n  <div>items</div>\n</Header>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'A value of `center` be used to position content around the center. (See [MDN\'s docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) for all supported values).'
    },
    {
        'type': 'code',
        'content': 'import { PageTitle } from \'mark-one\';\n\n<Header justify="center">\n  <PageTitle>Centered Title</PageTitle>\n</Header>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'You can also pass in a custom `background` prop to replace the default transparent background'
    },
    {
        'type': 'code',
        'content': 'import { PageTitle } from \'mark-one\';\n\n<Header justify="center" background="#eafeaf">\n  <PageTitle>Custom Background</PageTitle>\n</Header>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1047 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Logo',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1048)
}
	

/***/ }),
/* 1048 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    './H_SEAS_logo_RGB.svg': __webpack_require__(295),
    'react': __webpack_require__(0),
    './../../src/Layout/Logo.tsx': __webpack_require__(179)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Logo$0 = require('./../../src/Layout/Logo.tsx');\nconst Logo = Logo$0.default || (Logo$0['Logo'] || Logo$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Used for rendering an image link with screen-reader compatible text:'
    },
    {
        'type': 'code',
        'content': 'import logo from \'./H_SEAS_logo_RGB.svg\';\n\n<Logo image={logo} width="500px" height="150px" href="#SEAS">\n  This text is not visible, but is in the DOM\n</Logo>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'By default, it will render at `175px` x `50px`:'
    },
    {
        'type': 'code',
        'content': 'import logo from \'./H_SEAS_logo_RGB.svg\';\n\n<Logo image={logo} href="#SEAS">\n  This text is not visible, but is in the DOM\n</Logo>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1049 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'MenuFlex',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1050)
}
	

/***/ }),
/* 1050 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Layout/MenuFlex.tsx': __webpack_require__(183)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst MenuFlex$0 = require('./../../src/Layout/MenuFlex.tsx');\nconst MenuFlex = MenuFlex$0.default || (MenuFlex$0['MenuFlex'] || MenuFlex$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A flex container to display a menu of items:'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Checkbox, TextInput, POSITION } from \'mark-one\';\n\nconst [checkboxValue, setCheckboxValue] = useState(false);\nconst [textValue, setTextValue] = useState(\'\');\n\n<MenuFlex>\n  <Checkbox\n    id="menuflex-example-checkbox-1"\n    checked={checkboxValue}\n    label="Are you transferring from another department?"\n    onChange={(event) => {\n      setCheckboxValue(!checkboxValue);\n    }}\n  />\n  <TextInput\n    id="menuflex-example-textinput-1"\n    value={textValue}\n    name="department"\n    label="Previous Department (if applicable)"\n    onChange={(event) => {\n      setTextValue(event.target.value);\n    }}\n    labelPosition={POSITION.TOP}\n  />\n</MenuFlex>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1051 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'PageBody',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1052)
}
	

/***/ }),
/* 1052 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Layout/PageBody.tsx': __webpack_require__(180)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst PageBody$0 = require('./../../src/Layout/PageBody.tsx');\nconst PageBody = PageBody$0.default || (PageBody$0['PageBody'] || PageBody$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A very basic component for displaying the main body of a page.'
    },
    {
        'type': 'code',
        'content': 'import { PageTitle } from \'mark-one\';\n\n<PageBody>\n  <PageTitle>Hello world</PageTitle>\n\n  <p>\n    Here is some example content\n  </p>\n</PageBody>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1053 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Paragraph',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1054)
}
	

/***/ }),
/* 1054 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Layout/Paragraph.tsx': __webpack_require__(182)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Paragraph$0 = require('./../../src/Layout/Paragraph.tsx');\nconst Paragraph = Paragraph$0.default || (Paragraph$0['Paragraph'] || Paragraph$0);", requireInRuntime);

module.exports = [{
        'type': 'code',
        'content': '<Paragraph>\n  Please select an email address using your first initial and last name unless you have a strong preference otherwise.\n</Paragraph>\n<Paragraph>\n  The part of your email address before the @ must be at least 3 and at most 20 characters long, and must consist of only lowercase letters and digits.\n</Paragraph>',
        'settings': {},
        'evalInContext': evalInContext
    }]
	

/***/ }),
/* 1055 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ExternalLink',
    'tags': {},
    'description': 'A default <a> element with styles mirroring the Link component\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'declarations': [{
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                }],
            'required': false,
            'type': { 'name': 'void | WebTarget' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'declarations': [{
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                }],
            'required': false,
            'type': { 'name': 'void | WebTarget' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'declarations': void 0,
            'required': false,
            'type': { 'name': 'DefaultTheme' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1056)
}
	

/***/ }),
/* 1056 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    '@fortawesome/react-fontawesome': __webpack_require__(64),
    '@fortawesome/free-solid-svg-icons': __webpack_require__(65),
    'react': __webpack_require__(0),
    './../../src/Links/ExternalLink.tsx': __webpack_require__(219)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ExternalLink$0 = require('./../../src/Links/ExternalLink.tsx');\nconst ExternalLink = ExternalLink$0.default || (ExternalLink$0['ExternalLink'] || ExternalLink$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This component is a styled version of a regular `<a>` link, for use when we need to link to external resources.'
    },
    {
        'type': 'code',
        'content': 'import { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faSignOutAlt } from \'@fortawesome/free-solid-svg-icons\';\n\n<ExternalLink href="https://key.harvard.edu/logout">\n  Log Out\n  {\' \'}\n  <FontAwesomeIcon icon={faSignOutAlt} />\n</ExternalLink>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1057 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Link',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1058)
}
	

/***/ }),
/* 1058 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react-router-dom': __webpack_require__(296),
    'react': __webpack_require__(0),
    './../../src/Links/Link.tsx': __webpack_require__(218)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Link$0 = require('./../../src/Links/Link.tsx');\nconst Link = Link$0.default || (Link$0['Link'] || Link$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This component is an extension of the default [React Router Link](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md) component with custom styling. This `Link` component could be used in conjunction with our `Mark-One` `TabList` and `TabListItem` components to create a navigation bar. In order to use this component, the Link must be a child of a React Router.'
    },
    {
        'type': 'code',
        'content': 'import { MemoryRouter } from \'react-router-dom\';\n\n<MemoryRouter>\n  <Link to="#">Test Link</Link>\n</MemoryRouter>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1059 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'DropdownList',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1060)
}
	

/***/ }),
/* 1060 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Lists/DropdownList.tsx': __webpack_require__(173)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst DropdownList$0 = require('./../src/Lists/DropdownList.tsx');\nconst DropdownList = DropdownList$0.default || (DropdownList$0['DropdownList'] || DropdownList$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1061 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'DropdownListItem',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1062)
}
	

/***/ }),
/* 1062 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Lists/DropdownListItem.tsx': __webpack_require__(174)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst DropdownListItem$0 = require('./../src/Lists/DropdownListItem.tsx');\nconst DropdownListItem = DropdownListItem$0.default || (DropdownListItem$0['DropdownListItem'] || DropdownListItem$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1063 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'List',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1064)
}
	

/***/ }),
/* 1064 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Lists/List.tsx': __webpack_require__(175)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst List$0 = require('./../../src/Lists/List.tsx');\nconst List = List$0.default || (List$0['List'] || List$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `<List>` and `<ListItem>` components can be used to render an ordered or unordered list of elements. Both list styles are visually identical, but should be specified for proper html semantics.\n\nThe ordered version of the list:'
    },
    {
        'type': 'code',
        'content': 'import { List, ListItem } from \'mark-one\';\n\n<List ordered>\n  <ListItem>One</ListItem>\n  <ListItem>Two</ListItem>\n  <ListItem>Three</ListItem>\n</List>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'And the unordered version of the list:'
    },
    {
        'type': 'code',
        'content': 'import { List, ListItem } from \'mark-one\';\n\n<List>\n  <ListItem>Dogs</ListItem>\n  <ListItem>Cats</ListItem>\n  <ListItem>Fish</ListItem>\n</List>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1065 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ListItem',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1066)
}
	

/***/ }),
/* 1066 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Lists/ListItem.tsx': __webpack_require__(176)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ListItem$0 = require('./../src/Lists/ListItem.tsx');\nconst ListItem = ListItem$0.default || (ListItem$0['ListItem'] || ListItem$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1067 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Modal',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1068)
}
	

/***/ }),
/* 1068 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Modals/Modal.tsx': __webpack_require__(213)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Modal$0 = require('./../../src/Modals/Modal.tsx');\nconst Modal = Modal$0.default || (Modal$0['Modal'] || Modal$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The Modal component renders an overlay box that can be used to call out information to the user. Background content will be dimmed, and clicking outside of the modal box will cause the modal to disappear.\n\nThe Modal itself has very little styling applied to it. This is intentional. The idea is that the `<Modal>` component should only be concerned with the open/close behavior, and any styles can be set on the `children` components. For this purpose, we also have defined specific `<ModalHeader>`, `<ModalBody>`, and `<ModalFooter>` components.\n\nThe `isVisible` prop will be used by the parent component to control whether or not the modal should be displayed. In most cases, this will be done using React\'s `useState` hook, as in this example:'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { \n  Button,\n  ModalBody,\n  ModalHeader,\n  ModalFooter,\n} from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\n\n<>\n  <Button\n    id="modal-example-button-1"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="modal-example-button-1"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalHeader\n      closeButtonHandler={() => setModalVisible(false)}\n    >\n      Modal Example 1\n    </ModalHeader>\n    <ModalBody>\n      <div>This can be any arbitrary content</div>\n    </ModalBody>\n    <ModalFooter>\n      <Button\n        id="modal-example-button-2"\n        onClick={() => setModalVisible(false)}\n      >\n        Close Modal\n      </Button>\n    </ModalFooter>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Open/Close effects\n\nIf you need to run additional code when the modal is opened and closed (e.g. focus an input on open, or clear the values from a form on close), you\'ll need to do so in the parent function that controls the `isVisible` prop.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef } from \'react\';\nimport {\n  Button,\n  ModalBody,\n  ModalHeader,\n  ModalFooter,\n  TextInput,\n} from \'mark-one\';\n\nconst inputRef = useRef(null);\nconst [modalVisible, setModalVisible] = useState(false);\nconst [formValue, setFormValue] = useState(\'\');\n\nconst switchModal = (isOpen) => {\n  setModalVisible(isOpen);\n  if (isOpen) {\n    setTimeout(() => { inputRef.current.focus() }, 500)\n  } else {\n    setFormValue(\'\');\n  }\n}\n\n<>\n  <Button\n    id="modal-example-button-3"\n    onClick={() => { switchModal(true) }}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="modal-example-button-3"\n    closeHandler={() => { switchModal(false) }}\n    isVisible={modalVisible}\n  >\n    <ModalHeader\n      closeButtonHandler={() => { switchModal(false) }}\n    >\n      Modal Example 2\n    </ModalHeader>\n    <ModalBody>\n      <div>\n        Any text entered here will be cleared when the modal closes\n      </div>\n      <div>\n        <TextInput\n          forwardRef={inputRef}\n          label="Enter text:"\n          value={formValue}\n          onChange={(evt) => {\n            setFormValue(evt.target.value);\n          }}\n        />\n      </div>\n    </ModalBody>\n    <ModalFooter>\n      <Button\n        id="modal-example-button-4"\n        onClick={() => { switchModal(false) }}\n      >\n        Close Modal\n      </Button>\n    </ModalFooter>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Prompt before closing\n\nThe `useConfirm` hook can be used to track changes to data and prompt the user to confirm that they want to discard those changes before closing the modal.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef } from \'react\';\nimport {\n  Button,\n  ModalBody,\n  ModalHeader,\n  ModalFooter,\n  TextInput,\n  useConfirm,\n} from \'mark-one\';\n\nconst inputRef = useRef(null);\nconst [modalVisible, setModalVisible] = useState(false);\nconst [formValue, setFormValue] = useState(\'\');\nconst { markAsChanged, confirmDiscard } = useConfirm();\n\nconst switchModal = (isOpen) => {\n  setModalVisible(isOpen);\n  if (isOpen) {\n    setTimeout(() => { inputRef.current.focus() }, 500)\n  } else {\n    setFormValue(\'\');\n  }\n}\n\n<>\n  <Button\n    id="modal-example-button-5"\n    onClick={() => { switchModal(true) }}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="modal-example-button-5"\n    closeHandler={() => { \n      if (confirmDiscard()) {\n        switchModal(false)\n      }\n    }}\n    isVisible={modalVisible}\n  >\n    <ModalHeader\n      closeButtonHandler={() => { \n        if (confirmDiscard()) {\n          switchModal(false)\n        }\n    }}\n    >\n      Modal Example 3\n    </ModalHeader>\n    <ModalBody>\n      <div>\n        After entering text here, you\'ll be prompted to confirm before closing the modal\n      </div>\n      <div>\n        <TextInput\n          forwardRef={inputRef}\n          label="Enter text:"\n          value={formValue}\n          onChange={(evt) => {\n            markAsChanged(true);\n            setFormValue(evt.target.value);\n          }}\n        />\n      </div>\n    </ModalBody>\n    <ModalFooter>\n      <Button\n        id="modal-example-button-6"\n        onClick={() => { \n          if(confirmDiscard()) {\n            switchModal(false)\n          }\n        }}\n      >\n        Close Modal\n      </Button>\n    </ModalFooter>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1069 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ModalBody',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1070)
}
	

/***/ }),
/* 1070 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Modals/ModalBody.tsx': __webpack_require__(214)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ModalBody$0 = require('./../../src/Modals/ModalBody.tsx');\nconst ModalBody = ModalBody$0.default || (ModalBody$0['ModalBody'] || ModalBody$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This is a very basic component that just adds padding to make the main content of the modal line up with the `<ModalHeader>` and `<ModalFooter>`. This is optional, as the user may want to handle the layout and spacing for the content on their own.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Button, Modal } from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\n\n<>\n  <Button\n    id="modalBody-example-button-1"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="modalBody-example-button-1"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalBody>\n      <p>Any content can be placed inside the Modal Body</p>\n      <Button\n        id="modalBody-example-button-2"\n        onClick={() => setModalVisible(false)}\n      >\n          Close Modal\n      </Button>\n    </ModalBody>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Overflow example: When the contents of the modal body exceeds the height of the page, the user can scroll to see the full contents of the modal.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport {\n  Button,\n  ModalHeader,\n  Modal,\n  Fieldset,\n  Checkbox,\n  TextInput,\n  RadioButton,\n  POSITION,\n} from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Button\n    id="modalBody-example-button-3"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="modalBody-example-button-3"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalHeader\n      closeButtonHandler={() => setModalVisible(false)}\n    >\n      Overflow Example\n    </ModalHeader>\n    <ModalBody>\n      <>\n        <Fieldset\n          legend="Fieldset Legend"\n          isBorderVisible={false}\n          isLegendVisible={false}\n        >\n          <Checkbox\n            id="modalBody-example-checkbox-1"\n            label="Option 1"\n            disabled\n            checked\n          />\n          <Checkbox\n            id="modalBody-example-checkbox-2"\n            label="Option 2"\n            disabled\n            checked\n          />\n          <Checkbox\n            id="modalBody-example-checkbox-3"\n            label="Option 3"\n            disabled\n            checked\n          />\n          <Checkbox\n            id="modalBody-example-checkbox-4"\n            label="Option 4"\n            disabled\n            checked\n          />\n          <Checkbox\n            id="modalBody-example-checkbox-5"\n            label="Option 5"\n            disabled\n            checked\n          />\n          <Checkbox\n            id="modalBody-example-checkbox-6"\n            label="Option 6"\n            disabled\n            checked\n          />\n          <Checkbox\n            id="modalBody-example-checkbox-7"\n            label="Option 7"\n            disabled\n            checked\n          />\n          <Checkbox\n            id="modalBody-example-checkbox-8"\n            label="Option 8"\n            disabled\n            checked\n          />\n          <Checkbox\n            id="modalBody-example-checkbox-9"\n            label="Option 9"\n            disabled\n            checked\n          />\n          <Checkbox\n            id="modalBody-example-checkbox-10"\n            label="Option 10"\n            disabled\n            checked\n          />\n          <TextInput\n            value="test"\n            name="example"\n            id="example"\n            label="Description:"\n            labelPosition={POSITION.TOP}\n            disabled="disabled"\n            onChange={() => {}}\n          />\n          <RadioButton\n            id="modalBody-example-radioButton-1"\n            label="One"\n            value="one"\n            name="quantity"\n            checked={checkedValue === \'one\'}\n            onChange={(event) => setCheckedValue(event.target.value)}\n          />\n          <RadioButton\n            id="modalBody-example-radioButton-2"\n            label="Two"\n            value="two"\n            name="quantity"\n            checked={checkedValue === \'two\'}\n            onChange={(event) => setCheckedValue(event.target.value)}\n          />\n        </Fieldset>\n      </>\n      <Button\n        id="modalBody-example-button-4"\n        onClick={() => setModalVisible(false)}\n      >\n          Close Modal\n      </Button>\n    </ModalBody>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1071 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ModalFooter',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1072)
}
	

/***/ }),
/* 1072 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Modals/ModalFooter.tsx': __webpack_require__(215)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ModalFooter$0 = require('./../../src/Modals/ModalFooter.tsx');\nconst ModalFooter = ModalFooter$0.default || (ModalFooter$0['ModalFooter'] || ModalFooter$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This is a utility component for adding a footer row to the `<Modal>`. It\'s set up to use `flexbox`, and fill in buttons from right to left. For example:'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport {\n  Button,\n  Modal,\n  ModalBody,\n  ModalHeader,\n} from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\n\n<>\n  <Button\n    id="modalFooter-example-button-1"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="modalFooter-example-button-1"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalHeader\n      closeButtonHandler={() => setModalVisible(false)}\n    >\n      Modal Footer Example\n    </ModalHeader>\n    <ModalBody>\n      <div>\n        This can be any arbitrary content\n      </div>\n    </ModalBody>\n    <ModalFooter>\n      <Button\n        id="modalFooter-example-button-2"\n        onClick={() => setModalVisible(false)}\n      >\n        One\n      </Button>\n      <Button\n        id="modalFooter-example-button-3"\n        onClick={() => setModalVisible(false)}\n      >\n        Two\n      </Button>\n      <Button\n        id="modalFooter-example-button-4"\n        onClick={() => setModalVisible(false)}\n      >\n        Three\n      </Button>\n    </ModalFooter>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1073 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ModalHeader',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1074)
}
	

/***/ }),
/* 1074 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    'Theme': __webpack_require__(8),
    './../../src/Modals/ModalHeader.tsx': __webpack_require__(216)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ModalHeader$0 = require('./../../src/Modals/ModalHeader.tsx');\nconst ModalHeader = ModalHeader$0.default || (ModalHeader$0['ModalHeader'] || ModalHeader$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This is a utility component for adding a header to the `<Modal>`.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport {\n  Button,\n  Modal,\n  ModalBody,\n  ModalFooter,\n} from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\n\n<>\n  <Button\n    id="modalHeader-example-button-1"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="modalHeader-example-button-1"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalHeader\n      closeButtonHandler={() => {setModalVisible(false)}}\n    >\n      Modal Header\n    </ModalHeader>\n    <ModalBody>\n      <div>\n        This can be any arbitrary content\n      </div>\n    </ModalBody>\n    <ModalFooter>\n      <Button\n        id="modalHeader-example-button-2"\n        onClick={() => setModalVisible(false)}\n      >\n        Close Modal\n      </Button>\n    </ModalFooter>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the `forwardRef`\n\nRef example: The optional `forwardRef` property is set. When the test button is\nclicked, the focus shifts to the modal header.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef, } from \'react\';\nimport { VARIANT } from \'Theme\';\nimport {\n  Button,\n  Dropdown,\n  Modal,\n  ModalBody,\n} from \'mark-one\';\n\nconst RefExample = () => {\n  const ref = useRef(null);\n  const [value, setValue] = useState(\'\');\n  const [modalVisible, setModalVisible] = useState(false);\n  const onButtonClick = () => {\n    setModalVisible(true);\n    /* Since modal may not have been rendered in DOM, wait for it to be\n    rendered by letting next task of event queue run first */\n    setTimeout(() => ref.current.focus());\n  }\n  return (\n    <>\n      <Button\n        id="modalHeader-example-button-3"\n        onClick={onButtonClick}\n        variant={VARIANT.INFO}\n      >\n        Focus the Header\n      </Button>\n      <Modal\n        ariaLabelledBy="modalHeader-example-button-3"\n        closeHandler={() => {setModalVisible(false)}}\n        isVisible={modalVisible}\n      >\n        <ModalHeader\n          closeButtonHandler={() => {setModalVisible(false)}}\n          tabIndex={0}\n          forwardRef={ref}\n        >\n          Modal Header\n        </ModalHeader>\n        <ModalBody>\n          <Dropdown\n            options={[\n              {\n                value: \'all\',\n                label: \'All\',\n              },\n              {\n                value: \'fall\',\n                label: \'Fall\',\n              },\n              {\n                value: \'spring\',\n                label: \'Spring\',\n              },\n            ]}\n            value={value}\n            id="semesters"\n            name="semesters"\n            onChange={(event) => {\n              setValue(event.target.value);\n              alert(\'You changed the selection to \' + event.target.value);\n            }}\n            label="Semester"\n          />\n          <Button\n            id="modalHeader-example-button-4"\n            onClick={() => setModalVisible(false)}\n            variant={VARIANT.BASE}\n          >\n            Close Modal\n          </Button>\n        </ModalBody>\n      </Modal>\n    </>\n  );\n};\n<RefExample />',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1075 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ModalMessage',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Text to be displayed',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                'name': 'ModalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                    'name': 'ModalMessageProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the modal message',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                'name': 'ModalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                    'name': 'ModalMessageProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Allows you to pass in a variant property from the VARIANT enum',
            'name': 'variant',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                'name': 'ModalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                    'name': 'ModalMessageProps'
                }],
            'required': true,
            'type': { 'name': 'VARIANT' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'ARIA_LIVE_VARIANT.ASSERTIVE' },
            'description': 'The value of the aria-live property',
            'name': 'ariaLive',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                'name': 'ModalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                    'name': 'ModalMessageProps'
                }],
            'required': false,
            'type': { 'name': 'ARIA_LIVE_VARIANT' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'alert' },
            'description': 'The aria role of the message displayed. A list of the different role\nvalues that should be used can be found in the w3 docs:\nhttps://www.w3.org/TR/wai-aria-1.1/#live_region_roles\nThe default value role is \'alert.\'',
            'name': 'role',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                'name': 'ModalMessageProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                    'name': 'ModalMessageProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1076)
}
	

/***/ }),
/* 1076 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Modals/ModalMessage.tsx': __webpack_require__(217)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ModalMessage$0 = require('./../../src/Modals/ModalMessage.tsx');\nconst ModalMessage = ModalMessage$0.default || (ModalMessage$0['ModalMessage'] || ModalMessage$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.NEGATIVE`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<ModalMessage\n  id="negativeMessage"\n  variant={VARIANT.NEGATIVE}\n>\n  Error: Please try again.\n</ModalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.PRIMARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<ModalMessage\n  id="primaryMessage"\n  variant={VARIANT.PRIMARY}\n>\n  Success: The information has been updated.\n</ModalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.INFO`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<ModalMessage\n  id="infoMessage"\n  variant={VARIANT.INFO}\n>\n  Note: All fields are required to submit the form.\n</ModalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.BASE`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<ModalMessage\n  id="baseMessage"\n  variant={VARIANT.BASE}\n>\n  Note: All fields are required to submit the form.\n</ModalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1077 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Popover',
    'tags': {},
    'description': 'Renders a small popup notification next to an element on the page.\nBy default the Popover will appear directly above and to the right of its\nlocation in the DOM, but the xOffset and yOffset props can be used to move\nit elsewhere\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The content that will appear inside the body of the popover',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                'name': 'PopoverProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                    'name': 'PopoverProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Control whether the Popover should be displayed on the page.',
            'name': 'isVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                'name': 'PopoverProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                    'name': 'PopoverProps'
                }],
            'required': true,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'An optional passthrough className to allow restyling the Popover\nWill be applied to the PopoverWrapper, allowing for cascading styles to be\napplied to the internal components',
            'name': 'className',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                'name': 'PopoverProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                    'name': 'PopoverProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'An optional forwarded Ref that will be attached to the PopoverBody, e.g.\nfor focusing the content',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                'name': 'PopoverProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                    'name': 'PopoverProps'
                }],
            'required': false,
            'type': { 'name': 'Ref<HTMLDivElement>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'The optional content that will appear as the heading of the Popover',
            'name': 'title',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                'name': 'PopoverProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                    'name': 'PopoverProps'
                }],
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '0' },
            'description': 'The Optional  offset that should be applied to the left side of the the\nPopover element, relative to its placement in the DOM.\nShould specified in pi, em, rem, % or 0.',
            'name': 'xOffset',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                'name': 'PopoverProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                    'name': 'PopoverProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '0' },
            'description': 'The Optional  offset that should be applied to the bottom of the the\nPopover element, relative to its placement in the DOM.\nShould specified in pi, em, rem, % or 0.',
            'name': 'yOffset',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                'name': 'PopoverProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Popover/Popover.tsx',
                    'name': 'PopoverProps'
                }],
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1078)
}
	

/***/ }),
/* 1078 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(9),
    './../../src/Popover/Popover.tsx': __webpack_require__(220)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Popover$0 = require('./../../src/Popover/Popover.tsx');\nconst Popover = Popover$0.default || (Popover$0['Popover'] || Popover$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The Popover component displays a small information window next to other elements in the page. The default behavior is to display the element directly above and to the right of its original DOM location, though the `xOffset` and `yOffset` values can be used to move it farther away (in the case of positive values) or down and to the left (in the case of negative values).'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Button, Popover } from \'mark-one\';\n\nconst [popoverVisible, setPopoverVisible] = useState(false);\n\n<>\n  <Popover\n   title="Popover"\n   xOffset={\'1em\'}\n   yOffset={\'5px\'}\n   isVisible={popoverVisible}\n  >\n    Additional Information\n  </Popover>\n  <Button\n    id="popover-example-button-1"\n    type="button"\n    onClick={() => { setPopoverVisible((current) => !current); }}\n  >\n    Toggle Popover\n  </Button>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The `xOffset`, `yOffset`, and `title` props are all optional, and can be omitted if not needed.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Button, Popover } from \'mark-one\';\n\nconst [popoverVisible, setPopoverVisible] = useState(false);\n\n<>\n  <Popover\n   isVisible={popoverVisible}\n  >\n    Minimum viable popover \n  </Popover>\n  <Button\n    id="popover-example-button-2"\n    type="button"\n    onClick={() => { setPopoverVisible((current) => !current); }}\n  >\n    Toggle Popover\n  </Button>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1079 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'LoadSpinner',
    'tags': {},
    'description': 'Data load spinner component with styled text under the spinner\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the text under the spinner',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinner.tsx',
                'name': 'LoadSpinnerProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinner.tsx',
                    'name': 'LoadSpinnerProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'SPINNER_TEXT.DARK' },
            'description': 'Specifies the color of text under the spinner',
            'name': 'textColor',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinner.tsx',
                'name': 'LoadSpinnerProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinner.tsx',
                    'name': 'LoadSpinnerProps'
                }],
            'required': false,
            'type': { 'name': 'SPINNER_TEXT' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1080)
}
	

/***/ }),
/* 1080 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'styled-components': __webpack_require__(4),
    'react': __webpack_require__(0),
    './../../src/Spinners/LoadSpinner.tsx': __webpack_require__(221)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst LoadSpinner$0 = require('./../../src/Spinners/LoadSpinner.tsx');\nconst LoadSpinner = LoadSpinner$0.default || (LoadSpinner$0['LoadSpinner'] || LoadSpinner$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A load spinner component that can be used to show the loading state of the data.'
    },
    {
        'type': 'code',
        'content': '<LoadSpinner>\n  Loading Data\n</LoadSpinner>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'To style the text to have a light color. Note that a dark background is used to show the light text.'
    },
    {
        'type': 'code',
        'content': 'import { SPINNER_TEXT } from \'mark-one\';\nimport styled from \'styled-components\';\n\nconst DarkBackground = styled.div`\n  background: ${({ theme }) => theme.color.background.darker };\n`;\n\n<DarkBackground>\n  <LoadSpinner textColor={SPINNER_TEXT.LIGHT}>\n    Loading Data\n  </LoadSpinner>\n</DarkBackground>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1081 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'LoadSpinnerText',
    'tags': {},
    'description': 'Data load spinner component with styled text under the spinner\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the text under the spinner',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinnerText.tsx',
                'name': 'LoadSpinnerTextProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinnerText.tsx',
                    'name': 'LoadSpinnerTextProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'SPINNER_TEXT.DARK' },
            'description': 'Specifies the color of the text under the spinner',
            'name': 'color',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinnerText.tsx',
                'name': 'LoadSpinnerTextProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinnerText.tsx',
                    'name': 'LoadSpinnerTextProps'
                }],
            'required': false,
            'type': { 'name': 'SPINNER_TEXT' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1082)
}
	

/***/ }),
/* 1082 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Spinners/LoadSpinnerText.tsx': __webpack_require__(130)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst LoadSpinnerText$0 = require('./../src/Spinners/LoadSpinnerText.tsx');\nconst LoadSpinnerText = LoadSpinnerText$0.default || (LoadSpinnerText$0['LoadSpinnerText'] || LoadSpinnerText$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1083 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Table',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1084)
}
	

/***/ }),
/* 1084 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'styled-components': __webpack_require__(4),
    'react': __webpack_require__(0),
    './../../src/Tables/Table.tsx': __webpack_require__(189)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Table$0 = require('./../../src/Tables/Table.tsx');\nconst Table = Table$0.default || (Table$0['Table'] || Table$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of the `Table` component with the `alignment` prop set to the enum value `ALIGN.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableHeadingCell,\n  TableHead,\n} from \'mark-one\';\n\n<Table>\n  <TableHead>\n    <TableRow>\n      <TableHeadingCell scope={\'col\'}>ID</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>First Name</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Last Name</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody isScrollable={true}>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.LEFT} foo="blue">1</TableCell>\n      <TableCell alignment={ALIGN.LEFT} foo="blue">Kristin</TableCell>\n      <TableCell alignment={ALIGN.LEFT} foo="blue">Glenn</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.LEFT}>2</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Jack</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Thompson</TableCell>\n    </TableRow>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.LEFT}>3</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Lianne</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Michaels</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.LEFT}>4</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Gabriela</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Hines</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of the `Table` component with the `alignment` prop set to the enum value `ALIGN.CENTER.` This example also demonstrates the usage of the `variant` property, which is set to `TEXT_VARIANT.NEGATIVE` for two table cells and `TEXT_VARIANT.MEDIUM` for another two table cells.'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableHeadingCell,\n  TableHead,\n  TEXT_VARIANT,\n} from \'mark-one\';\n\n<Table>\n  <TableHead>\n    <TableRow>\n      <TableHeadingCell scope={\'col\'}>ID</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>First Name</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Last Name</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody isScrollable={true}>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.CENTER}>1</TableCell>\n      <TableCell alignment={ALIGN.CENTER}>Kristin</TableCell>\n      <TableCell alignment={ALIGN.CENTER}>Glenn</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.CENTER}>2</TableCell>\n      <TableCell\n        alignment={ALIGN.CENTER}\n        variant={TEXT_VARIANT.MEDIUM}\n      >\n        Jack\n      </TableCell>\n      <TableCell\n        alignment={ALIGN.CENTER}\n        variant={TEXT_VARIANT.MEDIUM}\n      >\n        Thompson\n      </TableCell>\n    </TableRow>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.CENTER}>3</TableCell>\n      <TableCell\n        alignment={ALIGN.CENTER}\n        variant={TEXT_VARIANT.NEGATIVE}\n      >\n        Lianne\n      </TableCell>\n      <TableCell\n        alignment={ALIGN.CENTER}\n        variant={TEXT_VARIANT.NEGATIVE}\n      >\n        Michaels\n      </TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.CENTER}>4</TableCell>\n      <TableCell alignment={ALIGN.CENTER}>Gabriela</TableCell>\n      <TableCell alignment={ALIGN.CENTER}>Hines</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of the `Table` component with the `alignment` prop set to the enum value `ALIGN.RIGHT.`'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableHeadingCell,\n  TableHead,\n} from \'mark-one\';\n\n<Table>\n  <TableHead>\n    <TableRow>\n      <TableHeadingCell scope={\'col\'}>ID</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>First Name</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Last Name</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody isScrollable={true}>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.RIGHT}>1</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Kristin</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Glenn</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.RIGHT}>2</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Jack</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Thompson</TableCell>\n    </TableRow>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.RIGHT}>3</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Lianne</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Michaels</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.RIGHT}>4</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Gabriela</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Hines</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of the `Table` component in which the `alignment` is not set. In this case, the `alignment` property defaults to `ALIGN.LEFT` per our default props. This example also shows the `backgroundColor` property set to the value `#ffdd2e` for a `TableCell.`'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableHeadingCell,\n  TableHead,\n} from \'mark-one\';\n\n<Table>\n  <TableHead>\n    <TableRow>\n      <TableHeadingCell scope={\'col\'}>ID</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>First Name</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Last Name</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody isScrollable={true}>\n    <TableRow isStriped={true}>\n      <TableCell>1</TableCell>\n      <TableCell>Kristin</TableCell>\n      <TableCell>Glenn</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell backgroundColor=\'#ffdd2e\'>2</TableCell>\n      <TableCell>Jack</TableCell>\n      <TableCell>Thompson</TableCell>\n    </TableRow>\n    <TableRow isStriped={true}>\n      <TableCell>3</TableCell>\n      <TableCell>Lianne</TableCell>\n      <TableCell>Michaels</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell>4</TableCell>\n      <TableCell>Gabriela</TableCell>\n      <TableCell>Hines</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following example of the `Table` component is  where `isSticky` prop is set to make the TableHead position sticky.  In this case, when the page is scrolled, the TableHead will stick and the TableHead position defaults to `isSticky` property.'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableHeadingCell,\n  TableHead,\n} from \'mark-one\';\n\nimport styled from \'styled-components\';\nconst TableWrapper = styled.div`\n  overflow: scroll;\n  height:20rem;\n`;\n <TableWrapper>\n<Table>\n  <TableHead isSticky>\n    <TableRow>\n      <TableHeadingCell scope={\'col\'}>First Row</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Second Row</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Last Row</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody isScrollable={true}>\n    {Array.from({length: 126}, (_, i) => (\n    <TableRow isStriped= {i%2===0}>\n      <TableCell>{i}</TableCell>\n      <TableCell>{i}</TableCell>\n      <TableCell>{i}</TableCell>\n    </TableRow>)\n    )}\n  </TableBody>\n</Table>\n</TableWrapper>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### More Complex Layouts\n\nSome tables may require more complex layouts, such as cells that span multiple columns/rows, or layered headers. For example:'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableRowHeadingCell,\n  TableHeadingCell,\n  TableHeadingSpacer,\n  TableCellList,\n  TableCellListItem,\n  TableHead,\n} from \'mark-one\';\n\n<Table>\n  <col />\n  <colgroup span="4" />\n  <colgroup span="4" />\n  <TableHead>\n    <TableRow noHighlight>\n      <TableHeadingSpacer />\n      <TableHeadingCell\n        backgroundColor="transparent"\n        colSpan="4"\n        scope="colgroup"\n      >\n        Fall 2019\n      </TableHeadingCell>\n      <TableHeadingCell\n        backgroundColor="transparent"\n        colSpan="4"\n        scope="colgroup"\n      >\n        Spring 2020\n      </TableHeadingCell>\n    </TableRow>\n    <TableRow>\n      <TableHeadingCell scope="col" rowSpan="2">Course</TableHeadingCell>\n      <TableHeadingCell scope="col" rowSpan="2">Instructors</TableHeadingCell>\n      <TableHeadingCell colSpan="3">Enrollment</TableHeadingCell>\n      <TableHeadingCell scope="col" rowSpan="2">Instructors</TableHeadingCell>\n      <TableHeadingCell colSpan="3">Enrollment</TableHeadingCell>\n    </TableRow>\n    <TableRow>\n      <TableHeadingCell scope="col">Pre</TableHeadingCell>\n      <TableHeadingCell scope="col">Study</TableHeadingCell>\n      <TableHeadingCell scope="col">Actual</TableHeadingCell>\n      <TableHeadingCell scope="col">Pre</TableHeadingCell>\n      <TableHeadingCell scope="col">Study</TableHeadingCell>\n      <TableHeadingCell scope="col">Actual</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody>\n    <TableRow>\n      <TableRowHeadingCell scope="row">CS 50</TableRowHeadingCell>\n      <TableCell>\n        <TableCellList>\n          <TableCellListItem>\n            Glenn, Kristin\n          </TableCellListItem>\n          <TableCellListItem>\n            Thompson, Jack\n          </TableCellListItem>\n        </TableCellList>\n      </TableCell>\n      <TableCell>600</TableCell>\n      <TableCell>480</TableCell>\n      <TableCell>300</TableCell>\n      <TableCell></TableCell>\n      <TableCell />\n      <TableCell />\n      <TableCell />\n    </TableRow>\n    <TableRow isStriped>\n      <TableRowHeadingCell scope="row">CS 51</TableRowHeadingCell>\n      <TableCell></TableCell>\n      <TableCell />\n      <TableCell />\n      <TableCell />\n      <TableCell>\n        <TableCellList>\n          <TableCellListItem>\n            Michaels, Lianne\n          </TableCellListItem>\n        </TableCellList>\n      </TableCell>\n      <TableCell>185</TableCell>\n      <TableCell>140</TableCell>\n      <TableCell>120</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableRowHeadingCell scope="row">ES 100</TableRowHeadingCell>\n      <TableCell>\n        <TableCellList>\n          <TableCellListItem>\n            Hines, Gabriela\n          </TableCellListItem>\n        </TableCellList>\n      </TableCell>\n      <TableCell>250</TableCell>\n      <TableCell>175</TableCell>\n      <TableCell>80</TableCell>\n      <TableCell>\n        <TableCellList>\n          <TableCellListItem>\n            Hines, Gabriela\n          </TableCellListItem>\n        </TableCellList>\n      </TableCell>\n      <TableCell>300</TableCell>\n      <TableCell>150</TableCell>\n      <TableCell>100</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1085 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableBody',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1086)
}
	

/***/ }),
/* 1086 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableBody.tsx': __webpack_require__(196)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableBody$0 = require('./../src/Tables/TableBody.tsx');\nconst TableBody = TableBody$0.default || (TableBody$0['TableBody'] || TableBody$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1087 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableCell',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1088)
}
	

/***/ }),
/* 1088 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableCell.tsx': __webpack_require__(128)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableCell$0 = require('./../src/Tables/TableCell.tsx');\nconst TableCell = TableCell$0.default || (TableCell$0['TableCell'] || TableCell$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1089 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableCellList',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1090)
}
	

/***/ }),
/* 1090 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableCellList.tsx': __webpack_require__(190)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableCellList$0 = require('./../src/Tables/TableCellList.tsx');\nconst TableCellList = TableCellList$0.default || (TableCellList$0['TableCellList'] || TableCellList$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1091 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableCellListItem',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1092)
}
	

/***/ }),
/* 1092 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableCellListItem.tsx': __webpack_require__(191)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableCellListItem$0 = require('./../src/Tables/TableCellListItem.tsx');\nconst TableCellListItem = TableCellListItem$0.default || (TableCellListItem$0['TableCellListItem'] || TableCellListItem$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1093 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableHead',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1094)
}
	

/***/ }),
/* 1094 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableHead.tsx': __webpack_require__(193)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableHead$0 = require('./../src/Tables/TableHead.tsx');\nconst TableHead = TableHead$0.default || (TableHead$0['TableHead'] || TableHead$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1095 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableHeadingCell',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1096)
}
	

/***/ }),
/* 1096 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableHeadingCell.tsx': __webpack_require__(194)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableHeadingCell$0 = require('./../src/Tables/TableHeadingCell.tsx');\nconst TableHeadingCell = TableHeadingCell$0.default || (TableHeadingCell$0['TableHeadingCell'] || TableHeadingCell$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1097 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableHeadingSpacer',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1098)
}
	

/***/ }),
/* 1098 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableHeadingSpacer.tsx': __webpack_require__(195)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableHeadingSpacer$0 = require('./../src/Tables/TableHeadingSpacer.tsx');\nconst TableHeadingSpacer = TableHeadingSpacer$0.default || (TableHeadingSpacer$0['TableHeadingSpacer'] || TableHeadingSpacer$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1099 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableRow',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1100)
}
	

/***/ }),
/* 1100 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableRow.tsx': __webpack_require__(192)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableRow$0 = require('./../src/Tables/TableRow.tsx');\nconst TableRow = TableRow$0.default || (TableRow$0['TableRow'] || TableRow$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1101 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableRowHeadingCell',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1102)
}
	

/***/ }),
/* 1102 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableRowHeadingCell.tsx': __webpack_require__(197)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableRowHeadingCell$0 = require('./../src/Tables/TableRowHeadingCell.tsx');\nconst TableRowHeadingCell = TableRowHeadingCell$0.default || (TableRowHeadingCell$0['TableRowHeadingCell'] || TableRowHeadingCell$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1103 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TabList',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1104)
}
	

/***/ }),
/* 1104 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'styled-components': __webpack_require__(4),
    'react': __webpack_require__(0),
    './../../src/Tabs/TabList.tsx': __webpack_require__(187)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TabList$0 = require('./../../src/Tabs/TabList.tsx');\nconst TabList = TabList$0.default || (TabList$0['TabList'] || TabList$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following example shows the usage of the TabList and TabListItem components with a StyledNav and StyledLink component.\n\nThe TabList component, along with the TabListItem components where the `isActive` prop is equal to false, are set up to have a background color `transparent`. Since the StyledNav has a background color of `theme.color.background.subtle` (from our MarkOneTheme), we see this background color across most of our tab list. When `isActive` is true for a TabListItem component, the background is `theme.color.background.light`.'
    },
    {
        'type': 'code',
        'content': 'import { TabListItem } from \'mark-one\';\nimport styled from \'styled-components\';\n\nconst StyledNav = styled.nav`\n  background: ${({ theme }) => theme.color.background.subtle};\n`;\n\nconst StyledLink = styled.a`\n  text-decoration: none;\n`;\n\n<StyledNav>\n  <TabList>\n    <TabListItem>\n      <StyledLink href="#">\n        Tab 1\n      </StyledLink>\n    </TabListItem>\n    <TabListItem isActive={true}>\n      <StyledLink href="#">\n        Tab 2\n      </StyledLink>\n    </TabListItem>\n    <TabListItem>\n      <StyledLink href="#">\n        Tab 3\n      </StyledLink>\n    </TabListItem>\n    <TabListItem>\n      <StyledLink href="#">\n        Tab 4\n      </StyledLink>\n    </TabListItem>\n  </TabList>\n</StyledNav>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The nav element in this example does not have a background color set, which is why the background color across the entire TabList defaults to the standard browser background color.'
    },
    {
        'type': 'code',
        'content': '\nimport { TabListItem } from \'mark-one\';\nimport styled from \'styled-components\';\n\nconst StyledLink = styled.a`\n  text-decoration: none;\n`;\n\n<nav>\n  <TabList>\n    <TabListItem>\n      <StyledLink href="#">\n        Tab 1\n      </StyledLink>\n    </TabListItem>\n    <TabListItem isActive={true}>\n      <StyledLink href="#">\n        Tab 2\n      </StyledLink>\n    </TabListItem>\n    <TabListItem>\n      <StyledLink href="#">\n        Tab 3\n      </StyledLink>\n    </TabListItem>\n  </TabList>\n</nav>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1105 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TabListItem',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Text or components to be displayed in the TabList item',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tabs/TabListItem.tsx',
                'name': 'TabListItemProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Tabs/TabListItem.tsx',
                    'name': 'TabListItemProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Controls whether the TabListItem is in focus',
            'name': 'isActive',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tabs/TabListItem.tsx',
                'name': 'TabListItemProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Tabs/TabListItem.tsx',
                    'name': 'TabListItemProps'
                }],
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1106)
}
	

/***/ }),
/* 1106 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tabs/TabListItem.tsx': __webpack_require__(188)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TabListItem$0 = require('./../src/Tabs/TabListItem.tsx');\nconst TabListItem = TabListItem$0.default || (TabListItem$0['TabListItem'] || TabListItem$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1107 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'GlobalCSS',
    'tags': {},
    'description': 'Creates a global stylesheet that will apply to all sub-components,\naugmenting any locally defined styles. It applies some minor style resets,\nsetting margins/padding to 0 and box-sizing to "border-box" for consistency,\nand also sets things like the base background color, base font size, etc.\n\nFor convenience, this component is added as part of the \\[\\[MarkOneWrapper]],\nwhich injects the \\[\\[MarkOneTheme]]. To override the base styles in an\napplication, you can simply create a second stylesheet and add it inside the\nMarkOneWrapper.\n\n```jsx\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> ReactElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> createGlobalStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> MarkOneWrapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'mark-one\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> NewGlobalCSS <span class="token operator">=</span> createGlobalStyle<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  html, body {\n    font-size: 20px;\n  }\n</span><span class="token template-punctuation string">`</span></span>\n\n<span class="token keyword">const</span> <span class="token literal-property property">App</span><span class="token operator">:</span> FunctionComponent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">ReactElement</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MarkOneWrapper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NewGlobalCSS</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token punctuation">{</span><span class="token punctuation">{</span> rest <span class="token keyword">of</span> the application <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MarkOneWrapper</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n\n```\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',
            'name': 'as',
            'parent': void 0,
            'declarations': [{
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                }],
            'required': false,
            'type': { 'name': 'KnownTarget' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'declarations': [{
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                }],
            'required': false,
            'type': { 'name': 'KnownTarget' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'declarations': [
                {
                    'fileName': 'mark-one/mark-one/node_modules/styled-components/dist/types.d.ts',
                    'name': 'TypeLiteral'
                },
                {
                    'fileName': 'mark-one/mark-one/src/Theme/utils.ts',
                    'name': 'TypeLiteral'
                }
            ],
            'required': false,
            'type': { 'name': 'DefaultTheme' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(1108)
}
	

/***/ }),
/* 1108 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Theme/GlobalCSS.tsx': __webpack_require__(166)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst GlobalCSS$0 = require('./../src/Theme/GlobalCSS.tsx');\nconst GlobalCSS = GlobalCSS$0.default || (GlobalCSS$0['GlobalCSS'] || GlobalCSS$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),
/* 1109 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'MarkOneWrapper',
    'tags': {},
    'description': 'Provides the Mark One Theme to all child components. This should be added at\nthe top level of the application, and then any child component that needs to\nuse the theme should include the `useContext()` hook to grab it. e.g.:\n\n```jsx\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> <span class="token constant">SFC</span><span class="token punctuation">,</span> ReactElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> ThemeContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'mark-one\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token literal-property property">TestComponent</span><span class="token operator">:</span> <span class="token constant">SFC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">ReactElement</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token literal-property property">theme</span><span class="token operator">:</span> BaseTheme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> DarkBackgroundDiv <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n    background: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> theme<span class="token punctuation">.</span>color<span class="token punctuation">.</span>background<span class="token punctuation">.</span>dark<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n  </span><span class="token template-punctuation string">`</span></span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DarkBackgroundDiv</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      This will have a dark background.\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DarkBackgroundDiv</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> TestComponent<span class="token punctuation">;</span>\n```\n',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'The content of the app that should receive the theme',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'ThemeWrapperProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                    'name': 'ThemeWrapperProps'
                }],
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        }],
    'examples': __webpack_require__(1110)
}
	

/***/ }),
/* 1110 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'styled-components': __webpack_require__(4),
    'react': __webpack_require__(0),
    './../../src/Theme/MarkOneWrapper.tsx': __webpack_require__(90)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst MarkOneWrapper$0 = require('./../../src/Theme/MarkOneWrapper.tsx');\nconst MarkOneWrapper = MarkOneWrapper$0.default || (MarkOneWrapper$0['MarkOneWrapper'] || MarkOneWrapper$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': '## Mark One Theme Specimens\n\n### Background Colors'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\n\nconst BackgroundDiv = styled.div`\n  background: ${({theme, value, modifier}) => (\n    modifier\n    ? theme.color.background[modifier][value]\n    : theme.color.background[value])\n  };\n  padding: ${({theme}) => (theme.ws.medium)};\n  margin-top: ${({theme}) => (theme.ws.small)};\n  color: ${({theme, fontColor}) => (theme.color.text[fontColor])};\n`;\nconst getFontColor = (shade, meaning) => {\n  if (\n    shade === \'accent\'\n    || (meaning === \'info\'\n      && shade === \'medium\')\n  ) {\n    return \'light\';\n  }\n  return /dark/.test(shade) ? \'light\' : \'dark\';\n}\n\n<>\n  {[\n     \'light\',\n     \'subtle\',\n     \'medium\',\n     \'dark\',\n     \'darker\',\n     \'accent\',\n  ].map((color) => (\n    <BackgroundDiv\n      fontColor={getFontColor(color)}\n      value={color}\n    >\n      Background: {color}\n    </BackgroundDiv>\n  ))}\n  {[\'info\', \'positive\', \'negative\'].map((meaning) => (\n    [\'light\', \'medium\', \'dark\'].map((shade) => (\n      <BackgroundDiv\n        value={shade}\n        modifier={meaning}\n        fontColor={getFontColor(shade, meaning)}\n      >\n        {meaning}: {shade}\n      </BackgroundDiv>\n    ))\n  ))}\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Typography'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\n\nconst TextBlock = styled.span`\n  font-family: ${({theme, type}) => theme.font[type].family};\n  font-weight: ${({theme, type}) => theme.font[type].weight};\n  font-size: ${({theme, type}) => theme.font[type].size}\n`;\n\n<>\n  <div>\n    <TextBlock type="title">This is the title</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="heading">This is the heading type</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="body">This is body text</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="bold">This is bold text</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="data">This is text for rendering data</TextBlock>\n  </div>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Borders and Shadows'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\n\nconst BorderDiv = styled.div`\n  background: ${({theme}) => (theme.color.background.subtle)\n  };\n  padding: ${({theme}) => (theme.ws.medium)};\n  margin-top: ${({theme}) => (theme.ws.large)};\n  border: ${({theme, border})=> (theme.border[border])}\n  box-shadow: ${({theme, shadow})=> (theme.shadow[shadow])}\n`;\n\n<div>\n  {[\'xlight\', \'light\', \'medium\'].map((shadow) => (\n    [\'hairline\', \'light\', \'heavy\'].map((border) => (\n      <BorderDiv\n        border={border}\n        shadow={shadow}\n      >\n        {border} border | {shadow} shadow\n      </BorderDiv>\n    ))\n  ))}\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1111 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'NoteText',
    'tags': {},
    'description': '',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'Text to be displayed',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Typography/NoteText.tsx',
                'name': 'NoteTextProps'
            },
            'declarations': [{
                    'fileName': 'mark-one/mark-one/src/Typography/NoteText.tsx',
                    'name': 'NoteTextProps'
                }],
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        }],
    'examples': __webpack_require__(1112)
}
	

/***/ }),
/* 1112 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Typography/NoteText.tsx': __webpack_require__(206)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst NoteText$0 = require('./../../src/Typography/NoteText.tsx');\nconst NoteText = NoteText$0.default || (NoteText$0['NoteText'] || NoteText$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A text component used to convey information (e.g. a form legend).'
    },
    {
        'type': 'code',
        'content': '<NoteText>\n  Note: * denotes a required field\n</NoteText>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1113 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'PageTitle',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1114)
}
	

/***/ }),
/* 1114 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Typography/PageTitle.tsx': __webpack_require__(204)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst PageTitle$0 = require('./../../src/Typography/PageTitle.tsx');\nconst PageTitle = PageTitle$0.default || (PageTitle$0['PageTitle'] || PageTitle$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A top level heading, used for page headers, application titles etc.\n\n**Note:** For accessibility reasons, any given page should only ever have one(1) `<PageTitle>` component.'
    },
    {
        'type': 'code',
        'content': '<PageTitle>Hello World</PageTitle>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1115 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'SectionHeading',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1116)
}
	

/***/ }),
/* 1116 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Typography/SectionHeading.tsx': __webpack_require__(205)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst SectionHeading$0 = require('./../../src/Typography/SectionHeading.tsx');\nconst SectionHeading = SectionHeading$0.default || (SectionHeading$0['SectionHeading'] || SectionHeading$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Renders a styled `<h2>` element for denoting the start of a new main section within a page, similar to a chapter title.\n\nFor accessibility, The `<SectionHeading>` should be below the `<PageTitle>` in the DOM, and should not be ordered within other heading elements.'
    },
    {
        'type': 'code',
        'content': '<SectionHeading>Section Heading</SectionHeading>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1117 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'SectionSubHeading',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1118)
}
	

/***/ }),
/* 1118 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Typography/SectionSubHeading.tsx': __webpack_require__(207)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst SectionSubHeading$0 = require('./../../src/Typography/SectionSubHeading.tsx');\nconst SectionSubHeading = SectionSubHeading$0.default || (SectionSubHeading$0['SectionSubHeading'] || SectionSubHeading$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Renders a styled `<h3>` element for denoting the heading of a new subsection within a page.\n\nFor accessibility, the `<SectionSubHeading>` should be below the corresponding `<SectionHeading>` in the DOM, and should not be ordered within other heading elements.'
    },
    {
        'type': 'code',
        'content': '<SectionSubHeading>Section Subheading</SectionSubHeading>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1119 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Stat',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1120)
}
	

/***/ }),
/* 1120 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(9),
    'react': __webpack_require__(0),
    './../../src/Typography/Stat.tsx': __webpack_require__(209)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Stat$0 = require('./../../src/Typography/Stat.tsx');\nconst Stat = Stat$0.default || (Stat$0['Stat'] || Stat$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Can be used to style inline text representing data or statistics, such as the scores in the table below.'
    },
    {
        'type': 'code',
        'content': 'import {\n ALIGN,\n Table,\n TableCell,\n TableBody,\n TableRow,\n TableHeadingCell,\n TableHead,\n} from \'mark-one\';\n\n<Table>\n <TableHead>\n   <TableRow>\n     <TableHeadingCell scope={\'col\'}>ID</TableHeadingCell>\n     <TableHeadingCell scope={\'col\'}>First Name</TableHeadingCell>\n     <TableHeadingCell scope={\'col\'}>Last Name</TableHeadingCell>\n     <TableHeadingCell scope={\'col\'}>Score</TableHeadingCell>\n   </TableRow>\n </TableHead>\n <TableBody isScrollable={true}>\n   <TableRow isStriped={true}>\n     <TableCell alignment={ALIGN.LEFT}>1</TableCell>\n     <TableCell alignment={ALIGN.LEFT}>Kristin</TableCell>\n     <TableCell alignment={ALIGN.LEFT}>Glenn</TableCell>\n     <TableCell alignment={ALIGN.RIGHT}>\n         <Stat>1234</Stat>\n     </TableCell>\n   </TableRow>\n   <TableRow>\n     <TableCell alignment={ALIGN.LEFT}>2</TableCell>\n     <TableCell alignment={ALIGN.LEFT}>Jack</TableCell>\n     <TableCell alignment={ALIGN.LEFT}>Thompson</TableCell>\n     <TableCell alignment={ALIGN.RIGHT}>\n         <Stat>2121</Stat>\n     </TableCell>\n   </TableRow>\n   <TableRow isStriped={true}>\n     <TableCell alignment={ALIGN.LEFT}>3</TableCell>\n     <TableCell alignment={ALIGN.LEFT}>Lianne</TableCell>\n     <TableCell alignment={ALIGN.LEFT}>Michaels</TableCell>\n     <TableCell alignment={ALIGN.RIGHT}>\n         <Stat>4321</Stat>\n     </TableCell>\n   </TableRow>\n   <TableRow>\n     <TableCell alignment={ALIGN.LEFT}>4</TableCell>\n     <TableCell alignment={ALIGN.LEFT}>Gabriela</TableCell>\n     <TableCell alignment={ALIGN.LEFT}>Hines</TableCell>\n     <TableCell alignment={ALIGN.RIGHT}>\n         <Stat>925</Stat>\n     </TableCell>\n   </TableRow>\n </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),
/* 1121 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TextDisplay',
    'methods': [],
    'props': [],
    'examples': __webpack_require__(1122)
}
	

/***/ }),
/* 1122 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Typography/TextDisplay.tsx': __webpack_require__(208)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TextDisplay$0 = require('./../../src/Typography/TextDisplay.tsx');\nconst TextDisplay = TextDisplay$0.default || (TextDisplay$0['TextDisplay'] || TextDisplay$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A corollary to the `TextInput`, the `TextDisplay` is intended for displaying a labeled piece of non-editable, informational text.\n\nLabel example: the optional `labelPosition` prop defaults to `POSITION.LEFT`.'
    },
    {
        'type': 'code',
        'content': '<TextDisplay id="example" label="Description" value="Display Text"></TextDisplay>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: `labelPosition` prop is set to `POSITION.TOP`.'
    },
    {
        'type': 'code',
        'content': '<TextDisplay id="example" label="Description" value="Display Text" labelPosition="top"></TextDisplay>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: the optional `isLabelVisible` prop is set to false.'
    },
    {
        'type': 'code',
        'content': '<TextDisplay id="example" label="Description" value="Display Text" isLabelVisible={false}></TextDisplay>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ })
/******/ ]);