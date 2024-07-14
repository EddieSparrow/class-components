import { useEffect } from "react";
import { Link } from "react-router-dom";
import FetchSearch from "../../utils/functions/fetchSearch";
import { useFilmContext } from "../films/useContext";
import { useParams } from "react-router-dom";

export default function Pagination() {
  const { page, setPage, filmsPerPage, movieCount, input } = useFilmContext();
  const { pageNumber } = useParams<{ pageNumber: string }>();
  const getFetchSearch = FetchSearch();
  const pageCount = [];

  useEffect(() => {
    getFetchSearch(input);
  }, [page, pageNumber]);

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
          <Link key={pageNumber} to={`/search/${pageNumber}`}>
            <li onClick={() => handlePage(pageNumber)}>{pageNumber}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
