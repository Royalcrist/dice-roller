import { getColor } from "./primitives";

const onBackground = {
  _dark: getColor("gray", 80, 0.8),
  default: getColor("obsidian", 10),
};

const secondaryHover = {
  _dark: getColor("obsidian", 20),
  default: getColor("obsidian", 95),
};

const onLight = getColor("gray", 100);

const roles = {
  background: {
    _dark: getColor("obsidian", 10),
    default: onLight,
  },
  onBackground,
  surface: {
    _dark: getColor("obsidian", 20),
    default: getColor("obsidian", 95),
  },
  onSurface: onBackground,
  primary: {
    _dark: getColor("purple", 40),
    default: getColor("purple", 50),
  },
  onPrimary: onLight,
  primaryHover: {
    _dark: getColor("purple", 50),
    default: getColor("purple", 60),
  },
  onPrimaryHover: {
    _dark: onLight,
    default: onLight,
  },
  secondary: "transparent",
  onSecondary: onBackground,
  secondaryHover,
  onSecondaryHover: onBackground,
  tertiary: "transparent",
  onTertiary: onBackground,
  tertiaryHover: secondaryHover,
  onTertiaryHover: onBackground,
  success: {
    _dark: getColor("green", 40),
    default: getColor("green", 50),
  },
  onSuccess: onLight,
  successHover: {
    _dark: getColor("green", 50),
    default: getColor("green", 60),
  },
  onSuccessHover: onLight,
  warning: {
    _dark: getColor("yellow", 40),
    default: getColor("yellow", 50),
  },
  onWarning: onLight,
  error: {
    _dark: getColor("red", 40),
    default: getColor("red", 50),
  },
  onError: onLight,
  errorHover: {
    _dark: getColor("red", 50),
    default: getColor("red", 60),
  },
  onErrorHover: onLight,
  info: {
    _dark: getColor("blue", 40),
    default: getColor("blue", 50),
  },
  onInfo: onLight,
  infoHover: {
    _dark: getColor("blue", 50),
    default: getColor("blue", 60),
  },
  onInfoHover: onLight,
  discovery: {
    _dark: getColor("purple", 40),
    default: getColor("purple", 50),
  },
  onDiscovery: onLight,
  discoveryHover: {
    _dark: getColor("purple", 50),
    default: getColor("purple", 60),
  },
  onDiscoveryHover: onLight,
  fields: {
    _dark: getColor("obsidian", 20),
    default: getColor("gray", 5),
  },
  onFields: onBackground,
  overlay: getColor("gray", 20),
  outline: onBackground,
  shadow: {
    _dark: getColor("gray", 100, 0.05),
    default: getColor("gray", 0, 0.05),
  },
};

export default roles;
