import './App.css';
import { useEffect } from 'react';
import CrashButton from './components/buttons/CrashButton';
import Search from './components/Search/Search';
import useGetData from './components/Search/useGetData';
import Films from './components/films/Films';
import fetchSearch from './utils/functions/fetchSearch';
import Pagination from './components/Pagination/Pagination';

export default function App() {
  const storedInput = useGetData();
  const getFetchSearch = fetchSearch();

  useEffect(() => {
    getFetchSearch(storedInput);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <CrashButton />
        <Search />
      </div>
      <Films />
      <Pagination />
    </div>
  );
}
