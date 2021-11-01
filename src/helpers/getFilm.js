export default async function getFilms(movie_id) {
  let URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8f781d70654b5a6f2fa69770d1d115a3`;

  return await fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}
