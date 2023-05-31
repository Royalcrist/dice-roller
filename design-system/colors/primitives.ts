type ColorFunction = (lightness: number, alpha?: number) => string;

type CreateHslBaseColorFuction = (
  hue: string | number,
  saturation: number
) => ColorFunction;

const createHslBaseColor: CreateHslBaseColorFuction = (hue, saturation) => {
  return (lightness: number, alpha?: number) => {
    if (alpha) {
      return `hsl(${hue} ${saturation}% ${lightness}% / ${alpha})`;
    }
    return `hsl(${hue} ${saturation} ${lightness})`;
  };
};

const yellow = createHslBaseColor(47, 99);
const red = createHslBaseColor(0, 99);
const blue = createHslBaseColor(215, 99);
const green = createHslBaseColor(140, 99);
const purple = createHslBaseColor(270, 99);
const orange = createHslBaseColor(35, 99);
const obsidian = createHslBaseColor(215, 10);
const gray = createHslBaseColor(0, 0);

const primitives: { [key: string]: ColorFunction } = {
  red,
  yellow,
  blue,
  green,
  purple,
  orange,
  obsidian,
  gray,
};

type GetColorFunction = (
  color: string,
  lightness: number,
  alpha?: number
) => string;

export const getColor: GetColorFunction = (color, lightness, alpha = 1) =>
  primitives[color](lightness, alpha);

export default primitives;
