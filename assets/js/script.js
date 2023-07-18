let searchBar = document.querySelector('#SearchBar');
let searchImg = document.querySelector('#search-img')
let searchButton = document.querySelector('#searchButton');
const key = `962935bac7e14d23964ca9952dc39e13`;



const featureGame = document.querySelectorAll(`.featureGame`)
const featureGameImg = document.querySelectorAll(`.featureGameImg`)





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

$(function() {
  $(".SearchBar").focusin(function() {
    $(".searchFunc").show();
  }).focusout(function () {
    $(".searchFunc").hide();
  });
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
let featuredGames = [];
let RatedGames = [];
let devChoiceGames = [];



// ! MOST POPULAR GAMES 
// !! ONLY GRABS IMAGE NAME FOR TOP 8 GAMES
// This is the code used to source the data for the most popular games
fetch(`https://api.rawg.io/api/games?key=${key}&dates=2023-05-01,2023-07-18&per_page=5&ordering=-metacritic&`)
.then(function (response) {
  return response.json();
})
.then(async function (data) {
  console.log(data);
  for(let i = 0; i < featureGame.length; i++){
    console.log(getTwitchArrayImg(data.results[i].name))
    featureGameImg[i].src = await getTwitchArrayImg(data.results[i].name, i);
  };
  
  /*Game One Image and name
  getTwitchImgFeat(data.results[0].name);
  
  //Game two image and name
  getTwitchImgFeat(data.results[1].name);
  
    //Game three image and name
    getTwitchImgFeat(data.results[2].name);

    //Game four image and name
    getTwitchImgFeat(data.results[3].name);

    //Game five image and name
    getTwitchImgFeat(data.results[4].name);

    //Game six image and name
    getTwitchImgFeat(data.results[5].name);

    //Game seven image and name
    getTwitchImgFeat(data.results[6].name);
    

    //Game eight image and name
    getTwitchImgFeat(data.results[7].name);*/
  })
  .catch(error => console.log(error));


// ! HIGHEST RATED GAMES 
// This is the code used to source the data for the new games
fetch(`https://api.rawg.io/api/games?key=${key}&dates=2022-10-01,2023-04-01&ordering=-metacritic`)
  .then(function (call) {
    return call.json();
  })
  .then(function (input) {
    // console.log(input);
/*
    // Game one
    getTwitchImgRated(input.results[0].name);

    // Game two
    getTwitchImgRated(input.results[1].name);

    // Game three
    getTwitchImgRated(input.results[2].name);

    // Game four
    getTwitchImgRated(input.results[3].name);

    // Game five
    getTwitchImgRated(input.results[4].name);

    // Game six
    getTwitchImgRated(input.results[5].name);

    // Game seven
    getTwitchImgRated(input.results[6].name);

    // Game seven
    getTwitchImgRated(input.results[7].name);
*/
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
    getTwitchImgChoice(data.results[0].name);
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
    getTwitchImgChoice(data.results[13].name.slice(0, -12));
  });

  


fetch(`https://api.rawg.io/api/games?key=${key}&search=Monster+Hunter+Rise`, {
  method: 'get'
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    getTwitchImgChoice(data.results[0].name);




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
  var url = '';
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
  var url = '';
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
     //searchImg.src = data.data[0].box_art_url.slice(0, -21) + '.jpg';
     featureGameImg[i].src = imageUrl;
      return imageUrl;
    })
    .catch(err => {
      console.error(err);
    })
}
// Gets the box_art_url from the name passed in from Rawg API
function getTwitchImgFeat(imgUrl) {
  var url = '';
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
      featuredGames.push(data.data[0].box_art_url.slice(0, -21) + '.jpg');
      // console.log(featuredGames);
      setImageFeat();
      return data;
    })
    .catch(err => {
      console.error(err);
    })
}
// Gets the box_art_url from the name passed in from Rawg API
function getTwitchImgRated(imgUrl) {
  var url = '';
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
      RatedGames.push(data.data[0].box_art_url.slice(0, -21) + '.jpg');
      // console.log(RatedGames);
      setImageRated();
      return data;
    })
    .catch(err => {
      console.error(err);
    })
}
// Gets the box_art_url from the name passed in from Rawg API
function getTwitchImgChoice(imgUrl) {
  var url = '';
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
      devChoiceGames.push(data.data[0].box_art_url.slice(0, -21) + '.jpg');
      // console.log(devChoiceGames);
      setImageChoice();
      return data;
    })
  }




var YTKey = '';
  

  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchBar.value}walkthrough&type=video&maxResults=3&order=rating&key=${YTKey}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
  console.log(data)
  })

/*function getVideo(videoId){
url = `https://www.youtube.com/watch?v=${videoId}`

}*/
