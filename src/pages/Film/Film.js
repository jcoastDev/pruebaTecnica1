import './Film.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import getFilm from '../../helpers/getFilm';
import ComentsContext from '../../context/comentsContext';

export default function Film() {
  const { filmId } = useParams();
  const [film, setFilm] = useState();
  const { coments, setComents } = useContext(ComentsContext);

  const INITIAL_COMENT = {
    text: '',
    puntuation: '3',
  };

  const [coment, setComent] = useState(INITIAL_COMENT);

  console.log(coments);

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
  }

  return film ? (
    <>
      <h1>Film {`${film.id}`}</h1>
      <form onSubmit={(e) => performSubmit(e)}>
        <input
          id="coment"
          type="text"
          name="comment"
          value={coment.text}
          placeholder="Comentario"
          maxlength="100"
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
        </select>
        <button>Calificar</button>
      </form>
    </>
  ) : (
    <h4>Loading...</h4>
  );
}
