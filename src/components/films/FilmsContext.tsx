import { useState, createContext, PropsWithChildren } from 'react';
import { FilmContext, FilmList } from '../../types/FilmContextInterface';
import useGetData from '../Search/useGetData';

export const FilmListContext = createContext<FilmContext | null>(null);

export function FilmsProvider({ children }: PropsWithChildren) {
  const storedInput = useGetData();
  const [filmList, setFilmList] = useState<FilmList>({});
  const [page, setPage] = useState(1);
  const [filmsPerPage, setFilmsPerPage] = useState(20);
  const [movieCount, setMovieCount] = useState(1);
  const [input, setInput] = useState(storedInput);

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
      }}
    >
      {children}
    </FilmListContext.Provider>
  );
}
