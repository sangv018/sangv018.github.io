document.getElementById("colored-element").style.color ='yellow';

const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";

// Append to another element:
document.getElementById("parent-element").appendChild(para);

//forLoopArray
// const forLoopArray = ["Item One", "Item Two", "Item Three", "Item Four"]
let forLoopArray = ["Item One", "Item Two", "Item Three", "Item Four"];
for (let i = 0; i < forLoopArray.length; i++) {
    console.log(forLoopArray[i]);
  }

  document.getElementById("parent-element").appendChild(forLoopArray);

//   let cars = ["Tesla", "Ferrari", "Lamborghini", "Audi"];

// for(let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// function clickHandler(event) {
//     console.log('Clicked');
//  }

//  const eventlistenerbutton = document.querySelector('#eventlistenerbutton');
//  eventlistenerbutton.addEventListener('click', clickHandler);

//  const eventlistenerbutton = document.querySelector('#eventlistenerbutton');
// eventlistenerbutton.addEventListener('click', function(event){
//    console.log('Clicked');
// });

// element.addEventListener(type,eventListener);

// function clickHandler(event) {
//     console.log('Button Clicked');
//  }

//  const btn = document.querySelector('button');
// btn.addEventListener('click', clickHandler);

// const btn = document.querySelector('button');
// btn.addEventListener('click', function(event){
//    console.log('Button Clicked');
// });

// const clickEventElement = document.querySelector('#eventlistenerbutton')

// clickEventElement.addEventListener('click', (event) => {
//     console.log('Clicked', event)})

// var eventlistenerbutton = document.getElementById('eventlistenerbutton');
// eventlistenerbutton.onclick = function() {
//     console.log('Clicked');
// }

function clicked()
{
 console.log('Clicked');
}