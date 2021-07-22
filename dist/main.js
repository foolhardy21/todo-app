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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Projects_ProjectPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Projects/ProjectPanel */ \"./src/modules/Projects/ProjectPanel.js\");\n/* harmony import */ var _modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Tasks/TaskPanel */ \"./src/modules/Tasks/TaskPanel.js\");\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content')\r\ncontentDiv.appendChild(_modules_Projects_ProjectPanel__WEBPACK_IMPORTED_MODULE_0__.projectPanelDiv)\r\ncontentDiv.appendChild(_modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__.taskPanelDiv)\r\n\r\ndocument.querySelector('#project-form')\r\n            .addEventListener('submit',_modules_Projects_ProjectPanel__WEBPACK_IMPORTED_MODULE_0__.projectFormEventListener)\r\n\r\n            \r\ndocument.querySelector('#projects-list')\r\n            .addEventListener('mouseover',_modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__.projectHoverListener)\r\n\r\n\r\ndocument.querySelector('#task-form')\r\n            .addEventListener('submit',_modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__.taskSubmitListener)\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/Constants.js":
/*!**********************************!*\
  !*** ./src/modules/Constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TASK_KEY\": () => (/* binding */ TASK_KEY),\n/* harmony export */   \"STORAGE_KEY\": () => (/* binding */ STORAGE_KEY)\n/* harmony export */ });\nconst STORAGE_KEY = 'projects'\r\nconst TASK_KEY = 'tasks'\r\n \n\n//# sourceURL=webpack://todo-app/./src/modules/Constants.js?");

/***/ }),

/***/ "./src/modules/Projects/Project.js":
/*!*****************************************!*\
  !*** ./src/modules/Projects/Project.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n/* harmony import */ var _StorageProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageProjects */ \"./src/modules/Projects/StorageProjects.js\");\n\r\n\r\n\r\nfunction Project() {\r\n\r\n    const getProject = (name) => {\r\n\r\n        const project = {}\r\n        const storage = (0,_StorageProjects__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n        const dataSize = storage.getDataLength(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY)\r\n        project.name = name\r\n        project.id = dataSize\r\n\r\n        return project\r\n    }\r\n    const AppendProjectsToContainer = (projectsArr,projectsDiv) => {\r\n        \r\n        for(let i = 0; i < projectsArr.length; i++) {\r\n            const item = document.createElement('li')\r\n            item.setAttribute('data-id',projectsArr[i].id)\r\n            item.setAttribute('id','project-item')\r\n            item.innerText = projectsArr[i].name\r\n            projectsDiv.appendChild(item)\r\n        }\r\n        return projectsDiv\r\n    }\r\n    const makeProjectList = (projectsArr) => {\r\n\r\n        const projectsDiv = document.createElement('ul')\r\n        projectsDiv.setAttribute('id','projects-list')\r\n        \r\n        return AppendProjectsToContainer(projectsArr, projectsDiv)\r\n        \r\n    }\r\n    const getProjectsContainer = () => document.querySelector('#projects-list')\r\n    \r\n    const removeProjects = () => {\r\n\r\n        const projectsContainer = getProjectsContainer()\r\n        \r\n        while(projectsContainer.firstChild) {\r\n            projectsContainer.removeChild(projectsContainer.firstChild)\r\n        }\r\n    }\r\n    const updateProjectListDisplay = (projectsArr) => {\r\n        \r\n        removeProjects()\r\n\r\n        const ProjectsContainer = getProjectsContainer() \r\n        \r\n        return AppendProjectsToContainer(projectsArr, ProjectsContainer)\r\n\r\n    }\r\n\r\n    return { getProject, makeProjectList, updateProjectListDisplay }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/Project.js?");

/***/ }),

/***/ "./src/modules/Projects/ProjectForm.js":
/*!*********************************************!*\
  !*** ./src/modules/Projects/ProjectForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction ProjectForm() {\r\n\r\n    const createElement = (type) => document.createElement(type)\r\n    \r\n    const getElement = (attributeType, attributeValue) => document.querySelector(`${attributeType}${attributeValue}`)\r\n    \r\n    const makeForm = () => {\r\n\r\n        const formDiv = createElement('form')\r\n        formDiv.setAttribute('id','project-form')\r\n\r\n        const inputDiv = createElement('input')\r\n        inputDiv.setAttribute('id','project-input') \r\n        inputDiv.type = 'text'\r\n        inputDiv.placeholder = 'Project Name...'\r\n        \r\n        const submitBtn = createElement('button')\r\n        submitBtn.type = 'submit'\r\n        submitBtn.innerText = 'Add'\r\n\r\n        formDiv.appendChild(inputDiv)\r\n        formDiv.appendChild(submitBtn)\r\n\r\n        return formDiv\r\n\r\n    }\r\n    const getForm = () => {\r\n        return getElement('#','project-form')\r\n    \r\n    }\r\n    const getInputValue = () => {\r\n        const element = getElement('#','project-input')\r\n        return element.value\r\n    \r\n    }\r\n    const setInputValue = (value) => {\r\n        const element = getElement('#','project-input')\r\n        element.value = value\r\n    }\r\n\r\n    return { makeForm, getForm, getInputValue, setInputValue }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectForm);  \r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/ProjectForm.js?");

/***/ }),

/***/ "./src/modules/Projects/ProjectPanel.js":
/*!**********************************************!*\
  !*** ./src/modules/Projects/ProjectPanel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectPanelDiv\": () => (/* binding */ projectPanelDiv),\n/* harmony export */   \"projectFormEventListener\": () => (/* binding */ projectFormEventListener)\n/* harmony export */ });\n/* harmony import */ var _StorageProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageProjects */ \"./src/modules/Projects/StorageProjects.js\");\n/* harmony import */ var _ProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectForm */ \"./src/modules/Projects/ProjectForm.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ \"./src/modules/Projects/Project.js\");\n\r\n\r\n\r\n\r\nconst projectPanelDiv = document.createElement('div')\r\nconst storage = (0,_StorageProjects__WEBPACK_IMPORTED_MODULE_0__.default)()\r\nconst projectFormObj = (0,_ProjectForm__WEBPACK_IMPORTED_MODULE_1__.default)()\r\nconst projectObj = (0,_Project__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n\r\n\r\nprojectPanelDiv.setAttribute('id','project-content')\r\n\r\nprojectPanelDiv.appendChild( projectFormObj.makeForm() )\r\nprojectPanelDiv.appendChild( projectObj.makeProjectList( storage.getArray() ) )\r\n\r\nfunction projectFormEventListener(e) {\r\n    e.preventDefault()\r\n    \r\n    const inputValue = projectFormObj.getInputValue()    \r\n    const inputValueObj = projectObj.getProject(inputValue) \r\n    \r\n    storage.updateData(inputValueObj)\r\n    projectFormObj.setInputValue('')\r\n    \r\n    const newProjectDiv = projectObj.updateProjectListDisplay(storage.getArray())\r\n    projectPanelDiv.appendChild(newProjectDiv)\r\n    \r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/ProjectPanel.js?");

/***/ }),

/***/ "./src/modules/Projects/StorageProjects.js":
/*!*************************************************!*\
  !*** ./src/modules/Projects/StorageProjects.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n\r\n\r\nfunction StorageProjects() {\r\n\r\n    let projectsArr = []\r\n\r\n    const getData = () => {\r\n\r\n        const data = localStorage.getItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY)\r\n        return JSON.parse(data)\r\n    \r\n    }\r\n    const getDataLength = () => {\r\n        \r\n        const storage = getData()\r\n        return ( storage ) ? storage.length : 0\r\n        \r\n    }    \r\n    const updateArray = () => {\r\n \r\n        const storedArr = getData(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY)\r\n        if ( storedArr ) {\r\n            projectsArr = storedArr\r\n        } \r\n\r\n    }\r\n    const updateData = (dataObj) => {\r\n        \r\n        projectsArr.push(dataObj)\r\n        localStorage.setItem( _Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, JSON.stringify(projectsArr) )\r\n    \r\n    }\r\n    const getArray = () => {\r\n        updateArray()\r\n        return projectsArr \r\n    }\r\n    \r\n\r\n    return {getDataLength, updateData, getArray }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageProjects);\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/StorageProjects.js?");

/***/ }),

/***/ "./src/modules/Tasks/StorageTasks.js":
/*!*******************************************!*\
  !*** ./src/modules/Tasks/StorageTasks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n\r\n\r\nfunction StorageTasks() {\r\n\r\n    let tasksArr = []\r\n\r\n    const getData = () => {\r\n\r\n        const data = localStorage.getItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY)\r\n        return JSON.parse(data)\r\n    \r\n    }\r\n    const getDataLength = () => {\r\n        \r\n        const storage = getData()\r\n        return ( storage ) ? storage.length : 0\r\n        \r\n    }    \r\n    const updateArray = () => {\r\n \r\n        const storedArr = getData(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY)\r\n        if ( storedArr ) {\r\n            tasksArr = storedArr\r\n        } \r\n\r\n    }\r\n    const updateData = (dataObj) => {\r\n        // updateArray()\r\n        tasksArr.push(dataObj)\r\n        localStorage.setItem( _Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY, JSON.stringify(tasksArr) )\r\n    \r\n    }\r\n    const getArray = (projectid) => {\r\n        updateArray()\r\n\r\n        const specifictasks = tasksArr.filter(task => task.projectid == projectid)\r\n        return specifictasks \r\n    }\r\n    \r\n\r\n    return {getDataLength, updateData, getArray }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageTasks);\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/StorageTasks.js?");

/***/ }),

/***/ "./src/modules/Tasks/Task.js":
/*!***********************************!*\
  !*** ./src/modules/Tasks/Task.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n/* harmony import */ var _StorageTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageTasks */ \"./src/modules/Tasks/StorageTasks.js\");\n\r\n\r\n\r\nfunction Task() {\r\n\r\n    const getTask = (name,projectid) => {\r\n\r\n        const task = {}\r\n        const storage = (0,_StorageTasks__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n        const dataSize = storage.getDataLength(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY)\r\n        task.name = name\r\n        task.id = dataSize\r\n        task.projectid = projectid\r\n\r\n        return task\r\n    }\r\n    const AppendTasksToContainer = (tasksArr,tasksDiv) => {\r\n        \r\n        for(let i = 0; i < tasksArr.length; i++) {\r\n            const item = document.createElement('li')\r\n            item.setAttribute('data-id',tasksArr[i].id)\r\n            item.setAttribute('id','task-item')\r\n            item.innerText = `${tasksArr[i].name}`\r\n            tasksDiv.appendChild(item)\r\n        }\r\n        return tasksDiv\r\n    }\r\n    const makeTaskList = (tasksArr) => {\r\n\r\n        const tasksDiv = document.createElement('ul')\r\n        tasksDiv.setAttribute('id','tasks-list')\r\n        \r\n        return AppendTasksToContainer(tasksArr, tasksDiv)\r\n        \r\n    }\r\n    const getTasksContainer = () => document.querySelector('#tasks-list')\r\n    \r\n    const removeTasks = () => {\r\n\r\n        const tasksContainer = getTasksContainer()\r\n\r\n        while(tasksContainer.firstChild) {\r\n            tasksContainer.removeChild(tasksContainer.firstChild)\r\n        }\r\n    }\r\n    const updateTaskListDisplay = (tasksArr) => {\r\n        \r\n        removeTasks()\r\n\r\n        const TasksContainer = getTasksContainer() \r\n        \r\n        return AppendTasksToContainer(tasksArr, TasksContainer)\r\n\r\n    }\r\n\r\n    return { getTask, makeTaskList, updateTaskListDisplay }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/Task.js?");

/***/ }),

/***/ "./src/modules/Tasks/TaskForm.js":
/*!***************************************!*\
  !*** ./src/modules/Tasks/TaskForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction TaskForm() {\r\n\r\n    const createElement = (type) => document.createElement(type)\r\n    \r\n    const getElement = (attributeType, attributeValue) => document.querySelector(`${attributeType}${attributeValue}`)\r\n    \r\n    const makeForm = () => {\r\n\r\n        const formDiv = createElement('form')\r\n        formDiv.setAttribute('id','task-form')\r\n\r\n        const inputDiv = createElement('input')\r\n        inputDiv.setAttribute('id','task-input') \r\n        inputDiv.type = 'text'\r\n        inputDiv.placeholder = 'Task Name...'\r\n        \r\n        const submitBtn = createElement('button')\r\n        submitBtn.type = 'submit'\r\n        submitBtn.innerText = 'Add'\r\n\r\n        formDiv.appendChild(inputDiv)\r\n        formDiv.appendChild(submitBtn)\r\n\r\n        return formDiv\r\n\r\n    }\r\n    const getForm = () => {\r\n        return getElement('#','task-form')\r\n    \r\n    }\r\n    const getInputValue = () => {\r\n        const element = getElement('#','task-input')\r\n        return element.value\r\n    \r\n    }\r\n    const setInputValue = (value) => {\r\n        const element = getElement('#','task-input')\r\n        element.value = value\r\n    }\r\n\r\n    return { makeForm, getForm, getInputValue, setInputValue }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskForm);  \r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/TaskForm.js?");

/***/ }),

/***/ "./src/modules/Tasks/TaskPanel.js":
/*!****************************************!*\
  !*** ./src/modules/Tasks/TaskPanel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskPanelDiv\": () => (/* binding */ taskPanelDiv),\n/* harmony export */   \"projectHoverListener\": () => (/* binding */ projectHoverListener),\n/* harmony export */   \"taskSubmitListener\": () => (/* binding */ taskSubmitListener)\n/* harmony export */ });\n/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskForm */ \"./src/modules/Tasks/TaskForm.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Tasks/Task.js\");\n/* harmony import */ var _StorageTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StorageTasks */ \"./src/modules/Tasks/StorageTasks.js\");\n\r\n\r\n\r\n\r\nconst taskform = (0,_TaskForm__WEBPACK_IMPORTED_MODULE_0__.default)()\r\nconst taskobj = (0,_Task__WEBPACK_IMPORTED_MODULE_1__.default)()\r\nconst storagetasks = (0,_StorageTasks__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n\r\nconst taskPanelDiv = document.createElement('div')\r\ntaskPanelDiv.setAttribute('id','task-content')\r\n\r\nlet currentProjectId = 0\r\ntaskPanelDiv.appendChild( taskform.makeForm() )\r\nconst heading = document.createElement('div')\r\nheading.setAttribute('id','task-heading')\r\nheading.innerText = ''\r\ntaskPanelDiv.appendChild(heading)\r\ntaskPanelDiv.appendChild( taskobj.makeTaskList( storagetasks.getArray(currentProjectId) ) ) \r\n\r\n\r\nfunction projectHoverListener(e) {\r\n        const p = e.target\r\n        currentProjectId = parseInt(p.getAttribute('data-id'))\r\n        const previousheading = document.querySelector('#task-heading')\r\n        previousheading.innerText = p.innerText\r\n\r\n        const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))\r\n        taskPanelDiv.appendChild(heading)\r\n        taskPanelDiv.appendChild(newTaskDiv)\r\n}\r\n\r\n\r\nfunction taskSubmitListener(e) {\r\n    e.preventDefault()\r\n\r\n    const inputvalue = taskform.getInputValue()\r\n    const inputvalueobj = taskobj.getTask(inputvalue,currentProjectId)\r\n    \r\n\r\n    storagetasks.updateData(inputvalueobj)\r\n    taskform.setInputValue('')\r\n    \r\n    const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))\r\n    taskPanelDiv.appendChild(newTaskDiv)\r\n\r\n}\r\n \n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/TaskPanel.js?");

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