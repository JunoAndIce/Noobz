let searchBar = document.querySelector('#SearchBar');
let searchImg = document.querySelector('#search-img')
let searchButton = document.querySelector('#searchButton');
const key = `962935bac7e14d23964ca9952dc39e13`;



const featureGame = document.querySelectorAll(`.featureGame`)
const featureGameImg = document.querySelectorAll(`.featureGameImg`)
const HighGameImg = document.querySelectorAll(`.HighGameImg`)
const HighGame = document.querySelectorAll(`.HighGame`)





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
searchButton.addEventListener('click', function () {
  fetch(`https://api.rawg.io/api/games?key=${key}&search=${searchBar.value}&search_precise`, {
    method: 'get'
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      GameName = data.results[0].name;
      getTwitchImg(GameName);

      //  console.log(getTwitchImg(GameName));
    });
})

$('.SearchBar').keyup(function(){
  if($(this).val().length)
    $('.searchFunc').show();
  else
    $('.searchFunc').hide();
});

/*
// ! MOST POPULAR GAMES 
//This is where the image of popular games will go
let popGameOneImg = document.querySelector('#imgOne')
let popGameTwoImg = document.querySelector('#imgTwo');
let popGameThreeImg = document.querySelector('#imgThree');
let popGameFourImg = document.querySelector('#imgFour');
let popGameFiveImg = document.querySelector('#imgFive');
let popGameSixImg = document.querySelector('#imgSix');
let popGameSevenImg = document.querySelector('#imgSeven');
let popGameEightImg = document.querySelector('#imgEight');

//This is where the image of new games will go
let newGameOneImg = document.querySelector('#imgOneNew')
let newGameTwoImg = document.querySelector('#imgTwoNew');
let newGameThreeImg = document.querySelector('#imgThreeNew');
let newGameFourImg = document.querySelector('#imgFourNew');
let newGameFiveImg = document.querySelector('#imgFiveNew');
let newGameSixImg = document.querySelector('#imgSixNew');
let newGameSevenImg = document.querySelector('#imgSevenNew');
let newGameEightImg = document.querySelector('#imgEightNew');

//Edi Game Img
let devChoiceOne = document.querySelector('#ediGameImgOne')
let devChoiceTwo = document.querySelector('#ediGameImgTwo')
let devChoiceThree = document.querySelector('#ediGameImgThree')
let devChoiceFour = document.querySelector('#shawnGameImgOne')
let devChoiceFive = document.querySelector('#shawnGameImgTwo')
let devChoiceSix = document.querySelector('#shawnGameImgThree')
let devChoiceSeven = document.querySelector('#pabloGameImgOne')
let devChoiceEight = document.querySelector('#pabloGameImgTwo')
let devChoiceNine = document.querySelector('#pabloGameImgThree')
*/
// let featuredGames = [];
// let RatedGames = [];
// let devChoiceGames = [];



// ! MOST POPULAR GAMES 
// !! ONLY GRABS IMAGE NAME FOR TOP 8 GAMES
// This is the code used to source the data for the most popular games
fetch(`https://api.rawg.io/api/games?key=${key}&dates=2023-05-01,2023-07-18&per_page=5&ordering=-metacritic&`)
  .then(function (response) {
    return response.json();
  })
  .then(async function (data) {
    console.log(data);
    for (let i = 0; i < featureGame.length; i++) {
      // console.log(getTwitchArrayImg(data.results[i].name))
      featureGameImg[i].setAttribute("data", data.results[i].name) 
      getTwitchArrayImg(data.results[i].name, i);
    }
  })
  .catch(error => console.log(error));


// ! HIGHEST RATED GAMES 
// This is the code used to source the data for the new games
fetch(`https://api.rawg.io/api/games?key=${key}&dates=2022-10-01,2023-04-01&ordering=-metacritic`)
  .then(function (call) {
    return call.json();
  })
  .then(function (input) {
    for(let i = 0; i < HighGame.length; i++){
      console.log(getTwitchArrayImg(data.results[i].name))
      HighGameImg[i].src =  await getTwitchArrayImgHigh(data.results[i].name, i);
    console.log(input);
    }
/*
    // Game one
    getTwitchImgRated(input.results[0].name);

  })
  .catch(error => console.log(error));


// ! DEVS'S CHOICE GAMES (SITE DEVS)
fetch(`https://api.rawg.io/api/games?key=${key}&search=Smash+Bros+Ultimate`, {
  method: 'get'
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
  });

fetch(`https://api.rawg.io/api/games?key=${key}&search=Pokemon+Emerald`, {
  method: 'get'
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    // console.log(data.results[13].name.slice(0, -12));
  });


fetch(`https://api.rawg.io/api/games?key=${key}&search=Monster+Hunter+Rise`, {
  method: 'get'
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
  });



/*
function setImageFeat() {

  popGameOneImg.src = featuredGames[0];
  popGameTwoImg.src = featuredGames[1];
  popGameThreeImg.src = featuredGames[2];
  popGameFourImg.src = featuredGames[3];
  popGameFiveImg.src = featuredGames[4];
  popGameSixImg.src = featuredGames[5];
  popGameSevenImg.src = featuredGames[6];
  popGameEightImg.src = featuredGames[7];
}

function setImageRated() {
  newGameOneImg.src = RatedGames[0];
  newGameTwoImg.src = RatedGames[1];
  newGameThreeImg.src = RatedGames[2];
  newGameFourImg.src = RatedGames[3];
  newGameFiveImg.src = RatedGames[4];
  newGameSixImg.src = RatedGames[5];
  newGameSevenImg.src = RatedGames[6];
  newGameEightImg.src = RatedGames[7];
}

function setImageChoice() {
  devChoiceOne.src = devChoiceGames[0];
  devChoiceTwo.src = devChoiceGames[1];
  devChoiceThree.src = devChoiceGames[2];
  devChoiceFour.src = devChoiceGames[3];
  devChoiceFive.src = devChoiceGames[4];
  devChoiceSix.src = devChoiceGames[5];
  devChoiceSeven.src = devChoiceGames[6];
  devChoiceEight.src = devChoiceGames[7];
  devChoiceNine.src = devChoiceGames[8];
}*/


// Gets the box_art_url from the name passed in from Rawg API
function getTwitchImg(imgUrl) {
  fetch(`https://api.twitch.tv/helix/games?name=${imgUrl}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': BEARER_TOKEN,
      "Client-Id": clientId,
    },
  })

    .then(function (response) {
      return response.json();
    })
    .then(data => {
      var imageUrl = data.data[0].box_art_url.slice(0, -21) + '.jpg';
      searchImg.src = data.data[0].box_art_url.slice(0, -21) + '.jpg';
      return imageUrl;
    })
    .catch(err => {
      console.error(err);
    })
}

function getTwitchArrayImg(imgUrl, i) {
  fetch(`https://api.twitch.tv/helix/games?name=${imgUrl}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': BEARER_TOKEN,
      "Client-Id": clientId,
    },
  })

    .then(function (response) {
      return response.json();
    })
    .then(data => {
      console.log(data)
      var imageUrl = data.data[0].box_art_url.slice(0, -21) + '.jpg';
      if (featureGameImg[i].src === "https://bulma.io/images/placeholders/480x640.png") {
        featureGameImg[i].src = imageUrl;
      }


var YTKey = '';


fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchBar.value}walkthrough&type=video&maxResults=3&order=rating&key=${YTKey}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })

/*function getVideo(videoId){
url = `https://www.youtube.com/watch?v=${videoId}`

}*/
