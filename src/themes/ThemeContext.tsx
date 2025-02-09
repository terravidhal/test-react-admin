import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import {
  defaultLightTheme,
  defaultDarkTheme,
  nanoLightTheme,
  nanoDarkTheme,
  radiantLightTheme,
  radiantDarkTheme,
  houseLightTheme,
  houseDarkTheme,
} from "react-admin";


const themeOptions: Record<string, { light: object; dark: object }> = {
  default: { light: defaultLightTheme, dark: defaultDarkTheme },
  nano: { light: nanoLightTheme, dark: nanoDarkTheme },
  radiant: { light: radiantLightTheme, dark: radiantDarkTheme },
  house: { light: houseLightTheme, dark: houseDarkTheme },
};

interface ThemeContextType {
  theme: { light: object; dark: object };
  setTheme: Dispatch<SetStateAction<{ light: object; dark: object }>>;
  themeOptions: typeof themeOptions;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themeOptions.nano,
  setTheme: () => {},
  themeOptions,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const storedTheme = localStorage.getItem("selectedTheme");
  const initialTheme = storedTheme
    ? themeOptions[storedTheme]
    : themeOptions.default;
  const [theme, setTheme] = useState<{ light: object; dark: object }>(
    initialTheme,
  );

  useEffect(() => {
    const currentThemeKey = Object.keys(themeOptions).find(
      (key) => themeOptions[key] === theme,
    );
    if (currentThemeKey) {
      localStorage.setItem("selectedTheme", currentThemeKey);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeOptions }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
