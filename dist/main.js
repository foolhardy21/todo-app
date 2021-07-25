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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Projects_ProjectPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Projects/ProjectPanel */ \"./src/modules/Projects/ProjectPanel.js\");\n/* harmony import */ var _modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Tasks/TaskPanel */ \"./src/modules/Tasks/TaskPanel.js\");\n\r\n\r\n\r\nconst contentDiv = document.querySelector(\"#content\");\r\ncontentDiv.appendChild(_modules_Projects_ProjectPanel__WEBPACK_IMPORTED_MODULE_0__.default.getPanelDiv());\r\ncontentDiv.appendChild(_modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__.default.getPanelDiv());\r\n\r\ndocument\r\n  .querySelector(\"#project-form\")\r\n  .addEventListener(\"submit\", _modules_Projects_ProjectPanel__WEBPACK_IMPORTED_MODULE_0__.default.projectFormEventListener);\r\n// document\r\n//   .querySelector(\"#projects-list\")\r\n//   .addEventListener(\"mouseover\", taskPanel.projectHoverListener);\r\n// document\r\n//   .querySelector(\"#projects-list\")\r\n//   .addEventListener(\"click\", projectPanel.projectDelListener);\r\n\r\ndocument\r\n  .querySelector(\"#task-form\")\r\n  .addEventListener(\"submit\", _modules_Tasks_TaskPanel__WEBPACK_IMPORTED_MODULE_1__.default.taskSubmitListener);\r\n// document\r\n//   .querySelector(\"#tasks-list\")\r\n//   .addEventListener(\"click\", taskPanel.taskDelListener);\r\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/Constants.js":
/*!**********************************!*\
  !*** ./src/modules/Constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TASK_KEY\": () => (/* binding */ TASK_KEY),\n/* harmony export */   \"STORAGE_KEY\": () => (/* binding */ STORAGE_KEY)\n/* harmony export */ });\nconst STORAGE_KEY = 'projects'\r\nconst TASK_KEY = 'tasks'\r\n \n\n//# sourceURL=webpack://todo-app/./src/modules/Constants.js?");

/***/ }),

/***/ "./src/modules/Projects/Model.js":
/*!***************************************!*\
  !*** ./src/modules/Projects/Model.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _StorageProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageProjects */ \"./src/modules/Projects/StorageProjects.js\");\n\r\n\r\nconst projectmodel = (() => {\r\n  const storage = (0,_StorageProjects__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n  const storeProject = (inputValue) => {\r\n    const inputValueObj = makeProjectObject(inputValue);\r\n    storage.addProject(inputValueObj);\r\n\r\n    return getStoredProjects();\r\n  };\r\n  const getStoredProjects = () => {\r\n    return storage.getArray();\r\n  };\r\n  const getnewId = () => {\r\n    const storedprojects = getStoredProjects();\r\n    const lastid = storedprojects[storedprojects.length - 1][\"id\"];\r\n\r\n    return lastid + 1;\r\n  };\r\n  const makeProjectObject = (name) => {\r\n    const project = {};\r\n    project.name = name;\r\n    project.id = getnewId();\r\n\r\n    return project;\r\n  };\r\n\r\n  return {\r\n    storeProject,\r\n    getStoredProjects,\r\n    getnewId,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectmodel);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/Model.js?");

/***/ }),

/***/ "./src/modules/Projects/ProjectForm.js":
/*!*********************************************!*\
  !*** ./src/modules/Projects/ProjectForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectform = (() => {\r\n  const createElement = (type) => document.createElement(type);\r\n\r\n  const getElement = (attributeType, attributeValue) =>\r\n    document.querySelector(`${attributeType}${attributeValue}`);\r\n\r\n  const formDiv = createElement(\"form\");\r\n\r\n  const makeForm = () => {\r\n    formDiv.setAttribute(\"id\", \"project-form\");\r\n\r\n    const inputDiv = createElement(\"input\");\r\n    inputDiv.setAttribute(\"id\", \"project-input\");\r\n    inputDiv.type = \"text\";\r\n    inputDiv.placeholder = \"Project Name...\";\r\n\r\n    const submitBtn = createElement(\"button\");\r\n    submitBtn.type = \"submit\";\r\n    submitBtn.innerText = \"Add\";\r\n\r\n    formDiv.appendChild(inputDiv);\r\n    formDiv.appendChild(submitBtn);\r\n  };\r\n  const getForm = () => {\r\n    return formDiv;\r\n  };\r\n  const getInputValue = () => {\r\n    const element = getElement(\"#\", \"project-input\");\r\n    return element.value;\r\n  };\r\n  const setInputValue = (value) => {\r\n    const element = getElement(\"#\", \"project-input\");\r\n    element.value = value;\r\n  };\r\n\r\n  return {\r\n    makeForm,\r\n    getForm,\r\n    getInputValue,\r\n    setInputValue,\r\n  };\r\n})();\r\n\r\nprojectform.makeForm();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectform);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/ProjectForm.js?");

/***/ }),

/***/ "./src/modules/Projects/ProjectList.js":
/*!*********************************************!*\
  !*** ./src/modules/Projects/ProjectList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectlist = (() => {\r\n  const projectsDiv = document.createElement(\"ul\");\r\n\r\n  const AppendProjectsToContainer = (projectsArr, projectsDiv) => {\r\n    for (let i = 0; i < projectsArr.length; i++) {\r\n      const item = document.createElement(\"li\");\r\n      item.setAttribute(\"data-id\", projectsArr[i].id);\r\n      item.setAttribute(\"id\", \"project-item\");\r\n      item.innerText = projectsArr[i].name;\r\n      const deleteBtn = document.createElement(\"button\");\r\n      deleteBtn.innerText = \"del\";\r\n      deleteBtn.setAttribute(\"id\", \"project-delete\");\r\n      deleteBtn.setAttribute(\"data-id\", projectsArr[i].id);\r\n      item.appendChild(deleteBtn);\r\n      projectsDiv.appendChild(item);\r\n    }\r\n  };\r\n  const makeProjectList = (projectsArr) => {\r\n    projectsDiv.setAttribute(\"id\", \"projects-list\");\r\n    AppendProjectsToContainer(projectsArr, projectsDiv);\r\n  };\r\n  const getProjectsContainer = () => document.querySelector(\"#projects-list\");\r\n\r\n  const removeProjects = () => {\r\n    const projectsContainer = getProjectsContainer();\r\n    while (projectsContainer.firstChild) {\r\n      projectsContainer.removeChild(projectsContainer.firstChild);\r\n    }\r\n  };\r\n  const updateProjectListDiv = (projectsArr) => {\r\n    removeProjects();\r\n    const ProjectsContainer = getProjectsContainer();\r\n    AppendProjectsToContainer(projectsArr, ProjectsContainer);\r\n\r\n    return projectsDiv;\r\n  };\r\n  const getProjectsListDiv = (projectsArr) => {\r\n    makeProjectList(projectsArr);\r\n    return projectsDiv;\r\n  };\r\n\r\n  return { getProjectsListDiv, updateProjectListDiv };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectlist);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/ProjectList.js?");

/***/ }),

/***/ "./src/modules/Projects/ProjectPanel.js":
/*!**********************************************!*\
  !*** ./src/modules/Projects/ProjectPanel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ProjectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectForm */ \"./src/modules/Projects/ProjectForm.js\");\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model */ \"./src/modules/Projects/Model.js\");\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList */ \"./src/modules/Projects/ProjectList.js\");\n\r\n\r\n\r\n\r\nconst projectPanel = (() => {\r\n  const projectPanelDiv = document.createElement(\"div\");\r\n\r\n  const initialisePanel = () => {\r\n    projectPanelDiv.setAttribute(\"id\", \"project-content\");\r\n    projectPanelDiv.appendChild(_ProjectForm__WEBPACK_IMPORTED_MODULE_0__.default.getForm());\r\n\r\n    const projectsArray = _Model__WEBPACK_IMPORTED_MODULE_1__.default.getStoredProjects();\r\n    projectPanelDiv.appendChild(_ProjectList__WEBPACK_IMPORTED_MODULE_2__.default.getProjectsListDiv(projectsArray));\r\n  };\r\n  const projectFormEventListener = (e) => {\r\n    e.preventDefault();\r\n    const inputValue = _ProjectForm__WEBPACK_IMPORTED_MODULE_0__.default.getInputValue();\r\n    const newProjectsArray = _Model__WEBPACK_IMPORTED_MODULE_1__.default.storeProject(inputValue);\r\n    const newProjectsDiv = _ProjectList__WEBPACK_IMPORTED_MODULE_2__.default.updateProjectListDiv(newProjectsArray);\r\n    projectPanelDiv.appendChild(newProjectsDiv);\r\n    _ProjectForm__WEBPACK_IMPORTED_MODULE_0__.default.setInputValue(\"\");\r\n  };\r\n  const getPanelDiv = () => {\r\n    return projectPanelDiv;\r\n  };\r\n  const projectDelListener = (e) => {\r\n    // e.preventDefault()\r\n    // if ( e.target.id == 'project-delete' ) {\r\n    //     const id = parseInt(e.target.getAttribute('data-id'))\r\n    //     const newProjectDiv = projectObj.updateProjectListDisplay(storage.removeProject(id))\r\n    //     projectPanelDiv.appendChild(newProjectDiv)\r\n    // }\r\n  };\r\n\r\n  return {\r\n    initialisePanel,\r\n    projectFormEventListener,\r\n    getPanelDiv,\r\n    // projectDelListener\r\n  };\r\n})();\r\n\r\nprojectPanel.initialisePanel();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectPanel);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/ProjectPanel.js?");

/***/ }),

/***/ "./src/modules/Projects/StorageProjects.js":
/*!*************************************************!*\
  !*** ./src/modules/Projects/StorageProjects.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n/* harmony import */ var _Tasks_StorageTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tasks/StorageTasks */ \"./src/modules/Tasks/StorageTasks.js\");\n\r\n\r\n\r\nfunction StorageProjects() {\r\n  let projectsArr = [];\r\n\r\n  const getData = () => {\r\n    const data = localStorage.getItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY);\r\n    return JSON.parse(data);\r\n  };\r\n  const updateArray = () => {\r\n    const storedArr = getData(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY);\r\n    if (storedArr) {\r\n      projectsArr = storedArr;\r\n    }\r\n  };\r\n  const updateData = (dataObj, op) => {\r\n    if (op == \"add\") {\r\n      projectsArr.push(dataObj);\r\n    } else if (op == \"del\") {\r\n      projectsArr = projectsArr.filter((item) => item.id != dataObj.id);\r\n    }\r\n\r\n    localStorage.setItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEY, JSON.stringify(projectsArr));\r\n  };\r\n  const getArray = () => {\r\n    updateArray();\r\n    return projectsArr;\r\n  };\r\n  const removeProject = (id) => {\r\n    updateArray();\r\n    const dataObj = projectsArr.find((item) => item.id == id);\r\n    updateData(dataObj, \"del\");\r\n\r\n    const storagetask = (0,_Tasks_StorageTasks__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n    storagetask.removeTasks(id);\r\n\r\n    return projectsArr;\r\n  };\r\n  const addProject = (dataObj) => {\r\n    updateArray();\r\n    updateData(dataObj, \"add\");\r\n  };\r\n\r\n  return { getArray, removeProject, addProject };\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageProjects);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Projects/StorageProjects.js?");

/***/ }),

/***/ "./src/modules/Tasks/Model.js":
/*!************************************!*\
  !*** ./src/modules/Tasks/Model.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Projects_StorageProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Projects/StorageProjects */ \"./src/modules/Projects/StorageProjects.js\");\n/* harmony import */ var _StorageTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageTasks */ \"./src/modules/Tasks/StorageTasks.js\");\n\r\n\r\n\r\nconst taskmodel = (() => {\r\n  const storageProjects = (0,_Projects_StorageProjects__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  const storageTasks = (0,_StorageTasks__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n\r\n  const getProjectName = (id) => {\r\n    const projectsArray = storageProjects.getArray();\r\n    const project = projectsArray.find((item) => item.id == id);\r\n\r\n    return project.name;\r\n  };\r\n  const getSpecificTasks = (id) => {\r\n    return storageTasks.getProjectTasks(id);\r\n  };\r\n  const makeTaskObj = (name, priority, date, projectid) => {\r\n    const task = {};\r\n    const storedtasks = storageTasks.getAllTasks();\r\n    const lastid = storedtasks[storedtasks.length - 1][\"id\"];\r\n    task.name = name;\r\n    task.id = lastid + 1;\r\n    task.priority = priority;\r\n    task.duedate = date;\r\n    task.projectid = projectid;\r\n\r\n    return task;\r\n  };\r\n  const storeTask = (taskobj) => {\r\n    storageTasks.updateData(taskobj, \"add\");\r\n\r\n    return getSpecificTasks(taskobj.projectid);\r\n  };\r\n  return {\r\n    getProjectName,\r\n    getSpecificTasks,\r\n    makeTaskObj,\r\n    storeTask,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskmodel);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/Model.js?");

/***/ }),

/***/ "./src/modules/Tasks/StorageTasks.js":
/*!*******************************************!*\
  !*** ./src/modules/Tasks/StorageTasks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n\r\n\r\nfunction StorageTasks() {\r\n  let tasksArr = [];\r\n\r\n  const getAllTasks = () => {\r\n    const data = localStorage.getItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY);\r\n    return JSON.parse(data);\r\n  };\r\n\r\n  const updateArray = () => {\r\n    const storedArr = getAllTasks(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY);\r\n    if (storedArr) {\r\n      tasksArr = storedArr;\r\n    }\r\n  };\r\n  const updateData = (dataObj, type) => {\r\n    updateArray();\r\n    if (type == \"add\") {\r\n      tasksArr.push(dataObj);\r\n    } else if (type == \"del\") {\r\n      tasksArr = tasksArr.filter((item) => item.id != dataObj.id);\r\n    }\r\n    localStorage.setItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY, JSON.stringify(tasksArr));\r\n  };\r\n  const getProjectTasks = (projectid) => {\r\n    updateArray();\r\n\r\n    const specifictasks = tasksArr.filter(\r\n      (task) => task.projectid == projectid\r\n    );\r\n    return specifictasks;\r\n  };\r\n  const removeTasks = (projectid) => {\r\n    updateArray();\r\n    const newtasks = tasksArr.filter((task) => task.projectid != projectid);\r\n\r\n    localStorage.setItem(_Constants__WEBPACK_IMPORTED_MODULE_0__.TASK_KEY, JSON.stringify(newtasks));\r\n  };\r\n  const removeTask = (id) => {\r\n    updateArray();\r\n    const dataObj = tasksArr.find((item) => item.id == id);\r\n    updateData(dataObj, \"del\");\r\n\r\n    return tasksArr;\r\n  };\r\n\r\n  return { getAllTasks, getProjectTasks, updateData, removeTasks, removeTask };\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageTasks);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/StorageTasks.js?");

/***/ }),

/***/ "./src/modules/Tasks/TaskForm.js":
/*!***************************************!*\
  !*** ./src/modules/Tasks/TaskForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskform = (() => {\r\n  const createElement = (type) => document.createElement(type);\r\n\r\n  const getElement = (attributeType, attributeValue) =>\r\n    document.querySelector(`${attributeType}${attributeValue}`);\r\n\r\n  const formDiv = createElement(\"form\");\r\n\r\n  const makeForm = () => {\r\n    formDiv.setAttribute(\"id\", \"task-form\");\r\n\r\n    const titleDiv = createElement(\"input\");\r\n    titleDiv.setAttribute(\"id\", \"task-title-input\");\r\n    titleDiv.type = \"text\";\r\n    titleDiv.placeholder = \"Task Title...\";\r\n\r\n    const priorityDiv = createElement(\"select\");\r\n    priorityDiv.setAttribute(\"id\", \"task-priority-input\");\r\n    const item1 = document.createElement(\"option\");\r\n    item1.value = \"1\";\r\n    item1.innerText = \"Important\";\r\n    const item2 = document.createElement(\"option\");\r\n    item2.value = \"2\";\r\n    item2.innerText = \"Neutral\";\r\n    const item3 = document.createElement(\"option\");\r\n    item3.value = \"3\";\r\n    item3.innerText = \"Not much\";\r\n\r\n    priorityDiv.appendChild(item1);\r\n    priorityDiv.appendChild(item2);\r\n    priorityDiv.appendChild(item3);\r\n\r\n    const dateDiv = createElement(\"input\");\r\n    dateDiv.setAttribute(\"id\", \"task-date-input\");\r\n    dateDiv.type = \"date\";\r\n\r\n    const submitBtn = createElement(\"button\");\r\n    submitBtn.type = \"submit\";\r\n    submitBtn.innerText = \"Add\";\r\n\r\n    formDiv.appendChild(titleDiv);\r\n    formDiv.appendChild(priorityDiv);\r\n    formDiv.appendChild(dateDiv);\r\n    formDiv.appendChild(submitBtn);\r\n  };\r\n  const getForm = () => {\r\n    return formDiv;\r\n  };\r\n  const getTitleValue = () => {\r\n    const element = getElement(\"#\", \"task-title-input\");\r\n    return element.value;\r\n  };\r\n  const getPriorityValue = () => {\r\n    const element = getElement(\"#\", \"task-priority-input\");\r\n    return element.value;\r\n  };\r\n  const getDateValue = () => {\r\n    const element = getElement(\"#\", \"task-date-input\");\r\n    return element.value;\r\n  };\r\n  const setTitleValue = (value) => {\r\n    const element = getElement(\"#\", \"task-title-input\");\r\n    element.value = value;\r\n  };\r\n\r\n  return {\r\n    makeForm,\r\n    getForm,\r\n    getTitleValue,\r\n    setTitleValue,\r\n    getPriorityValue,\r\n    getDateValue,\r\n  };\r\n})();\r\n\r\ntaskform.makeForm();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskform);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/TaskForm.js?");

/***/ }),

/***/ "./src/modules/Tasks/TaskPanel.js":
/*!****************************************!*\
  !*** ./src/modules/Tasks/TaskPanel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskForm */ \"./src/modules/Tasks/TaskForm.js\");\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model */ \"./src/modules/Tasks/Model.js\");\n/* harmony import */ var _TasksList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TasksList */ \"./src/modules/Tasks/TasksList.js\");\n\r\n// import Task from \"./Task\";\r\n// import StorageTasks from \"./StorageTasks\";\r\n\r\n\r\n\r\nconst taskPanel = (() => {\r\n  // const taskform = TaskForm();\r\n  // const taskobj = Task();\r\n  // const storagetasks = StorageTasks();\r\n  const taskPanelDiv = document.createElement(\"div\");\r\n  const heading = document.createElement(\"div\");\r\n  let currentProjectId = 1;\r\n\r\n  const initialisePanel = () => {\r\n    taskPanelDiv.setAttribute(\"id\", \"task-content\");\r\n    taskPanelDiv.appendChild(_TaskForm__WEBPACK_IMPORTED_MODULE_0__.default.getForm());\r\n\r\n    heading.setAttribute(\"id\", \"task-heading\");\r\n    heading.innerText = _Model__WEBPACK_IMPORTED_MODULE_1__.default.getProjectName(currentProjectId);\r\n    taskPanelDiv.appendChild(heading);\r\n    const tasksListDiv = _TasksList__WEBPACK_IMPORTED_MODULE_2__.default.makeTaskList(\r\n      _Model__WEBPACK_IMPORTED_MODULE_1__.default.getSpecificTasks(currentProjectId)\r\n    );\r\n    taskPanelDiv.appendChild(tasksListDiv);\r\n  };\r\n  // const projectHoverListener = (e) => {\r\n  //   if (e.target.tagName == \"LI\") {\r\n  //     const currentProject = e.target;\r\n  //     currentProjectId = parseInt(currentProject.getAttribute(\"data-id\"));\r\n  //     const headingDiv = document.querySelector(\"#task-heading\");\r\n  //     headingDiv.innerText = currentProject.innerText.slice(0, -3);\r\n\r\n  //     const newTaskDiv = taskobj.updateTaskListDisplay(\r\n  //       storagetasks.getArray(currentProjectId)\r\n  //     );\r\n  //     taskPanelDiv.appendChild(heading);\r\n  //     taskPanelDiv.appendChild(newTaskDiv);\r\n  //   }\r\n  // };\r\n  const taskSubmitListener = (e) => {\r\n    e.preventDefault();\r\n\r\n    const titlevalue = _TaskForm__WEBPACK_IMPORTED_MODULE_0__.default.getTitleValue();\r\n    const priorityvalue = _TaskForm__WEBPACK_IMPORTED_MODULE_0__.default.getPriorityValue();\r\n    const datevalue = _TaskForm__WEBPACK_IMPORTED_MODULE_0__.default.getDateValue();\r\n\r\n    const inputvalueobj = _Model__WEBPACK_IMPORTED_MODULE_1__.default.makeTaskObj(\r\n      titlevalue,\r\n      priorityvalue,\r\n      datevalue,\r\n      currentProjectId\r\n    );\r\n    const newTasksArray = _Model__WEBPACK_IMPORTED_MODULE_1__.default.storeTask(inputvalueobj);\r\n    const newTaskDiv = _TasksList__WEBPACK_IMPORTED_MODULE_2__.default.updateTaskListDisplay(newTasksArray);\r\n    taskPanelDiv.appendChild(newTaskDiv);\r\n    _TaskForm__WEBPACK_IMPORTED_MODULE_0__.default.setTitleValue(\"\");\r\n  };\r\n  const getPanelDiv = () => {\r\n    return taskPanelDiv;\r\n  };\r\n  // const taskDelListener = (e) => {\r\n  //   e.preventDefault();\r\n\r\n  //   if (e.target.id == \"task-delete\") {\r\n  //     const id = parseInt(e.target.getAttribute(\"data-id\"));\r\n\r\n  //     const newTaskDiv = taskobj.updateTaskListDisplay(\r\n  //       storagetasks.removeTask(id)\r\n  //     );\r\n  //     taskPanelDiv.appendChild(newTaskDiv);\r\n  //   }\r\n  // };\r\n\r\n  return {\r\n    initialisePanel,\r\n    getPanelDiv,\r\n    // projectHoverListener,\r\n    taskSubmitListener,\r\n    // taskDelListener,\r\n  };\r\n})();\r\n\r\ntaskPanel.initialisePanel();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskPanel);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/TaskPanel.js?");

/***/ }),

/***/ "./src/modules/Tasks/TasksList.js":
/*!****************************************!*\
  !*** ./src/modules/Tasks/TasksList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/modules/Constants.js\");\n/* harmony import */ var _StorageTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageTasks */ \"./src/modules/Tasks/StorageTasks.js\");\n\r\n\r\n\r\nconst tasklist = (() => {\r\n  const AppendTasksToContainer = (tasksArr, tasksDiv) => {\r\n    for (let i = 0; i < tasksArr.length; i++) {\r\n      const item = document.createElement(\"li\");\r\n      item.setAttribute(\"data-id\", tasksArr[i].id);\r\n      item.setAttribute(\"id\", \"task-item\");\r\n      item.innerText = `${tasksArr[i].name} ${tasksArr[i].priority} ${tasksArr[i].duedate}`;\r\n      const delBtn = document.createElement(\"button\");\r\n      delBtn.innerText = \"del\";\r\n      delBtn.setAttribute(\"id\", \"task-delete\");\r\n      delBtn.setAttribute(\"data-id\", tasksArr[i].id);\r\n      item.appendChild(delBtn);\r\n      tasksDiv.appendChild(item);\r\n    }\r\n    return tasksDiv;\r\n  };\r\n  const makeTaskList = (tasksArr) => {\r\n    const tasksDiv = document.createElement(\"ul\");\r\n    tasksDiv.setAttribute(\"id\", \"tasks-list\");\r\n\r\n    return AppendTasksToContainer(tasksArr, tasksDiv);\r\n  };\r\n  const getTasksContainer = () => document.querySelector(\"#tasks-list\");\r\n\r\n  const removeTasks = () => {\r\n    const tasksContainer = getTasksContainer();\r\n\r\n    while (tasksContainer.firstChild) {\r\n      tasksContainer.removeChild(tasksContainer.firstChild);\r\n    }\r\n  };\r\n  const updateTaskListDisplay = (tasksArr) => {\r\n    removeTasks();\r\n\r\n    const TasksContainer = getTasksContainer();\r\n\r\n    return AppendTasksToContainer(tasksArr, TasksContainer);\r\n  };\r\n\r\n  return { makeTaskList, updateTaskListDisplay };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasklist);\r\n\n\n//# sourceURL=webpack://todo-app/./src/modules/Tasks/TasksList.js?");

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