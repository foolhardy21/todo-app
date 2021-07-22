import TaskForm from './TaskForm'
import Task from './Task'
import StorageTasks from './StorageTasks'

const taskform = TaskForm()
const taskobj = Task()
const storagetasks = StorageTasks()

const taskPanelDiv = document.createElement('div')
taskPanelDiv.setAttribute('id','task-content')

let currentProjectId = 0
taskPanelDiv.appendChild( taskform.makeForm() )
const heading = document.createElement('div')
heading.setAttribute('id','task-heading')
heading.innerText = ''
taskPanelDiv.appendChild(heading)
taskPanelDiv.appendChild( taskobj.makeTaskList( storagetasks.getArray(currentProjectId) ) ) 


function projectHoverListener(e) {
        const p = e.target
        currentProjectId = parseInt(p.getAttribute('data-id'))
        const previousheading = document.querySelector('#task-heading')
        previousheading.innerText = p.innerText

        const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))
        taskPanelDiv.appendChild(heading)
        taskPanelDiv.appendChild(newTaskDiv)
}


function taskSubmitListener(e) {
    e.preventDefault()

    const inputvalue = taskform.getInputValue()
    const inputvalueobj = taskobj.getTask(inputvalue,currentProjectId)
    

    storagetasks.updateData(inputvalueobj)
    taskform.setInputValue('')
    
    const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))
    taskPanelDiv.appendChild(newTaskDiv)

}
export {
    taskPanelDiv,
    projectHoverListener,
    taskSubmitListener
} 