import { useEffect, useRef, useState } from 'react';
import getTitles from './titles';

// Exports to main.jsx
export default function App() {
  const [films, setFilms] = useState([]);
  const fetched = useRef(false);

  useEffect(() => {
    // Loading twice in development
    if (fetched.current === true) return;
    fetched.current = true;

    const fetchPosters = async () => {
      const promises = getTitles().map(async (film, index) => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${film.id}?api_key=b2e8b9fd7484d2460a372d9ccfcb104c`,
            { mode: 'cors' },
          );
          const data = await response.json();
          // TODO: Remove
          if (index === 0) {
            console.log(data);
          }
          const posterPath = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
          return { ...film, src: posterPath };
        } catch (error) {
          console.error(`Error fetching poster for ${film.id}:`, error);
          return { ...film, src: null };
        }
      });

      const filmsDetails = await Promise.all(promises);
      setFilms(filmsDetails);
    };

    fetchPosters();
  }, []);
}
