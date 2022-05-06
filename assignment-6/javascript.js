// VARIABLES
// API Key for Airtable
const airtableApiKey = "keyUdTIA7XPdyI7Vi";

//Data is Location
const tableUrl = "https://api.airtable.com/v0/appNBOMaj7ch0wKcM/Illustrations";

//API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

// STEP 2: DOM REFERENCES
const illustrationContainerElement = document.querySelector("#illustrations");
console.log(illustrationContainerElement)
// STEP 3: USING FUNCTIONS, VARIABLES, AND LOOPS

// 'Promise' Representing the Data Returned
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})
  jsonPromise.then((data) => {
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        const title = records[index].fields.Title
        console.log(records[index])
        const imageUrl = records[index].fields.Image[0].url

        // container element
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        // image element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)

        // title element
        const titleElement = document.createElement('p')
        titleElement.classList.add('title')
        titleElement.innerHTML = title

        illustrationContainerElement.appendChild(containerElement)

        containerElement.appendChild(imageElement)

        containerElement.appendChild(titleElement)
    }
  })
  
  
//   res.json())
//   // Use the JSON Data
//   .then((data) => {
//     const illustrations = data.records;
//     for (let index = 0; index < illustrations.length; index++) {
//       // Get Illustration
//       const illustration = illustrations[index];
//       //   Get Title
//       const title = illustration.fields.Title;
//       // Get Image Url
//       const imageUrl = illustration.fields.Image[0].url;
//       // Create Container Object
//       const containerElement = document.createElement("div");
//       containerElement.classList.add("container");
//       // Create Image Element
//       const imageElement = document.createElement("img");
//       imageElement.classList.add("image");
//       imageElement.setAttribute("src", imageUrl);
//       // Create Title Element
//       const titleElement = document.createElement("p");
//       titleElement.classList.add("title");
//       titleElement.innerHTML = title;
//       // Add Elements to DOM
//       bodyElement.appendChild(containerElement);
//       containerElement.appendChild(imageElement);
//       containerElement.appendChild(titleElement);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });