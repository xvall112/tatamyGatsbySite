import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";

export const query = graphql`
  query {
    sanityOrganization {
      documents {
        name
        document {
          asset {
            url
          }
        }
      }
    }
  }
`;

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const { language } = useI18next();
  const data = useStaticQuery(query);
  const { documents } = data.sanityOrganization;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
        sx={{ minWidth: { xs: 250, md: 400 } }}
      >
        <Trans>Dokumenty</Trans>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Trans>Dokumenty</Trans>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container direction="column" spacing={2}>
              {documents.map((item) => {
                return (
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      key={item.name}
                      component={"a"}
                      href={item.document.asset.url}
                      sx={{ minWidth: { xs: 250, md: 400 } }}
                    >
                      {item.name}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
