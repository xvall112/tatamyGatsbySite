import React from "react";
import Typography from "@mui/material/Typography";

const Title = ({ title }) => {
  return (
    <Typography variant="h4" fontWeight={700} sx={{ pb: 2 }}>
      {title}
    </Typography>
  );
};

export default Title;
