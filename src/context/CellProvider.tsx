import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState
} from 'react';

export interface ICellContext {
  updateColumn: boolean;
  setUpdateColumn: Dispatch<SetStateAction<boolean>>;
}
export const CellContext = createContext<ICellContext>({
  updateColumn: false,
  setUpdateColumn: () => {}
});

const CellProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [updateColumn, setUpdateColumn] = useState(false);
  return (
    <CellContext.Provider value={{ updateColumn, setUpdateColumn }}>
      {children}
    </CellContext.Provider>
  );
};
export default CellProvider;
