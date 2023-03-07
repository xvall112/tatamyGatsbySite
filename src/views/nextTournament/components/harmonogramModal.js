import * as React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function AlertDialog({ harmonogram }) {
  const [open, setOpen] = React.useState(false);
  const { language } = useI18next();

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
        <Trans>Harmonogram</Trans>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Trans>Harmonogram</Trans>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Timeline>
              {harmonogram.map((line) => {
                return (
                  <TimelineItem key={line.time}>
                    <TimelineOppositeContent color="textSecondary">
                      {line.time}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      {language === "cs" ? line.text.cs : line.text.en}
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
