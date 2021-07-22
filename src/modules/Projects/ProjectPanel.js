import StorageProjects from './StorageProjects'
import ProjectForm from './ProjectForm'
import Project from './Project'

const projectPanelDiv = document.createElement('div')
const storage = StorageProjects()
const projectFormObj = ProjectForm()
const projectObj = Project()


projectPanelDiv.setAttribute('id','project-content')

projectPanelDiv.appendChild( projectFormObj.makeForm() )
projectPanelDiv.appendChild( projectObj.makeProjectList( storage.getArray() ) )

function projectFormEventListener(e) {
    e.preventDefault()
    
    const inputValue = projectFormObj.getInputValue()    
    const inputValueObj = projectObj.getProject(inputValue) 
    
    storage.updateData(inputValueObj)
    projectFormObj.setInputValue('')
    
    const newProjectDiv = projectObj.updateProjectListDisplay(storage.getArray())
    projectPanelDiv.appendChild(newProjectDiv)
    
}

export { 
    projectPanelDiv,
    projectFormEventListener
}
