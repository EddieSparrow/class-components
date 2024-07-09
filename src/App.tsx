import "./App.css";
import { ChangeEvent, useEffect, useState } from "react";
import CrashButton from "./components/buttons/CrashButton";
import Search from "./components/Search/Search";
import useGetData from "./components/Search/useGetData";
import fetchSearch from "./utils/functions/fetchSearch";
import Films from "./components/films/Films";

export default function App() {
  const storedInput = useGetData();
  const [input, setInput] = useState(storedInput);

  useEffect(() => {
    fetchSearch(storedInput);
  }, [storedInput]);

  useEffect(() => {
    setInput(input);
  }, [input]);

  async function handleSubmit() {
    console.log("dfgdf");
    localStorage.setItem("input", input.trim());
    const inputValue = input.trim().replaceAll(" ", "%20");
    fetchSearch(inputValue);
    setInput(input.trim());
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value.toString();
    setInput(inputValue);
  }

  return (
    <div className="container">
      <div className="header">
        <CrashButton />
        <Search
          value={input}
          onChange={handleInputChange}
          onClick={handleSubmit}
        />
      </div>
      <Films />
    </div>
  );
}
