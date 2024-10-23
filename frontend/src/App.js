import './styles/App.css';
import Kanban from './components/Kanban';
import { ThemeProvider } from './context/ThemeContext'; // Asegúrate de que ThemeProvider esté correctamente importado
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  return (
    <ThemeProvider> {/* Envuelve toda tu app dentro del ThemeProvider */}
      <div className="App">
        <ThemeToggleButton />
        <Kanban />
      </div>
    </ThemeProvider>
  );
}

export default App;
