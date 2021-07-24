import TaskForm from "./TaskForm";
import Task from "./Task";
import StorageTasks from "./StorageTasks";

const taskPanel = (() => {
  const taskform = TaskForm();
  const taskobj = Task();
  const storagetasks = StorageTasks();
  const taskPanelDiv = document.createElement("div");
  const heading = document.createElement("div");
  let currentProjectId = 0;

  const initialisePanel = () => {
    taskPanelDiv.setAttribute("id", "task-content");
    taskPanelDiv.appendChild(taskform.makeForm());
    heading.setAttribute("id", "task-heading");
    heading.innerText = "";
    taskPanelDiv.appendChild(heading);
    taskPanelDiv.appendChild(
      taskobj.makeTaskList(storagetasks.getArray(currentProjectId))
    );
  };
  const projectHoverListener = (e) => {
    if (e.target.tagName == "LI") {
      const currentProject = e.target;
      currentProjectId = parseInt(currentProject.getAttribute("data-id"));
      const headingDiv = document.querySelector("#task-heading");
      headingDiv.innerText = currentProject.innerText.slice(0, -3);

      const newTaskDiv = taskobj.updateTaskListDisplay(
        storagetasks.getArray(currentProjectId)
      );
      taskPanelDiv.appendChild(heading);
      taskPanelDiv.appendChild(newTaskDiv);
    }
  };
  const taskSubmitListener = (e) => {
    e.preventDefault();

    const titlevalue = taskform.getTitleValue();
    const priorityvalue = taskform.getPriorityValue();
    const datevalue = taskform.getDateValue();

    const inputvalueobj = taskobj.getTask(
      titlevalue,
      priorityvalue,
      datevalue,
      currentProjectId
    );

    storagetasks.updateData(inputvalueobj, "add");
    taskform.setTitleValue("");

    const newTaskDiv = taskobj.updateTaskListDisplay(
      storagetasks.getArray(currentProjectId)
    );
    taskPanelDiv.appendChild(newTaskDiv);
  };
  const getPanelDiv = () => {
    return taskPanelDiv;
  };
  const taskDelListener = (e) => {
    e.preventDefault();

    if (e.target.id == "task-delete") {
      const id = parseInt(e.target.getAttribute("data-id"));

      const newTaskDiv = taskobj.updateTaskListDisplay(
        storagetasks.removeTask(id)
      );
      taskPanelDiv.appendChild(newTaskDiv);
    }
  };

  return {
    initialisePanel,
    getPanelDiv,
    projectHoverListener,
    taskSubmitListener,
    taskDelListener,
  };
})();

taskPanel.initialisePanel();

export default taskPanel;
