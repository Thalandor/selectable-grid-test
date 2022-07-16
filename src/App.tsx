import './App.css';
import Grid from './components/board/Board';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid />
    </div>
  );
}

export default App;
