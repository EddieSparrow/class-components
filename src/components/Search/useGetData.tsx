import { useEffect, useState } from 'react';
import getSearch from '../../utils/api/getSearch';

export default function useGetData() {
  const [input, setInput] = useState(localStorage.getItem('input') || ' ');

  useEffect(() => {
    const inputValue = localStorage.getItem('input') ?? ' ';
    setInput(inputValue);
    getSearch(inputValue);
  }, [input]);

  return input;
}
