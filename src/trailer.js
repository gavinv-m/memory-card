export default function getTrailerSrc(data) {
  const video = data.videos.results.find((video) => {
    return video.type === 'Trailer';
  });
  return `https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1&controls=1`;
}
