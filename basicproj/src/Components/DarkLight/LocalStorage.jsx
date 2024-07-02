import { useEffect, useState } from "react";

//cutsom hook
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let curValue;

    try {
      curValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      console.log(error);
      curValue = defaultValue;
    }

    return curValue;
  });

  useEffect(() => {

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
