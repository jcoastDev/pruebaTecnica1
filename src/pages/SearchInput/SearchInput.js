import { useState } from 'react';
import getFilms from '../../helpers/getFilms';
import FilmList from '../../components/FilmList/FilmList';

import './SearchInput.css';
import PageSelector from '../../components/PageSelector/PageSelector';

export default function SearchInput() {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState('');
  const [films, setFilms] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getFilms(keyword, 1).then((films) => setFilms(films));
    console.log(films);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword}></input>
        <button>buscar</button>
      </form>

      {films?.results?.length > 0 ? (
        <>
          <FilmList films={films.results} />
          <PageSelector page={page} setPage={setPage} maxPage={films} />
        </>
      ) : (
        <p>No hay peliculas</p>
      )}
    </>
  );
}
