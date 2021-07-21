
function TaskForm() {

    const createElement = (type) => document.createElement(type)
    
    const getElement = (attributeType, attributeValue) => document.querySelector(`${attributeType}${attributeValue}`)
    
    const makeForm = () => {

        const formDiv = createElement('form')
        formDiv.setAttribute('id','task-form')

        const inputDiv = createElement('input')
        inputDiv.setAttribute('id','task-input') 
        inputDiv.type = 'text'
        inputDiv.placeholder = 'Task Name...'
        
        const submitBtn = createElement('button')
        submitBtn.type = 'submit'
        submitBtn.innerText = 'Add'

        formDiv.appendChild(inputDiv)
        formDiv.appendChild(submitBtn)

        return formDiv

    }
    const getForm = () => {
        return getElement('#','task-form')
    
    }
    const getInputValue = () => {
        const element = getElement('#','task-input')
        return element.value
    
    }
    const setInputValue = (value) => {
        const element = getElement('#','task-input')
        element.value = value
    }

    return { makeForm, getForm, getInputValue, setInputValue }
}

export default TaskForm  
