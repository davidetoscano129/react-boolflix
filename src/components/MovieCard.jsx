const MovieCard = ({ movie }) => {
    return (
        <div>
            <h3>{movie.title}</h3>
            <p>Titolo Originale: {movie.original_title}</p>
            <p>Lingua: {movie.original_language}</p>
            <p>Voto: {movie.vote_average}</p>
        </div>
    );
};

export default MovieCard;