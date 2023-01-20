import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "../theme/index";
import Main from "./Main";

//context
import { MenuProvider } from "../Context/MenuContext";
export default function TopLayout(props) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={getTheme("dark")}>
        <MenuProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Main>
            <Paper elevation={0}>{props.children}</Paper>
          </Main>
        </MenuProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
