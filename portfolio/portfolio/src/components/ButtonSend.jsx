import { useState } from "react";

export const ButtonSend = () => {
  const [isPaying, setIsPaying] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleClick = () => {
    setIsPaying(true);

    setTimeout(() => {
      setIsPaying(false);
      setIsPaid(true);
      setTimeout(() => {
        //setIsPaid(false);
      }, 2000);
    }, 2000);
  };

  return (
    <button className="send-button" type="submit" disabled={isPaying || isPaid} onClick={handleClick}>
      <span className="rail"></span>
      <span className="icon"></span>
      <span className="text">
        {isPaying ? "Processing" : isPaid ? "Delivered" : "Send"}
      </span>
    </button>
  );
};
