import { ChangeEvent } from "react";

interface SearchProps {
  onClick: () => void;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Search(props: SearchProps) {
  function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      props.onClick();
    }
  }

  return (
    <div className="search">
      <input
        className="search-input"
        onKeyDown={handleEnterPress}
        value={props.value}
        onChange={props.onChange}
      ></input>
      <button className="search-button" onClick={props.onClick}>
        Search
      </button>
    </div>
  );
}
