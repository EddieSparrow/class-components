import { FilmContext } from '../../types/FilmContextInterface';
import { FilmListContext } from './FilmsContext';
import { useContext } from 'react';

export function useFilmContext(): FilmContext {
  const context = useContext(FilmListContext);
  if (context === null) {
    throw new Error('useFilmContext must be used within a FilmsProvider');
  } else {
    return context;
  }
}
