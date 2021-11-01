export default async function getFilms(keyword, page) {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${keyword}&page=${page}`;

  return await fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}
