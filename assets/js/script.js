let searchBar = document.querySelector('#SearchBar');
let searchImg = document.querySelector('#search-img')
let searchButton = document.querySelector('#searchButton');
const key = `962935bac7e14d23964ca9952dc39e13`;

// Credits DevsDash
// TWITCH AND IGDB API
let clientId = "khjpxtyrtphezuq89v5w8idi18vc5q";
let clientSecret = "gook6vab7f8anquexg485ypn6swczr";
let BEARER_TOKEN = '';

function getTwitchAuthorization() {
    let url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;

    fetch(url, {
    method: "POST",
    })
    .then((res) => res.json())
    .then((data) => handleAuthorization(data));
}

function handleAuthorization(data) {
    let { access_token, expires_in, token_type } = data;
    BEARER_TOKEN = `Bearer ${access_token}`;
    console.log(`${token_type} ${access_token}`);
}

getTwitchAuthorization();

// RAWG API
// This code passes in the name of the search value to RAWG, to get the game that closely matches what was searched.
searchButton.addEventListener('click', function() {
  fetch(`https://api.rawg.io/api/games?key=${key}&search=${searchBar.value}&search_precise`, {
    method: 'get'
  })
  .then(function(response){
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  GameName = data.results[0].name;
  getTwitchImg(GameName);

  // console.log(getTwitchImg(GameName));
  });
})

// ! MOST POPULAR GAMES 
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

let GameNames = [];



// ! MOST POPULAR GAMES 
// !! NEED HELP HERE (Edi)
// !!! I found a way to get the twitch image onto the specific slot. We'll pass the URL into an array and then use the array to name the individual slots. The problem I'm running into is that more than one call to getTwitchImg breaks the ordering in the array. and the image and title no longer line up. Try it by uncommenting all the code in SetData and see how it's formatted on the site. Any help to fix this is appreciated.
// This is the code used to source the data for the most popular games
fetch(`https://api.rawg.io/api/games?key=${key}&dates=2023-05-01,2023-06-20&per_page=5&ordering=-rating&`)
.then(function(response){
  return response.json();
})
.then(function (data) {
  console.log(data);

  setData(data);
})
.catch(error => console.log(error));


function setData(data) {
    //Game One Image and name
    popGameOneName.textContent = data.results[0].name;
    getTwitchImg( data.results[0].name);
  
    // //Game two image and name
    // popGameTwoName.textContent = data.results[1].name;
    // getTwitchImg(data.results[1].name);
  
    // //Game three image and name
    // popGameThreeName.textContent = data.results[2].name;
    // getTwitchImg( data.results[2].name);
  
    // //Game four image and name
    // popGameFourName.textContent = data.results[3].name;
    // getTwitchImg( data.results[3].name);
  
    // //Game five image and name
  
    // popGameFiveName.textContent = data.results[4].name;
    // getTwitchImg( data.results[4].name);
  
    // //Game six image and name
    // popGameSixName.textContent = data.results[5].name;
    // getTwitchImg( data.results[5].name);
  
    // //Game seven image and name
    // popGameSevenName.textContent = data.results[6].name;
    // getTwitchImg( data.results[6].name);
  
    // //Game eight image and name
    // popGameEightName.textContent = data.results[7].name;
    // getTwitchImg( data.results[7].name);
}


function setImage(){
  popGameOneImg.src = GameNames[0];
  // popGameTwoImg.src = GameNames[1];
  // popGameThreeImg.src = GameNames[2];
  // popGameFourImg.src = GameNames[3];
  // popGameFiveImg.src = GameNames[4];
  // popGameSixImg.src = GameNames[5];
  // popGameSevenImg.src = GameNames[6];
  // popGameEightImg.src = GameNames[7];
}



// ! HIGHEST RATED GAMES 
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




// This is the code used to source the data for the new games
fetch(`https://api.rawg.io/api/games?key=${key}&dates=2022-10-01,2023-12-31&ordering=-metacritic`)
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

// ! DEVS'S CHOICE GAMES (SITE DEVS)
// Edi Game Name
let ediGameNameOne = document.querySelector('#ediGameNameOne')
let ediGameNameTwo = document.querySelector('#ediGameNameTwo')
let ediGameNameThree = document.querySelector('#ediGameNameThree')
//Edi Game Img
let ediGameImgOne = document.querySelector('#ediGameImgOne')
let ediGameImgTwo = document.querySelector('#ediGameImgTwo')
let ediGameImgThree = document.querySelector('#ediGameImgThree')


fetch(`https://api.rawg.io/api/games?key=${key}&search=Smash Bros Ultimate`, {
    method: 'get'
  })
  .then(function(responseEdiOne){
    return responseEdiOne.json();
  })
  .then(function (dataEdiOne) {
    data = console.log(dataEdiOne);
    ediGameNameOne.textContent = dataEdiOne.results[0].name
    ediGameImgOne.src = dataEdiOne.results[0].background_image


  });

  fetch(`https://api.rawg.io/api/games?key=${key}&search=Pokemon Heart Gold`, {
    method: 'get'
  })
  .then(function(responseEdiOne){
    return responseEdiOne.json();
  })
  .then(function (dataEdiOne) {
    data = console.log(dataEdiOne);
    ediGameNameTwo.textContent = dataEdiOne.results[13].name
    ediGameImgTwo.src = dataEdiOne.results[13].background_image


  });

  fetch(`https://api.rawg.io/api/games?key=${key}&search=Monster+Hunter+Rise`, {
    method: 'get'
  })
  .then(function(responseEdiOne){
    return responseEdiOne.json();
  })
  .then(function (dataEdiOne) {
    data = console.log(dataEdiOne);
    //ediGameNameThree.textContent = dataEdiOne.results[0].name
    ediGameImgThree.src = dataEdiOne.results[0].background_image


  });





// Gets the box_art_url from the name passed in from Rawg API
function getTwitchImg(imgUrl){
  var url = '';
  fetch(`https://api.twitch.tv/helix/games?name=${imgUrl}`, { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': BEARER_TOKEN,
        "Client-Id": clientId,
      },
  })

  .then(function(response){
    return response.json();
  }) 
  .then(data => {
    GameNames.push(data.data[0].box_art_url.slice(0, -21) + '.jpg');
    console.log(GameNames);
    setImage();
    return data.data[0].box_art_url.slice(0, -21) + '.jpg';
    })
    .catch(err => {
        console.error(err);
})
}