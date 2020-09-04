let url = new URLSearchParams(window.location.search);
let spinner = document.querySelector(".spinner");

if (url.has("id")) {
fetch(`https://swapi.dev/api/people/${url.get("id")}/`)
    .then (res => res.json())
    .then(function(data) {
        console.log(data);

            document.querySelector(".name").innerHTML = data.name;
            document.querySelector(".height").innerHTML = data.height;
            document.querySelector(".mass").innerHTML = data.mass;
            document.querySelector(".hair_color").innerHTML = data.hair_color;
            
            document.querySelector(".skin_color").innerHTML = data.skin_color;
            document.querySelector(".eye_color").innerHTML = data.eye_color;
            document.querySelector(".birth_year").innerHTML = data.birth_year;
            document.querySelector(".gender").innerHTML = data.gender;
        });
}

