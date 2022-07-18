import { useEffect, useState } from 'react';
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
  const onClickHandler = useDoubleClick({
    onClickHandler: () =>
      setColor((prevColor) =>
        prevColor === Colors.UNSELECTED ? Colors.SELECTED : Colors.UNSELECTED
      ),
    onDoubleClickHandler: () => {
      setUpdateColor(color);
      setUpdateColumn(column);
    }
  });

  useEffect(() => {
    if (column === updateColumn) {
      setColor(updateColor);
    }
  }, [updateColor, updateColumn, column]);

  return (
    <div
      className={`${styles.cell} ${
        color === Colors.SELECTED && styles.selected
      }`}
      onClick={onClickHandler}
    />
  );
};

export default Cell;
