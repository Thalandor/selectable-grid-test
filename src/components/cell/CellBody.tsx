import { memo } from 'react';
import { Colors } from '../../constants/enums';
import styles from './CellBody.module.scss';

interface ICellBodyProps {
  color: Colors;
  onClickHandler: any;
  onMouseDownHandler: any;
  onMouseEnterHandler: any;
  onMouseUpHandler: any;
  onMouseLeaveHandler: any;
}

const CellBody: React.FC<ICellBodyProps> = memo(
  ({
    color,
    onClickHandler,
    onMouseDownHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onMouseUpHandler
  }: ICellBodyProps) => {
    return (
      <div
        className={`${styles.cell} ${
          (color === Colors.SELECTED && styles.selected) ||
          (color === Colors.HOVERED && styles.hovered)
        }`}
        onClick={onClickHandler}
        onMouseDown={onMouseDownHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseUp={onMouseUpHandler}
        onMouseLeave={onMouseLeaveHandler}
      />
    );
  }
);

export default CellBody;
