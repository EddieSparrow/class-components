import { Link, useSearchParams } from 'react-router-dom';
import { Movies } from '../../types/FilmContextInterface';
import { useGetFilmsQuery } from '../../utils/api/apiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { useFilmContext } from './useContext';

export default function Films() {
  const { setSelectedFilm } = useFilmContext();
  const [searchParams] = useSearchParams();
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
    const details = searchParams.get('details');
    if (details) {
      const film = filmList.data.movies?.find((film) => film.id === parseInt(details));
      setSelectedFilm(film!);
    }
  }, [searchParams, filmList]);

  function handleFilm(film: Movies) {
    setSelectedFilm(film);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="results">
      {filmList.data.movie_count === 0 ? (
        <div className="bad-search">nothing found</div>
      ) : filmList.data.movies?.length !== 0 ? (
        filmList.data.movies?.map((film: Movies) => (
          <Link key={film.id} to={`/?frontpage=2&details=${film.id}`}>
            <div key={film.id} className="film-container" onClick={() => handleFilm(film)}>
              <img className="film-poster" src={film.medium_cover_image ?? ''} />
              <p className="film-title">{film.title ?? ''}</p>
            </div>
          </Link>
        ))
      ) : (
        <div className="bad-search">Loading</div>
      )}
    </div>
  );
}
