import StorageProjects from './StorageProjects'
import ProjectForm from './ProjectForm'
import Project from './Project'

const projectPanel = (() => {
    
    const projectPanelDiv = document.createElement('div')
    const storage = StorageProjects()
    const projectFormObj = ProjectForm()
    const projectObj = Project()

    const initialisePanel = () => {
        projectPanelDiv.setAttribute('id','project-content')
        projectPanelDiv.appendChild( projectFormObj.makeForm() )
        projectPanelDiv.appendChild( projectObj.makeProjectList( storage.getArray() ) )

    }
    const projectFormEventListener = (e) => {
        e.preventDefault()
        
        const inputValue = projectFormObj.getInputValue()    
        const inputValueObj = projectObj.getProject(inputValue) 
        
        storage.addProject(inputValueObj)
        projectFormObj.setInputValue('')
        
        const newProjectDiv = projectObj.updateProjectListDisplay(storage.getArray())
        projectPanelDiv.appendChild(newProjectDiv)
        
    }
    const getPanelDiv = () => {
        return projectPanelDiv
    }
    const projectDelListener = (e) => {
        e.preventDefault()
        if ( e.target.id == 'project-delete' ) {
            
            const id = parseInt(e.target.getAttribute('data-id'))
        
            const newProjectDiv = projectObj.updateProjectListDisplay(storage.removeProject(id))
            projectPanelDiv.appendChild(newProjectDiv)

        }
        
    }


    return { initialisePanel, projectFormEventListener, getPanelDiv, projectDelListener }

})()

projectPanel.initialisePanel()

export default projectPanel
