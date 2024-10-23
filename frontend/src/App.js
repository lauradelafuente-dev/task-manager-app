import './styles/App.css';
import Kanban from './components/Kanban';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import AddTaskForm from './components/AddTaskForm';  // Asegúrate de importar el componente
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { columnsFromBackend } from './components/KanbanData';

function App() {
  const [columns, setColumns] = useState(columnsFromBackend);  // Inicializa con las columnas

  // Función para agregar una nueva tarea a la columna "To-do"
  const handleAddTask = (taskTitle) => {
    const newTask = {
      id: uuidv4(),
      Task: taskTitle,
      Due_Date: new Date().toLocaleDateString(),  // Fecha de hoy como ejemplo
    };
    
    const newColumns = { ...columns };
    // Añadir la tarea a la primera columna (To-do)
    newColumns[Object.keys(newColumns)[0]].items.push(newTask);
    setColumns(newColumns);  // Actualizar el estado de las columnas
  };

  return (
    <ThemeProvider>
      <div className="App">
        {/* Botón para alternar el tema */}
        <ThemeToggleButton />
        
        {/* Formulario para agregar tareas */}
        <AddTaskForm onAddTask={handleAddTask} />  {/* Pasar la función handleAddTask */}
        
        {/* El tablero Kanban */}
        <Kanban columns={columns} setColumns={setColumns} />
      </div>
    </ThemeProvider>
  );
}

export default App;
