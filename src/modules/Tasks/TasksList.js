import { TASK_KEY } from "../Constants";
import StorageTasks from "./StorageTasks";

const tasklist = (() => {
  const AppendTasksToContainer = (tasksArr, tasksDiv) => {
    for (let i = 0; i < tasksArr.length; i++) {
      const item = document.createElement("li");
      item.setAttribute("data-id", tasksArr[i].id);
      item.setAttribute("id", "task-item");
      item.innerText = `${tasksArr[i].name} ${tasksArr[i].priority} ${tasksArr[i].duedate}`;
      const delBtn = document.createElement("button");
      delBtn.innerText = "del";
      delBtn.setAttribute("id", "task-delete");
      delBtn.setAttribute("data-id", tasksArr[i].id);
      item.appendChild(delBtn);
      tasksDiv.appendChild(item);
    }
    return tasksDiv;
  };
  const makeTaskList = (tasksArr) => {
    const tasksDiv = document.createElement("ul");
    tasksDiv.setAttribute("id", "tasks-list");

    return AppendTasksToContainer(tasksArr, tasksDiv);
  };
  const getTasksContainer = () => document.querySelector("#tasks-list");

  const removeTasks = () => {
    const tasksContainer = getTasksContainer();

    while (tasksContainer.firstChild) {
      tasksContainer.removeChild(tasksContainer.firstChild);
    }
  };
  const updateTaskListDisplay = (tasksArr) => {
    removeTasks();

    const TasksContainer = getTasksContainer();

    return AppendTasksToContainer(tasksArr, TasksContainer);
  };

  return { makeTaskList, updateTaskListDisplay };
})();

export default tasklist;
