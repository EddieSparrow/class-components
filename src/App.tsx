import './App.css';
import CrashButton from './components/buttons/CrashButton';
import Search from './components/Search/Search';
import Films from './components/films/Films';
import Pagination from './components/Pagination/Pagination';
import { useEffect } from 'react';
import { useFilmContext } from './components/films/useContext';
import { useParams } from 'react-router-dom';
import { FilmsProvider } from './components/films/FilmsContext';
import Details from './components/Details/Details';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { store } from './store';
import { Provider } from 'react-redux';

export default function App() {
  const { pageNumber } = useParams<{ pageNumber: string }>();
  const { setPage } = useFilmContext();

  useEffect(() => {
    if (pageNumber) {
      setPage(parseInt(pageNumber));
    }
  }, []);

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <FilmsProvider>
          <div className="container">
            <div className="films">
              <div className="header">
                <CrashButton />
                <Search />
              </div>
              <Films />
              <Pagination />
            </div>
            <Details />
          </div>
        </FilmsProvider>
      </ErrorBoundary>
    </Provider>
  );
}
