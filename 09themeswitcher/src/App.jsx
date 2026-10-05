import { useEffect, useState } from "react";

import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

import { ThemeProvider } from "./context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");

    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider
      value={{
        themeMode,
        darkTheme,
        lightTheme,
      }}>
      <div
        className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        gap-8

        bg-gray-100
        dark:bg-black

        transition-colors
        duration-300
        ">
        <ThemeBtn />

        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
