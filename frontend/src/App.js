import './styles/App.css';
import Kanban from './components/Kanban';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useState } from 'react';
import { columnsFromBackend } from './components/KanbanData';

function App() {
  const [columns, setColumns] = useState(columnsFromBackend);  // Inicializa con las columnas

  return (
    <ThemeProvider>
      <div className="App">
        {/* Botón para alternar el tema */}
        <ThemeToggleButton />
        
        {/* El tablero Kanban */}
        <Kanban columns={columns} setColumns={setColumns} />
      </div>
    </ThemeProvider>
  );
}

export default App;
