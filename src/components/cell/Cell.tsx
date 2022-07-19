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
    <CellBody
      color={color}
      onClickHandler={onClickHandler}
      onMouseDownHandler={onMouseDownHandler}
      onMouseEnterHandler={onMouseEnterHandler}
      onMouseUpHandler={onMouseUpHandler}
      onMouseLeaveHandler={onMouseLeaveHandler}
    />
  );
};

export default Cell;
