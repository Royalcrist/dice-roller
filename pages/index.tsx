// App.tsx
import React, { useState } from "react";
import {
  Input,
  Button,
  Text,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Dice from "@/components/Dice";
import useDiceRoll from "@/hooks/useDiceRoll";
import { AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const [diceCount, setDiceCount] = useState<number>(1);
  const { rolls, rollDice } = useDiceRoll(diceCount);
  const toast = useToast();

  const handleDiceCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value);

    if (count > 99) {
      return toast({
        title: "Too many dice",
        description: "Please enter a number between 1 and 99",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setDiceCount(count);
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 2fr" }}
      templateRows={{ base: "auto 1fr", md: "1fr" }}
      templateAreas={{ base: '"input" "dice"', md: '"input dice"' }}
      alignItems="center"
      height="100vh"
      gap={6}
    >
      <GridItem area="input" padding={12}>
        <VStack spacing={8} align="start" marginY={12}>
          <VStack spacing={4} align="start" width="100%">
            <Text textStyle="title">Roll some dice!</Text>
            <FormControl>
              <FormLabel>Number of dice</FormLabel>
              <Input
                placeholder="Number of dice"
                type="number"
                value={diceCount}
                min={1}
                max={99}
                onChange={handleDiceCountChange}
                width="100%"
              />
            </FormControl>
          </VStack>
          <Button onClick={() => rollDice(diceCount)} width="100%">
            Roll and rock!
          </Button>
        </VStack>
        <VStack spacing={4}>
          <Text>Result</Text>
          <Text textStyle="display">{rolls.reduce((a, b) => a + b, 0)}</Text>
        </VStack>
      </GridItem>
      <GridItem area="dice" padding={12}>
        <Grid templateColumns="repeat(auto-fill, 60px)" gap={6}>
          <AnimatePresence>
            {rolls.map((roll, i) => (
              <Dice key={i} value={roll} />
            ))}
          </AnimatePresence>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default App;
