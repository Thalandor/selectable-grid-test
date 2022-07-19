import { memo, MouseEventHandler } from 'react';
import { Colors } from '../../constants/enums';
import styles from './CellBody.module.scss';

interface IProps {
  color: Colors;
  onClickHandler: MouseEventHandler<HTMLDivElement>;
  onMouseDownHandler: MouseEventHandler<HTMLDivElement>;
  onMouseEnterHandler: MouseEventHandler<HTMLDivElement>;
  onMouseUpHandler: MouseEventHandler<HTMLDivElement>;
  onMouseLeaveHandler: MouseEventHandler<HTMLDivElement>;
}

const CellBody: React.FC<IProps> = memo(
  ({
    color,
    onClickHandler,
    onMouseDownHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onMouseUpHandler
  }: IProps) => {
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
