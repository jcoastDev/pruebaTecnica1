import FilmCard from '../FilmCard/FilmCard';
import './FilmList.css';

export default function FilmList({ films }) {
  return (
    <ul>
      {films.map((film) => (
        <FilmCard film={film} />
      ))}
    </ul>
  );
}
