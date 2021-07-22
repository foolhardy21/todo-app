import {STORAGE_KEY} from "../Constants"
import StorageProjects from "./StorageProjects"

function Project() {

    const getProject = (name) => {

        const project = {}
        const storage = StorageProjects()
        const dataSize = storage.getDataLength(STORAGE_KEY)
        project.name = name
        project.id = dataSize

        return project
    }
    const AppendProjectsToContainer = (projectsArr,projectsDiv) => {
        
        for(let i = 0; i < projectsArr.length; i++) {
            const item = document.createElement('li')
            item.setAttribute( 'data-id',projectsArr[i].id )
            item.setAttribute( 'id','project-item' )
            item.innerText = projectsArr[i].name
            // const deleteBtn = document.createElement('button')
            // deleteBtn.innerText = 'del'
            // deleteBtn.setAttribute( 'id','project-delete' )
            // deleteBtn.setAttribute( 'data-id',projectsArr[i].id )
            // item.appendChild(deleteBtn)
            projectsDiv.appendChild(item)
        }
        return projectsDiv
    }
    const makeProjectList = (projectsArr) => {

        const projectsDiv = document.createElement('ul')
        projectsDiv.setAttribute('id','projects-list')
        
        return AppendProjectsToContainer(projectsArr, projectsDiv)
        
    }
    const getProjectsContainer = () => document.querySelector('#projects-list')
    
    const removeProjects = () => {

        const projectsContainer = getProjectsContainer()
        
        while(projectsContainer.firstChild) {
            projectsContainer.removeChild(projectsContainer.firstChild)
        }
    }
    const updateProjectListDisplay = (projectsArr) => {
        
        removeProjects()

        const ProjectsContainer = getProjectsContainer() 
        
        return AppendProjectsToContainer(projectsArr, ProjectsContainer)

    }

    return { getProject, makeProjectList, updateProjectListDisplay }
}

export default Project