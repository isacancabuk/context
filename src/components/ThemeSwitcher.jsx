import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
  console.log("ThemeSwitcher rendered");

  const { state, dispatch } = useContext(AppContext);
  const theme = state.theme.theme;

  const themeHandler = () => {
    dispatch({ type: "SWITCH_THEME" });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="theme-switcher">
      <h3>Theme Switcher</h3>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <button className="theme-button" onClick={themeHandler}>
        Toggle Theme
      </button>
    </div>
  );
}
