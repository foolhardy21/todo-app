import taskform from "./TaskForm";
import taskmodel from "./Model";
import tasklist from "./TasksList";

const taskPanel = (() => {
  const taskPanelDiv = document.createElement("div");
  const heading = document.createElement("div");
  let currentProjectId = 1;

  const initialisePanel = () => {
    taskPanelDiv.setAttribute("id", "task-content");
    taskPanelDiv.appendChild(taskform.getForm());

    heading.setAttribute("id", "task-heading");
    heading.innerText = taskmodel.getProjectName(currentProjectId);
    taskPanelDiv.appendChild(heading);
    const tasksListDiv = tasklist.makeTaskList(
      taskmodel.getSpecificTasks(currentProjectId)
    );
    taskPanelDiv.appendChild(tasksListDiv);
  };

  const showProjectTasks = (projectid, currentProject) => {
    currentProjectId = projectid;
    const headingDiv = document.querySelector("#task-heading");
    headingDiv.innerText = currentProject.innerText.slice(0, -3);

    const newTaskDiv = tasklist.updateTaskListDisplay(
      taskmodel.getSpecificTasks(currentProjectId)
    );
    taskPanelDiv.appendChild(headingDiv);
    taskPanelDiv.appendChild(newTaskDiv);
  };

  const taskSubmitListener = (e) => {
    e.preventDefault();

    const titlevalue = taskform.getTitleValue();
    const priorityvalue = taskform.getPriorityValue();
    const datevalue = taskform.getDateValue();

    const inputvalueobj = taskmodel.makeTaskObj(
      titlevalue,
      priorityvalue,
      datevalue,
      currentProjectId
    );
    const newTasksArray = taskmodel.storeTask(inputvalueobj);
    const newTaskDiv = tasklist.updateTaskListDisplay(newTasksArray);
    taskPanelDiv.appendChild(newTaskDiv);
    taskform.setTitleValue("");
  };

  const getPanelDiv = () => {
    return taskPanelDiv;
  };

  const taskDelListener = (e) => {
    e.preventDefault();

    if (e.target.id == "task-delete") {
      const taskid = parseInt(e.target.getAttribute("data-id"));

      const newTaskDiv = tasklist.updateTaskListDisplay(
        taskmodel.deleteTask(taskid)
      );
      taskPanelDiv.appendChild(newTaskDiv);
    }
  };

  return {
    initialisePanel,
    getPanelDiv,
    showProjectTasks,
    taskSubmitListener,
    taskDelListener,
  };
})();

taskPanel.initialisePanel();

export default taskPanel;
