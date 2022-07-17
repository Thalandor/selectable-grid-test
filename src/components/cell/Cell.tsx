import { useState } from 'react';
import { useCellContext } from '../../hooks/useCellContext';
import { useDoubleClick } from '../../hooks/useDoubleClick';
import styles from './Cell.module.scss';

interface IProps {
  // updateColumn: (color: any, column: number) => void;
  column: number;
}

const Cell: React.FC<IProps> = ({ column }) => {
  // STATE
  const [selected, setSelected] = useState(false);

  // CUSTOM HOOKS
  const { updateColumn, setUpdateColumn } = useCellContext();
  const onClickHandler = useDoubleClick({
    onClickHandler: () => setSelected(!selected),
    onDoubleClickHandler: () => updateColumn('color', column)
  });

  return (
    <div
      className={`${styles.cell} ${selected && styles.selected}`}
      onClick={onClickHandler}
    />
  );
};

export default Cell;
