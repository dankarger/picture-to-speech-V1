/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./clientVanilla/src/api.js":
/*!**********************************!*\
  !*** ./clientVanilla/src/api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import axios from 'axios';
//
// let myUrl = 'http://localhost:8080/api'; //development
//
// if (process.env.NODE_ENV === 'production') {
//     myUrl = '';
// }
// // if (process.env.NODE_ENV === 'development') {
// //     // console.log('propcc',process.env.NODE_ENV)
// // }
//
// export default axios.create({
//     baseURL: myUrl
// });
// export default hello
var getImageSecondOption = function getImageSecondOption(query) {
  console.log('2');
  var myHeaders = new Headers(); // myHeaders.append('Accept', '*/*');

  myHeaders.append('Content-Type', 'application/json'); // myHeaders.append('Access-Control-Allow-Origin', '*')
  // myHeaders.append('Authorization', process.env.API_KEY);

  var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };
  var myRequest = new Request("http://localhost:8080/api/picture?query=".concat(query)); // myRequest.url = `https://api.pexels.com/v1/search?query=${query}`
  //     myRequest.url= `http://localhost:8080/api/picture?query=${query}`

  var myImage = document.querySelector('img');
  var img2Div = document.querySelector('#image-div');
  fetch(myRequest).then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error! Status: ".concat(response.status));
    }

    return response;
  }).then(function (res) {
    return res.json();
  }).then(function (response) {
    var container = document.createElement('div');
    container.classList.add('container-img');
    var image2 = document.createElement('img');
    var title = document.createElement('h3');
    title.innerText = query; // image2.src = URL.createObjectURL(response);

    if (response[0].src.medium) {
      image2.src = response[0].src.medium;
      container.append(image2);
      container.append(title);
    } else {
      title.innerText = "Error - please repeat";
      container.append(title);
    }

    img2Div.append(container);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getImageSecondOption);

/***/ }),

/***/ "./clientVanilla/src/constants.js":
/*!****************************************!*\
  !*** ./clientVanilla/src/constants.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var stagesDescriptionConstant = {
  0: "Press the record button to begin",
  1: "Please Say a Picture subject",
  2: "Say Text",
  3: "say the Color of text, you can try few options, when you are ready say 'Continue'",
  4: "stage4- position"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stagesDescriptionConstant);

/***/ }),

/***/ "./clientVanilla/src/textGenerator.js":
/*!********************************************!*\
  !*** ./clientVanilla/src/textGenerator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorText": () => (/* binding */ colorText),
/* harmony export */   "textGenerator": () => (/* binding */ textGenerator),
/* harmony export */   "textPosition": () => (/* binding */ textPosition)
/* harmony export */ });
var textDiv = document.querySelector('#text-div');
var textElement = textDiv.querySelector('.text');
var textGenerator = function textGenerator(text) {
  textDiv.classList.add('position--top');
  var fontSize = textDiv.clientWidth / text.length; // if(fontSize<100)

  textElement.style.fontSize = "".concat(fontSize, "px");
  console.log('font', fontSize, textDiv.clientWidth);
  textElement.textContent = text; // textDiv.appendChild(textDiv)
};
var colorText = function colorText(color) {
  textElement.style.color = color;
};
var textPosition = function textPosition(position) {
  if (position === ' top' || position === 'stop' || position === 'up') {
    textDiv.classList.remove('position---center');
    textDiv.classList.remove('position---bottom');
    textDiv.classList.add('position--top');
  } else if (position === ' center' || position === 'middle') {
    textDiv.classList.remove('position---top');
    textDiv.classList.remove('position---bottom');
    textDiv.classList.add('position--center');
  } else if (position === ' bottom' || position === 'down') {
    textDiv.classList.remove('position---top');
    textDiv.classList.remove('position---center');
    textDiv.classList.add('position--bottom');
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./clientVanilla/src/styles/styles.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./clientVanilla/src/styles/styles.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #8aaec0;\n  font-family: \"Roboto\", sans-serif;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n  padding: 20px;\n}\n\n.container {\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  align-items: center;\n  flex-direction: column;\n}\n\n#image-div {\n  width: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.mic-on {\n  /*background-color: #be0925;*/\n  /*animation: blinking 1s 1s infinite ease ;*/\n  padding: 10px 20px;\n  border-radius: 10px;\n  animation: 700ms infinite alternate blinking;\n}\n\n.mic-off {\n  background-color: #b6adad;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.container-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem;\n  border: 1px solid grey;\n  border-radius: 10px;\n  width: fit-content;\n}\n\n.text {\n  /*font-size: 40px;*/\n  color: yellow;\n  text-align: center;\n  text-shadow: 1px 1px #2f2b2b;\n}\n\n#text-div {\n  width: 100%;\n  position: absolute;\n  left: 50%;\n  /*top: 20%;*/\n  transform: translate(-50%, -50%);\n}\n\n.stage-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.position--top {\n  top: 20%;\n}\n\n.position--center {\n  top: 50%;\n}\n\n.position--bottom {\n  top: 80%;\n}\n\n.recognition--text {\n  width: fit-content;\n  background-color: rgba(204, 198, 198, 0.78);\n}\n\n.fade--out {\n  opacity: 1;\n  /*animation: fadeOut 1s 100ms ease-in-out forwards;*/\n  /*animation-name: fadeOut;*/\n  /*animation-duration: 2s;*/\n  animation: 3s forwards alternate fadeOut;\n}\n\n@keyframes blinking {\n  from {\n    background-color: #b6adad;\n  }\n  to {\n    background-color: #be0925;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./clientVanilla/src/styles/styles.scss"],"names":[],"mappings":"AAOA;EACI,sBAAA;AALJ;;AAQA;EACI,yBAVY;EAWZ,iCAAA;EAKA,aAAA;EACA,gBAAA;EACA,SAAA;EACA,aAAA;AATJ;;AAcA;EACI,aAAA;EACA,2BAAA;EACA,SAAA;EACA,mBAAA;EACA,sBAAA;AAXJ;;AAaA;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAVJ;;AAaA;EACI,6BAAA;EACA,4CAAA;EACA,kBAAA;EACA,mBAAA;EACA,4CAAA;AAVJ;;AAYA;EACI,yBAAA;EACA,kBAAA;EACA,mBAAA;AATJ;;AAYA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AATJ;;AAYA;EACI,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,4BAAA;AATJ;;AAYA;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,gCAAA;AATJ;;AAcA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAXJ;;AAcA;EACI,QAAA;AAXJ;;AAaA;EACI,QAAA;AAVJ;;AAYA;EACI,QAAA;AATJ;;AAYA;EACI,kBAAA;EACA,2CAAA;AATJ;;AAYA;EACI,UAAA;EACA,oDAAA;EACA,2BAAA;EACA,0BAAA;EACA,wCAAA;AATJ;;AAWA;EACI;IACA,yBAAA;EARF;EAUE;IACA,yBAAA;EARF;AACF;AAWA;EACI;IACI,UAAA;EATN;EAWE;IACI,UAAA;EATN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n$primary-color: #8aaec0;\n$secondary-color: #f4f4f4;\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: $primary-color;\n    font-family: 'Roboto', sans-serif;\n    //display: flex;\n    //flex-direction: column;\n    //align-items: center;\n    //justify-content: center;\n    height: 100vh;\n    overflow: hidden;\n    margin: 0;\n    padding: 20px;\n}\n\n\n\n.container {\n    display: flex;\n    justify-content: flex-start;\n    gap:1rem;\n    align-items: center;\n    flex-direction: column;\n}\n#image-div {\n    width: fit-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.mic-on{\n    /*background-color: #be0925;*/\n    /*animation: blinking 1s 1s infinite ease ;*/\n    padding:10px 20px;\n    border-radius: 10px;\n    animation: 700ms infinite alternate blinking;\n}\n.mic-off{\n    background-color: #b6adad;\n    padding:10px 20px;\n    border-radius: 10px;\n}\n\n.container-img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    border: 1px solid grey;\n    border-radius: 10px;\n    width:fit-content;\n\n}\n.text {\n    /*font-size: 40px;*/\n    color: yellow;\n    text-align: center;\n    text-shadow: 1px 1px #2f2b2b;\n}\n\n#text-div {\n    width: 100%;\n    position: absolute;\n    left: 50%;\n    /*top: 20%;*/\n    transform: translate(-50%,-50%);\n\n\n}\n\n.stage-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:10px;\n}\n\n.position--top {\n    top: 20%;\n}\n.position--center {\n    top: 50%;\n}\n.position--bottom {\n    top: 80%;\n}\n\n.recognition--text {\n    width: fit-content;\n    background-color: rgba(204, 198, 198, 0.78);\n\n}\n.fade--out {\n    opacity: 1;\n    /*animation: fadeOut 1s 100ms ease-in-out forwards;*/\n    /*animation-name: fadeOut;*/\n    /*animation-duration: 2s;*/\n    animation: 3s forwards alternate fadeOut;\n}\n@keyframes blinking {\n    from{\n    background-color: #b6adad;\n}\n    to {\n    background-color: #be0925;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./clientVanilla/src/styles/styles.scss":
/*!**********************************************!*\
  !*** ./clientVanilla/src/styles/styles.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./clientVanilla/src/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./clientVanilla/src/main.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./clientVanilla/src/constants.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./clientVanilla/src/api.js");
/* harmony import */ var _textGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textGenerator */ "./clientVanilla/src/textGenerator.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.scss */ "./clientVanilla/src/styles/styles.scss");



 // import './styles/main.scss'

var searchForm = document.querySelector("#search-form");
var searchFormatInput = searchForm.querySelector("input");
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var stageDescription = document.querySelector('#stage-description');
var stageDiv = document.querySelector('.stage-div');
var stageCounter = stageDiv.querySelector('.stage-counter');
var tryDiv = stageDiv.querySelector('.try');
var recognitionText = document.querySelector('.recognition--text'); // import  htm2canvas from '../node_modules/html2canvas'

var stage = 1;

if (SpeechRecognition) {
  var micBtnClick = function micBtnClick() {
    if (micIcon.classList.contains('mic-off')) {
      recognition.start();
    } else {
      recognition.stop();
    }
  };

  // <=> recognition.onstart = function(){...}
  var startSpeechRecognition = function startSpeechRecognition() {
    micIcon.classList.remove('mic-off');
    micIcon.classList.add('mic-on');
    searchFormatInput.focus();
    console.log("Speech Recognition Active");
    tryDiv.textContent = _constants__WEBPACK_IMPORTED_MODULE_0__["default"][stage];
    stageCounter.textContent = "".concat(stage, ") ");
  };

  // <=> recognition.onend = function(){...}
  var endSpeechRecognition = function endSpeechRecognition() {
    micIcon.classList.remove('mic-on');
    micIcon.classList.add('mic-off');
    searchFormatInput.focus();
    console.log("Speech Recognition Disconnected");
  };

  // <=> recognition.onresult = function(){...}
  var resultOfSpeechRecognition = function resultOfSpeechRecognition(event) {
    recognitionText.textContent = "";
    recognitionText.classList.remove('.fade--out');
    console.log('event', event, stage);
    var currentResult = event.resultIndex;
    var transcript = event.results[currentResult][0].transcript; // searchFormatInput.value = transcript;

    if (transcript.toLowerCase().trim() === 'stop recording') {
      recognition.stop();
    } else if (!searchFormatInput.value) {
      searchFormatInput.value = transcript;
    } // else {
    //     if (transcript.toLowerCase().trim() === 'go back') {
    //         // searchForm.action = `http://localhost:8080/api/picture?query=${transcript}`
    //         // getImageSecondOption(transcript)
    //         // console.log('go back')
    //         // stage--;
    //         // searchFormatInput.value = '';
    //
    //     } else if (transcript.toLowerCase().trim() === 'reset input') {
    //         searchFormatInput.value = '';
    //     }
    //     else {
    //         searchFormatInput.value = transcript
    //     }
    // }


    setTimeout(function () {
      recognitionText.textContent = transcript;
      recognitionText.classList.add('.fade--out');
      activateStage(transcript); // searchForm.submit();
    }, 550);
  };

  console.log("browser support");
  searchForm.insertAdjacentHTML("beforeend", '          <button type="button" class="icon mic-off">MIC ICON</button>\n');
  var micBtn = searchForm.querySelector("button");
  var micIcon = searchForm.querySelector(".icon");
  var recognition = new SpeechRecognition();
  recognition.continuous = true; // recognition.lang = "he"

  console.log('lng', SpeechRecognition.lang);
  micBtn.addEventListener('click', micBtnClick);
  recognition.addEventListener("start", startSpeechRecognition);
  recognition.addEventListener("end", endSpeechRecognition);
  recognition.addEventListener("result", resultOfSpeechRecognition);
} else {
  console.log("browser dont support");
}

var activateStage = function activateStage(transcript) {
  if (transcript === ' go back') {
    // updateStageInformation();
    stage > 1 ? stage -= 2 : stage = 1;
    updateStageInformation();
    return;
  }

  if (stage === 1) {
    (0,_api__WEBPACK_IMPORTED_MODULE_1__["default"])(transcript);
    updateStageInformation();
  } else if (stage === 2) {
    console.log('phase2');
    (0,_textGenerator__WEBPACK_IMPORTED_MODULE_2__.textGenerator)(transcript);
    updateStageInformation();
  } else if (stage === 3) {
    console.log('phase3');

    if (transcript === ' continue') {
      updateStageInformation();
    }

    (0,_textGenerator__WEBPACK_IMPORTED_MODULE_2__.colorText)(transcript);
  } else if (stage === 4) {
    console.log('stage4', transcript);
    (0,_textGenerator__WEBPACK_IMPORTED_MODULE_2__.textPosition)(transcript.toLowerCase());
    updateStageInformation();
  }
};

var updateStageInformation = function updateStageInformation() {
  console.log('g', _constants__WEBPACK_IMPORTED_MODULE_0__["default"][stage]);
  stage < 4 ? stage++ : stage = 4;
  stageDescription.textContent = _constants__WEBPACK_IMPORTED_MODULE_0__["default"][stage];
  stageCounter.textContent = "".concat(stage, ") ");
};
})();

/******/ })()
;
//# sourceMappingURL=bundlef49d6f20f59d30255072.js.map