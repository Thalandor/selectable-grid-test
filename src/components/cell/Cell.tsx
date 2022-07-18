import { memo, useCallback, useEffect, useState } from 'react';
import { Colors } from '../../context/CellProvider';
import { useCellContext } from '../../hooks/useCellContext';
import { useDoubleClick } from '../../hooks/useDoubleClick';
import styles from './Cell.module.scss';

interface IProps {
  column: number;
}

const Cell: React.FC<IProps> = ({ column }) => {
  // STATE
  const [color, setColor] = useState(Colors.UNSELECTED);

  // CUSTOM HOOKS
  const { updateColumn, setUpdateColumn, updateColor, setUpdateColor } =
    useCellContext();

  const clickCallback = useCallback(
    () =>
      setColor((prevColor) =>
        prevColor === Colors.UNSELECTED ? Colors.SELECTED : Colors.UNSELECTED
      ),
    []
  );
  const doubleClickCallback = useCallback(() => {
    setUpdateColor(color);
    setUpdateColumn(column);
  }, [color, column, setUpdateColumn, setUpdateColor]);
  const onClickHandler = useDoubleClick({
    onClickHandler: clickCallback,
    onDoubleClickHandler: doubleClickCallback
  });

  // EFFECTS
  useEffect(() => {
    if (column === updateColumn) {
      setColor(updateColor);
    }
  }, [updateColor, updateColumn, column]);

  return <CellBody color={color} onClickHandler={onClickHandler} />;
};

interface ICellBodyProps {
  color: Colors;
  onClickHandler: (event: any) => void;
}

const CellBody: React.FC<ICellBodyProps> = memo(
  ({ color, onClickHandler }: ICellBodyProps) => {
    return (
      <div
        className={`${styles.cell} ${
          color === Colors.SELECTED && styles.selected
        }`}
        onClick={onClickHandler}
      />
    );
  }
);

export default Cell;
