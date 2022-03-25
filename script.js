fetch('https://api.publicapis.org/entries')
.then(function(response) {
  return response.json();
})

.then(function(myJson) {

    //console.log(myJson);
    console.log(myJson.entries);

    for(i=0; i < myJson.entries.length; i++){

        let clone =document.querySelector("#section").cloneNode(true);

        clone.id = "newSection"+i;

        clone.querySelector("h2").innerHTML = myJson.entries[i].API;
        clone.querySelector("p.first").innerHTML = myJson.entries[i].Description;
        clone.querySelector("p.last").innerHTML = myJson.entries[i].Category;
        clone.querySelector("a").href = myJson.entries[i].Link;
        clone.querySelector("a").innerHTML = myJson.entries[i].Link;
        document.querySelector("div").append(clone);
        
   }

});
