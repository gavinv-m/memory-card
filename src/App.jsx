import './App.css';
import { useEffect, useRef, useState } from 'react';
import getTitles from './titles';
import Header from './Header';
import Grid from './Grid';
import getTrailerSrc from './trailer';

// Exports to main.jsx
export default function App() {
  const [films, setFilms] = useState([]);
  const fetched = useRef(false);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    // Loading twice in development
    if (fetched.current === true) return;
    fetched.current = true;

    const fetchPosters = async () => {
      const promises = getTitles().map(async (film, index) => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${film.id}?api_key=b2e8b9fd7484d2460a372d9ccfcb104c&append_to_response=videos`,
            { mode: 'cors' },
          );
          const data = await response.json();
          // TODO: Remove
          if (index === 0) {
            console.log(data);
          }
          const posterPath = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
          const videoSrc = getTrailerSrc(data);

          return {
            ...film,
            imgSrc: posterPath,
            vidSrc: videoSrc,
            clicked: false,
          };
        } catch (error) {
          console.error(`Error fetching poster for ${film.id}:`, error);
          return { ...film, imgSrc: null, vidSrc: null, clicked: false };
        }
      });

      const filmsDetails = await Promise.all(promises);
      setFilms(filmsDetails);
    };

    fetchPosters();
  }, []);

  const updateScore = (e) => {
    const filmId = Number(e.target.getAttribute('data-id'));
    const clicked = films.find((film) => film.id === filmId).clicked;

    if (clicked === false) {
      setFilms((prevState) => {
        return prevState.map((film) => {
          return film.id === filmId ? { ...film, clicked: true } : film;
        });
      });
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        setBestScore((prevBestScore) => Math.max(newScore, prevBestScore));
        return newScore;
      });
    } else {
      setScore(0);
      setFilms((prevState) => {
        return prevState.map((film) => {
          return film.clicked === true ? { ...film, clicked: false } : film;
        });
      });
    }
  };

  return (
    <>
      <Header score={score} bestScore={bestScore}></Header>
      <Grid films={films} updateScore={updateScore}></Grid>
    </>
  );
}
