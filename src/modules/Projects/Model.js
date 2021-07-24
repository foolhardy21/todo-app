import StorageProjects from "./StorageProjects";

const projectmodel = (() => {
  const storage = StorageProjects();

  const storeProject = (inputValue) => {
    const inputValueObj = makeProjectObject(inputValue);
    storage.addProject(inputValueObj);

    return getStoredProjects();
  };
  const getStoredProjects = () => {
    return storage.getArray();
  };
  const getnewId = () => {
    const storedprojects = getStoredProjects();
    const lastid = storedprojects[storedprojects.length - 1]["id"];

    return lastid + 1;
  };
  const makeProjectObject = (name) => {
    const project = {};
    project.name = name;
    project.id = getnewId();

    return project;
  };

  return {
    storeProject,
    getStoredProjects,
    getnewId,
  };
})();

export default projectmodel;
