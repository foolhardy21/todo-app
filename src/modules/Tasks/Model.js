import StorageProjects from "../Projects/StorageProjects";
import StorageTasks from "./StorageTasks";

const taskmodel = (() => {
  const storageProjects = StorageProjects();
  const storageTasks = StorageTasks();

  const getProjectName = (id) => {
    const projectsArray = storageProjects.getArray();
    const project = projectsArray.find((item) => item.id == id);

    return project ? project.name : '';
  };
  const getSpecificTasks = (id) => {
    return storageTasks.getProjectTasks(id);
  };
  const makeTaskObj = (name, priority, date, projectid) => {
    const task = {};
    const storedtasks = storageTasks.getAllTasks();
    let previd = -2
    if(storedtasks) {
      previd = storedtasks[storedtasks.length - 1]["id"];
    } else {
      previd = -1
    }
    task.name = name;
    task.id = previd + 1;
    task.priority = priority;
    task.duedate = date;
    task.projectid = projectid;

    return task;
  };
  const storeTask = (taskobj) => {
    storageTasks.updateData(taskobj, "add");

    return getSpecificTasks(taskobj.projectid);
  };
  const deleteTask = (taskid) => {
    return storageTasks.removeTask(taskid);
  };
  return {
    getProjectName,
    getSpecificTasks,
    makeTaskObj,
    storeTask,
    deleteTask,
  };
})();

export default taskmodel;
