searchButton.addEventListener('click', function() {
  fetch('https://api.rawg.io/api/platforms?key=87a21af0194d4db1a70bb42c6c104ebe', {
    method: 'get'
  })
  .then(function(response){
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
})




//Type in search, then run through API

// search submit 

let searchBar = document.querySelector('#SearchBar')
let searchButton = document.querySelector('#searchButton')