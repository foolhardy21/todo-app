import STORAGE_KEY from "./Constants"
import StorageProjects from "./Storage"

function Project() {

    const getProject = (name) => {

        const project = {}
        const storage = StorageProjects()
        const dataSize = storage.getDataLength(STORAGE_KEY)
        project.name = name
        project.id = dataSize

        return project
    }
    const makeProjectList = (projectsArr) => {

        const projectsDiv = document.createElement('ul')
        projectsDiv.setAttribute('id','projects-list')
        
        for(let i = 0; i < projectsArr.length; i++) {
            const item = document.createElement('li')
            item.innerText = projectsArr[i].name
            projectsDiv.appendChild(item)
        }
        return projectsDiv
        
    }
    const getProjectsContainer = () => document.querySelector('#projects-list')
    
    const removeProjects = () => {

        const projectsList = getProjectsContainer()
        
        while(projectsList.firstChild) {
            projectsList.removeChild(projectsList.firstChild)
        }
    }
    const updateProjectListDisplay = (projectsArr) => {
        
        removeProjects()

        const newProjectsContainer = getProjectsContainer() 
        
        for(let i = 0; i < projectsArr.length; i++) {
            const item = document.createElement('li')
            item.innerText = projectsArr[i].name
            newProjectsContainer.appendChild(item)
        }

        return newProjectsContainer
    }

    return { getProject, makeProjectList, updateProjectListDisplay }
}

export default Project