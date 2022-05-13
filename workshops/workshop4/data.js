const eldenRing = [{
    name: "Ruins Greatsword", 
    description: "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon.",
    attack: 124
},
{
    name: "Eclipse Shotel", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 77, 
},
{
    name: "Grafted Blade Greatsword", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 157, 
},]

const userContainerElement = document.querySelector('#users');
const mapdata = document.querySelector('#map');
const sortAscendingButtonElement = document.querySelector('#sort-ascending');
const filterdata = document.querySelector('#filter');

// FUNCTIONS
const removeUsers = () => {
    usersContainerElement.innerHTML = ""
}


const addeldenRing = (eldenRingArray) => {
    for (let index = 0; index < eldenRing.length; index++) {
        // Create User Container
        const userContainerElement = document.createElement('div')
        userContainerElement.classList.add('user')
        // Create Name Element
        const nameElement = document.createElement('p')
        nameElement.innerHTML = 'Name:' + eldenRing[index].name
        // Create description Status Element
        const descriptionElement = document.createElement('p')
        descriptionElement.innerHTML = 'description:' + eldenRing[index].description
        // Create attack Element
        const attackElement = document.createElement('p')
        attackElement.innerHTML = 'attack: ' + eldenRing[index].attack
        userContainerElement.appendChild(nameElement)
        userContainerElement.appendChild(descriptionElement)
        userContainerElement.appendChild(attackElement)
        userContainerElement.appendChild(userContainerElement)
    }
}

// SORT
const usersSortedByNameAscending = users.sort((userA, userB) => {
    if(userA.name > userB.name) {
        return 1
    }

    if(userA.name < userB.name) {
        return -1 
    }

    if(userA.name === userB.name) {
        return 0 
    }
})

const copyOfUsersSortedByNameAscending = usersSortedByNameAscending.slice()
const usersSortedByNameDescending = copyOfUsersSortedByNameAscending.reverse()

addUsers(users)

showCreditAsDollarsButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersWithCreditAsDollars)
})

authenticatedButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(authenticatedUsers)
})

sortAscendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameAscending)
})

sortDescendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameDescending)
})

// const addContent = (game) =>{
//         //create container
//         const contentContainer = document.createElement("div");
//         contentContainer.classList.add('game');
//         const nameElement = document.createElement("p");
//         nameElement.innerHTML = "name" + game.name;
//         const descriptionElement = document.createElement("p");
//         descriptionElement.innerHTML = "description" + game.description;
//         const attackElement = document.createElement("p");
//         attackElement.innerHTML = "attack" + game.attack;
//         contentContainer.appendChild(nameElement);
//         contentContainer.appendChild(descriptionElement);
//         contentContainer.appendChild(attackElement);
//         return contentContainer;
// }

// //map
// const descriptionData = eldenRing.map((ring) =>{
//     const descriptionNumber = {
//         description: ring.description
//     }
//     return descriptionNumber;
// });

// if(mapdata){
//     mapdata.addEventListener('click',descriptionData,false);
// }

// addContent(eldenRing);