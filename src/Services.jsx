import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import Stack from "@mui/material/Stack";

function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Lawyer
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          ></Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
  );
}
const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <FullWidthTextField />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <MediaControlCard />
        <MediaControlCard />
        <MediaControlCard />
        <MediaControlCard />
        <MediaControlCard />
      </Stack>
    </div>
  );
};

export default Services;
