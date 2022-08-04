import { useEffect, useState } from "react";


const useTyping = (text: string, timeout: number) => {
  const [actualText, setActualText] = useState('');

  useEffect(() => {
    if (actualText.length <  text.length) {

      setTimeout(() => {
        setActualText(text.slice(0, actualText.length) + '|');
      }, timeout);

    } else {

      setActualText(text);

    }
  }, [actualText]);

  return actualText;
}

export default useTyping;