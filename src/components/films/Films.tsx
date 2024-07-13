import { Link, useSearchParams } from 'react-router-dom';
import { Movies } from '../../types/FilmContextInterface';
import { useFilmContext } from './useContext';
import { useEffect } from 'react';

export default function Films() {
  const { filmList, setSelectedFilm } = useFilmContext();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const details = searchParams.get('details');
    if (details) {
      const film = filmList.movies?.find((film) => film.id === parseInt(details));
      setSelectedFilm(film || null);
    }
  }, [searchParams, filmList]);

  function handleFilm(film) {
    setSelectedFilm(film);
  }

  return (
    <div className="results">
      {filmList.movie_count === 0 ? (
        <div className="bad-search">nothing found</div>
      ) : filmList.movies?.length !== 0 ? (
        filmList.movies?.map((film: Movies) => (
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
