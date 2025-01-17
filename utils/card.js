function createMovieCard(movie) {
	return `
		<div class="card m-3" style="width: 18rem;">
			<img src="${movie.Poster}" class="card-img-top" alt="Affiche de ${movie.Title}">
			<div class="card-body">
				<h5 class="card-title">${movie.Title}</h5>
				<p class="card-text">Année : ${movie.Year}</p>
				<p>
					<a class="btn btn-primary" data-bs-toggle="collapse" href="#movie-type" role="button" aria-expanded="true" aria-controls="collapseMovie">
						More info 
					</a>
				</p>
				<div class="collapse" id="movie-type">
					<div class="card card-body">
						Type : ${movie.Type}
					</div>
				</div>
			</div>
		</div>
	`;
}
