import { useState } from "react";
import { useThemeContext } from "../context/useContext";

export default function ThemeToggleButton() {
  const { toggleTheme } = useThemeContext();
  const [isChecked, setIsChecked] = useState(true);

  function handleCheckboxChange() {
    setIsChecked((prevState) => !prevState);
  }

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            handleCheckboxChange(), toggleTheme();
          }}
        />
        <span className="slider"></span>
      </label>{" "}
    </div>
  );
}
