import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // Iconos de sol y luna para los temas

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Obtener el tema y la función para cambiarlo

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />} {/* Iconos según el tema */}
      Cambiar a {theme === 'light' ? 'Tema Oscuro' : 'Tema Claro'}
    </button>
  );
};

export default ThemeToggleButton;
