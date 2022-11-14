// Gets elements from DOM
const elFilmsList = document.querySelector(".films__list");
const elFilmTemplate = document.querySelector("#film-template").content;
const elGenreTemplate = document.querySelector("#film-genre-template").content;
const elFilmsFilterForm = document.querySelector(".films-form");
const elFilmsSelect = document.querySelector(".film-select");
const elFilmsSearchInput = document.querySelector(".film-search-input");

let uniqGenres = (films) => {
    let genres = []
   films.map(film => {
    film.genres.map(genre => {
        if(!genres.includes(genre)) {
            genres.push(genre)
            
        }
    })
   })
   return genres
}
uniqGenres(films)

let renderGenres = (genres, el) => {
    el.innerHTML = null;
    genres.map(genre => {
        let newOption = document.createElement("option");
        newOption.value = genre;
        newOption.textContent = genre;
        el.appendChild(newOption);
    })

}
renderGenres(uniqGenres(films), elFilmsSelect);

let renderFilm = (films, el) => {
    el.innerHTML = null;
    films.map((film) => {
        console.log(film);
        let filmTemplate = elFilmTemplate.cloneNode(true )
        filmTemplate.querySelector(".film__title").textContent = film.title
        filmTemplate.querySelector(".film__image").src = film.poster
        filmTemplate.querySelector(".film__overview").textContent = film.overview

    })
}
renderFilm(films, elFilmsList)




