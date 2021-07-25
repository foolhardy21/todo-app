import projectform from "./ProjectForm";
import projectmodel from "./Model";
import projectlist from "./ProjectList";
import taskPanel from "../Tasks/TaskPanel";

const projectPanel = (() => {
  const projectPanelDiv = document.createElement("div");

  const initialisePanel = () => {
    projectPanelDiv.setAttribute("id", "project-content");
    projectPanelDiv.appendChild(projectform.getForm());

    const projectsArray = projectmodel.getStoredProjects();
    projectPanelDiv.appendChild(projectlist.getProjectsListDiv(projectsArray));
  };

  const projectFormEventListener = (e) => {
    e.preventDefault();
    const inputValue = projectform.getInputValue();
    const newProjectsArray = projectmodel.storeProject(inputValue);
    const newProjectsDiv = projectlist.updateProjectListDiv(newProjectsArray);
    projectPanelDiv.appendChild(newProjectsDiv);
    projectform.setInputValue("");
  };

  const getPanelDiv = () => {
    return projectPanelDiv;
  };

  const projectDelListener = (e) => {
    e.preventDefault();
    if (e.target.id == "project-delete") {
      const projectid = parseInt(e.target.getAttribute("data-id"));
      const newProjectDiv = projectlist.updateProjectListDiv(
        projectmodel.deleteProject(projectid)
      );
      projectPanelDiv.appendChild(newProjectDiv);
    }
  };

  const projectHoverListener = (e) => {
    if (e.target.id == "project-item") {
      const projectid = parseInt(e.target.getAttribute("data-id"));
      taskPanel.showProjectTasks(projectid, e.target);
    }
  };

  return {
    initialisePanel,
    projectFormEventListener,
    getPanelDiv,
    projectDelListener,
    projectHoverListener,
  };
})();

projectPanel.initialisePanel();

export default projectPanel;
