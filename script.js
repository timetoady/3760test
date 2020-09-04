gamesURL = "https://rawg-video-games-database.p.rapidapi.com/platforms"
async function getAPIData(URL, modifier = " ") {
    try {
      const response = await fetch(URL + `${modifier}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "cf11b49224msh03b8709dbdb76d8p11ef98jsn62f238bf16a6"
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }




theData = {}
getAPIData(gamesURL)
.then(data => (theData = data))
.then(window.setTimeout(console.log("It may have worked"), 5000));

//here, need to build a promise function that populates DOM with info when getAPIData completes



function domBuilder(data) {
  console.log(data)

    console.log(data.results)
    //console.log(Object.entries(data.results))
    // const allPlatforms = 

    const owned = data.results.filter(
      results =>
      results.name === "PC" || 
      results.name === "PlayStation 4" ||
      results.name === "PlayStation 3" ||
      results.name === "PlayStation 2" ||
      results.slug === "playstation1" ||
      results.name === "Nintendo Switch" ||
      results.name === "Nintendo 3DS" ||
      results.name === "Nintendo DS" 

    )
    console.log(owned)
    owned.forEach(platform => {
      let theScene = document.createElement("div");
      let theCard = document.createElement("div");
      let name = document.createElement("h2");
      let heading = document.createElement("h3");
      let numGames = document.createElement("p");
      let pic = document.createElement("img");
      name.textContent = platform.name
      console.log(`The name is ${platform.name}`)
      pic.src = platform.image_background
      numGames.textContent = `Number of games: ${platform.games_count}`
      main.appendChild(theScene);
      theScene.appendChild(theCard);
      theCard.appendChild(name)
      theCard.appendChild(numGames)
      theCard.appendChild(pic)
    })
}

let main = document.querySelector(".main")
let testButton = document.createElement("button")
testButton.textContent = "TEST BUTTON"
main.appendChild(testButton);



testButton.addEventListener("click", () => {
domBuilder(theData)
})



let search = (term) => `?search=${term}`
//Use filter to search dom entries when loaded.


