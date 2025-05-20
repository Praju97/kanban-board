import './App.css';
import Board from './components/Board';
import TaskCard from './components/TaskCard';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Kanban Board</h1>
      <Board />
    </div>
  );
}

export default App;
