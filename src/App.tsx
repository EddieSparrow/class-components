import './App.css';
import { ChangeEvent, Component } from 'react';
import getPopular from './api/getPopular';
import getSearch from './api/getSearch';
import CrashButton from './components/CrashButton';
import ErrorBoundary from './components/ErrorBoundary';

interface Movies {
  medium_cover_image: string;
  title: string;
}

interface State {
  input: string;
  filmList: {
    movie_count?: number;
    movies?: Movies[];
  };
}

class App extends Component {
  state: State = {
    input: localStorage.getItem('input') || '',
    filmList: {},
  };

  componentDidMount() {
    if (localStorage.getItem('input')) {
      const { input } = this.state;
      this.fetchSearch(input);
    } else {
      this.fetchPopular();
    }
  }

  handleSubmit = async () => {
    const { input } = this.state;
    localStorage.setItem('input', input.trim());
    const inputValue = input.trim().replaceAll(' ', '%20');
    this.fetchSearch(inputValue);
    this.setState({ input: input.trim() });
  };

  handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  };

  fetchSearch = async (inputValue: string) => {
    try {
      const result = await getSearch(inputValue);
      const filmList = result.data;
      this.setState({ filmList: filmList });
    } catch (e) {
      console.log('ERROR: ', e);
    }
  };

  fetchPopular = async () => {
    try {
      const result = await getPopular();
      const filmList = result.data;
      this.setState({ filmList: filmList });
    } catch (e) {
      console.log('ERROR: ', e);
    }
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toString();
    this.setState({ input: inputValue });
  };

  render() {
    const { input, filmList } = this.state;

    return (
      <ErrorBoundary>
        <div className="container">
          <div className="header">
            <CrashButton />
            <div className="search">
              <input className="search-input" onKeyDown={this.handleEnterPress} typeof="search-input" value={input} onChange={this.handleInputChange}></input>
              <button className="search-button" onClick={this.handleSubmit}>
                Search
              </button>
            </div>
          </div>
          <div className="results">
            {filmList.movie_count === 0 ? (
              <div className="bad-search">nothing found</div>
            ) : filmList.movies?.length !== 0 ? (
              filmList.movies?.map((film) => (
                <div className="film-container">
                  <img className="film-poster" src={film.medium_cover_image ?? ''} />
                  <p className="film-title">{film.title ?? ''}</p>
                </div>
              ))
            ) : (
              <div className="bad-search">Loading</div>
            )}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
