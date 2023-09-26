import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import mainimg from "../assets/images/samplelawyer.png";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import LocationOn from "@mui/icons-material/LocationOn";
import Rating from "@mui/material/Rating";
import ChatIcon from "@mui/icons-material/Chat";
import Button from "@mui/material/Button";
import data from "../assets/data/Data.json";

const IdCard = ({ Sid }) => {
  function MediaControlCard({ item }) {
    const theme = useTheme();

    return (
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image={mainimg}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h4">
              {item.name}
            </Typography>
            <Typography
              variant="subtitle2"
              // color="text.secondary"
              component="div"
            >
              Legal Services Professional
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="p"
              sx={{ justifyContent: "center", display: "flex" }}
            >
              {item.city}, {item.country}
              <LocationOn fontSize="small" />
            </Typography>
            <Rating name="read-only" value={item.rating} readOnly />
            <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
              <Button size="medium" variant="contained">
                Hire
              </Button>
              <Button
                size="medium"
                variant="outlined"
                /*/ sx={{
                //   color: "blue",
                //   borderColor: "blue",
                //   ":hover": { borderColor: "blue" },
                // }}*/
              >
                Chat
                <ChatIcon sx={{ ml: 1 }} />
              </Button>
            </Stack>
          </CardContent>
        </Box>
      </Card>
    );
  }
  return (
    <div>
      <MediaControlCard item={data[Sid]} />

      {/* <img src={mainimg} alt="" /> */}
    </div>
  );
};

export default IdCard;
