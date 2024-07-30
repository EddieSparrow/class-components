import "./App.css";
import CrashButton from "./components/buttons/CrashButton";
import Search from "./components/Search/Search";
import Films from "./components/films/Films";
import Pagination from "./components/Pagination/Pagination";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilmsProvider } from "./components/films/FilmsContext";
import Details from "./components/Details/Details";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { useDispatch } from "react-redux";
import { setPage } from "./components/Search/searchSlice";

export default function App() {
  const { pageNumber } = useParams<{ pageNumber: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pageNumber) {
      const newPage = parseInt(pageNumber);
      dispatch(setPage(newPage));
    }
  }, []);

  return (
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
  );
}
