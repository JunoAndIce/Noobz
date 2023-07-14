
let searchBar = document.querySelector('#SearchBar')
let searchButton = document.querySelector('#searchButton')

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





// Use RAWG API to attatch images to Popular games of month


fetch(`https://api.rawg.io/api/games?key=${key}&dates=2023-06-01,2023-06-20&per_page=5&ordering=-added&`)
.then(function(response){
  return response.json();
})
.then(function (data) {
  console.log(data);
  data.array.forEach(popular => {
    
  });
})
.catch(error => console.log(error));
