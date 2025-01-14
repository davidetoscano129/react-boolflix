const MovieCard = ({ movie }) => {
    const getFlagUrl = (languageCode) => {
        return `/flags/${languageCode}.png`;
    };

    return (
        <div>
            <h3>{movie.title || movie.name}</h3> {/* Per gestire film e serie */}
            <p>Titolo Originale: {movie.original_title || movie.original_name}</p>
            <p>
                Lingua:{" "}
                <img
                    src={getFlagUrl(movie.original_language)}
                    alt={movie.original_language}
                    style={{ width: "20px", height: "20px" }}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/flags/placeholder.png"; // Bandiera di default
                    }}
                />
            </p>
            <p>Voto: {movie.vote_average}</p>
        </div>
    );
};

export default MovieCard;