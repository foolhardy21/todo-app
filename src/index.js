import StorageProjects from './modules/Storage'
import ProjectForm from './modules/ProjectForm'
import Project from './modules/Project'

const projectContentDiv = document.querySelector('#project-content')
const storage = StorageProjects()
const projectFormObj = ProjectForm()
const projectObj = Project()
projectContentDiv.appendChild( projectFormObj.makeForm() )
projectContentDiv.appendChild( projectObj.makeProjectList( storage.getArray() ) )

const projectFormDiv = projectFormObj.getForm()
projectFormDiv.addEventListener('submit',(e) => {
    
    e.preventDefault()
    
    const inputValue = projectFormObj.getInputValue()    
    const inputValueObj = projectObj.getProject(inputValue) 
    
    storage.updateData(inputValueObj)
    projectFormObj.setInputValue('')
    
    const newProjectDiv = projectObj.updateProjectListDisplay(storage.getArray())
    projectContentDiv.appendChild(newProjectDiv)
      
})



import TaskForm from './modules/TaskForm'
import Task from './modules/Task'
import StorageTasks from './modules/StorageTasks'

const taskform = TaskForm()
const taskobj = Task()
const storagetasks = StorageTasks()

const projectspanel = document.querySelector('#projects-list')
const taskpanel = document.querySelector('#task-content')

let currentProjectId = 0
taskpanel.appendChild( taskform.makeForm() )
const heading = document.createElement('div')
heading.setAttribute('id','task-heading')
heading.innerText = ''
taskpanel.appendChild(heading)
taskpanel.appendChild( taskobj.makeTaskList( storagetasks.getArray(currentProjectId) ) ) 

let taskFormDiv = document.querySelector('#task-form')

projectspanel.addEventListener('mouseover',(e) => {
        const p = e.target
        currentProjectId = parseInt(p.getAttribute('data-id'))
        const previousheading = document.querySelector('#task-heading')
        previousheading.innerText = p.innerText

        const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))
        taskpanel.appendChild(heading)
        taskpanel.appendChild(newTaskDiv)
})



taskFormDiv.addEventListener('submit',(e) => {
    e.preventDefault()

    const inputvalue = taskform.getInputValue()
    const inputvalueobj = taskobj.getTask(inputvalue,currentProjectId)
    

    storagetasks.updateData(inputvalueobj)
    taskform.setInputValue('')
    
    const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))
    taskpanel.appendChild(newTaskDiv)

})
