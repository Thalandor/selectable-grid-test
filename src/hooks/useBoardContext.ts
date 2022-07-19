import { useContext } from 'react';
import { BoardContext } from '../context/BoardProvider';

export const useBoardContext = () => useContext(BoardContext);
