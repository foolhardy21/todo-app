const projectform = (() => {
  const createElement = (type) => document.createElement(type);

  const getElement = (attributeType, attributeValue) =>
    document.querySelector(`${attributeType}${attributeValue}`);

  const formDiv = createElement("form");

  const makeForm = () => {
    formDiv.setAttribute("id", "project-form");

    const inputDiv = createElement("input");
    inputDiv.setAttribute("id", "project-input");
    inputDiv.type = "text";
    inputDiv.placeholder = "Project Name...";

    const submitBtn = createElement("button");
    submitBtn.type = "submit";
    submitBtn.innerText = "Add";

    formDiv.appendChild(inputDiv);
    formDiv.appendChild(submitBtn);
  };
  const getForm = () => {
    return formDiv;
  };
  const getInputValue = () => {
    const element = getElement("#", "project-input");
    return element.value;
  };
  const setInputValue = (value) => {
    const element = getElement("#", "project-input");
    element.value = value;
  };

  return {
    makeForm,
    getForm,
    getInputValue,
    setInputValue,
  };
})();

projectform.makeForm();

export default projectform;
