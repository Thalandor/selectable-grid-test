import Square from '../square/Square';

const Grid = () => {
  const rows: JSX.Element[] = [];
  const columns: JSX.Element[] = [];
  for (let column = 0; column < (process.env.REACT_APP_LENGTH || 1); ++column) {
    columns.push(<Square />);
  }
  for (let row = 0; row < (process.env.REACT_APP_HEIGHT || 1); ++row) {
    rows.push(<div style={{ display: 'flex' }}>{columns}</div>);
  }
  return <div>{rows}</div>;
};

export default Grid;
