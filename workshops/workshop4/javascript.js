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

const dataContainer = document.querySelector("#container");
const mapdata = document.querySelector("button#map");
const sortdata = document.querySelector('button#sort');
const filterdata = document.querySelector("button#filter");

const addContent = (game) =>{
        //create container
        const contentContainer = document.createElement("div");
        contentContainer.classList.add('game');
        const nameElement = document.createElement("p");
        nameElement.innerHTML = "name" + game.name;
        const descriptionElement = document.createElement("p");
        descriptionElement.innerHTML = "description" + game.description;
        const attackElement = document.createElement("p");
        attackElement.innerHTML = "attack" + game.attack;
        contentContainer.appendChild(nameElement);
        contentContainer.appendChild(descriptionElement);
        contentContainer.appendChild(attackElement);
        return contentContainer;
}

//map
const descriptionData = eldenRing.map((ring) =>{
    const descriptionNumber = {
        description: ring.description
    }
    return descriptionNumber;
});

if(mapdata){
    mapdata.addEventListener('click',descriptionData,false);
}

addContent(eldenRing);