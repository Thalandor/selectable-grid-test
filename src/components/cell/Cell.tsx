import { useCallback, useEffect, useRef, useState } from 'react';
import { Actions, Colors } from '../../context/CellProvider';
import { useCellContext } from '../../hooks/useCellContext';
import { useDoubleClick } from '../../hooks/useDoubleClick';
import useRequestBin from '../../hooks/useRequestBin';
import CellBody from './CellBody';

interface IProps {
  column: number;
}

const Cell: React.FC<IProps> = ({ column }) => {
  const timerRef = useRef<number>();
  // STATE
  const [color, setColor] = useState(Colors.UNSELECTED);

  // CUSTOM HOOKS
  const { request } = useRequestBin();

  const {
    updateColumn,
    setUpdateColumn,
    updateColor,
    setUpdateColor,
    action,
    setAction
  } = useCellContext();

  const clickCallback = useCallback(async () => {
    await request({ jaja: 'lole' });
    setColor((prevColor) =>
      prevColor === Colors.UNSELECTED ? Colors.SELECTED : Colors.UNSELECTED
    );
    setAction(Actions.NONE);
  }, [setAction, request]);

  const doubleClickCallback = useCallback(async () => {
    await request({ double: 'click' });
    setUpdateColor(color);
    setUpdateColumn(column);
    setAction(Actions.DOUBLE_CLICK);
  }, [color, column, setUpdateColumn, setUpdateColor, setAction, request]);

  const onClickHandler = useDoubleClick({
    onClickHandler: clickCallback,
    onDoubleClickHandler: doubleClickCallback
  });

  useEffect(() => {
    if (column === updateColumn && action === Actions.DOUBLE_CLICK) {
      setColor(updateColor);
    } else if (
      action === Actions.LONG_PRESS_RELEASED &&
      color === Colors.HOVERED
    ) {
      setColor(updateColor);
    }
  }, [updateColor, updateColumn, column, action, color]);

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
