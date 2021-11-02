import { Link } from 'react-router-dom';
import './ComentCard.css';

export default function ComentCard({ coment }) {
  return (
    <li className="ComentCard">
      <Link to={`/film/${coment.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${coment.poster_path}`} />
        <p>{coment.title}</p>
        <p>Comentario:</p>
        <p>{coment.text}</p>
        <p>Puntuacion: {coment.puntuation}</p>
      </Link>
    </li>
  );
}
