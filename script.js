document.getElementById("search-form").addEventListener("submit", function (e) {
	e.preventDefault();
	const searchInput = document.getElementById("search-input").value;
	const apiKey = "548e717e";
	const apiUrl = `https://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`;

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			const moviesContainer = document.getElementById("movies-container");

			if (data.Response === "True") {
				displayTotalResult(data, searchInput);

				data.Search.forEach((movie) => {
					moviesContainer.innerHTML += createMovieCard(movie);
				});
			} else {
				displayAlert();
			}
		})
		.catch((error) => {
			console.error("Erreur lors de la requête :", error);
		});
});
