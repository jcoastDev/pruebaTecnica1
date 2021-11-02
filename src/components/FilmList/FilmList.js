import FilmCard from '../FilmCard/FilmCard';
import './FilmList.css';

export default function FilmList({ films }) {
  return (
    <ul className="FilmList">
      {films.map((film) => (
        <FilmCard film={film} />
      ))}
    </ul>
  );
}
