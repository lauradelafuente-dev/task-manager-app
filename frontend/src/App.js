import './styles/App.css';
import Kanban from './components/Kanban';
import { ThemeProvider } from './context/ThemeContext'; // Importa el ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Kanban />
      </div>
    </ThemeProvider>
  );
}

export default App;