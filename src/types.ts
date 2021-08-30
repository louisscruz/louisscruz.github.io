export interface Breakpoints {
  'extra-small': string;
  small: string;
  medium: string;
  large: string;
  'extra-large': string;
}

export interface ColorEntry {
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface Colors {
  black: string;
  blue: ColorEntry;
  green: ColorEntry;
  grey: ColorEntry;
  white: string;
}

export interface SpacingEntry {
  leftAndRight: string;
  topAndBottom: string;
}

export interface Spacing {
  single: SpacingEntry;
  double: SpacingEntry;
  triple: SpacingEntry;
  quadruple: SpacingEntry;
}

export interface HeaderItemTheme {
  spacing: keyof Spacing;
}

export interface Renderables {
  headerItem: HeaderItemTheme;
}

export interface Theme {
  borderRadii: string;
  breakpoints: Breakpoints;
  colors: Colors;
  fontFamily: string;
  primaryHue: keyof Colors;
  renderables: Renderables;
  secondaryHue: keyof Colors;
  spacing: Spacing;
}
