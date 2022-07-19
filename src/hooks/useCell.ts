import { useCallback, useEffect, useRef, useState } from 'react';
import { Colors, Actions } from '../constants/enums';
import { useBoardContext } from './useBoardContext';
import { useCellContext } from './useCellContext';
import { useDoubleClick } from './useDoubleClick';

export const useCell = (index: number) => {
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

  const onMouseEnterHandler = useCallback(() => {
    if (action === Actions.LONG_PRESS) {
      setColor(Colors.HOVERED);
    }
  }, [action]);

  const onMouseDownHandler = useCallback(() => {
    timerRef.current = window.setTimeout(() => {
      setAction(Actions.LONG_PRESS);
      setUpdateColor(color);
    }, 2000);
  }, [color, setAction, setUpdateColor]);

  const onMouseUpHandler = useCallback(() => {
    clearTimeout(timerRef.current);
    if (action === Actions.LONG_PRESS) {
      setAction(Actions.LONG_PRESS_RELEASED);
    }
  }, [action, setAction]);

  const onMouseLeaveHandler = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);

  return {
    color,
    onClickHandler,
    onMouseEnterHandler,
    onMouseDownHandler,
    onMouseUpHandler,
    onMouseLeaveHandler
  };
};
