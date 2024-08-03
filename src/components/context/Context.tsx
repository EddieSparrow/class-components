import { useState, createContext, PropsWithChildren } from "react";
import { Theme, ThemeContextProps } from "./ThemeContextInterface";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
