import { Link } from 'react-router-dom';

export default function FilmCard({ film }) {
  return (
    <li>
      <Link to={`/film/${film.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} />
        <p>{film.title}</p>
        <p>{film.release_date}</p>
      </Link>
    </li>
  );
}
