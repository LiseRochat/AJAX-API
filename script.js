fetch('https://api.publicapis.org/entries')
.then(function(response) {
  return response.json();
})
