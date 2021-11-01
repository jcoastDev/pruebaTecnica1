import './FilmList.css';

export default function FilmList({ films }) {
  return (
    <ul>
      {films.map((film) => (
        <>
          <img src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} />
          <p>{film.title}</p>
          <p>{film.release_date}</p>
        </>
      ))}
    </ul>
  );
}
