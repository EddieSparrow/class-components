import { useState, createContext, PropsWithChildren } from 'react';
import { FilmContext, FilmList } from '../../types/FilmContextInterface';
import useGetData from '../Search/useGetData';

export const FilmListContext = createContext<FilmContext | null>(null);

export function FilmsProvider({ children }: PropsWithChildren) {
  const storedInput = useGetData();
  const [filmList, setFilmList] = useState<FilmList>({});
  const [filmsPerPage, setFilmsPerPage] = useState(20);
  const [movieCount, setMovieCount] = useState(1);
  const [input, setInput] = useState(storedInput);
  const [page, setPage] = useState(1);
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <FilmListContext.Provider
      value={{
        filmList,
        setFilmList,
        page,
        setPage,
        filmsPerPage,
        setFilmsPerPage,
        movieCount,
        setMovieCount,
        input,
        setInput,
        selectedFilm,
        setSelectedFilm,
      }}
    >
      {children}
    </FilmListContext.Provider>
  );
}
