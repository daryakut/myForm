// Создаем форму
let form = document.createElement("form");
form.id = "myForm";
form.onsubmit = handleFormSubmit;

// Создаем элементы формы
let formGroups = [
  { label: "Full name", type: "text", name: "name", placeholder: "John Rambo" },
  {
    label: "Email address",
    type: "text",
    name: "email",
    placeholder: "hello@hey.com",
  },
  {
    label: "Create Password",
    type: "password",
    name: "password1",
    placeholder: "••••••••••••",
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "password2",
    placeholder: "••••••••••••",
  },
];

formGroups.forEach(function (formElement) {
  // Создаем div для группы полей
  let formGroupDiv = document.createElement("div");
  formGroupDiv.classList.add("form__group");

  // Создаем label
  let label = document.createElement("label");
  label.setAttribute("for", formElement.name);
  label.textContent = formElement.label;

  // Создаем input
  let input = document.createElement("input");
  input.type = formElement.type;
  input.name = formElement.name;
  input.id = formElement.name;
  input.placeholder = formElement.placeholder;
  input.required = true;

  // Добавляем label и input к div
  formGroupDiv.appendChild(label);
  formGroupDiv.appendChild(input);

  // Добавляем div к форме
  form.appendChild(formGroupDiv);
});

// Создаем чекбокс
let checkboxGroup = document.createElement("div");
checkboxGroup.classList.add("checkbox__group");

let checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.name = "check";
checkboxInput.id = "check";
checkboxInput.checked = false;

let checkboxLabel = document.createElement("label");
checkboxLabel.classList.add("myCheck");
checkboxLabel.onclick = toggleCheckbox;

// Создаем текстовый элемент внутри checkbox
let privacypPolicy = document.createElement("p");
privacypPolicy.innerHTML =
  "I agree to the <a href=''>terms</a> & <a href=''>privacy policy</a>";

// Добавляем элементы к чекбокс-группе
checkboxGroup.appendChild(checkboxInput);
checkboxGroup.appendChild(checkboxLabel);
checkboxGroup.appendChild(privacypPolicy);

// Добавляем чекбокс-группу к форме
form.appendChild(checkboxGroup);

// Создаем кнопку
let button = document.createElement("button");
button.type = "submit";
button.classList.add("btn");
button.textContent = "Register";

// Добавляем кнопку к форме
form.appendChild(button);

// Получаем элемент form__container и добавляем к нему форму
let formContainer = document.querySelector(".form__container");
formContainer.appendChild(form);

// Получаем все элементы формы
// let myForm = document.getElementById("myForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let password1Input = document.getElementById("password1");
let password2Input = document.getElementById("password2");
let checkbox = document.getElementById("check");
let myCheck = document.querySelector(".myCheck");
let submitBtn = document.querySelector(".btn");

function toggleCheckbox() {
  if (!checkbox.checked) {
    myCheck.classList.add("checkbox_toggle");
    console.log("checkbox_toggle+++");
    checkbox.checked = true;
  } else {
    myCheck.classList.remove("checkbox_toggle");
    console.log("checkbox_toggle--");
    checkbox.checked = false;
  }
  console.log(checkbox.checked);
}

function handleFormSubmit(event) {
  event.preventDefault();
  if (checkbox.checked === false) {
    alert("you should consent with terms and privacy policy");
  } else if (password1Input.value !== password2Input.value) {
    alert("you should enter the same password twice");
  } else {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password1", password1Input.value);
    localStorage.setItem("password2", password2Input.value);
    localStorage.setItem("check", checkbox.checked);
    console.log("Form submitted!");
  }
}

// Function to fill form inputs with data from localStorage
function fillFormFromLocalStorage() {
  nameInput.value = localStorage.getItem("name") || "";
  emailInput.value = localStorage.getItem("email") || "";
  password1Input.value = localStorage.getItem("password1") || "";
  password2Input.value = localStorage.getItem("password2") || "";
  checkbox.checked = localStorage.getItem("check") === "true" ? true : false;
}

// Retrieve data from localStorage and populate form fields on page load
window.addEventListener("load", fillFormFromLocalStorage);
