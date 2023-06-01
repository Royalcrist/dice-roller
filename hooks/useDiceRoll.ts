// useDiceRoll.ts
import { useState } from "react";

const useDiceRoll = (initialDiceCount: number) => {
  const [rolls, setRolls] = useState<number[]>([]);

  const rollDice = (diceCount: number) => {
    const newRolls: number[] = [];
    for (let i = 0; i < diceCount; i++) {
      newRolls.push(Math.ceil(Math.random() * 6));
    }
    setRolls(newRolls);
  };

  return { rolls, rollDice };
};

export default useDiceRoll;
