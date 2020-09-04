var bleep = new Audio();
    bleep.src = "bleep.mp3";


    let url = new URLSearchParams(window.location.search);
    let page = url.get("page") ? url.get("page") : 1;

    let nextLink = document.querySelector(".nextLink");
    let previousLink = document.querySelector(".previousLink");

    
    let spinner = document.querySelector(".spinner");
    
    fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then (res => res.json())
        .then (function (data) {
            spinner.remove();

        let pages = Math.ceil(data.count / 10);

        nextPage = page >= pages ? pages : parseInt(page) + 1;

        previousPage = page <= 1 ? 1 : parseInt(page) -1;

        nextLink.href = `?page=${nextPage}`;
        previousLink.href = `?page=${previousPage}`;

        let template = document.querySelector("#template");
        let peopleList = document.querySelector("#peopleList");


        data.results.forEach(function(result) {
            let array = result.url.split("/");
            let id = array[array.length - 2];
            let clone = template.content.cloneNode(true);

            clone.querySelector(".listItem").innerText = result.name;
            clone.querySelector(".listItem").href = `/character-sheet.html?id=${id}`;

                peopleList.appendChild(clone);            
            });
        });
