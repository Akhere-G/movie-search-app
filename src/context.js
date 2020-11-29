import React, {
  useCallback,
  useContext,
  useState,
  useEffect,
  createContext,
} from "react";

const AppContext = createContext(null);

const url = "https://api.themoviedb.org/3/search/movie?query=";
const api_key = "&api_key=86da44395c78e16acb0a78362f748f79";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Hunger");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url + searchTerm + api_key);
      const data = await response.json();
      const newMovies = data.results.map(item => {
        const { id, title, popularity, poster_path, release_date } = item;
        return { id, title, popularity, poster_path, release_date };
      });
      setMovies(newMovies);
    } catch (error) {
      setMovies([]);
      console.log(error);
    }
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        movies,
        setMovies,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalState };
