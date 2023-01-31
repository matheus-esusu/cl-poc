import { useRef } from "react";

function useConstant<T>(constantValue: () => T): T {
  const constantRef = useRef<{ constantValue: T }>();

  if (!constantRef.current) {
    constantRef.current = { constantValue: constantValue() };
  }

  return constantRef.current.constantValue;
}

export default useConstant;
