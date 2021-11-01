import './PageSelector.css';

export default function PageSelector({
  page,
  newSearch,
  searchedKeyword,
  maxPage,
}) {
  function nextPage() {
    newSearch(searchedKeyword, Number(page) + 1);
  }
  function prevPage() {
    newSearch(searchedKeyword, Number(page) - 1);
  }
  return (
    <nav>
      {page > 1 ? <button onClick={prevPage}>Anterior</button> : ''}
      <p>{`Pagina ${page} de ${maxPage}`}</p>
      {page < maxPage ? <button onClick={nextPage}>Siguiente</button> : ''}
    </nav>
  );
}
