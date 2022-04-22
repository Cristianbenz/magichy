import { useState, useEffect } from "react";
import './notification.css'

export default function Notification({ text, type }) {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    setIsActive(true);
    setTimeout(() => {
        setIsActive(false);
      }, 3000);

    return () => setIsActive(false)
  }, []);

  return (
    <>
      {isActive ? (
        <span
          className={`notification--size notification--position notification--text ${type}`}
          onClick={() => setIsActive(false)}
        >
          {text}
        </span>
      ) : null}
    </>
  );
}
