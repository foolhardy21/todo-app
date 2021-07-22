import { projectPanelDiv, projectFormEventListener } from './modules/Projects/ProjectPanel'
import {taskPanelDiv, projectHoverListener, taskSubmitListener} from './modules/Tasks/TaskPanel'

const contentDiv = document.querySelector('#content')
contentDiv.appendChild(projectPanelDiv)
contentDiv.appendChild(taskPanelDiv)

document.querySelector('#project-form')
            .addEventListener('submit',projectFormEventListener)

            
document.querySelector('#projects-list')
            .addEventListener('mouseover',projectHoverListener)


document.querySelector('#task-form')
            .addEventListener('submit',taskSubmitListener)





