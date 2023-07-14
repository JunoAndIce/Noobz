const key = `87a21af0194d4db1a70bb42c6c104ebe`




// RAWG API link/key
fetch(`https://api.rawg.io/api/platforms?key=${key}`, {
  method: 'get'
})
.then(function(response){
  return response.json();
})
.then(function (data) {
  console.log(data);
})
.catch(error => console.log(error));



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
