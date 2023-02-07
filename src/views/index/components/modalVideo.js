import * as React from "react";
import { IoMdClose } from "react-icons/io";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Dialog,
  DialogTitle,
  IconButton,
} from "@mui/material";

import ReactPlayer from "react-player/youtube";

function SimpleDialog(props) {
  const { onClose, url, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth={"md"}>
      <DialogTitle>
        <IconButton aria-label="close">
          <IoMdClose onClick={handleClose} />
        </IconButton>
      </DialogTitle>
      <ReactPlayer
        controls={true}
        url={url}
        width="100%"
        height="50vh"
        playing={true}
      />
    </Dialog>
  );
}

export default function SimpleDialogVideo({ url, title, subtitle, date }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ width: "100%" }}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component={ReactPlayer}
            controls={true}
            light={true}
            url={url}
            width="100%"
            height="160px"
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight={700}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <SimpleDialog url={url} open={open} onClose={handleClose} />
    </>
  );
}
