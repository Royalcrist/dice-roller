import { ChakraTheme, extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import components from "./components";
import layerStyles from "./layerStyles";
import textStyles from "./textStyles";
import globalStyles from "./globalStyles";

const fonts: ChakraTheme["fonts"] = {
  body: '"Poppins", sans-serif',
  heading: '"Poppins", sans-serif',
};

console.log(colors);

export const theme = extendTheme({
  styles: {
    global: globalStyles,
  },
  fonts,
  layerStyles,
  semanticTokens: {
    colors,
  },
  textStyles,
  components,
});

export default theme;
