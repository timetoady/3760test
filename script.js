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

  let search = (term) => `?search=${term}`
gamesURL = "https://rawg-video-games-database.p.rapidapi.com/games"

theData = {}
getAPIData(gamesURL)
.then(data => (theData = data));



//here, need to build a promise function that populates DOM with info when getAPIData completes

let main = document.querySelector(".main")
let testButton = document.createElement("button")
testButton.textContent = "TEST BUTTON"
main.appendChild(testButton);




testButton.addEventListener("click", () => {
    console.log(theData)
    console.log(theData.results[0].slug)

    


})


//Use filter to search dom entries when loaded.


