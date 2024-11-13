import Card from './Card';

const shuffle = function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Exports to App.js
export default function Grid({ films, updateScore }) {
  const shuffledFilms = shuffle(films);
  return (
    <main>
      {shuffledFilms.map((film) => {
        return (
          <Card
            imageSrc={film.imgSrc}
            videoSrc={film.vidSrc}
            updateScore={updateScore}
            filmId={film.id}
            key={film.id}
          ></Card>
        );
      })}
    </main>
  );
}
