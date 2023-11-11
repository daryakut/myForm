function toggleCheckbox() {
  let checkbox = document.getElementById("check");
  let myCheck = document.querySelector(".myCheck");
  
  if (checkbox.checked) {
    myCheck.classList.add("checkbox_toggle");
    console.log("checkbox_toggle+++");
  } else {
    myCheck.classList.remove("checkbox_toggle");
    console.log("checkbox_toggle--");
  }
  console.log(checkbox.checked);
}

function handleFormSubmit(event) {
  event.preventDefault(); 
  console.log("Form submitted!");
}