// Dice.tsx
import React from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { getColor } from "@/design-system/colors/primitives";
import MotionBox from "@/components/MotionBox";

const dotPositions: { [key: number]: [number, number][] } = {
  1: [[2, 2]],
  2: [
    [1, 1],
    [3, 3],
  ],
  3: [
    [1, 1],
    [2, 2],
    [3, 3],
  ],
  4: [
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
  ],
  5: [
    [1, 1],
    [1, 3],
    [2, 2],
    [3, 1],
    [3, 3],
  ],
  6: [
    [1, 1],
    [1, 2],
    [1, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
};

interface DiceProps {
  value: number;
}

export const Dice: React.FC<DiceProps> = ({ value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        boxSize="60px"
        layerStyle="dice"
        position="relative"
        padding={2}
        _before={{
          content: "''",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          layerStyle: "dice",
          filter: "blur(16px)",
        }}
      >
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <GridItem key={i} />
          ))}
        <AnimatePresence>
          {dotPositions[value].map(([x, y], i) => (
            <GridItem
              key={i}
              rowStart={y}
              rowEnd={y}
              colStart={x}
              colEnd={x}
              position="relative"
            >
              <Flex boxSize="100%" alignItems="center" justifyContent="center">
                <MotionBox
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  boxSize="80%"
                  borderRadius="full"
                  backgroundColor={getColor("gray", 100)}
                />
              </Flex>
            </GridItem>
          ))}
        </AnimatePresence>
      </Grid>
    </motion.div>
  );
};

export default Dice;
