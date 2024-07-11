import getSearch from '../api/getSearch';
import { useFilmContext } from '../../components/films/useContext';

export default function FetchSearch() {
  const { setFilmList, filmsPerPage, page, setMovieCount } = useFilmContext();

  const getFetchSearch = async (inputValue: string) => {
    try {
      const result = await getSearch(inputValue, filmsPerPage, page);
      const filmList = result.data;
      setFilmList(filmList);
      setMovieCount(filmList.movie_count);
    } catch (e) {
      console.log('ERROR: ', e);
    }
  };

  return getFetchSearch;
}
