import projectPanel  from './modules/Projects/ProjectPanel'
import taskPanel from './modules/Tasks/TaskPanel'

const contentDiv = document.querySelector('#content')
contentDiv.appendChild(projectPanel.getPanelDiv())
contentDiv.appendChild(taskPanel.getPanelDiv())

document.querySelector('#project-form')
            .addEventListener('submit',projectPanel.projectFormEventListener)

            
document.querySelector('#projects-list')
            .addEventListener('mouseover',taskPanel.projectHoverListener)


document.querySelector('#task-form')
            .addEventListener('submit',taskPanel.taskSubmitListener)