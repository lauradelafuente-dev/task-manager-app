import './styles/App.css';
import Kanban from './components/Kanban';
import { ThemeProvider } from './context/ThemeContext'; // Importa el ThemeProvider
import ThemeToggleButton from './components/ThemeToggleButton'; // Importa el botón de cambio de tema

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Botón para alternar entre los temas */}
        <ThemeToggleButton />
        <Kanban />
      </div>
    </ThemeProvider>
  );
}

export default App;
