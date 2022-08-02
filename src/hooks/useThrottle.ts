import { useState } from "react";

const useThrottle = <T>(defaultValue: T, timeout: number): [T, (newValue: T) => void] => {
  const [finish, setFinish] = useState(true);
  const [value, setValue] = useState<T>(defaultValue);

  const throttleFunction = (newValue: T) => {
    if (!finish) {
      return;
    }

    setValue(newValue);
    setFinish(false);

    setTimeout(() => setFinish(true), timeout);
  }

  return [value, throttleFunction];
}

export default useThrottle;