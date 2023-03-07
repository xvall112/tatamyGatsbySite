import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
//components
import AboutTatamyModal from "./components/aboutTatamyModal";
import Container from "../../components/Container";
import DocumentsModal from "./components/documentsModal";
//materialUi
import { Typography, Grid } from "@mui/material";

const Index = () => {
  return (
    <Container>
      <Typography
        align="center"
        variant="h5"
        fontWeight={700}
        sx={{ marginBottom: 3 }}
      >
        <Trans>Organizace</Trans>
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        spacing={2}
      >
        <Grid item xs={12} md={7}>
          <AboutTatamyModal />
        </Grid>
        <Grid item xs={12} md={7}>
          <DocumentsModal />
        </Grid>
        {/*  <Grid item xs={12} md={7}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            component={Link}
            to={"/video"}
          >
            <Trans>Video</Trans>
          </Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            component={Link}
            to={"/news"}
          >
            <Trans>Novinky</Trans>
          </Button>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default Index;
