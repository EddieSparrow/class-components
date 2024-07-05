import "./App.css";
import { ChangeEvent, Component } from "react";
import getPopular from "./api/getPopular";
import getSearch from "./api/getSearch";

class App extends Component {
  state = {
    input: localStorage.getItem("input") || "",
    filmList: [],
  };

  componentDidMount() {
    if (localStorage.getItem("input")) {
      const { input } = this.state;
      this.fetchSearch(input);
    } else {
      this.fetchPopular();
    }
  }

  handleSubmit = async () => {
    const { input } = this.state;
    localStorage.setItem("input", input.trim());
    const inputValue = input.trim().replaceAll(" ", "%20");
    this.fetchSearch(inputValue);
    this.setState({ input: input.trim() });
  };

  handleEnterPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };

  fetchSearch = async (inputValue) => {
    try {
      const result = await getSearch(inputValue);
      console.log(result);
      const filmList = result.data.mainSearch.edges;
      this.setState({ filmList: filmList });
    } catch (e) {
      console.log("ERROR: ", e);
    }
  };

  fetchPopular = async () => {
    try {
      const result = await getPopular();
      console.log(result);
      const filmList = result.data.movies.edges;
      console.log("filmList Popular ", filmList);
      this.setState({ filmList: filmList });
    } catch (e) {
      console.log("ERROR: ", e);
    }
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toString();
    this.setState({ input: inputValue });
  };

  render() {
    const { input, filmList } = this.state;
    return (
      <>
        <div className="container">
          <div className="search">
            <input
              className="search-input"
              onKeyDown={this.handleEnterPress}
              typeof="search-input"
              value={input}
              onChange={this.handleInputChange}
            ></input>
            <button className="search-button" onClick={this.handleSubmit}>
              Search
            </button>
          </div>
          <div className="results">
            {filmList.length !== 0 &&
              filmList.map((film) => (
                <div className="film-container">
                  <img
                    className="film-poster"
                    src={
                      film?.node?.entity?.primaryImage?.url ??
                      film?.node?.primaryImage?.url ??
                      ""
                    }
                  />
                  <p className="film-title">
                    {film?.node?.entity?.titleText?.text ??
                      film?.node?.titleText?.text ??
                      ""}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
