import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState
} from 'react';

export enum Colors {
  SELECTED,
  UNSELECTED,
  HOVERED
}

export interface ICellContext {
  updateColumn: number;
  setUpdateColumn: Dispatch<SetStateAction<number>>;
  updateColor: Colors;
  setUpdateColor: Dispatch<SetStateAction<Colors>>;
}
export const CellContext = createContext<ICellContext>({
  updateColumn: -1,
  setUpdateColumn: () => {},
  updateColor: Colors.UNSELECTED,
  setUpdateColor: () => {}
});

const CellProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [updateColumn, setUpdateColumn] = useState<number>(-1);
  const [updateColor, setUpdateColor] = useState<Colors>(Colors.UNSELECTED);
  return (
    <CellContext.Provider
      value={{ updateColumn, setUpdateColumn, updateColor, setUpdateColor }}
    >
      {children}
    </CellContext.Provider>
  );
};
export default CellProvider;
