import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedFilm } from './selectedFilmSlice';

export default function Details() {
  const { selectedFilm } = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!selectedFilm) {
    return null;
  }

  function handleClickClose() {
    dispatch(setSelectedFilm(null));
    navigate('/');
  }

  return (
    <>
      <div className="blur" onClick={() => handleClickClose()} />
      <div className="container__details">
        <button className="container__details-close" onClick={() => handleClickClose()}>
          <hr className="container__details-close-1"></hr>
          <hr className="container__details-close-2"></hr>
        </button>
        <img className="container__details-poster" src={selectedFilm.medium_cover_image}></img>
        <div className="container__details-title">{selectedFilm.title}</div>
        <div className="container__details-genres">Runtime: {selectedFilm.runtime} minutes</div>
        <div className="container__details-genres">Rating: {selectedFilm.rating}</div>
        <div className="container__details-genres">Year: {selectedFilm.year}</div>
        <div className="container__details-genres">
          <p>Genre:</p>
          {selectedFilm.genres.map((genre) => (
            <div className="container__details-genres">{genre}</div>
          ))}
        </div>
      </div>
    </>
  );
}
