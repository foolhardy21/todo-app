import { TASK_KEY } from "../Constants";

function StorageTasks() {
  let tasksArr = [];

  const getAllTasks = () => {
    const data = localStorage.getItem(TASK_KEY);
    return JSON.parse(data);
  };

  const updateArray = () => {
    const storedArr = getAllTasks(TASK_KEY);
    if (storedArr) {
      tasksArr = storedArr;
    }
  };
  const updateData = (dataObj, type) => {
    updateArray();
    if (type == "add") {
      tasksArr.push(dataObj);
    } else if (type == "del") {
      tasksArr = tasksArr.filter((item) => item.id != dataObj.id);
    }
    localStorage.setItem(TASK_KEY, JSON.stringify(tasksArr));
  };
  const getProjectTasks = (projectid) => {
    updateArray();

    const specifictasks = tasksArr.filter(
      (task) => task.projectid == projectid
    );
    return specifictasks;
  };
  const removeTasks = (projectid) => {
    updateArray();
    const newtasks = tasksArr.filter((task) => task.projectid != projectid);

    localStorage.setItem(TASK_KEY, JSON.stringify(newtasks));
  };
  const removeTask = (id) => {
    updateArray();
    const dataObj = tasksArr.find((item) => item.id == id);
    updateData(dataObj, "del");

    return tasksArr;
  };

  return { getAllTasks, getProjectTasks, updateData, removeTasks, removeTask };
}
export default StorageTasks;
