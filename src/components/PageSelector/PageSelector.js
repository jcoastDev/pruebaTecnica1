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
    <nav className="PageSelector">
      {page > 1 ? <button onClick={prevPage}>&#10094;</button> : <p />}
      <p>{`Pagina ${page} de ${maxPage}`}</p>
      {page < maxPage ? <button onClick={nextPage}>&#10095;</button> : <p />}
    </nav>
  );
}
