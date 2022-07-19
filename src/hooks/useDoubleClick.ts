import { useCallback, useRef } from 'react';

interface IProps {
  onClickHandler: (e: React.UIEvent<HTMLElement>) => void;
  onDoubleClickHandler: (e: React.UIEvent<HTMLElement>) => void;
}

export const useDoubleClick = ({
  onClickHandler,
  onDoubleClickHandler
}: IProps) => {
  const clickTimeout = useRef<number | null>(null);

  const clearClickTimeout = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout.current || undefined);
      clickTimeout.current = null;
    }
  };

  return useCallback(
    (event: React.UIEvent<HTMLElement>) => {
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
