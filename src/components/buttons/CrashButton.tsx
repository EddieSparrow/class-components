import { useState } from "react";

export default function CrashButton() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    const newCounter = counter + 1;
    setCounter(newCounter);
  }

  if (counter === 1) {
    throw new Error("I crashed!");
  }

  return (
    <div>
      <button onClick={handleClick}>Crash</button>
    </div>
  );
}
