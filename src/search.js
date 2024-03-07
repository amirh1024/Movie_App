function suggestMovies() {
    var keyword = document.getElementById('searchInput').value.trim();
    if (keyword === '') {
        clearSuggestions();
        return;
    }
    var apiUrl = `https://www.omdbapi.com/?apikey=c1aecf62&s=${encodeURIComponent(keyword)}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True' && data.Search) {
                displaySuggestions(data.Search);
            } else {
                clearSuggestions();
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            clearSuggestions();
        });
}
function clearSuggestions() {
    var suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';
}
function displaySuggestions(movies) {
    var suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '<h3>Suggestions:</h3>';
    movies.forEach(movie => {
        var suggestion = document.createElement('div');
        suggestion.classList.add('suggestion');

        var poster = document.createElement('img');
        poster.src = movie.Poster;
        poster.alt = `${movie.Title} poster`;
        poster.classList.add('poster');

        // Add an event listener to the poster
        poster.addEventListener('click', function() {
            displayMovieInfo(movie.imdbID);
        });

        suggestion.appendChild(poster);
        suggestionsDiv.appendChild(suggestion);
    });
}
function displayMovieInfo(movieID) {
    var apiUrl = `https://www.omdbapi.com/?apikey=c1aecf62&i=${encodeURIComponent(movieID)}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                var movieDetailsDiv = document.getElementById('movieDetails');
                movieDetailsDiv.innerHTML = `
                    <h2>${data.Title}</h2>
                    <p><strong>Year:</strong> ${data.Year}</p>
                    <p><strong>Director:</strong> ${data.Director}</p>
                    <p><strong>Actors:</strong> ${data.Actors}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                    <img src="${data.Poster}" alt="Movie Poster">
                `;
            } else {
                alert('Movie not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred. Please try again later.');
        });
}
function searchMovie() {
    var title = document.getElementById('searchInput').value.trim();
    if (title === '') {
        alert('Please enter a movie title');
        return;
    }
    var apiUrl = `https://www.omdbapi.com/?apikey=c1aecf62&t=${encodeURIComponent(title)}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovieInfo(data.imdbID);
            } else {
                alert('Movie not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred. Please try again later.');
        });
}
function displayMovieInfo(movieID) {
    window.location.href = `detail.html?movieID=${encodeURIComponent(movieID)}`;
}