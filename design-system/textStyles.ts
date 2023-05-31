import { ChakraTheme } from "@chakra-ui/react";

const textStylesGeneral = {
  fontWeight: "semibold",
  lineHeight: "shorter",
  color: "onBackground",
};

const textStyles: ChakraTheme["textStyles"] = {
  h1: {
    fontSize: ["2xl", "3xl", "4xl"],
    ...textStylesGeneral,
  },
  h2: {
    fontSize: ["xl", "2xl", "3xl"],
    ...textStylesGeneral,
  },
  h3: {
    fontSize: ["lg", "xl", "2xl"],
    ...textStylesGeneral,
  },
  h4: {
    fontSize: ["md", "lg", "xl"],
    ...textStylesGeneral,
  },
  h5: {
    fontSize: ["sm", "md", "lg"],
    ...textStylesGeneral,
  },
  h6: {
    fontSize: ["xs", "sm", "md"],
    ...textStylesGeneral,
  },
};

export default textStyles;
