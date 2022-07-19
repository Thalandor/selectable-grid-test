import { useCallback, useRef } from 'react';

const useDebounce = (callback: Function) => {
  const timeoutRef = useRef<number>();

  return useCallback(
    (...args: any) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(async () => {
        await callback(args);
      }, 2000);
    },
    [callback]
  );
};

export default useDebounce;
