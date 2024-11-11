const shuffle = function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Exports to App.js
export default function Grid({ films }) {
  const shuffledFilms = shuffle(films);
  return (
    <main>
      {shuffledFilms.map((film) => {
        return (
          <div className="card" key={film.id}>
            <img src={film.src} alt={`Poster of the movie ${film.title}`} />
          </div>
        );
      })}
    </main>
  );
}
