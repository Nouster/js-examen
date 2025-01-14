function displayAlert() {
	const moviesContainer = document.getElementById("movies-container");
	const searchInput = document.getElementById("search-input").value;

	moviesContainer.innerHTML = `<p class="bg-danger text-light p-2 text-center rounded-3">Aucun film trouvé pour "${searchInput}"</p>`;

	setTimeout(() => {
		moviesContainer.innerHTML = "";
	}, 2000);
}

function displayTotalResult(data, searchInput) {
	let result = document.getElementById("result");
	result.setAttribute("class", "alert alert-success my-5 col-3");

	result.innerHTML = `${data.totalResults} Résultats pour la recherche : ${searchInput}`;

	setTimeout(() => {
		result.innerHTML = "";
		result.removeAttribute("class");
	}, 2000);
}
