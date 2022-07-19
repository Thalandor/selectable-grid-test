import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';
import useDebounce from '../hooks/useDebounce';
import useRequestBin from '../hooks/useRequestBin';
import { Colors } from './CellProvider';

interface ICellData {
  color: Colors;
}

export interface IBoardContext {
  updateData: (index: number, color: Colors) => void;
}

export const BoardContext = createContext<IBoardContext>({
  updateData: () => {}
});

const BoardProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const elements =
    Number(process.env.REACT_APP_HEIGHT) * Number(process.env.REACT_APP_WIDTH);
  const [data, setData] = useState<ICellData[]>(
    [...Array(elements)].map<ICellData>((_, i) => {
      return { color: Colors.UNSELECTED };
    })
  );
  const { sendData } = useRequestBin();
  const debouncedSendData = useDebounce(sendData);
  useEffect(() => {
    debouncedSendData(data);
  }, [data, debouncedSendData]);
  const updateData = useCallback((index: number, color: Colors) => {
    setData((previousData) => [
      ...previousData.slice(0, index),
      {
        ...previousData[index],
        color
      },
      ...previousData.slice(index + 1)
    ]);
  }, []);
  return (
    <BoardContext.Provider
      value={{
        updateData
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
export default BoardProvider;
