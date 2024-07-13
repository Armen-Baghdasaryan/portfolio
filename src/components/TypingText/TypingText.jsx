import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed, setIsTyping }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else {
      const cursorTimeout = setTimeout(() => {
        setCursorVisible(false);
        setIsTyping(false);
      }, 500);

      return () => clearTimeout(cursorTimeout);
    }
  }, [index, text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 200);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <p>
      {displayedText} {cursorVisible && <span>{showCursor ? "|" : " "}</span>}
    </p>
  );
};

export default TypingText;
