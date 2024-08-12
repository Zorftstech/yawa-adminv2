import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  100: '#FFFFFF',
  200: '#FFFFFF',
  300: '#FFFFFF',
  400: '#FFFFFF',
  500: '#292727',
  600: '#292727',
  700: '#FFFFFF',
  800: '#212B36',
  900: '#161C24',
};

export const primary = {
  lighter: '#03BDE9',
  light: '#03BDE9',
  main: '#03BDE9',
  dark: '#03BDE9',
  darker: '#03BDE9',
  contrastText: '#03BDE9',
};

export const secondary = {
  lighter: '#FFFFFF',
  light: '#FFFFF',
  main: '#FFFFFF',
  dark: '#FFFFFF',
  darker: '#FFFFFF',
  contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#03BDE9',
  light: '#03BDE9',
  main: '#03BDE9',
  dark: '#03BDE9',
  darker: '#03BDE9',
  contrastText: '#03BDE9',
};

export const success = {
  lighter: '#03BDE9',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

export const warning = {
  lighter: '#204D88',
  light: '#204D88',
  main: '#204D88',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette() {
  return {
    ...base,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: grey[100],
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };
}
