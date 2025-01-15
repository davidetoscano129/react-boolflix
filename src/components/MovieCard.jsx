const MovieCard = ({ movie }) => {
    const getFlagUrl = (languageCode) => {
        return `/flags/${languageCode}.png`;
    };

    const getPosterUrl = (posterPath) => {
        return posterPath
            ? `https://image.tmdb.org/t/p/w342${posterPath}`
            : "/placeholder_poster.png"; // Immagine di default
    };

    const convertVoteToStars = (vote) => {
        return Math.ceil(vote / 2); // Arrotonda il voto da 1-10 a 1-5
    };

    return (
        <div style={{ width: "200px", margin: "10px" }}>
            <img
                src={getPosterUrl(movie.poster_path)}
                alt={movie.title || movie.name}
                style={{ width: "100%" }}
            />
            <h3>{movie.title || movie.name}</h3>
            <p>Titolo Originale: {movie.original_title || movie.original_name}</p>
            <p>
                Lingua:{" "}
                <img
                    src={getFlagUrl(movie.original_language)}
                    alt={movie.original_language}
                    style={{ width: "20px", height: "20px" }}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/flags/placeholder.png";
                    }}
                />
            </p>
            <p>
                Voto:{" "}
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                        {index < convertVoteToStars(movie.vote_average) ? "⭐" : "☆"}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default MovieCard;