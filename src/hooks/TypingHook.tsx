import { useEffect, useRef, useState } from "react";

const TypingHook = (textToType: string, interKeyStrokeDuration: number) => {
  const [currentPosition, setcurrentPosition] = useState(0);
  const currRef = useRef<any>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrentPosition((value) => (value + 1) % textToType.length);
      currRef.current += 1;   
    }, interKeyStrokeDuration);

    return () => {
      clearInterval(intervalId);
      currRef.current = 0;
      setcurrentPosition(0);
    };
  }, [interKeyStrokeDuration]);


  return textToType.substring(0, currentPosition + 1);
};

export default TypingHook;