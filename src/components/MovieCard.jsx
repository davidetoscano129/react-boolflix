import "./MovieCard.css";

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
        <div className="movie-card">
            <img
                src={getPosterUrl(movie.poster_path)}
                alt={movie.title || movie.name}
                className="movie-poster"
            />
            <div className="movie-overlay">
                <h3>{movie.title || movie.name}</h3>
                <p>{movie.original_title || movie.original_name}</p>
                <p>
                    Voto:{" "}
                    {Array.from({ length: 5 }, (_, index) => (
                        <span key={index}>
                            {index < convertVoteToStars(movie.vote_average) ? "⭐" : "☆"}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default MovieCard;