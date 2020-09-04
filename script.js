//Here's the main URL I'm drawing the info from
gamesURL = "https://rawg-video-games-database.p.rapidapi.com/platforms"


//The fetch we built to send to the filter to get just tha data we want.
fetch(gamesURL, {
  "method": "GET",
  "headers": {
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key": "cf11b49224msh03b8709dbdb76d8p11ef98jsn62f238bf16a6"
  }
  })
  .then(resp => resp.json())
  .then(jsonData => {

    theData = jsonData;

    //append HTMl to DOM
    domFilter(theData);
  })


//Receives the fetched data and filters based on set parameters. Easily altered.
function domFilter(data) {
  // console.log(data)
    const owned = data.results.filter(
      results =>
      results.name === "PC" || 
      results.name === "PlayStation 4" ||
      results.name === "PlayStation 3" ||
      results.name === "PlayStation 2" ||
      results.slug === "playstation1" ||
      results.name === "PSP"  ||
      results.name === "Nintendo Switch" ||
      results.name === "Wii U"  ||
      results.name === "Wii"  ||
      results.name === "GameCube"  ||
      results.name === "Nintendo 64"  ||
      results.name === "SNES"  ||
      results.name === "NES"  ||
      results.name === "Nintendo 3DS" ||
      results.name === "Nintendo DS" ||
      results.name === "Game Boy Advance"  ||
      results.name === "Game Boy Color"  ||
      results.name === "Game Boy"  ||
      results.name === "Xbox One"  ||
      results.name === "Xbox 360"  ||
      results.name === "Atari 2600"  ||
      results.name === "Dreamcast"  ||
      results.name === "Genesis"  ||
      results.name === "SEGA Master System"  ||
      results.name === "Android"  ||
      results.name === "iOS"  
    
    )
    domBuilder(owned)
    return owned

}

//Launched from domFilter, it builds the pieces of the DOM.
function domBuilder(owned, field = "main") {
  let main = document.querySelector(field)
  owned.forEach(platform => {
    let theCard = document.createElement("div");
    theCard.setAttribute("class", "scene")
    let name = document.createElement("h2");
    let heading = document.createElement("h3");
    let numGames = document.createElement("p");
    let pic = document.createElement("img");
    name.textContent = platform.name
    pic.src = platform.image_background
    numGames.textContent = `Number of games: ${platform.games_count}`
    main.appendChild(theCard);
    theCard.appendChild(name)
    theCard.appendChild(numGames)
    theCard.appendChild(pic)
  })
  return owned
}

let body = document.querySelector("body")
let searchField = document.querySelector("input")


//Search field filter. Calls the data returned from main filter, filters that, 
//removes old info, and dynamically adds a filtering of domFilter that matches the input
//value of the search box.

searchField.addEventListener('input', () => {
  owned = domFilter(theData)
  let searchFilter = owned.filter(
    owned =>
    owned.name.toLowerCase().includes(searchField.value.toLowerCase()) ||
    owned.slug.toLowerCase().includes(searchField.value.toLowerCase()) ||
    owned.games_count.toString().includes(searchField.value.toString()) 
    
  )
  let main = document.querySelector("main")
  main.remove()
  let main2 = document.createElement("main")
  body.appendChild(main2)
  domBuilder(searchFilter)
})


//Use filter to search dom entries when loaded.

// let topFunc = (staticNum) => {
//   let nestedFunc = () => {
//       let innerMost = (number) => {
//           return number * staticNum
//       }
//   }

//   return innerMost(number)
// }




