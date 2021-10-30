import StorageTasks from "../Tasks/StorageTasks";
import StorageProjects from "./StorageProjects";

const projectmodel = (() => {
  const storage = StorageProjects();
  const storageTasks = StorageTasks();

  const storeProject = (inputValue) => {
    const inputValueObj = makeProjectObject(inputValue);
    storage.addProject(inputValueObj);

    return getStoredProjects();
  };

  const getStoredProjects = () => {
    return storage.getArray() ? storage.getArray() : null;
  };

  const getnewId = () => {
    const storedprojects = getStoredProjects();
    if (storedprojects.length < 1) {
      return 0
    } 

    const lastid = storedprojects[storedprojects.length - 1]["id"];
    return lastid + 1;
  };

  const makeProjectObject = (name) => {
    const project = {};
    project.name = name;
    project.id = getnewId();

    return project;
  };

  const deleteProject = (projectid) => {
    const newprojectsarray = storage.removeProject(projectid);
    storageTasks.removeTasks(projectid);

    return newprojectsarray;
  };

  return {
    storeProject,
    getStoredProjects,
    getnewId,
    deleteProject,
  };
})();

export default projectmodel;
