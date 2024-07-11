import { useEffect } from 'react';
import FetchSearch from '../../utils/functions/fetchSearch';
import { useFilmContext } from '../films/useContext';

export default function Pagination() {
  const { page, setPage, filmsPerPage, movieCount, input } = useFilmContext();
  const getFetchSearch = FetchSearch();
  const pageCount = [];

  useEffect(() => {
    getFetchSearch(input);
  }, [page]);

  for (let i = 1; i <= Math.ceil(movieCount / filmsPerPage); i++) {
    pageCount.push(i);
  }

  function handlePage(pageNumber: number) {
    setPage(pageNumber);
  }

  return (
    <>
      <ul className="pagination">
        {pageCount.map((pageNumber) => (
          <li key={pageNumber} onClick={() => handlePage(pageNumber)}>
            {pageNumber}
          </li>
        ))}
      </ul>
    </>
  );
}
