import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div>
            {movies.length > 0 ? (
                movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) : (
                <p>Nessun risultato trovato.</p>
            )}
        </div>
    );
};

export default MovieList;