import "./SearchBar.css";
import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";

const SearchBar = () => {
    const { setMovies, query, setQuery } = useContext(MovieContext);
    const [loading, setLoading] = useState(false);

    const API_KEY = "e07662a6e2fa3db1d525f2c7a1fd898f";

    const handleSearch = async () => {
        if (!query) return;
        setLoading(true);
        try {
            const movieResponse = await axios.get(
                `https://api.themoviedb.org/3/search/movie`,
                {
                    params: {
                        api_key: API_KEY,
                        query: query,
                        language: "it-IT",
                    },
                }
            );

            const tvResponse = await axios.get(
                `https://api.themoviedb.org/3/search/tv`,
                {
                    params: {
                        api_key: API_KEY,
                        query: query,
                        language: "it-IT",
                    },
                }
            );

            // Unisce i risultati di film e serie
            setMovies([...movieResponse.data.results, ...tvResponse.data.results]);
        } catch (error) {
            console.error("Errore durante la ricerca:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca un film o una serie..."
            />
            <button onClick={handleSearch} className="search-button">
                Cerca
            </button>
        </div>
    );
};

export default SearchBar;