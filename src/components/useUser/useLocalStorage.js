import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (event) => {
    try {
      setStoredValue(event.target.value);
      window.localStorage.setItem(key, JSON.stringify(event.target.value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
