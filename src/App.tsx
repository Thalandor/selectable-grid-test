import styles from './App.module.scss';
import Board from './components/board/Board';
import BoardProvider from './context/BoardProvider';

function App() {
  return (
    <div className={styles.app}>
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  );
}

export default App;
