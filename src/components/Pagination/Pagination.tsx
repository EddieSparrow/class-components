import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFilmsQuery } from '../../utils/api/apiSlice';
import { setInputValue, setPage } from '../Search/searchSlice';
import { RootState } from '../../store';

export default function Pagination() {
  const { pageNumber } = useParams<{ pageNumber: string }>();
  const pageCount = [];
  const dispatch = useDispatch();
  const { inputValue, page, limit } = useSelector((state: RootState) => state.search);
  const {
    data: filmList,
    error,
    isLoading,
  } = useGetFilmsQuery({
    inputValue: inputValue.trim().replaceAll(' ', '%20'),
    limit,
    page,
  });

  useEffect(() => {
    dispatch(setInputValue(inputValue));
  }, [page, pageNumber]);

  if (filmList?.data?.movie_count) {
    for (let i = 1; i <= Math.ceil(filmList.data.movie_count / limit); i++) {
      pageCount.push(i);
    }
  }

  function handlePage(pageNumber: number) {
    dispatch(setPage(pageNumber));
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
