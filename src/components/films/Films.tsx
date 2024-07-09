import { useState, createContext } from "react";

interface Movies {
  medium_cover_image: string;
  title: string;
}

interface FilmList {
  movie_count?: number;
  movies?: Movies[];
}

export default function Films() {
  const [filmList, setFilmList] = useState<FilmList>({});
  const FilmListContext = createContext({ filmList, setFilmList });

  return (
    <FilmListContext>
      <div className="results">
        {filmList.movie_count === 0 ? (
          <div className="bad-search">nothing found</div>
        ) : filmList.movies?.length !== 0 ? (
          filmList.movies?.map((film) => (
            <div className="film-container">
              <img
                className="film-poster"
                src={film.medium_cover_image ?? ""}
              />
              <p className="film-title">{film.title ?? ""}</p>
            </div>
          ))
        ) : (
          <div className="bad-search">Loading</div>
        )}
      </div>
    </FilmListContext>
  );
}
