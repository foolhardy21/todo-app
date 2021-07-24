const projectlist = (() => {
  const projectsDiv = document.createElement("ul");

  const AppendProjectsToContainer = (projectsArr, projectsDiv) => {
    for (let i = 0; i < projectsArr.length; i++) {
      const item = document.createElement("li");
      item.setAttribute("data-id", projectsArr[i].id);
      item.setAttribute("id", "project-item");
      item.innerText = projectsArr[i].name;
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "del";
      deleteBtn.setAttribute("id", "project-delete");
      deleteBtn.setAttribute("data-id", projectsArr[i].id);
      item.appendChild(deleteBtn);
      projectsDiv.appendChild(item);
    }
  };
  const makeProjectList = (projectsArr) => {
    projectsDiv.setAttribute("id", "projects-list");
    AppendProjectsToContainer(projectsArr, projectsDiv);
  };
  const getProjectsContainer = () => document.querySelector("#projects-list");

  const removeProjects = () => {
    const projectsContainer = getProjectsContainer();
    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    }
  };
  const updateProjectListDiv = (projectsArr) => {
    removeProjects();
    const ProjectsContainer = getProjectsContainer();
    AppendProjectsToContainer(projectsArr, ProjectsContainer);

    return projectsDiv;
  };
  const getProjectsListDiv = (projectsArr) => {
    makeProjectList(projectsArr);
    return projectsDiv;
  };

  return { getProjectsListDiv, updateProjectListDiv };
})();

export default projectlist;
