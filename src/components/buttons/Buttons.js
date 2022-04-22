import { useState, useEffect } from "react";
import "./buttons.css";

export default function Buttons({ type, content, action, inactive }) {
  const [color, setColor] = useState("");
  const [disabled, setDisabled] = useState('')

  useEffect(() => {
    switch (type) {
      case "primary":
        setColor("primaryButton");
        break;
      case "secondary":
        setColor("secondaryButton");
        break;
      default:
        return;
    }
  }, [type]);

  useEffect( () => {
    if(inactive){
      setDisabled('disabledButton')
    } else {
      return
    }
  }, [inactive])

  return (
    <div onClick={action} className={`button ${color} ${disabled} `}>
      <p>{content}</p>
    </div>
  );
}
