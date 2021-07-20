
function ProjectForm() {

    const createElement = (type) => document.createElement(type)
    
    const getElement = (attributeType, attributeValue) => document.querySelector(`${attributeType}${attributeValue}`)
    
    const makeForm = () => {

        const formDiv = createElement('form')
        formDiv.setAttribute('id','project-form')

        const inputDiv = createElement('input')
        inputDiv.setAttribute('id','project-input') 
        inputDiv.type = 'text'
        inputDiv.placeholder = 'Project Name...'
        
        const submitBtn = createElement('button')
        submitBtn.type = 'submit'
        submitBtn.innerText = 'Add'

        formDiv.appendChild(inputDiv)
        formDiv.appendChild(submitBtn)

        return formDiv

    }
    const getForm = () => {
        return getElement('#','project-form')
    
    }
    const getInputValue = () => {
        const element = getElement('#','project-input')
        return element.value
    
    }
    const setInputValue = (value) => {
        const element = getElement('#','project-input')
        element.value = value
    }

    return { makeForm, getForm, getInputValue, setInputValue }
}

export default ProjectForm  
