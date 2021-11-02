import { Link } from 'react-router-dom';
import './FilmCard.css';

export default function FilmCard({ film }) {
  return (
    <li className="FilmCard">
      <Link to={`/film/${film.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} />
        <p>{film.title}</p>
        <p>{new Date(film.release_date).toLocaleDateString()}</p>
      </Link>
    </li>
  );
}
