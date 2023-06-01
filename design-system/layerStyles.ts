import { ChakraTheme } from "@chakra-ui/react";
import { getColor } from "./colors/primitives";

const layerStyles: ChakraTheme["layerStyles"] = {
  dice: {
    bg: `linear-gradient(180deg, ${getColor("pink", 55)}, ${getColor(
      "purple",
      45
    )})`,
    boxShadow: `inset 0px 0px 32px 8px ${getColor("pink", 90, 0.25)},
      inset 0px 0px 0 4px ${getColor("purple", 90, 0.25)}`,
    borderRadius: "xl",
  },
};

export default layerStyles;
