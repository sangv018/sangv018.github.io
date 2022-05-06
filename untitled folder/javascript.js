// VARIABLES
// API Key for Airtable
const airtableApiKey = "keyhsUBrXSnLKhk4u";

//Data is Location
const tableUrl = "https://api.airtable.com/v0/appTAr95z482ixahK/Music";

//API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

// Colors 
const foregroundColors = ["#604F4F", "#895141", "#353A4C"] // 
const backgroundColors = ["#EADFC9", "#80825B"]

// SECTION 2: DOM References 
const bodyElement = document.querySelector('body')
const artistElement = document.querySelector('#artist')
const dandsElement = document.querySelector('#dands')
const arjitElement = document.querySelector('#arijit')
const mmElement = document.querySelector('#mm')
const saintElement = document.querySelector('#saint')
const davidElement = document.querySelector('#david')
// const adverbElement = document.querySelector('#adverb')

// SECTION 3: Application
// Choose Foreground and Background Colors
const foregroundColor = foregroundColors[Math.floor(Math.random()*foregroundColors.length)]
const backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)]

// Set Foreground and Background Colors 
bodyElement.style.color = foregroundColor
bodyElement.style.backgroundColor = backgroundColor

// Get a 'Promise' Representing the Data that Will be Returned
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const words = data.records;
    const dands = words.filter((word) => {
        return word.fields.Type === 'Dan and Shay'
    })
    // Filter for Word Types 
    const saint = words.filter((word) => {
        return word.fields.Type === 'SAINt JHN'
    })
    const mm = words.filter((word) => {
        return word.fields.Type === 'Mamma Mia'
    })    
    const arijit = words.filter((word) => {
        return word.fields.Type === 'Arijit Singh'
    })
    const david = words.filter((word) => {
        return word.fields.Type === 'David Guetta'
    })
    const adverbs = words.filter((word) => {
        return word.fields.Type === 'artist'
    })

      // Set Values onto HTML Elements 
      adjectiveElement.innerHTML = adjectives[Math.floor(Math.random()*artist.length)].fields.Copy
      typeElement.innerHTML = types[Math.floor(Math.random()*DanandShay.length)].fields.Copy
      nameElement.innerHTML = names[Math.floor(Math.random()*ArijitSingh.length)].fields.Copy
      regionElement.innerHTML = regions[Math.floor(Math.random()*MammaMia.length)].fields.Copy
      verbElement.innerHTML = verbs[Math.floor(Math.random()*SAINtJHN.length)].fields.Copy
      adverbElement.innerHTML = adverbs[Math.floor(Math.random()*DavidGuetta.length)].fields.Copy
      applicationElement.classList.add('loaded')
    })
    .catch((error) => {
      console.log(error);
    });