import { useEffect, useState } from 'react';
import getSearch from '../../utils/api/getSearch';
import { useFilmContext } from '../films/useContext';

export default function useGetData() {
  const [input, setInput] = useState(localStorage.getItem('input') || ' ');

  useEffect(() => {
    const inputValue = localStorage.getItem('input') ?? ' ';
    setInput(inputValue);
  }, []);

  return input;
}
