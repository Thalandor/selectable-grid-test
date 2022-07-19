import { memo } from 'react';
import { Colors } from '../../context/CellProvider';
import styles from './CellBody.module.scss';

interface ICellBodyProps {
  color: Colors;
}

const CellBody: React.FC<ICellBodyProps> = memo(({ color }: ICellBodyProps) => {
  return (
    <div
      className={`${styles.cell} ${
        (color === Colors.SELECTED && styles.selected) ||
        (color === Colors.HOVERED && styles.hovered)
      }`}
    />
  );
});

export default CellBody;
