import { memo } from 'react';
import { Colors } from '../../constants/enums';
import styles from './CellBody.module.scss';

interface IProps {
  color: Colors;
}

const CellBody: React.FC<IProps> = memo(({ color }: IProps) => {
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
