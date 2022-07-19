import { useCallback, useEffect, useState } from 'react';
import { Colors } from '../context/CellProvider';
import { useCellContext } from './useCellContext';
import { useDoubleClick } from './useDoubleClick';

interface IUseCell {
  column: number;
}

export const useCell = ({ column }: IUseCell) => {
  // STATE
  const [color, setColor] = useState(Colors.UNSELECTED);
  const { updateColumn, setUpdateColumn, updateColor, setUpdateColor } =
    useCellContext();

  const clickCallback = useCallback(
    () =>
      setColor((prevColor: any) =>
        prevColor === Colors.UNSELECTED ? Colors.SELECTED : Colors.UNSELECTED
      ),
    []
  );
  const doubleClickCallback = useCallback(() => {
    setUpdateColor(color);
    setUpdateColumn(column);
  }, [color, column, setUpdateColumn, setUpdateColor]);
  const onClickHandler: any = useDoubleClick({
    onClickHandler: clickCallback,
    onDoubleClickHandler: doubleClickCallback
  });

  useEffect(() => {
    if (column === updateColumn) {
      setColor(updateColor);
    }
  }, [updateColor, updateColumn, column]);

  return { onClickHandler, color };
};
