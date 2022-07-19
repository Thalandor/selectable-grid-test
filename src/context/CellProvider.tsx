import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState
} from 'react';
import { Actions, Colors } from '../constants/enums';

export interface ICellContext {
  updateColumn: number;
  setUpdateColumn: Dispatch<SetStateAction<number>>;
  updateColor: Colors;
  setUpdateColor: Dispatch<SetStateAction<Colors>>;
  action: Actions;
  setAction: Dispatch<SetStateAction<Actions>>;
}
export const CellContext = createContext<ICellContext>({
  updateColumn: -1,
  setUpdateColumn: () => {},
  updateColor: Colors.UNSELECTED,
  setUpdateColor: () => {},
  action: Actions.NONE,
  setAction: () => {}
});

const CellProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [updateColumn, setUpdateColumn] = useState<number>(-1);
  const [updateColor, setUpdateColor] = useState<Colors>(Colors.UNSELECTED);
  const [action, setAction] = useState<Actions>(Actions.NONE);
  return (
    <CellContext.Provider
      value={{
        updateColumn,
        setUpdateColumn,
        updateColor,
        setUpdateColor,
        action,
        setAction
      }}
    >
      {children}
    </CellContext.Provider>
  );
};
export default CellProvider;
