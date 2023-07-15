/*searchButton.addEventListener('click', function() {
  fetch('https://api.rawg.io/api/platforms?key=87a21af0194d4db1a70bb42c6c104ebe', {
    method: 'get'
  })
  .then(function(response){
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  
  });
})*/

let searchBar = document.querySelector('#SearchBar');
let searchButton = document.querySelector('#searchButton');
const key = `87a21af0194d4db1a70bb42c6c104ebe`;


//! Popular game
//This is where the name of popular games will go
let popGameOneName = document.querySelector('#gameOneName')
let popGameTwoName = document.querySelector('#gameTwoName');
let popGameThreeName = document.querySelector('#gameThreeName');
let popGameFourName = document.querySelector('#gameFourName');
let popGameFiveName = document.querySelector('#gameFiveName');
let popGameSixName = document.querySelector('#gameSixName');
let popGameSevenName = document.querySelector('#gameSevenName');
let popGameEightName = document.querySelector('#gameEightName');

//This is where the image of popular games will go
let popGameOneImg = document.querySelector('#imgOne')
let popGameTwoImg = document.querySelector('#imgTwo');
let popGameThreeImg = document.querySelector('#imgThree');
let popGameFourImg = document.querySelector('#imgFour');
let popGameFiveImg = document.querySelector('#imgFive');
let popGameSixImg = document.querySelector('#imgSix');
let popGameSevenImg = document.querySelector('#imgSeven');
let popGameEightImg = document.querySelector('#imgEight');

// This is the code used to source the data for the most popular games
fetch(`https://api.rawg.io/api/games?key=${key}&dates=2023-06-01,2023-06-20&per_page=5&ordering=-added&`)
.then(function(response){
  return response.json();
})
.then(function (data) {
  console.log(data);
  //Game One Image and name
  let gameOneImg = data.results[0].background_image;
  let gameOneName = data.results[0].name;
  popGameOneName.textContent = gameOneName;
  popGameOneImg.src = gameOneImg;

  //Game two image and name
  let gameTwoImg = data.results[1].background_image;
  let gameTwoName = data.results[1].name;
  popGameTwoName.textContent = gameTwoName;
  popGameTwoImg.src = gameTwoImg;

  //Game three image and name
  let gameThreeImg = data.results[2].background_image;
  let gameThreeName = data.results[2].name;
  popGameThreeName.textContent = gameThreeName;
  popGameThreeImg.src = gameThreeImg;

  //Game four image and name
  let gameFourImg = data.results[3].background_image;
  let gameFourName = data.results[3].name;
  popGameFourName.textContent = gameFourName;
  popGameFourImg.src = gameFourImg;

  //Game five image and name
  let gameFiveImg = data.results[4].background_image;
  let gameFiveName = data.results[4].name;
  popGameFiveName.textContent = gameFiveName;
  popGameFiveImg.src = gameFiveImg;

  //Game six image and name
  let gameSixImg = data.results[5].background_image;
  let gameSixName = data.results[5].name;
  popGameSixName.textContent = gameSixName;
  popGameSixImg.src = gameSixImg;

  //Game seven image and name
  let gameSevenImg = data.results[6].background_image;
  let gameSevenName =data.results[6].name;
  popGameSevenName.textContent = gameSevenName;
  popGameSevenImg.src = gameSevenImg;

//Game eight image and name
let gameEightImg = data.results[7].background_image;
let gameEightName = data.results[7].name
popGameEightName.textContent = gameEightName
popGameEightImg.src = gameEightImg;
})
.catch(error => console.log(error));





//! New game
//This is where the name of new games will go
let newGameOneName = document.querySelector('#newGameOneName')
let newGameTwoName = document.querySelector('#newGameTwoName');
let newGameThreeName = document.querySelector('#newGameThreeName');
let newGameFourName = document.querySelector('#newGameFourName');
let newGameFiveName = document.querySelector('#newGameFiveName');
let newGameSixName = document.querySelector('#newGameSixName');
let newGameSevenName = document.querySelector('#newGameSevenName');
let newGameEightName = document.querySelector('#newGameEightName');

//This is where the image of new games will go
let newGameOneImg = document.querySelector('#imgOneNew')
let newGameTwoImg = document.querySelector('#imgTwoNew');
let newGameThreeImg = document.querySelector('#imgThreeNew');
let newGameFourImg = document.querySelector('#imgFourNew');
let newGameFiveImg = document.querySelector('#imgFiveNew');
let newGameSixImg = document.querySelector('#imgSixNew');
let newGameSevenImg = document.querySelector('#imgSevenNew');
let newGameEightImg = document.querySelector('#imgEightNew');




// This is the code used to source the data for the most popular games
fetch(`https://api.rawg.io/api/games?key=${key}&dates=2023-01-01,2023-12-31&ordering=-rating`)
.then(function(call){
  return call.json();
})
.then(function (input) {
  console.log(input);
  // Game one
  let gameOneImgNew = input.results[0].background_image;
  let newGameNameOne = input.results[0].name;
  newGameOneImg.src = gameOneImgNew;
  newGameOneName.textContent = newGameNameOne;

  // Game two
  let gameTwoImgNew = input.results[1].background_image;
  let newGameNameTwo = input.results[1].name;
  newGameTwoImg.src = gameTwoImgNew;
  newGameTwoName.textContent = newGameNameTwo;

  // Game three
  let gameThreeImgNew = input.results[2].background_image;
  let newGameNameThree = input.results[2].name;
  newGameThreeImg.src = gameThreeImgNew;
  newGameThreeName.textContent = newGameNameThree;

// Game four
let gameFourImgNew = input.results[3].background_image;
let newGameNameFour = input.results[3].name;
newGameFourImg.src = gameFourImgNew;
newGameFourName.textContent = newGameNameFour;

// Game five
let gameFiveImgNew = input.results[4].background_image;
let newGameNameFive = input.results[4].name;
newGameFiveImg.src = gameFiveImgNew;
newGameFiveName.textContent = newGameNameFive;

// Game six
let gameSixImgNew = input.results[5].background_image;
let newGameNameSix = input.results[5].name;
newGameSixImg.src = gameSixImgNew;
newGameSixName.textContent = newGameNameSix;

// Game seven
let gameSevenImgNew = input.results[6].background_image;
let newGameNameSeven = input.results[6].name;
newGameSevenImg.src = gameSevenImgNew;
newGameSevenName.textContent = newGameNameSeven;

// Game seven
let gameEightImgNew = input.results[7].background_image;
let newGameNameEight = input.results[7].name;
newGameEightImg.src = gameEightImgNew;
newGameEightName.textContent = newGameNameEight;

})
.catch(error => console.log(error));