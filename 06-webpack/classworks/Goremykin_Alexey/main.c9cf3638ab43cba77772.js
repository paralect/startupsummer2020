/*! For license information please see main.c9cf3638ab43cba77772.js.LICENSE.txt */
!function(e){var n={};function _(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,_),t.l=!0,t.exports}_.m=e,_.c=n,_.d=function(e,n,r){_.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,n){if(1&n&&(e=_(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(_.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)_.d(r,t,function(n){return e[n]}.bind(null,t));return r},_.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(n,"a",n),n},_.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},_.p="",_(_.s="./src/index.js")}({"./src/assets/text.txt":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = ("Define plugin работает: ");\n\n//# sourceURL=webpack:///./src/assets/text.txt?')},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_text_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/text.txt */ "./src/assets/text.txt");\n/* harmony import */ var _scripts_rainbow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/rainbow */ "./src/scripts/rainbow.js");\n/* harmony import */ var _scripts_rainbow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_rainbow__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_main_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.pcss */ "./src/styles/main.pcss");\n/* harmony import */ var _styles_main_pcss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_pcss__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable no-console */\n\n\n\n\ntry {\n  var studentElem = document.getElementById(\'student\'); // eslint-disable-next-line no-undef\n\n  studentElem.innerText = "".concat(_assets_text_txt__WEBPACK_IMPORTED_MODULE_0__["default"]).concat("Alexey Goremykin");\n} catch (err) {\n  console.error(err);\n}\n\ntry {\n  var babelElem = document.getElementById(\'babel\'); // eslint-disable-next-line\n\n  var _text = undefined !== null && undefined !== void 0 ? undefined : \'Babel loader работает!\';\n\n  babelElem.innerText = _text;\n} catch (err) {\n  console.error(err);\n}\n\n//# sourceURL=webpack:///./src/index.js?')},"./src/scripts/rainbow.js":function(module,exports){eval("var elem = document.getElementById('rainbow');\nvar colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];\nvar counter = 0;\n\nif (elem) {\n  setInterval(function () {\n    var color = counter % 7;\n    counter += 1;\n    elem.bgColor = colors[color];\n  }, 300);\n}\n\n//# sourceURL=webpack:///./src/scripts/rainbow.js?")},"./src/styles/main.pcss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.pcss?")}});