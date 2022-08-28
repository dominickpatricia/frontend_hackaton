import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid';
import { esES as coreEsES} from '@mui/material/locale';

const theme = createTheme (
  {
    typography: {
      fontFamily: "'Tajawal'",
      button: {
        textTransform: "none"
      },
    },   
    palette: {
      primary: {
        main: "#ffe600",
        dark: "#F1DA08",
      },
      white: "#FFFFFF",
      black: "#000000",
      smoke: "#CBCBCB",
      bg:"#FBFBFB",
      successColor:"#A2D694",
      errorColor:"#D69494",

    },
    shape: {
      borderRadius: 5,
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  esES,
  coreEsES
);

export default theme;