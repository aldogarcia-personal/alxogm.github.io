import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Aplica la clase dark al body según el estado darkMode
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-light", "dark:bg-gray-dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-light", "dark:bg-gray-dark");
    }
    // Guarda la preferencia en localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="sr-only peer"
        />
        <div className="w-14 h-8 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 transition-colors duration-300">
          <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out transform peer-checked:translate-x-7 flex items-center justify-center">
            <FontAwesomeIcon
              icon={darkMode ? faMoon : faSun}
              className="text-yellow-500 dark:text-yellow-300 transition-colors duration-300"
            />
          </div>
        </div>
      </label>
    </div>
  );
}

export default DarkModeToggle;
