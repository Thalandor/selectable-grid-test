import CellProvider from '../../context/CellProvider';
import Cell from '../cell/Cell';

const Board = () => {
  const elements =
    Number(process.env.REACT_APP_HEIGHT) * Number(process.env.REACT_APP_WIDTH);

  const cells = [...Array(elements)].map((_, i) => (
    <Cell key={`cell_${i}`} index={i} />
  ));

  return (
    <CellProvider>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Number(
            process.env.REACT_APP_WIDTH
          )}, 50px)`
        }}
      >
        {cells}
      </div>
    </CellProvider>
  );
};

export default Board;
