import CellProvider from '../../context/CellProvider';
import Cell from '../cell/Cell';

const Board = () => {
  const rows: JSX.Element[] = [];
  const columns: JSX.Element[] = [];

  for (let column = 0; column < (process.env.REACT_APP_LENGTH || 1); ++column) {
    columns.push(<Cell column={column} />);
  }
  for (let row = 0; row < (process.env.REACT_APP_HEIGHT || 1); ++row) {
    rows.push(<div style={{ display: 'flex' }}>{columns}</div>);
  }
  return (
    <CellProvider>
      <div>{rows}</div>
    </CellProvider>
  );
};

export default Board;
