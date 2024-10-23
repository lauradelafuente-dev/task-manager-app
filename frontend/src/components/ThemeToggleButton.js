import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // Iconos de sol y luna para los temas

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Obtener el tema actual y la función para cambiarlo

  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />} {/* Cambia el icono según el tema */}
    </button>
  );
};

export default ThemeToggleButton;
