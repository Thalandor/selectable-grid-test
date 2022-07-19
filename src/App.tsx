import './App.css';
import Board from './components/board/Board';
import BoardProvider from './context/BoardProvider';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  );
}

export default App;
