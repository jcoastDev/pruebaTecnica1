import { useState } from 'react';
import FilmList from '../../components/FilmList/FilmList';

import './SearchInput.css';
import PageSelector from '../../components/PageSelector/PageSelector';
import useSearch from '../../hooks/useSearch';

export default function SearchInput() {
  const [keyword, setKeyword] = useState('');
  const [searchedKeyword, setSearchedKeyword] = useState('');
  const [loading, search, newSearch] = useSearch('');

  const handleSubmit = (e) => {
    e.preventDefault();
    newSearch(keyword, 1);
    setSearchedKeyword(keyword);
    console.log(search);
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

      {search?.results?.length > 0 ? (
        <>
          <FilmList films={search.results} />
          <PageSelector
            page={search.page}
            newSearch={newSearch}
            searchedKeyword={searchedKeyword}
            maxPage={search.total_pages}
          />
        </>
      ) : (
        <p>No hay peliculas</p>
      )}
    </>
  );
}
