import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { PortableText } from "@portabletext/react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
//materialUi
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ gala, superfight, open }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { language } = useI18next();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{ bgcolor: "background.paper", width: "100%", borderRadius: "10px" }}
    >
      <AppBar
        position="sticky"
        sx={{ bgcolor: "background.paper", borderRadius: "10px" }}
      >
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          <Tab label="GALA" {...a11yProps(0)} component={"div"} />
          <Tab label="Superfight" {...a11yProps(1)} />
          <Tab label="OPEN" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} component={"div"}>
        <Card>
          <CardContent>
            <Typography variant="h5" fontWeight={700} align="center">
              GALA
            </Typography>
            <PortableText
              value={language === "cs" ? gala.info._rawCs : gala.info._rawEn}
            />
            <Typography
              variant="h6"
              fontWeight={700}
              align="left"
              sx={{ paddingBottom: 1 }}
            >
              Fighters:
            </Typography>
            <Grid
              container
              direction="row"
              spacing={2}
              sx={{
                "& img": {
                  borderRadius: `${theme.rounded} ${theme.rounded}`,
                  WebkitBorderRadius: `${theme.rounded} ${theme.rounded}`,
                },
              }}
            >
              {gala.fighters.length !== 0 &&
                gala.fighters.map((fighter) => {
                  return (
                    <Grid item xs={12} md={4} lg={3}>
                      <GatsbyImage
                        image={fighter.asset.gatsbyImageData}
                        alt={fighter.asset.filename}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Card>
          <CardContent>
            <Typography variant="h5" fontWeight={700} align="center">
              Superfight
            </Typography>
            <PortableText
              value={
                language === "cs"
                  ? superfight.info._rawCs
                  : superfight.info._rawEn
              }
            />
            {superfight.matches.length !== 0 && (
              <>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  align="left"
                  sx={{ paddingBottom: 1 }}
                >
                  Fights:
                </Typography>
                <Grid container direction="row" spacing={2}>
                  {superfight.matches.map((match) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={4}
                        lg={3}
                        sx={{
                          "& img": {
                            borderRadius: `${theme.rounded} ${theme.rounded}`,
                            WebkitBorderRadius: `${theme.rounded} ${theme.rounded}`,
                          },
                        }}
                      >
                        <GatsbyImage
                          image={match.asset.gatsbyImageData}
                          alt={match.asset.filename}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            )}
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Card>
          <CardContent>
            <Typography variant="h5" fontWeight={700} align="center">
              OPEN
            </Typography>
            <PortableText
              value={language === "cs" ? open.info._rawCs : open.info._rawEn}
            />
            <Button
              variant="contained"
              fullWidth
              component={"a"}
              href={open.registration}
              target="_blank"
            >
              <Trans>Registrace</Trans>
            </Button>
          </CardContent>
        </Card>
      </TabPanel>
    </Box>
  );
}