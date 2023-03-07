import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const query = graphql`
  query {
    sanityOrganization {
      aboutTatamy {
        cs
        en
      }
    }
  }
`;

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const { language } = useI18next();
  const data = useStaticQuery(query);
  const { aboutTatamy } = data.sanityOrganization;
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
        fullWidth
      >
        <Trans>O TATAMY</Trans>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Trans>O TATAMY</Trans>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {language === "cs" ? aboutTatamy.cs : aboutTatamy.en}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
