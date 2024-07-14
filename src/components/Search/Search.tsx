import { ChangeEvent, useEffect } from "react";
import fetchSearch from "../../utils/functions/fetchSearch";
import { useFilmContext } from "../films/useContext";

export default function Search() {
  const { input, setInput, setPage } = useFilmContext();

  const getFetchSearch = fetchSearch();

  useEffect(() => {
    setInput(input);
  }, [input, setInput]);

  async function handleSubmit() {
    localStorage.setItem("input", input.trim());
    const inputValue = input.trim().replaceAll(" ", "%20");
    getFetchSearch(inputValue);
    setInput(input.trim());
    setPage(1);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value.toString();
    setInput(inputValue);
  }

  function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className="search">
      <input
        className="search-input"
        onKeyDown={handleEnterPress}
        value={input}
        onChange={handleInputChange}
      ></input>
      <button className="search-button" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
