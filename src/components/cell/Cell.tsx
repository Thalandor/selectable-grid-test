import { useState } from 'react';
import styles from './Cell.module.scss';

const Cell = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`${styles.cell} ${selected && styles.selected}`}
      onClick={() => setSelected(!selected)}
    />
  );
};

export default Cell;
