function displayAllMovies() {
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Avatar`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const posterUrl = data.Poster;
            const img = document.createElement('img');
            img.src = posterUrl;
            img.width = 180; // Set your desired width
            img.height = 240; // Set your desired height
            document.getElementById('Poster1').appendChild(img);

            // Store additional movie information in a variable
            const movieInfo = {
                title: data.Title,
                year: data.Year,
                plot: data.Plot,
                director: data.Director,
                actors: data.Actors
                // Add more properties as needed
            };

            img.addEventListener('click', () => {
                // Redirecting to details page with encoded movie info in the URL
                const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
                window.location.href = `details.html?info=${encodedInfo}`;
            });
        });

        fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Avengers: Endgame`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const posterUrl = data.Poster;
            const img = document.createElement('img');
            img.src = posterUrl;
            img.width = 180; // Set your desired width
            img.height = 240; // Set your desired height
            document.getElementById('Poster2').appendChild(img);

            // Store additional movie information in a variable
            const movieInfo = {
                title: data.Title,
                year: data.Year,
                plot: data.Plot,
                director: data.Director,
                actors: data.Actors
                // Add more properties as needed
            };

            img.addEventListener('click', () => {
                // Redirecting to details page with encoded movie info in the URL
                const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
                window.location.href = `details.html?info=${encodedInfo}`;
            });
        });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Avatar: The Way of Water`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('Poster3').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Titanic`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('Poster4').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Star Wars: Episode VII - The Force Awakens`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('Poster5').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
    
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Avengers: Infinity War`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('Poster6').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Spider-Man: No Way Home`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('Poster7').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Jurassic World`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('Poster8').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
    
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Lion King`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('Poster9').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Avengers`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('Poster10').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Breaking Bad`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const posterUrl = data.Poster;
            const img = document.createElement('img');
            img.src = posterUrl;
            img.width = 180; // Set your desired width
            img.height = 240; // Set your desired height
            document.getElementById('P1').appendChild(img);

            // Store additional movie information in a variable
            const movieInfo = {
                title: data.Title,
                year: data.Year,
                plot: data.Plot,
                director: data.Director,
                actors: data.Actors
                // Add more properties as needed
            };

            img.addEventListener('click', () => {
                // Redirecting to details page with encoded movie info in the URL
                const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
                window.location.href = `details.html?info=${encodedInfo}`;
            });
        });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Planet Earth II`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('P2').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Planet Earth`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('P3').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Band of Brothers`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('P4').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Chernobyl`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('P5').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
    
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Wire`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('P6').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Avatar: The Last Airbender`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('P7').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Blue Planet II`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('P8').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
    
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Sopranos`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('P9').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Cosmos: A Spacetime Odyssey`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('P10').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Ant-Man and the Wasp: Quantumania `)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('A1').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Guardians of the Galaxy Vol. 3`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('A2').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Spider-Man: Across the Spider-Verse`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('A3').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Marvels`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('A4').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Madame Web`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('A5').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
    
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Kraven the Hunter`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('A6').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Deadpool`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('A7').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Captain America: Brave New World`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('A8').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
    
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Avengers: The Kang Dynasty`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('A9').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Spider-Man: Beyond The Spider-Verse`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('A10').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Crash Course in Romance`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('B1').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=A Time Called You`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('B2').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Celebrity`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('B3').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Doona!`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('B4').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Revenant`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('B5').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
    
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Daily Dose of Sunshine`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('B6').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Good Bad Mother`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('B7').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Moving`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('B8').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
    
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Mask Girl`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('B9').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Glory`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('B10').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=The Masked Singer`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('C1').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Running Man`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('C2').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Dengar Boleh, Percaya Jangan`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('C3').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t= Knowing Bros`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('C4').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Survivor`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('C5').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
    
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=I-LAND`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('C6').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Alone`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('C7').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Kingdom: Legendary War`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('C8').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
    
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=MythBusters`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('C9').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });

    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=Physical: 100`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const posterUrl = data.Poster;
        const img = document.createElement('img');
        img.src = posterUrl;
        img.width = 180; // Set your desired width
        img.height = 240; // Set your desired height
        document.getElementById('C10').appendChild(img);

        // Store additional movie information in a variable
        const movieInfo = {
            title: data.Title,
            year: data.Year,
            plot: data.Plot,
            director: data.Director,
            actors: data.Actors
            // Add more properties as needed
        };

        img.addEventListener('click', () => {
            // Redirecting to details page with encoded movie info in the URL
            const encodedInfo = encodeURIComponent(JSON.stringify(movieInfo));
            window.location.href = `details.html?info=${encodedInfo}`;
        });
    });
}

window.onload = function() {
    displayAllMovies(); // Call the function to display all movies when the page loads
};