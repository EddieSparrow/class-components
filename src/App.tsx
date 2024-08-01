import './App.css';
import CrashButton from './components/buttons/CrashButton';
import Search from './components/Search/Search';
import Films from './components/films/Films';
import Pagination from './components/Pagination/Pagination';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from './components/Details/Details';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { useDispatch } from 'react-redux';
import { setInputValue, setPage } from './components/Search/searchSlice';
import useGetData from './components/Search/useGetData';
import ThemeToggleButton from './components/buttons/ToggleButton';
import { ThemeContext } from './components/context/Context';
import ItemCounter from './components/itemCounter/ItemCounter';

export default function App() {
  const { theme } = useContext(ThemeContext);
  const { pageNumber } = useParams<{ pageNumber: string }>();
  const storedInput = useGetData();
  const dispatch = useDispatch();
  dispatch(setInputValue(storedInput));

  useEffect(() => {
    if (pageNumber) {
      const newPage = parseInt(pageNumber);
      dispatch(setPage(newPage));
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className={theme === 'light' ? 'container' : 'container-dark'}>
        <div className="films">
          <div className="header">
            <CrashButton />
            <ThemeToggleButton />
            <Search />
          </div>
          <Films />
          <Pagination />
        </div>
        <Details />
        <ItemCounter />
      </div>
    </ErrorBoundary>
  );
}
