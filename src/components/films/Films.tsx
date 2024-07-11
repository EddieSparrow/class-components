import { Movies } from '../../types/FilmContextInterface';
import { useFilmContext } from './useContext';

export default function Films() {
  const { filmList } = useFilmContext();

  return (
    <div className="results">
      {filmList.movie_count === 0 ? (
        <div className="bad-search">nothing found</div>
      ) : filmList.movies?.length !== 0 ? (
        filmList.movies?.map((film: Movies) => (
          <div key={film.id} className="film-container">
            <img className="film-poster" src={film.medium_cover_image ?? ''} />
            <p className="film-title">{film.title ?? ''}</p>
          </div>
        ))
      ) : (
        <div className="bad-search">Loading</div>
      )}
    </div>
  );
}
