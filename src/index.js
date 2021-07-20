import StorageProjects from './modules/Storage'
import ProjectForm from './modules/ProjectForm'
import Project from './modules/Project'

const contentDiv = document.querySelector('#content')

const storage = StorageProjects()
const projectFormObj = ProjectForm()
const projectObj = Project()

contentDiv.appendChild( projectFormObj.makeForm() )

contentDiv.appendChild( projectObj.makeProjectList( storage.getArray() ) )

const formDiv = projectFormObj.getForm()

formDiv.addEventListener('submit',(e) => {
    
    e.preventDefault()
    
    const inputValue = projectFormObj.getInputValue()    
    const inputValueObj = projectObj.getProject(inputValue) 
    
    storage.updateData(inputValueObj)
    projectFormObj.setInputValue('')
    
    const newProjectDiv = projectObj.updateProjectListDisplay(storage.getArray())
    contentDiv.appendChild(newProjectDiv)
      
})

