/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _modules_ProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ProjectForm */ \"./src/modules/ProjectForm.js\");\n/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _modules_TaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/TaskForm */ \"./src/modules/TaskForm.js\");\n/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _modules_StorageTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/StorageTasks */ \"./src/modules/StorageTasks.js\");\n\r\n\r\n\r\n\r\nconst projectContentDiv = document.querySelector('#project-content')\r\nconst storage = (0,_modules_Storage__WEBPACK_IMPORTED_MODULE_0__.default)()\r\nconst projectFormObj = (0,_modules_ProjectForm__WEBPACK_IMPORTED_MODULE_1__.default)()\r\nconst projectObj = (0,_modules_Project__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n// let projectslist\r\nprojectContentDiv.appendChild( projectFormObj.makeForm() )\r\nprojectContentDiv.appendChild( projectObj.makeProjectList( storage.getArray() ) )\r\n\r\nconst projectFormDiv = projectFormObj.getForm()\r\nprojectFormDiv.addEventListener('submit',(e) => {\r\n    \r\n    e.preventDefault()\r\n    \r\n    const inputValue = projectFormObj.getInputValue()    \r\n    const inputValueObj = projectObj.getProject(inputValue) \r\n    \r\n    storage.updateData(inputValueObj)\r\n    projectFormObj.setInputValue('')\r\n    \r\n    const newProjectDiv = projectObj.updateProjectListDisplay(storage.getArray())\r\n    projectContentDiv.appendChild(newProjectDiv)\r\n      \r\n})\r\n\r\n\r\n\r\n;\r\n\r\n\r\n\r\nconst taskform = (0,_modules_TaskForm__WEBPACK_IMPORTED_MODULE_3__.default)()\r\nconst taskobj = (0,_modules_Task__WEBPACK_IMPORTED_MODULE_4__.default)()\r\nconst storagetasks = (0,_modules_StorageTasks__WEBPACK_IMPORTED_MODULE_5__.default)()\r\n\r\n// projectslist = document.querySelectorAll('#project-item')\r\nconst projectspanel = document.querySelector('#projects-list')\r\nconst taskpanel = document.querySelector('#task-content')\r\n\r\nlet currentProjectId = 0\r\ntaskpanel.appendChild( taskform.makeForm() )\r\nconst heading = document.createElement('div')\r\nheading.setAttribute('id','task-heading')\r\nheading.innerText = ''\r\ntaskpanel.appendChild(heading)\r\ntaskpanel.appendChild( taskobj.makeTaskList( storagetasks.getArray(currentProjectId) ) ) \r\n\r\nlet taskFormDiv = document.querySelector('#task-form')\r\n\r\n// projectslist.forEach(item => {\r\n//     item.addEventListener('mouseover',(e) => {\r\n//         const p = e.target\r\n//         currentProjectId = parseInt(p.getAttribute('data-id'))\r\n//         const previousheading = document.querySelector('#task-heading')\r\n//         previousheading.innerText = p.innerText\r\n\r\n//         const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))\r\n//         taskpanel.appendChild(heading)\r\n//         taskpanel.appendChild(newTaskDiv)\r\n\r\n        \r\n//     })\r\n// })\r\n\r\nprojectspanel.addEventListener('mouseover',(e) => {\r\n        const p = e.target\r\n        currentProjectId = parseInt(p.getAttribute('data-id'))\r\n        const previousheading = document.querySelector('#task-heading')\r\n        previousheading.innerText = p.innerText\r\n\r\n        const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))\r\n        taskpanel.appendChild(heading)\r\n        taskpanel.appendChild(newTaskDiv)\r\n})\r\n\r\n\r\n\r\ntaskFormDiv.addEventListener('submit',(e) => {\r\n    e.preventDefault()\r\n\r\n    const inputvalue = taskform.getInputValue()\r\n    const inputvalueobj = taskobj.getTask(inputvalue,currentProjectId)\r\n    \r\n\r\n    storagetasks.updateData(inputvalueobj)\r\n    taskform.setInputValue('')\r\n    \r\n    const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))\r\n    taskpanel.appendChild(newTaskDiv)\r\n\r\n})\r\n\r\n// mouseover not listening on updating the list\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/Constants.js":
/*!**********************************!*\
  !*** ./src/modules/Constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TASK_KEY\": () => (/* binding */ TASK_KEY),\n/* harmony export */   \"STORAGE_KEY\": () => (/* binding */ STORAGE_KEY)\n/* harmony export */ });\nconst STORAGE_KEY = 'projects'\r\nconst TASK_KEY = 'tasks'\r\n \n\n//# sourceURL=webpack://todo-app/./src/modules/Constants.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/modules/Constants.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n\r\n\r\n\r\nfunction Project() {\r\n\r\n    const getProject = (name) => {\r\n\r\n        const project = {}\r\n        const storage = (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n        const dataSize = storage.getDataLength(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY)\r\n        project.name = name\r\n        project.id = dataSize\r\n\r\n        return project\r\n    }\r\n    const AppendProjectsToContainer = (projectsArr,projectsDiv) => {\r\n        \r\n        for(let i = 0; i < projectsArr.length; i++) {\r\n            const item = document.createElement('li')\r\n            item.setAttribute('data-id',projectsArr[i].id)\r\n            item.setAttribute('id','project-item')\r\n            item.innerText = projectsArr[i].name\r\n            projectsDiv.appendChild(item)\r\n        }\r\n        return projectsDiv\r\n    }\r\n    const makeProjectList = (projectsArr) => {\r\n\r\n        const projectsDiv = document.createElement('ul')\r\n        projectsDiv.setAttribute('id','projects-list')\r\n        \r\n        return AppendProjectsToContainer(projectsArr, projectsDiv)\r\n        \r\n    }\r\n    const getProjectsContainer = () => document.querySelector('#projects-list')\r\n    \r\n    const removeProjects = () => {\r\n\r\n        const projectsContainer = getProjectsContainer()\r\n        \r\n        while(projectsContainer.firstChild) {\r\n            projectsContainer.removeChild(projectsContainer.firstChild)\r\n        }\r\n    }\r\n    const updateProjectListDisplay = (projectsArr) => {\r\n        \r\n        removeProjects()\r\n\r\n        const ProjectsContainer = getProjectsContainer() \r\n        \r\n        return AppendProjectsToContainer(projectsArr, ProjectsContainer)\r\n\r\n    }\r\n\r\n    return { getProject, makeProjectList, updateProjectListDisplay }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-app/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/ProjectForm.js":
/*!************************************!*\
  !*** ./src/modules/ProjectForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction ProjectForm() {\r\n\r\n    const createElement = (type) => document.createElement(type)\r\n    \r\n    const getElement = (attributeType, attributeValue) => document.querySelector(`${attributeType}${attributeValue}`)\r\n    \r\n    const makeForm = () => {\r\n\r\n        const formDiv = createElement('form')\r\n        formDiv.setAttribute('id','project-form')\r\n\r\n        const inputDiv = createElement('input')\r\n        inputDiv.setAttribute('id','project-input') \r\n        inputDiv.type = 'text'\r\n        inputDiv.placeholder = 'Project Name...'\r\n        \r\n        const submitBtn = createElement('button')\r\n        submitBtn.type = 'submit'\r\n        submitBtn.innerText = 'Add'\r\n\r\n        formDiv.appendChild(inputDiv)\r\n        formDiv.appendChild(submitBtn)\r\n\r\n        return formDiv\r\n\r\n    }\r\n    const getForm = () => {\r\n        return getElement('#','project-form')\r\n    \r\n    }\r\n    const getInputValue = () => {\r\n        const element = getElement('#','project-input')\r\n        return element.value\r\n    \r\n    }\r\n    const setInputValue = (value) => {\r\n        const element = getElement('#','project-input')\r\n        element.value = value\r\n    }\r\n\r\n    return { makeForm, getForm, getInputValue, setInputValue }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectForm);  \r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/ProjectForm.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/modules/Constants.js\");\n\r\n\r\nfunction StorageProjects() {\r\n\r\n    let projectsArr = []\r\n\r\n    const getData = () => {\r\n\r\n        const data = localStorage.getItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY)\r\n        return JSON.parse(data)\r\n    \r\n    }\r\n    const getDataLength = () => {\r\n        \r\n        const storage = getData()\r\n        return ( storage ) ? storage.length : 0\r\n        \r\n    }    \r\n    const updateArray = () => {\r\n \r\n        const storedArr = getData(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY)\r\n        if ( storedArr ) {\r\n            projectsArr = storedArr\r\n        } \r\n\r\n    }\r\n    const updateData = (dataObj) => {\r\n        \r\n        projectsArr.push(dataObj)\r\n        localStorage.setItem( _Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, JSON.stringify(projectsArr) )\r\n    \r\n    }\r\n    const getArray = () => {\r\n        updateArray()\r\n        return projectsArr \r\n    }\r\n    \r\n\r\n    return {getDataLength, updateData, getArray }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageProjects);\n\n//# sourceURL=webpack://todo-app/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/StorageTasks.js":
/*!*************************************!*\
  !*** ./src/modules/StorageTasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/modules/Constants.js\");\n\r\n\r\nfunction StorageTasks() {\r\n\r\n    let tasksArr = []\r\n\r\n    const getData = () => {\r\n\r\n        const data = localStorage.getItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY)\r\n        return JSON.parse(data)\r\n    \r\n    }\r\n    const getDataLength = () => {\r\n        \r\n        const storage = getData()\r\n        return ( storage ) ? storage.length : 0\r\n        \r\n    }    \r\n    const updateArray = () => {\r\n \r\n        const storedArr = getData(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY)\r\n        if ( storedArr ) {\r\n            tasksArr = storedArr\r\n        } \r\n\r\n    }\r\n    const updateData = (dataObj) => {\r\n        // updateArray()\r\n        tasksArr.push(dataObj)\r\n        localStorage.setItem( _Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY, JSON.stringify(tasksArr) )\r\n    \r\n    }\r\n    const getArray = (projectid) => {\r\n        updateArray()\r\n\r\n        const specifictasks = tasksArr.filter(task => task.projectid == projectid)\r\n        return specifictasks \r\n    }\r\n    \r\n\r\n    return {getDataLength, updateData, getArray }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageTasks);\n\n//# sourceURL=webpack://todo-app/./src/modules/StorageTasks.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/modules/Constants.js\");\n/* harmony import */ var _StorageTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageTasks */ \"./src/modules/StorageTasks.js\");\n\r\n\r\n\r\nfunction Task() {\r\n\r\n    const getTask = (name,projectid) => {\r\n\r\n        const task = {}\r\n        const storage = (0,_StorageTasks__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n        const dataSize = storage.getDataLength(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY)\r\n        task.name = name\r\n        task.id = dataSize\r\n        task.projectid = projectid\r\n\r\n        return task\r\n    }\r\n    const AppendTasksToContainer = (tasksArr,tasksDiv) => {\r\n        \r\n        for(let i = 0; i < tasksArr.length; i++) {\r\n            const item = document.createElement('li')\r\n            item.setAttribute('data-id',tasksArr[i].id)\r\n            item.setAttribute('id','task-item')\r\n            item.innerText = `${tasksArr[i].name}`\r\n            tasksDiv.appendChild(item)\r\n        }\r\n        return tasksDiv\r\n    }\r\n    const makeTaskList = (tasksArr) => {\r\n\r\n        const tasksDiv = document.createElement('ul')\r\n        tasksDiv.setAttribute('id','tasks-list')\r\n        \r\n        return AppendTasksToContainer(tasksArr, tasksDiv)\r\n        \r\n    }\r\n    const getTasksContainer = () => document.querySelector('#tasks-list')\r\n    \r\n    const removeTasks = () => {\r\n\r\n        const tasksContainer = getTasksContainer()\r\n\r\n        while(tasksContainer.firstChild) {\r\n            tasksContainer.removeChild(tasksContainer.firstChild)\r\n        }\r\n    }\r\n    const updateTaskListDisplay = (tasksArr) => {\r\n        \r\n        removeTasks()\r\n\r\n        const TasksContainer = getTasksContainer() \r\n        \r\n        return AppendTasksToContainer(tasksArr, TasksContainer)\r\n\r\n    }\r\n\r\n    return { getTask, makeTaskList, updateTaskListDisplay }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-app/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/TaskForm.js":
/*!*********************************!*\
  !*** ./src/modules/TaskForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction TaskForm() {\r\n\r\n    const createElement = (type) => document.createElement(type)\r\n    \r\n    const getElement = (attributeType, attributeValue) => document.querySelector(`${attributeType}${attributeValue}`)\r\n    \r\n    const makeForm = () => {\r\n\r\n        const formDiv = createElement('form')\r\n        formDiv.setAttribute('id','task-form')\r\n\r\n        const inputDiv = createElement('input')\r\n        inputDiv.setAttribute('id','task-input') \r\n        inputDiv.type = 'text'\r\n        inputDiv.placeholder = 'Task Name...'\r\n        \r\n        const submitBtn = createElement('button')\r\n        submitBtn.type = 'submit'\r\n        submitBtn.innerText = 'Add'\r\n\r\n        formDiv.appendChild(inputDiv)\r\n        formDiv.appendChild(submitBtn)\r\n\r\n        return formDiv\r\n\r\n    }\r\n    const getForm = () => {\r\n        return getElement('#','task-form')\r\n    \r\n    }\r\n    const getInputValue = () => {\r\n        const element = getElement('#','task-input')\r\n        return element.value\r\n    \r\n    }\r\n    const setInputValue = (value) => {\r\n        const element = getElement('#','task-input')\r\n        element.value = value\r\n    }\r\n\r\n    return { makeForm, getForm, getInputValue, setInputValue }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskForm);  \r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/TaskForm.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;