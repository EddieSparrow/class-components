import { Link, useSearchParams } from 'react-router-dom';
import { Movies } from '../../types/FilmContextInterface';
import { useGetFilmsQuery } from '../../utils/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { setSelectedFilm } from '../Details/selectedFilmSlice';
import { setCount, setItems } from '../itemCounter/itemCounterSlice';

export default function Films() {
  const [searchParams] = useSearchParams();
  const { inputValue, page, limit } = useSelector((state: RootState) => state.search);
  const { items, count } = useSelector((state: RootState) => state.itemCounter);
  const dispatch = useDispatch();

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
      dispatch(setSelectedFilm(film));
    }
  }, [searchParams, filmList]);

  function handleFilm(film: Movies) {
    dispatch(setSelectedFilm(film));
  }

  function handleCheckbox(newItem: string, event: EventTarget) {
    const isChecked = event.checked;
    if (isChecked) {
      dispatch(setItems({ ...items, [newItem.id]: newItem }));
      dispatch(setCount(count + 1));
    } else {
      const newItems = { ...items };
      delete newItems[newItem.id];
      dispatch(setItems(newItems));
    }
    console.log([...items]);
    console.log(count);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="results">
      {filmList.data.movie_count === 0 ? (
        <div className="bad-search">nothing found</div>
      ) : filmList.data.movies?.length !== 0 ? (
        filmList.data.movies?.map((film: Movies) => (
          <div>
            <input className="film-checkbox" type="checkbox" onChange={(event) => handleCheckbox(film, event.target)} checked={items.hasOwnProperty(film.id)} />
            <Link key={film.id} to={`/?frontpage=2&details=${film.id}`}>
              <div key={film.id} className="film-container" onClick={() => handleFilm(film)}>
                <img className="film-poster" src={film.medium_cover_image ?? ''} />
                <p className="film-title">{film.title ?? ''}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="bad-search">Loading</div>
      )}
    </div>
  );
}
