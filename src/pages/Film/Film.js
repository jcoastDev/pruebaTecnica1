import './Film.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import getFilm from '../../helpers/getFilm';
import ComentsContext from '../../context/comentsContext';

export default function Film() {
  const { filmId } = useParams();
  const [film, setFilm] = useState();
  const { coments, setComents } = useContext(ComentsContext);

  console.log(coments);

  useEffect(() => {
    getFilm(filmId).then((film) => {
      setFilm(film);
    });
  }, [filmId]);

  return film ? <h1>Film {`${film.id}`}</h1> : <h4>Loading...</h4>;
}
