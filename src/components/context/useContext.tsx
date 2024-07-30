import { FilmContext } from '../../types/FilmContextInterface';
import { ThemeContext } from './Context';
import { useContext } from 'react';

export function useThemeContext(): FilmContext {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useFilmContext must be used within a FilmsProvider');
  } else {
    return context;
  }
}
