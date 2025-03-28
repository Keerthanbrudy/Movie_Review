document.addEventListener("DOMContentLoaded", loadReviews);

function getMovieId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("movieId");
}

function loadReviews() {
    const imdbID = getMovieId();
    if (!imdbID) {
        document.getElementById("movie-title").innerText = "Movie not found!";
        return;
    }

    const reviewsDiv = document.getElementById("reviews-container");
    const reviews = JSON.parse(localStorage.getItem(imdbID)) || [];

    document.getElementById("movie-title").innerText = `Reviews for ${imdbID}`;
    reviewsDiv.innerHTML = reviews.map((review, index) => `
        <div class="review-item">
            <p id="review-text-${index}">${review}</p>
            <button onclick="editReview(${index})">✏️ Edit</button>
            <button onclick="deleteReview(${index})">❌ Delete</button>
        </div>
    `).join('');
}

function addReview() {
    const imdbID = getMovieId();
    if (!imdbID) return;

    const reviewInput = document.getElementById("review-input");
    const reviewText = reviewInput.value.trim();

    if (reviewText === '') return;

    let reviews = JSON.parse(localStorage.getItem(imdbID)) || [];
    reviews.push(reviewText);
    localStorage.setItem(imdbID, JSON.stringify(reviews));

    reviewInput.value = '';
    loadReviews();
}

function editReview(index) {
    const imdbID = getMovieId();
    let reviews = JSON.parse(localStorage.getItem(imdbID)) || [];

    const newText = prompt("Edit your review:", reviews[index]);
    if (newText !== null && newText.trim() !== '') {
        reviews[index] = newText;
        localStorage.setItem(imdbID, JSON.stringify(reviews));
        loadReviews();
    }
}

function deleteReview(index) {
    const imdbID = getMovieId();
    let reviews = JSON.parse(localStorage.getItem(imdbID)) || [];

    reviews.splice(index, 1);
    localStorage.setItem(imdbID, JSON.stringify(reviews));
    loadReviews();
}

function goBack() {
    window.location.href = "index.html";
}
