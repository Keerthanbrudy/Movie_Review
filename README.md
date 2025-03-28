# Movie Reviews App

This is a simple movie search and review application that fetches data from the [OMDb API](https://www.omdbapi.com/) and allows users to search for movies, view details, and add/edit/delete reviews stored locally in the browser.

## Features
- Search for movies using the OMDb API
- View movie details such as title, year, and IMDb rating
- Add reviews for movies
- Edit and delete reviews
- Stores reviews in localStorage

## Technologies Used
- HTML
- CSS
- JavaScript
- OMDb API
- LocalStorage

## How to Use
1. Clone the repository:
2. Open `index.html` in a browser.
3. Search for a movie using the search bar.
4. Click the "Details" button to view more information.
5. Write and manage reviews for each movie.

## API Key Setup
The application uses the OMDb API with a predefined API key. If you need to use your own API key:
1. Register at [OMDb API](https://www.omdbapi.com/apikey.aspx) to get a free key.
2. Replace the API key in `script.js`:
   ```js
   const API_URL = 'https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=batman';
   const SEARCH_API = 'https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=';
   ```
## Future Improvements
- Implement a backend to store reviews permanently
- Add user authentication
- Improve UI/UX with better styling

## License
This project is licensed under the MIT License. Feel free to modify and use it for personal or commercial purposes.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

Enjoy using the Movie Reviews App! 🎬🍿

