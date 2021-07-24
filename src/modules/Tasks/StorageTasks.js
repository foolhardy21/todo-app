import { TASK_KEY } from "../Constants";

function StorageTasks() {
  let tasksArr = [];

  const getData = () => {
    const data = localStorage.getItem(TASK_KEY);
    return JSON.parse(data);
  };
  const getDataLength = () => {
    const storage = getData();
    const lastid = storage[storage.length - 1]["id"];
    return lastid + 1;
  };
  const updateArray = () => {
    const storedArr = getData(TASK_KEY);
    if (storedArr) {
      tasksArr = storedArr;
    }
  };
  const updateData = (dataObj, type) => {
    if (type == "add") {
      tasksArr.push(dataObj);
    } else if (type == "del") {
      tasksArr = tasksArr.filter((item) => item.id != dataObj.id);
    }
    localStorage.setItem(TASK_KEY, JSON.stringify(tasksArr));
  };
  const getArray = (projectid) => {
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

  return { getDataLength, updateData, getArray, removeTasks, removeTask };
}
export default StorageTasks;
