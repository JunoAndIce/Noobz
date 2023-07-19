let searchBar = document.querySelector('#SearchBar');
let searchImg = document.querySelector('#search-img')
let searchButton = document.querySelector('#searchButton');

let mainGameName = document.querySelector('.mainName');
let mainGameImg = document.querySelector('.mainImg');
let mainGameId = document.querySelector('.mainId');


const featureGame = document.querySelectorAll(`.featureGame`);
const featureGameImg = document.querySelectorAll(`.featureGameImg`);
const HighGameImg = document.querySelectorAll(`.HighGameImg`);
const HighGame = document.querySelectorAll(`.HighGame`);
const gameButton = document.querySelectorAll('.hoverButton');
const highGameButton = document.querySelectorAll('.highHoverButton');


let platTxt = document.getElementById('platforms');
let rateTxt = document.getElementById('ratings');
let genTxt = document.getElementById('genre');
const twitchCtn = document.querySelectorAll('.twitchVid');
const twitchThumb = document.querySelectorAll('.twitchThumb');
const twitchImg = document.querySelectorAll('#thumbImg');
const youtubeCtn = document.querySelectorAll('.youtubeVid');
const youtubeThumb = document.querySelectorAll('.youtubeThumb');
const youtubeImg = document.querySelectorAll('#youtubeThumbImg');

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
searchButton.addEventListener('click', function () {
  fetch(`https://api.rawg.io/api/games?key=${key}&search=${searchBar.value}&search_precise`, {
    method: 'get'
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      for (let i = 0; i < data.results[0].platforms.length; i++) {
        platTxt.innerHTML += data.results[0].platforms[i].platform.name + ", ";
      }

      for (let i = 0; i < data.results[0].genres.length; i++) {
        genTxt.innerHTML += data.results[0].genres[i].name + ", ";
      }
      
      rateTxt.innerHTML =  data.results[0].esrb_rating.name_en;

      mainGameName.innerHTML = data.results[0].name;
      mainGameImg.src = data.results[0].background_image;
      getStream(mainGameId.innerHTML);
      getYoutube(mainGameId.innerHTML);
    });
})

$('#searchButton').click(function () {
  $('.videoFunc').show();
});

let addToSearch = button => {
  let d = "" + button.getAttribute('data-game');
  let i = "" + button.getAttribute('data-id');
  searchBar.value = d;
  mainGameId.innerHTML = i;
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}



// ! MOST POPULAR GAMES 
// ! 
// !! ONLY GRABS IMAGE NAME FOR TOP 8 GAMES
// This is the code used to source the data for the most popular games
fetch(`https://api.rawg.io/api/games?key=${key}&dates=2023-05-01,2023-07-18&per_page=5&ordering=-rating&`)
  .then(function (response) {
    return response.json();
  })
  .then(async function (data) {
    console.log(data);
    for (let i = 0; i < featureGame.length; i++) {
      // console.log(getTwitchArrayImg(data.results[i].name))
      gameButton[i].setAttribute("data-game", data.results[i].name);
      getTwitchArrayImg(data.results[i].name, i);
    }
  })
  .catch(error => console.log(error));


// ! HIGHEST RATED GAMES 
// This is the code used to source the data for the new games
fetch(`https://api.rawg.io/api/games?key=${key}&dates=2022-11-01,2023-03-01&ordering=-metacritic`)
  .then(function (call) {
    return call.json();
  })
  .then(async function (input) {

    for (let i = 0; i < HighGame.length; i++) {
      // console.log(getTwitchArrayImg(data.results[i].name))
      highGameButton[i].setAttribute("data-game", input.results[i].name);
      getTwitchArrayImgRated(input.results[i].name, i);
      // console.log(input);
    }
  })
  .catch(error => console.log(error));


// // ! DEVS'S CHOICE GAMES (SITE DEVS)
// fetch(`https://api.rawg.io/api/games?key=${key}&search=Smash+Bros+Ultimate`, {
//   method: 'get'
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     // console.log(data);
//   });

// fetch(`https://api.rawg.io/api/games?key=${key}&search=Pokemon+Emerald`, {
//   method: 'get'
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     // console.log(data);
//     // console.log(data.results[13].name.slice(0, -12));
//   });


// fetch(`https://api.rawg.io/api/games?key=${key}&search=Monster+Hunter+Rise`, {
//   method: 'get'
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     // console.log(data);
//   });


// Gets the box_art_url from the name passed in from Rawg API
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
      // console.log(data);

      var imageUrl = data.data[0].box_art_url.slice(0, -21) + '.jpg';

      if (featureGameImg[i].src === "https://bulma.io/images/placeholders/480x640.png") {
        featureGameImg[i].src = imageUrl;
        gameButton[i].setAttribute("data-id", data.data[0].id);
      }
    })
}


function getTwitchArrayImgRated(imgUrl, i) {
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
      // console.log(data);

      var imageUrl = data.data[0].box_art_url.slice(0, -21) + '.jpg';

      if (HighGameImg[i].src === "https://bulma.io/images/placeholders/480x640.png") {
        HighGameImg[i].src = imageUrl;
        highGameButton[i].setAttribute("data-id", data.data[0].id);
      }
    })
}


function getStream(id, i) {
  fetch(`https://api.twitch.tv/helix/streams?game_id=${id}`, {
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
      console.log("This is the Twitch data: ");
      console.log(data);
      
      for (let i = 0; i < twitchCtn.length; i++) {
        // console.log(getTwitchArrayImg(data.results[i].name))
        twitchThumb[i].setAttribute('href', 'https://www.twitch.tv/' + data.data[i].user_name);
        twitchImg[i].src = data.data[i].thumbnail_url.slice(0, -21)  + '.jpg';
        twitchCtn[i].classList.remove('hide');
      }
    })
  }

var YTKey = 'AIzaSyDoPwunoUapcRF7EPA4y7OBBixBuBc7-P8';

function getYoutube(id, i) {
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchBar.value}+walkthrough&type=video&maxResults=3&order=rating&key=${YTKey}`)
  // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=zelda+walkthrough&type=video&maxResults=3&order=rating&key=${YTKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("This is youtube data: ")
      console.log(data)

      for (let i = 0; i < youtubeCtn.length; i++) {
        // console.log(getTwitchArrayImg(data.results[i].name))
        youtubeThumb[i].setAttribute('href', 'https://www.twitch.tv/' + data.data[i].user_name);
        youtubeImg[i].src = data.data[i].thumbnail_url.slice(0, -21)  + '.jpg';
        youtubeCtn[i].classList.remove('hide');
      }
    })
  }

// function getVideo(videoId){
// url = `https://www.youtube.com/watch?v=${videoId}`

// }
