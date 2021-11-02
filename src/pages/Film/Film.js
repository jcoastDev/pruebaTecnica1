import './Film.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import getFilm from '../../helpers/getFilm';
import ComentsContext from '../../context/comentsContext';

export default function Film() {
  const { filmId } = useParams();
  const [film, setFilm] = useState();
  const [vote, setVote] = useState(false);
  const { coments, setComents } = useContext(ComentsContext);

  const INITIAL_COMENT = {
    text: '',
    puntuation: '5',
  };

  const [coment, setComent] = useState(INITIAL_COMENT);

  useEffect(() => {
    getFilm(filmId).then((film) => {
      setFilm(film);
    });
  }, [filmId]);

  const handleInputChange = (event, prop) => {
    setComent({
      ...coment,
      [prop]: event.target.value,
    });
  };
  function performSubmit(e) {
    e.preventDefault();
    setComents([
      ...coments,
      {
        ...coment,
        title: film.original_title,
        id: film.id,
        poster_path: film.backdrop_path,
      },
    ]);
    setVote(true);
  }

  return film ? (
    <>
      <article className="FilmDetail">
        <img src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} />
        <p>Titulo: {film.title}</p>
        <p>Sinopsis: {film.overview}</p>
        <p>Estreno: {new Date(film.release_date).toLocaleDateString()}</p>
        <p>Puntuacion media: {film.vote_average}</p>
        <p>Votos: {film.vote_count}</p>
      </article>
      {!vote ? (
        <form className="ComentForm" onSubmit={(e) => performSubmit(e)}>
          <input
            id="coment"
            type="text"
            name="comment"
            value={coment.text}
            placeholder="Comentario"
            maxLength="100"
            onChange={(event) => handleInputChange(event, 'text')}
          />
          <select
            id="puntuation"
            value={coment.puntuation}
            onChange={(event) => handleInputChange(event, 'puntuation')}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button>Calificar</button>
        </form>
      ) : (
        ''
      )}
    </>
  ) : (
    <h4>Loading...</h4>
  );
}
