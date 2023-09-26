import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Chip from "@mui/material/Chip";
import { Card } from "@mui/material";
import data from "../assets/data/Data.json";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import mainimg from "../assets/images/samplelawyer.png";
import Stack from "@mui/material/Stack";
import LocationOn from "@mui/icons-material/LocationOn";
import Rating from "@mui/material/Rating";
import ChatIcon from "@mui/icons-material/Chat";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
function Searchbar() {
  return (
    <Paper
      component="form"
      sx={{
        m: "auto",
        p: "2px 6px",
        display: "flex",
        alignItems: "center",
        maxWidth: 720,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Services "
        inputProps={{ "aria-label": "Search Services" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
function ServiceCard(props) {
  const handleClick = () => {
    // console.info("You clicked the Chip.");
  };

  return (
    <Chip
      sx={{ backgroundColor: "#fff" }}
      variant="outlined"
      onClick={handleClick}
      label={props.name}
    />
  );
}
function ServiceCardContainer() {
  return (
    <>
      {data.map((item, index) => (
        <Link to={"/lawyer/" + index}>
          <Card
            sx={{
              display: "flex",
              height: 200,
              width: 780,
              marginX: "auto",
              marginY: 2,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 150 }}
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
                  sx={{ justifyContent: "left", display: "flex" }}
                >
                  {item.city}, {item.country}
                  <LocationOn fontSize="small" />
                </Typography>
                <Rating name="read-only" value={item.rating} readOnly />
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="p"
                  sx={{ justifyContent: "left", display: "flex" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  quam mollitia pariatur reiciendis, dolorem omnis in modi,
                  dolore facilis asperiores repudiandae. Recusandae odio
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Link>
      ))}
    </>
  );
}
const Servicespg = () => {
  return (
    <div>
      <Grid justifyContent="center" alignItems="center" container spacing={0}>
        <Grid
          item
          xs={12}
          sx={{
            marginX: 3,
            marginY: 3,
            textAlign: "center",
          }}
        >
          <Searchbar />
          {/* <TextField fullWidth label="Search" id="Search" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton> */}
        </Grid>
        <Grid xs={12} item>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <ServiceCard name="Lawyers" />

            <ServiceCard name="Arbitrators" />

            <ServiceCard name="Mediaters" />

            <ServiceCard name="Notaries" />

            <ServiceCard name="Document Writers" />
          </Stack>
        </Grid>
      </Grid>
      <Stack spacing={2}>
        <ServiceCardContainer />
      </Stack>
    </div>
  );
};

export default Servicespg;
