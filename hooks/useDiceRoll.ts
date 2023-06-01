// useDiceRoll.ts
import { useState } from "react";

const useDiceRoll = (initialDiceCount: number) => {
  const [rolls, setRolls] = useState<number[]>([]);

  const rollDice = (diceCount: number) => {
    try {
      if (diceCount === 0) return;

      if (diceCount > 99) {
        throw new Error("Cannot roll more than 99 dice at a time");
      }

      const newRolls: number[] = [];
      for (let i = 0; i < diceCount; i++) {
        newRolls.push(Math.ceil(Math.random() * 6));
      }
      setRolls(newRolls);
    } catch (error: any) {
      console.error(error);
    }
  };

  return { rolls, rollDice };
};

export default useDiceRoll;
