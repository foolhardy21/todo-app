import TaskForm from './TaskForm'
import Task from './Task'
import StorageTasks from './StorageTasks'




const taskPanel = (() => {

    const taskform = TaskForm()
    const taskobj = Task()
    const storagetasks = StorageTasks()
    const taskPanelDiv = document.createElement('div')
    const heading = document.createElement('div')
    let currentProjectId = 0

    const initialisePanel = () => {
        taskPanelDiv.setAttribute('id','task-content')
        taskPanelDiv.appendChild( taskform.makeForm() )
        heading.setAttribute('id','task-heading')
        heading.innerText = ''
        taskPanelDiv.appendChild( heading )
        taskPanelDiv.appendChild( taskobj.makeTaskList( storagetasks.getArray(currentProjectId) ) ) 

    }
    const projectHoverListener = (e) => {

        if(e.target.tagName == 'LI') {
            const currentProject = e.target
            currentProjectId = parseInt(currentProject.getAttribute('data-id'))
            const headingDiv = document.querySelector('#task-heading')
            headingDiv.innerText = currentProject.innerText.slice(0,-3)
    
            const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))
            taskPanelDiv.appendChild(heading)
            taskPanelDiv.appendChild(newTaskDiv)
        }
    }
    const taskSubmitListener = (e) => {
        e.preventDefault()
    
        const inputvalue = taskform.getInputValue()
        const inputvalueobj = taskobj.getTask(inputvalue,currentProjectId)
        
    
        storagetasks.updateData(inputvalueobj)
        taskform.setInputValue('')
        
        const newTaskDiv = taskobj.updateTaskListDisplay(storagetasks.getArray(currentProjectId))
        taskPanelDiv.appendChild(newTaskDiv)
            
    }
    const getPanelDiv = () => {
        return taskPanelDiv
    }

    return { initialisePanel, getPanelDiv, projectHoverListener, taskSubmitListener }

})()


taskPanel.initialisePanel()

export default taskPanel