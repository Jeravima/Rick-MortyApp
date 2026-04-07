import { useTheme } from "../hooks/useTheme";

export const ThemeToggle = () => {

    const {theme,toggleTheme}= useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 cursor-pointer transition-transform duration-300"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
