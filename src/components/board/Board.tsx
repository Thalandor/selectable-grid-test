import Cell from '../cell/Cell';

const Grid = () => {
  const rows: JSX.Element[] = [];
  const columns: JSX.Element[] = [];
  for (let column = 0; column < (process.env.REACT_APP_LENGTH || 1); ++column) {
    columns.push(<Cell />);
  }
  for (let row = 0; row < (process.env.REACT_APP_HEIGHT || 1); ++row) {
    rows.push(<div style={{ display: 'flex' }}>{columns}</div>);
  }
  return <div>{rows}</div>;
};

export default Grid;
