import { STORAGE_KEY } from "../Constants";
import StorageTasks from "../Tasks/StorageTasks";

function StorageProjects() {
  let projectsArr = [];

  const getData = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(data);
  };

  const updateArray = () => {
    const storedArr = getData(STORAGE_KEY);
    if (storedArr) {
      projectsArr = storedArr;
    }
  };

  const updateData = (dataObj, op) => {
    if (op == "add") {
      projectsArr.push(dataObj);
    } else if (op == "del") {
      projectsArr = projectsArr.filter((item) => item.id != dataObj.id);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(projectsArr));
  };

  const getArray = () => {
    updateArray();
    return projectsArr;
  };

  const removeProject = (projectid) => {
    updateArray();
    const dataObj = projectsArr.find((item) => item.id == projectid);
    updateData(dataObj, "del");

    return projectsArr;
  };

  const addProject = (dataObj) => {
    updateArray();
    updateData(dataObj, "add");
  };

  return { getArray, removeProject, addProject };
}
export default StorageProjects;
