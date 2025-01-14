import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";

const SearchBar = () => {
    const { setMovies, query, setQuery } = useContext(MovieContext);
    const [loading, setLoading] = useState(false);

    const API_KEY = "LA_TUA_API_KEY"; // Inserisci qui la tua API_KEY

    const handleSearch = async () => {
        if (!query) return;
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie`,
                {
                    params: {
                        api_key: API_KEY,
                        query: query,
                        language: "it-IT",
                    },
                }
            );
            setMovies(response.data.results);
        } catch (error) {
            console.error("Errore durante la ricerca:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca un film..."
            />
            <button onClick={handleSearch}>Cerca</button>
            {loading && <p>Caricamento...</p>}
        </div>
    );
};

export default SearchBar;