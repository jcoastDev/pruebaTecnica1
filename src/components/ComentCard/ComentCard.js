import { Link } from 'react-router-dom';

export default function ComentCard({ coment }) {
  return (
    <li>
      <Link to={`/film/${coment.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${coment.poster_path}`} />
        <p>{coment.title}</p>
        <p>{coment.text}</p>
        <p>{coment.puntuation}</p>
      </Link>
    </li>
  );
}
