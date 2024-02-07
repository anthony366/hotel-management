import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextType = {
  darkTheme: boolean | undefined;
  setDarkTheme: Dispatch<SetStateAction<boolean | undefined>>;
};

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => null,
});

export default ThemeContext;
