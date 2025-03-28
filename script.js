const API_URL = 'https://www.omdbapi.com/?apikey=f37a93ee&s=batman';
const SEARCH_API = 'https://www.omdbapi.com/?apikey=f37a93ee&s=';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

getMovies(API_URL);

async function getMovies(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.Response === "True") {
            showMovies(data.Search);
        } else {
            main.innerHTML = `<h2 style="color:red;">${data.Error}</h2>`;
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { Title, Poster, Year, imdbID } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${Poster !== "N/A" ? Poster : 'default.jpg'}" alt="${Title}">
            <div class="movie-info">
                <h3>${Title}</h3>
                <span>${Year}</span>
            </div>
        `;
        movieElement.addEventListener('click', () => openReviewPage(imdbID));
        main.appendChild(movieElement);
    });
}

function openReviewPage(imdbID) {
    window.location.href = `reviews.html?movieId=${imdbID}`;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value.trim();
    if (searchTerm) {
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    }
});
