import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import shadows from "./shadows";
import { /* light, */ dark } from "./palette";

const getTheme = (mode) =>
  responsiveFontSizes(
    createTheme({
      palette: (mode = dark),
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Inter", sans-serif',
        button: {
          textTransform: "none",
          fontWeight: "medium",
        },
      },
      rounded: "10px",
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 700,
              borderRadius: 10,
              paddingTop: 10,
              paddingBottom: 10,
              border: "3px solid white",
            },
            containedSecondary: mode === "light" ? { color: "white" } : {},
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
    })
  );

export default getTheme;
