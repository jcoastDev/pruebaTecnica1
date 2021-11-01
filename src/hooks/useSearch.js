import { useEffect, useState } from 'react';
import getFilms from '../helpers/getFilms';

export default function useSearch(keyword, page) {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   getFilms(keyword, page).then((search) => {
  //     setSearch(search);
  //     setLoading(false);
  //   });
  // }, [keyword, page]);

  const newSearch = (keyword, page) => {
    setLoading(true);
    getFilms(keyword, page).then((search) => {
      setSearch(search);
      setLoading(false);
    });
  };

  return [loading, search, newSearch];
}
