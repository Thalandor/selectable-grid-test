import CellProvider from '../../context/CellProvider';
import Cell from '../cell/Cell';

const Board = () => {
  const elements =
    Number(process.env.REACT_APP_BOARD_ROWS) *
    Number(process.env.REACT_APP_BOARD_COLUMNS);

  const cells = [...Array(elements)].map((_, i) => (
    <Cell key={`cell_${i}`} index={i} />
  ));

  return (
    <CellProvider>
      <div
        style={{
          display: 'grid',
          gap: '5px',
          gridTemplateColumns: `repeat(${Number(
            process.env.REACT_APP_BOARD_COLUMNS
          )}, 50px)`
        }}
      >
        {cells}
      </div>
    </CellProvider>
  );
};

export default Board;
