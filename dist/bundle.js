/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\nlet setCurrentChar = '';\n\nconst errorMsg = document.querySelector('.errorMsg');\n\nconst homer = document.querySelector('.homerImg');\nhomer.addEventListener('click', () => {\n    errorMsg.innerHTML = \"\";\n    setCurrentChar = 'homer'\n});\n\nconst wallpaperBox = document.querySelector('.wallpaperBox');\n\nconst wallpaper = document.querySelector('.wallpaper');\nwallpaper.addEventListener('click', (e) => {\n    if(setCurrentChar === '') {\n        errorMsg.innerHTML = \"Select a character first!\"\n    } else {\n        const box = document.createElement('div');\n        box.classList.add('targetBox');\n        let xPosition = e.clientX;\n        let yPosition = e.clientY;\n        box.style.left = xPosition;\n        // box.style.top = `${yPosition}`\n        wallpaperBox.append(box);\n        console.log(xPosition);\n    }\n});\n\n//# sourceURL=webpack://wheres-waldo-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;