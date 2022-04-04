import { useEffect } from "react";

const useDebounce = (callback: () => void, dependencies: unknown[], milliseconds = 1000): void => {
  useEffect(() => {
    const timer = setTimeout(callback, milliseconds);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

export default useDebounce;
