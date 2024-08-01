import { ThemeContext } from "./Context";
import { useContext } from "react";
import { ThemeContextProps } from "./ThemeContextInterface";

export function useThemeContext(): ThemeContextProps {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useFilmContext must be used within a FilmsProvider");
  } else {
    return context;
  }
}
