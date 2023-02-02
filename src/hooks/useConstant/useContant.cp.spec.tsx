import { useState, useEffect } from "react";
import useConstant from "./useConstant";

function UseConstantComponentTest(props: { constant: any }) {
  const [count, setCount] = useState<number>(0);
  const constant = useConstant(() => props.constant + count);

  useEffect(() => {
    const timeout = setTimeout(() => setCount((value) => value + 1), 100);
    const clearTimeoutFN = () => clearTimeout(timeout);
    if (count < 5) {
      clearTimeoutFN();
    }
    return () => {
      clearTimeoutFN();
    };
  }, [count]);

  return <span data-testid="constant-span">{constant}</span>;
}

export default UseConstantComponentTest;
