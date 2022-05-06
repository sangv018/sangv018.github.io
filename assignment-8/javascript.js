const userInput = document.querySelector("form#list");
const userOutput = document.querySelector("#list");

document.addEventListener("mousemove", (event) =>{});
userInput.addEventListener("submit", (event) =>{
    event.preventDefault();
    const inputElement = event.target.querySelector("input");
    event = inputElement.value;
    const user = document.createElement("li");
    //first part adds inner html, then append to user input
    (user.innerHTML = event),userInput.appendChild(user),(inputElement.value = "");
    console.log(event);
});

// userOutput.addEventListener("mouseenter", (event) => {
//     userOutput.style.border = "1px solid black";
//     // copyTextElement.classList.add("active");
//   });
  
//   userOutput.addEventListener("mouseleave", (event) => {
//     userOutput.style.border = "1px solid rgba(0,0,0,0)";
//     // copyTextElement.classList.remove("active");
//   });

//   userOutput.addEventListener("click", (event) => {
//     navigator.clipboard.writeText(userOutput.innerHTML);
//   });