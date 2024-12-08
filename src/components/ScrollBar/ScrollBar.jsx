import { useEffect, useState } from "react";
import "./ScrollBar.scss";

export const ScrollBar = ({ contentRef }) => {
  const [thumbPosition, setThumbPosition] = useState(0);
  const thumbHeight = 121;
  const handleScroll = () => {
    if (contentRef.current) {
      const scrollTop = contentRef.current.scrollTop;
      const scrollHeight = contentRef.current.scrollHeight;
      const clientHeight = contentRef.current.clientHeight;

      const scrollPercent = scrollTop / (scrollHeight - clientHeight);
      const maxThumbPosition = clientHeight - thumbHeight;
      const newThumbPosition = scrollPercent * maxThumbPosition;
      setThumbPosition(newThumbPosition);
    }
  };
  useEffect(() => {}, []);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (content) {
        content.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div className="scrollbar">
      <div
        className="scrollbar__thumb"
        style={{ top: `${thumbPosition}px` }}
      ></div>
    </div>
  );
};
