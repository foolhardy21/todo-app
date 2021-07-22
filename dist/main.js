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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Projects_ProjectPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Projects/ProjectPanel */ \"./src/modules/Projects/ProjectPanel.js\");\n/* harmony import */ var _modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Tasks/TaskPanel */ \"./src/modules/Tasks/TaskPanel.js\");\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content')\r\ncontentDiv.appendChild(_modules_Projects_ProjectPanel__WEBPACK_IMPORTED_MODULE_0__.default.getPanelDiv())\r\ncontentDiv.appendChild(_modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__.default.getPanelDiv())\r\n\r\ndocument.querySelector('#project-form')\r\n            .addEventListener('submit',_modules_Projects_ProjectPanel__WEBPACK_IMPORTED_MODULE_0__.default.projectFormEventListener)\r\n\r\n            \r\ndocument.querySelector('#projects-list')\r\n            .addEventListener('mouseover',_modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__.default.projectHoverListener)\r\ndocument.querySelector('#projects-list')\r\n            .addEventListener('click', _modules_Projects_ProjectPanel__WEBPACK_IMPORTED_MODULE_0__.default.projectDelListener)  \r\n\r\ndocument.querySelector('#task-form')\r\n            .addEventListener('submit',_modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__.default.taskSubmitListener)\r\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n/* harmony import */ var _StorageProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageProjects */ \"./src/modules/Projects/StorageProjects.js\");\n\r\n\r\n\r\nfunction Project() {\r\n\r\n    const getProject = (name) => {\r\n\r\n        const project = {}\r\n        const storage = (0,_StorageProjects__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n        const dataSize = storage.getDataLength(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY)\r\n        project.name = name\r\n        project.id = dataSize\r\n\r\n        return project\r\n    }\r\n    const AppendProjectsToContainer = (projectsArr,projectsDiv) => {\r\n        \r\n        for(let i = 0; i < projectsArr.length; i++) {\r\n            const item = document.createElement('li')\r\n            item.setAttribute( 'data-id',projectsArr[i].id )\r\n            item.setAttribute( 'id','project-item' )\r\n            item.innerText = projectsArr[i].name\r\n            const deleteBtn = document.createElement('button')\r\n            deleteBtn.innerText = 'del'\r\n            deleteBtn.setAttribute( 'id','project-delete' )\r\n            deleteBtn.setAttribute( 'data-id',projectsArr[i].id )\r\n            item.appendChild(deleteBtn)\r\n            projectsDiv.appendChild(item)\r\n        }\r\n        return projectsDiv\r\n    }\r\n    const makeProjectList = (projectsArr) => {\r\n\r\n        const projectsDiv = document.createElement('ul')\r\n        projectsDiv.setAttribute('id','projects-list')\r\n        \r\n        return AppendProjectsToContainer(projectsArr, projectsDiv)\r\n        \r\n    }\r\n    const getProjectsContainer = () => document.querySelector('#projects-list')\r\n    \r\n    const removeProjects = () => {\r\n\r\n        const projectsContainer = getProjectsContainer()\r\n        \r\n        while(projectsContainer.firstChild) {\r\n            projectsContainer.removeChild(projectsContainer.firstChild)\r\n        }\r\n    }\r\n    const updateProjectListDisplay = (projectsArr) => {\r\n        \r\n        removeProjects()\r\n\r\n        const ProjectsContainer = getProjectsContainer() \r\n        \r\n        return AppendProjectsToContainer(projectsArr, ProjectsContainer)\r\n\r\n    }\r\n\r\n    return { getProject, makeProjectList, updateProjectListDisplay }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/Project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _StorageProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageProjects */ \"./src/modules/Projects/StorageProjects.js\");\n/* harmony import */ var _ProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectForm */ \"./src/modules/Projects/ProjectForm.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ \"./src/modules/Projects/Project.js\");\n\r\n\r\n\r\n\r\nconst projectPanel = (() => {\r\n    \r\n    const projectPanelDiv = document.createElement('div')\r\n    const storage = (0,_StorageProjects__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n    const projectFormObj = (0,_ProjectForm__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n    const projectObj = (0,_Project__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n\r\n    const initialisePanel = () => {\r\n        projectPanelDiv.setAttribute('id','project-content')\r\n        projectPanelDiv.appendChild( projectFormObj.makeForm() )\r\n        projectPanelDiv.appendChild( projectObj.makeProjectList( storage.getArray() ) )\r\n\r\n    }\r\n    const projectFormEventListener = (e) => {\r\n        e.preventDefault()\r\n        \r\n        const inputValue = projectFormObj.getInputValue()    \r\n        const inputValueObj = projectObj.getProject(inputValue) \r\n        \r\n        storage.addProject(inputValueObj)\r\n        projectFormObj.setInputValue('')\r\n        \r\n        const newProjectDiv = projectObj.updateProjectListDisplay(storage.getArray())\r\n        projectPanelDiv.appendChild(newProjectDiv)\r\n        \r\n    }\r\n    const getPanelDiv = () => {\r\n        return projectPanelDiv\r\n    }\r\n    const projectDelListener = (e) => {\r\n        e.preventDefault()\r\n        if ( e.target.id == 'project-delete' ) {\r\n            \r\n            const id = parseInt(e.target.getAttribute('data-id'))\r\n        \r\n            const newProjectDiv = projectObj.updateProjectListDisplay(storage.removeProject(id))\r\n            projectPanelDiv.appendChild(newProjectDiv)\r\n\r\n        }\r\n        \r\n    }\r\n\r\n\r\n    return { initialisePanel, projectFormEventListener, getPanelDiv, projectDelListener }\r\n\r\n})()\r\n\r\nprojectPanel.initialisePanel()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectPanel);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/ProjectPanel.js?");

/***/ }),

/***/ "./src/modules/Projects/StorageProjects.js":
/*!*************************************************!*\
  !*** ./src/modules/Projects/StorageProjects.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n/* harmony import */ var _Tasks_StorageTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tasks/StorageTasks */ \"./src/modules/Tasks/StorageTasks.js\");\n\r\n\r\n\r\nfunction StorageProjects() {\r\n\r\n    let projectsArr = []\r\n\r\n    const getData = () => {\r\n\r\n        const data = localStorage.getItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY)\r\n        return JSON.parse(data)\r\n    \r\n    }\r\n    const getDataLength = () => {\r\n        \r\n        const storage = getData()\r\n        return ( storage ) ? storage.length : 0\r\n        \r\n    }    \r\n    const updateArray = () => {\r\n \r\n        const storedArr = getData(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY)\r\n        if ( storedArr ) {\r\n            projectsArr = storedArr\r\n        } \r\n\r\n    }\r\n    const updateData = (dataObj,op) => {\r\n        if(op == 'add') {\r\n            projectsArr.push(dataObj)\r\n        }\r\n        else if(op == 'del') {\r\n            projectsArr = projectsArr.filter( item => item.id != dataObj.id )\r\n        }\r\n        \r\n        localStorage.setItem( _Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, JSON.stringify(projectsArr) )\r\n    \r\n    }\r\n    const getArray = () => {\r\n        updateArray()\r\n        return projectsArr \r\n    }\r\n    const removeProject = (id) => {\r\n        updateArray()\r\n        const dataObj = projectsArr.find(item => item.id == id)\r\n        updateData(dataObj,'del')\r\n\r\n        const storagetask = (0,_Tasks_StorageTasks__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n        storagetask.removeTask(id)\r\n        \r\n        return projectsArr\r\n    }\r\n    const addProject = (dataObj) => {\r\n        updateArray()\r\n        updateData(dataObj, 'add')\r\n    }\r\n    \r\n\r\n    return {getDataLength, getArray, removeProject, addProject }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageProjects);\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/StorageProjects.js?");

/***/ }),

/***/ "./src/modules/Tasks/StorageTasks.js":
/*!*******************************************!*\
  !*** ./src/modules/Tasks/StorageTasks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n\r\n\r\nfunction StorageTasks() {\r\n\r\n    let tasksArr = []\r\n\r\n    const getData = () => {\r\n\r\n        const data = localStorage.getItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY)\r\n        return JSON.parse(data)\r\n    \r\n    }\r\n    const getDataLength = () => {\r\n        \r\n        const storage = getData()\r\n        return ( storage ) ? storage.length : 0\r\n        \r\n    }    \r\n    const updateArray = () => {\r\n \r\n        const storedArr = getData(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY)\r\n        if ( storedArr ) {\r\n            tasksArr = storedArr\r\n        } \r\n\r\n    }\r\n    const updateData = (dataObj) => {\r\n        // updateArray()\r\n        tasksArr.push(dataObj)\r\n        localStorage.setItem( _Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY, JSON.stringify(tasksArr) )\r\n    \r\n    }\r\n    const getArray = (projectid) => {\r\n        updateArray()\r\n\r\n        const specifictasks = tasksArr.filter(task => task.projectid == projectid)\r\n        return specifictasks \r\n    }\r\n    const removeTask = (projectid) => {\r\n        updateArray()\r\n        const newtasks = tasksArr.filter(task => task.projectid != projectid)\r\n\r\n        localStorage.setItem( _Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY, JSON.stringify(newtasks) )\r\n        \r\n    }\r\n    \r\n\r\n    return {getDataLength, updateData, getArray, removeTask }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageTasks);\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/StorageTasks.js?");

/***/ }),

/***/ "./src/modules/Tasks/Task.js":
/*!***********************************!*\
  !*** ./src/modules/Tasks/Task.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n/* harmony import */ var _StorageTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageTasks */ \"./src/modules/Tasks/StorageTasks.js\");\n\r\n\r\n\r\nfunction Task() {\r\n\r\n    const getTask = (name, priority, date, projectid) => {\r\n\r\n        const task = {}\r\n        const storage = (0,_StorageTasks__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n        const dataSize = storage.getDataLength(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY)\r\n        task.name = name\r\n        task.id = dataSize\r\n        task.priority = priority\r\n        task.duedate = date\r\n        task.projectid = projectid\r\n\r\n        return task\r\n    }\r\n    const AppendTasksToContainer = (tasksArr,tasksDiv) => {\r\n        \r\n        for(let i = 0; i < tasksArr.length; i++) {\r\n            const item = document.createElement('li')\r\n            item.setAttribute('data-id',tasksArr[i].id)\r\n            item.setAttribute('id','task-item')\r\n            item.innerText = `${tasksArr[i].name} ${tasksArr[i].priority} ${tasksArr[i].duedate}`\r\n            tasksDiv.appendChild(item)\r\n        }\r\n        return tasksDiv\r\n    }\r\n    const makeTaskList = (tasksArr) => {\r\n\r\n        const tasksDiv = document.createElement('ul')\r\n        tasksDiv.setAttribute('id','tasks-list')\r\n        \r\n        return AppendTasksToContainer(tasksArr, tasksDiv)\r\n        \r\n    }\r\n    const getTasksContainer = () => document.querySelector('#tasks-list')\r\n    \r\n    const removeTasks = () => {\r\n\r\n        const tasksContainer = getTasksContainer()\r\n\r\n        while(tasksContainer.firstChild) {\r\n            tasksContainer.removeChild(tasksContainer.firstChild)\r\n        }\r\n    }\r\n    const updateTaskListDisplay = (tasksArr) => {\r\n        \r\n        removeTasks()\r\n\r\n        const TasksContainer = getTasksContainer() \r\n        \r\n        return AppendTasksToContainer(tasksArr, TasksContainer)\r\n\r\n    }\r\n\r\n    return { getTask, makeTaskList, updateTaskListDisplay }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/Task.js?");

/***/ }),

/***/ "./src/modules/Tasks/TaskForm.js":
/*!***************************************!*\
  !*** ./src/modules/Tasks/TaskForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction TaskForm() {\r\n\r\n    const createElement = (type) => document.createElement(type)\r\n    \r\n    const getElement = (attributeType, attributeValue) => document.querySelector(`${attributeType}${attributeValue}`)\r\n    \r\n    const makeForm = () => {\r\n\r\n        const formDiv = createElement('form')\r\n        formDiv.setAttribute('id','task-form')\r\n\r\n        const titleDiv = createElement('input')\r\n        titleDiv.setAttribute('id','task-title-input') \r\n        titleDiv.type = 'text'\r\n        titleDiv.placeholder = 'Task Title...'\r\n        \r\n        const priorityDiv = createElement('select')\r\n        priorityDiv.setAttribute('id','task-priority-input') \r\n            const item1 = document.createElement('option')\r\n            item1.value = '1'\r\n            item1.innerText = 'Important'\r\n            const item2 = document.createElement('option')\r\n            item2.value = '2'\r\n            item2.innerText = 'Neutral'\r\n            const item3 = document.createElement('option')\r\n            item3.value = '3'\r\n            item3.innerText = 'Not much'\r\n\r\n            priorityDiv.appendChild(item1)\r\n            priorityDiv.appendChild(item2)\r\n            priorityDiv.appendChild(item3)\r\n        \r\n        const dateDiv = createElement('input')\r\n        dateDiv.setAttribute('id','task-date-input')\r\n        dateDiv.type = 'date'\r\n\r\n        \r\n        const submitBtn = createElement('button')\r\n        submitBtn.type = 'submit'\r\n        submitBtn.innerText = 'Add'\r\n\r\n        formDiv.appendChild(titleDiv)\r\n        formDiv.appendChild(priorityDiv)\r\n        formDiv.appendChild(dateDiv)\r\n        formDiv.appendChild(submitBtn)\r\n\r\n        return formDiv\r\n\r\n    }\r\n    const getForm = () => {\r\n        return getElement('#','task-form')\r\n    \r\n    }\r\n    const getTitleValue = () => {\r\n        const element = getElement('#','task-title-input')\r\n        return element.value\r\n    \r\n    }\r\n    const getPriorityValue = () => {\r\n        const element = getElement('#','task-priority-input')\r\n        return element.value\r\n    }\r\n    const getDateValue = () => {\r\n        const element = getElement('#','task-date-input')\r\n        return element.value\r\n    }\r\n    const setTitleValue = (value) => {\r\n        const element = getElement('#','task-title-input')\r\n        element.value = value\r\n    }\r\n\r\n    return { makeForm, getForm, getTitleValue, setTitleValue, getPriorityValue, getDateValue }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskForm);  \r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/TaskForm.js?");

/***/ }),

/***/ "./src/modules/Tasks/TaskPanel.js":
/*!****************************************!*\
  !*** ./src/modules/Tasks/TaskPanel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskForm */ \"./src/modules/Tasks/TaskForm.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Tasks/Task.js\");\n/* harmony import */ var _StorageTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StorageTasks */ \"./src/modules/Tasks/StorageTasks.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst taskPanel = (() => {\r\n\r\n    const taskform = (0,_TaskForm__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n    const taskobj = (0,_Task__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n    const storagetasks = (0,_StorageTasks__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n    const taskPanelDiv = document.createElement('div')\r\n    const heading = document.createElement('div')\r\n    let currentProjectId = 0\r\n\r\n    const initialisePanel = () => {\r\n        taskPanelDiv.setAttribute('id','task-content')\r\n        taskPanelDiv.appendChild( taskform.makeForm() )\r\n        heading.setAttribute('id','task-heading')\r\n        heading.innerText = ''\r\n        taskPanelDiv.appendChild( heading )\r\n        taskPanelDiv.appendChild( taskobj.makeTaskList( storagetasks.getArray(currentProjectId) ) ) \r\n\r\n    }\r\n    const projectHoverListener = (e) => {\r\n\r\n        if(e.target.tagName == 'LI') {\r\n            const currentProject = e.target\r\n            currentProjectId = parseInt(currentProject.getAttribute('data-id'))\r\n            const headingDiv = document.querySelector('#task-heading')\r\n            headingDiv.innerText = currentProject.innerText.slice(0,-3)\r\n    \r\n            const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))\r\n            taskPanelDiv.appendChild(heading)\r\n            taskPanelDiv.appendChild(newTaskDiv)\r\n        }\r\n    }\r\n    const taskSubmitListener = (e) => {\r\n        e.preventDefault()\r\n    \r\n        const titlevalue = taskform.getTitleValue()\r\n        const priorityvalue = taskform.getPriorityValue()\r\n        const datevalue = taskform.getDateValue()\r\n        \r\n        const inputvalueobj = taskobj.getTask(titlevalue, priorityvalue, datevalue, currentProjectId)\r\n        \r\n    \r\n        storagetasks.updateData(inputvalueobj)\r\n        taskform.setTitleValue('')\r\n        \r\n        const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))\r\n        taskPanelDiv.appendChild(newTaskDiv)\r\n            \r\n    }\r\n    const getPanelDiv = () => {\r\n        return taskPanelDiv\r\n    }\r\n\r\n    return { initialisePanel, getPanelDiv, projectHoverListener, taskSubmitListener }\r\n\r\n})()\r\n\r\n\r\ntaskPanel.initialisePanel()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskPanel);\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/TaskPanel.js?");

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