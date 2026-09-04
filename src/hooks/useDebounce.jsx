import { useEffect, useState } from "react";

function useDebounce(value, delay) {

  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);
    console.log(handler);
    return () => clearTimeout(handler);
  }, [value])

  return debounceValue;
}

export default useDebounce;