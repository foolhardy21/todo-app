
function TaskForm() {

    const createElement = (type) => document.createElement(type)
    
    const getElement = (attributeType, attributeValue) => document.querySelector(`${attributeType}${attributeValue}`)
    
    const makeForm = () => {

        const formDiv = createElement('form')
        formDiv.setAttribute('id','task-form')

        const titleDiv = createElement('input')
        titleDiv.setAttribute('id','task-title-input') 
        titleDiv.type = 'text'
        titleDiv.placeholder = 'Task Title...'
        
        const priorityDiv = createElement('select')
        priorityDiv.setAttribute('id','task-priority-input') 
            const item1 = document.createElement('option')
            item1.value = '1'
            item1.innerText = 'Important'
            const item2 = document.createElement('option')
            item2.value = '2'
            item2.innerText = 'Neutral'
            const item3 = document.createElement('option')
            item3.value = '3'
            item3.innerText = 'Not much'

            priorityDiv.appendChild(item1)
            priorityDiv.appendChild(item2)
            priorityDiv.appendChild(item3)
        
        const dateDiv = createElement('input')
        dateDiv.setAttribute('id','task-date-input')
        dateDiv.type = 'date'

        
        const submitBtn = createElement('button')
        submitBtn.type = 'submit'
        submitBtn.innerText = 'Add'

        formDiv.appendChild(titleDiv)
        formDiv.appendChild(priorityDiv)
        formDiv.appendChild(dateDiv)
        formDiv.appendChild(submitBtn)

        return formDiv

    }
    const getForm = () => {
        return getElement('#','task-form')
    
    }
    const getTitleValue = () => {
        const element = getElement('#','task-title-input')
        return element.value
    
    }
    const getPriorityValue = () => {
        const element = getElement('#','task-priority-input')
        return element.value
    }
    const getDateValue = () => {
        const element = getElement('#','task-date-input')
        return element.value
    }
    const setTitleValue = (value) => {
        const element = getElement('#','task-title-input')
        element.value = value
    }

    return { makeForm, getForm, getTitleValue, setTitleValue, getPriorityValue, getDateValue }
}

export default TaskForm  
