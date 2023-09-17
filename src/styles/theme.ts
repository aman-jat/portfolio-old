import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      galaxyFold: 0,
      mobile: 281,
      xs: 420,
      sm: 600, // sm means 600-900 (pad)
      md: 900, // md means 900-1200 (pad - bigger size)
      lg: 1280, // lg means laptop
      xl: 1536, // xl means desktop like my samsung desktop
      xxl: 1920, // xxl means desktop larger pixels
      xxxl: 2560, // xxxl means bigger than 2560
    },
  },
});

export const spacing = {
  layout: 40 / 8,
  components: 32 / 8,
};

const colorTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1B4175',
      light: '#2f72d0',
      dark: '#183968',
    },
    secondary: {
      main: '#fff',
      light: '#fff',
      dark: '#fff',
    },
    common: {
      black: '#111927',
      white: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#262626',
      disabled: '#666666',
    },
    background: {
      // default: '#00000030',
      // paper: '#F6F8FB',
    },
    action: {
      // active: '#3333338A',
      // selected: '#6C737F14',
      // disabled: '#6366F142',
      // disabledBackground: '#6366F11F',
      // focus: '#6366F11F',
    },
    divider: '#0000001F',
    info: {
      main: '#06AED4',
      dark: '#0E7090',
      light: '#CFF9FE',
    },
    error: {
      main: '#F04438',
      dark: '#B42318',
      light: '#FEE4E2',
    },
    success: {
      main: '#15B79E',
      dark: '#15B79E',
      light: '#CCFBEF',
    },
    warning: {
      main: '#F79009',
      dark: '#B54708',
      light: '#FEF0C7',
    },
  },
});

const theme = createTheme(colorTheme, {
  typography: {
    menuTitle: {},
    root: {},
    h1: {
      textTransform: 'uppercase',
      fontWeight: 300,
      fontFamily: 'Lato',
      fontSize: 16, // Default font size
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: 40,
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: 40,
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: 40,
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: 80,
      },
      [defaultTheme.breakpoints.up('md')]: {
        // tablet
        fontSize: 80,
      },
      [defaultTheme.breakpoints.up('lg')]: {
        // laptop
        fontSize: 60,
      },
      [defaultTheme.breakpoints.up('xl')]: {
        // laptop (bigger)
        fontSize: 70,
      },
      [defaultTheme.breakpoints.up('xxl')]: {
        // desktop - samsung
        fontSize: 100,
      },
    },
    h2: {
      textTransform: 'uppercase',
      fontFamily: 'Lato',
      fontWeight: 300,
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: 24,
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: 26,
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: '40px',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: 30,
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: 40,
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: 28,
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: 42,
      },
      [defaultTheme.breakpoints.up('xxl')]: {
        fontSize: 50,
      },
    },
    h3: {
      textTransform: 'uppercase',
      fontFamily: 'Lato',
      fontWeight: 300,
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: 16,
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: 20,
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: 25,
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: 25,
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: 30,
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: 22,
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: 30,
      },
      [defaultTheme.breakpoints.up('xxl')]: {
        fontSize: 40,
      },
    },
    h4: {
      textTransform: 'uppercase',
      fontWeight: 400,
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontWeight: 500,
        fontSize: 8,
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontWeight: 500,
        fontSize: 12,
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontWeight: 500,
        fontSize: '18px',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '22px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '24px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '28px',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '30px',
      },
      letterSpacing: '1px',
    },
    h5: {
      textTransform: 'uppercase',
      fontFamily: 'Lato',
      letterSpacing: '1px',
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: 16,
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: 17,
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: 17,
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: 22,
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: 30,
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: 20,
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: 26,
      },
      [defaultTheme.breakpoints.up('xxl')]: {
        fontSize: 36,
      },
    },
    h6: {
      textTransform: 'uppercase',
      fontFamily: 'Lato',
      letterSpacing: '1px',
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: 12,
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: 13,
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: 12,
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: 15,
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: 22,
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: 16,
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
      [defaultTheme.breakpoints.up('xxl')]: {
        fontSize: 24,
      },
    },
    subtitle1: {
      fontWeight: 600,

      fontSize: '16px', // Default font size
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: '14px',
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: '16px',
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: '17px',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '18px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '18px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '28px',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '32px',
      },
      color: grey[400],
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '16px', // Default font size
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: '13px',
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: '16px',
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: '16px',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '16px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '17px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '18px',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '20px',
      },
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 8, // Default font size
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: 10,
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: 10,
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: 10,
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: 10,
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: 10,
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: 10,
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: 10,
      },
    },
    body1: {
      fontSize: 15,
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: 12,
        fontWeight: 400,
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: 14,
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: 14,
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: 16,
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: 22,
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: 16,
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
      [defaultTheme.breakpoints.up('xxl')]: {
        fontSize: 24,
      },
      fontWeight: 300,
      fontFamily: 'Roboto Slab',
    },
    body2: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '143%',
      letterSpacing: '0.15px',
    },
    caption: {
      fontWeight: 500,

      lineHeight: 1.3,
      letterSpacing: 0,
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontWeight: 500,
        fontSize: 10,
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontWeight: 500,
        fontSize: 14,
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontWeight: 500,
        fontSize: 14,
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: 14,
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: 14,
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: 18,
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: 20,
      },
    },
    overline: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '26%',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        // variant: 'filled',
        InputLabelProps: { shrink: true },
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: '#9FA4AC42', // Change this to your desired background color
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          background: '#0000000A',
          borderRadius: 5,
          padding: 8,
          margin: 0,
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          backgroundColor: colorTheme.palette.secondary.light,
          padding: 4,
          transform: 'scale(1.6)',
          borderRadius: '50%',
          '&.Mui-active': {
            color: colorTheme.palette.primary.main,
            backgroundColor: colorTheme.palette.primary.light,
          },
          '&.Mui-completed': {
            color: colorTheme.palette.primary.main,
            backgroundColor: colorTheme.palette.primary.light,
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          '&.Mui-active': {
            color: colorTheme.palette.success.main,
            fontWeight: 700,
          },
          '&.Mui-completed': {
            color: colorTheme.palette.success.main,
            fontWeight: 700,
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          gap: 8,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#FF0000',
          '&$error': {
            color: '#FF0000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#FFFFFF',
          boxShadow: '0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px rgba(0, 0, 0, 0.04)',
          borderRadius: '20px',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          borderTop: '1px solid #F2F4F7',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: '600',
          fontSize: '16px', // Default font size
          [defaultTheme.breakpoints.up('sm')]: {
            fontSize: '16px',
          },
          [defaultTheme.breakpoints.up('md')]: {
            fontSize: '18px',
          },
          [defaultTheme.breakpoints.up('lg')]: {
            fontSize: '18px',
          },
          [defaultTheme.breakpoints.up('xl')]: {
            fontSize: '20px',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#000000',
          maxWidth: '440px',
          fontSize: '0.9rem',
          '& .MuiTooltip-arrow': {
            color: '#000000',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          background: 'rgb(243, 244, 246, 0.2)',
          boxShadow: '0px 9px 46px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          backgroundColor: 'rgb(253,237,237)',
        },
        standardSuccess: {
          backgroundColor: colorTheme.palette.success.light,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgb(47, 55, 70)',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          span: {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
          },
        },
      },
    },
  },
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.themes = {
  defaultTheme,
  theme,
};
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
    mobile: true;
    galaxyFold: true;
  }

  interface TypographyVariants {
    menuTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    menuTitle?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    menuTitle: true;
  }
}

export default theme;
