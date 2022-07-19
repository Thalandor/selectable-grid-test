import { useCallback, useEffect, useRef, useState } from 'react';
import { Actions, Colors } from '../../context/CellProvider';
import { useBoardContext } from '../../hooks/useBoardContext';
import { useCellContext } from '../../hooks/useCellContext';
import { useDoubleClick } from '../../hooks/useDoubleClick';
import CellBody from './CellBody';

interface IProps {
  index: number;
}

const Cell: React.FC<IProps> = ({ index }) => {
  const timerRef = useRef<number>();
  // STATE
  const [color, setColor] = useState(Colors.UNSELECTED);
  const columnRef = useRef<number>(index % Number(process.env.REACT_APP_WIDTH));

  // CUSTOM HOOKS
  const {
    updateColumn,
    setUpdateColumn,
    updateColor,
    setUpdateColor,
    action,
    setAction
  } = useCellContext();

  const { updateData } = useBoardContext();

  const clickCallback = useCallback(async () => {
    setColor((prevColor) =>
      prevColor === Colors.UNSELECTED ? Colors.SELECTED : Colors.UNSELECTED
    );
    setAction(Actions.NONE);
  }, [setAction]);

  const doubleClickCallback = useCallback(async () => {
    setUpdateColor(color);
    setUpdateColumn(columnRef.current);
    setAction(Actions.DOUBLE_CLICK);
  }, [color, setUpdateColumn, setUpdateColor, setAction]);

  const onClickHandler = useDoubleClick({
    onClickHandler: clickCallback,
    onDoubleClickHandler: doubleClickCallback
  });

  useEffect(() => {
    if (columnRef.current === updateColumn && action === Actions.DOUBLE_CLICK) {
      setColor(updateColor);
    } else if (
      action === Actions.LONG_PRESS_RELEASED &&
      color === Colors.HOVERED
    ) {
      setColor(updateColor);
    }
  }, [updateColor, updateColumn, action, color]);

  useEffect(() => {
    updateData(index, color);
  }, [updateData, color, index]);

  const onMouseEnterHandler = () => {
    if (action === Actions.LONG_PRESS) {
      setColor(Colors.HOVERED);
    }
  };

  const onMouseDownHandler = () => {
    timerRef.current = window.setTimeout(() => {
      setAction(Actions.LONG_PRESS);
      setUpdateColor(color);
    }, 2000);
  };

  const onMouseUpHandler = () => {
    clearTimeout(timerRef.current);
    if (action === Actions.LONG_PRESS) {
      setAction(Actions.LONG_PRESS_RELEASED);
    }
  };

  const onMouseLeaveHandler = () => {
    clearTimeout(timerRef.current);
  };
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
