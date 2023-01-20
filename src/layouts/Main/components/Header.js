import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//components
import Tabs from "./Tabs";

const Header = () => {
  const { originalPath, languages } = useI18next();
  console.log(languages);
  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Box py={0}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={4} md={1}>
                <StaticImage
                  src="../../../images/MainLogo.png"
                  alt="Logo"
                  placeholder="blurred"
                  layout="constrained"
                />
              </Grid>
              <Grid item>
                <FormControl size="small">
                  <Select
                    sx={{ color: "black" }}
                    labelId="select-lang"
                    id="selectLang"
                  >
                    <MenuItem
                      value={"/"}
                      to={originalPath}
                      language={"cs"}
                      component={Link}
                    >
                      CZ
                    </MenuItem>

                    <MenuItem
                      value={"en"}
                      to={originalPath}
                      language={"en"}
                      component={Link}
                    >
                      EN
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Tabs />
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
