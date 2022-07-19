import { useCell } from './hooks/useCell';
import CellBody from './CellBody';

interface IProps {
  index: number;
}

const Cell: React.FC<IProps> = ({ index }) => {
  const {
    color,
    onClickHandler,
    onMouseDownHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onMouseUpHandler
  } = useCell(index);

  return (
    <div
      onClick={onClickHandler}
      onMouseDown={onMouseDownHandler}
      onMouseEnter={onMouseEnterHandler}
      onMouseUp={onMouseUpHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <CellBody color={color} />
    </div>
  );
};

export default Cell;
