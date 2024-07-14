export interface Movies {
  medium_cover_image?: string;
  title: string;
  id?: number;
  runtime: number;
  rating: number;
  year: number;
  genres: [];
}

export interface FilmList {
  movie_count?: number;
  movies?: Movies[];
}

export interface FilmContext {
  filmList: FilmList;
  setFilmList: React.Dispatch<React.SetStateAction<FilmList>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  filmsPerPage: number;
  setFilmsPerPage: React.Dispatch<React.SetStateAction<number>>;
  movieCount: number;
  setMovieCount: React.Dispatch<React.SetStateAction<number>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  selectedFilm?: Movies | null;
  setSelectedFilm: React.Dispatch<React.SetStateAction<Movies | null>>;
}
