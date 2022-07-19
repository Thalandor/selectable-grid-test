import { useContext } from 'react';
import { CellContext } from '../context/CellProvider';

export const useCellContext = () => useContext(CellContext);
