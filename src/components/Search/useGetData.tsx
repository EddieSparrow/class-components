import { useEffect, useState } from "react";

export default function useGetData() {
  const [input, setInput] = useState(localStorage.getItem("input") || " ");

  useEffect(() => {
    const inputValue = localStorage.getItem("input") ?? " ";
    setInput(inputValue);
  }, []);

  return input;
}
