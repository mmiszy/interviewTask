import { useEffect, useState } from "react";

export const useDebouncedState = <T,>(value: T) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setState(value);
    }, 300);
    return () => clearTimeout(intervalId);
  }, [value]);
  return state;
};
