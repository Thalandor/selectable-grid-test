import './App.css';
import Board from './components/board/Board';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Board />
    </div>
  );
}

export default App;
