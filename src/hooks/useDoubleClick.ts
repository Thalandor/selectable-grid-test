import { useCallback, useRef } from 'react';

interface IProps {
  onClickHandler: (e: any) => void;
  onDoubleClickHandler: (e: any) => void;
}

export const useDoubleClick = ({
  onClickHandler,
  onDoubleClickHandler
}: IProps) => {
  const clickTimeout = useRef<any>();

  const clearClickTimeout = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    }
  };

  return useCallback(
    (event: any) => {
      clearClickTimeout();
      if (onClickHandler && event.detail === 1) {
        clickTimeout.current = window.setTimeout(() => {
          onClickHandler(event);
        }, 200);
      }
      if (event.detail % 2 === 0) {
        onDoubleClickHandler(event);
      }
    },
    [onClickHandler, onDoubleClickHandler]
  );
};
