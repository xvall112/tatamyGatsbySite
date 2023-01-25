import React from "react";
//components
import AboutTatamyModal from "./components/aboutTatamyModal";
import Container from "../../components/Container";
import DocumentsModal from "./components/documentsModal";
//materialUi
import { Typography, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Index = () => {
  const theme = useTheme();
  return (
    <Container>
      <Typography
        align="center"
        variant="h5"
        fontWeight={700}
        sx={{ marginBottom: 3 }}
      >
        Organizace
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
        <Grid item xs={12} md={7}>
          <Button variant="outlined" color="secondary" fullWidth>
            Video
          </Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <Button variant="outlined" color="secondary" fullWidth>
            Novinky
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
