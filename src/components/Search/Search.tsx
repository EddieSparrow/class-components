import { ChangeEvent, useEffect, useState } from "react";
import { useGetFilmsQuery } from "../../utils/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setInputValue, setPage } from "./searchSlice";

export default function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const { inputValue, page, limit } = useSelector(
    (state: RootState) => state.search,
  );
  const { error, isLoading } = useGetFilmsQuery({
    inputValue: inputValue.trim().replaceAll(" ", "%20"),
    limit,
    page,
  });

  useEffect(() => {
    setInput(inputValue);
    dispatch(setInputValue(input));
  }, [inputValue, input]);

  function handleSubmit() {
    localStorage.setItem("input", inputValue);
    dispatch(setPage(1));
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
