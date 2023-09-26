import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";

function EducationCard() {
  return (
    <Paper sx={{ mt: 1.5 }} elevation={1}>
      <Card>
        <CardContent>
          <Typography variant="h6">B.A. LL.B</Typography>
          <Typography variant="subtitle2">Symbiosis Law School</Typography>
          <Typography color="InactiveCaptionText" variant="subtitle2">
            2014 - 2019
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
function EducationContainer() {
  return (
    <div>
      <Card sx={{ mt: 1.5 }}>
        <CardContent>
          <Typography sx={{ mb: 2 }} variant="h5" component="h1">
            Education
          </Typography>
          <EducationCard />
          <EducationCard />
        </CardContent>
      </Card>
    </div>
  );
}
function WorkCard() {
  return (
    <Paper sx={{ mt: 1.5 }} elevation={1}>
      <Card>
        <CardContent>
          <Typography variant="h6">Lawyer and IPR Consultant</Typography>
          <Typography variant="subtitle2">R K Dewan & Co</Typography>
          <Typography color="InactiveCaptionText" variant="subtitle2">
            Oct 2019 - Present &#183; 4 years
          </Typography>
          <Typography color="InactiveCaptionText" variant="subtitle2">
            Pune, Maharashtra, India
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
function BasicCard1() {
  return (
    <Card sx={{ minWidth: 275, mt: 1.5 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Experience
        </Typography>
        <Stack
          spacing={1.5}
          direction={"row"}
          sx={{ mt: 1, justifyContent: "center" }}
          // sx={{  }}
        >
          <Chip
            variant="outlined"
            // icon={<Check />}
            color="success"
            label="100 wins"
          />
          <Chip
            variant="outlined"
            // icon={<Pending />}
            color="primary"
            label="2 pending"
          />
          <Chip
            variant="outlined"
            // icon={<Block />}
            color="warning"
            label="5 lost"
          />
        </Stack>
        <Stack>
          <WorkCard />
          <WorkCard />
        </Stack>
      </CardContent>
    </Card>
  );
}
function BasicCard2() {
  return (
    <Card sx={{ minWidth: 275, mt: 1.5 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          About Me
        </Typography>

        <Typography variant="body1" sx={{ mt: 1.5 }}>
          I'm Jennifer M. Anderson, and I am proud to be an Attorney at Law
          based in the vibrant legal landscape of New York City. With over 15
          years of legal experience, I have dedicated my career to fighting for
          justice and tirelessly representing my clients. My passion for the
          law, coupled with my extensive knowledge and unwavering commitment to
          my clients, has earned me a reputation as a formidable advocate in the
          courtroom.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
function ReviewCard() {
  return (
    <Paper elevation={1} sx={{ width: 270, m: 1.5 }}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">Baburao G Apte</Typography>
          <Rating size="small" name="read-only" value={3} readOnly />
          <Typography variant="body2" sx={{ mt: 1.5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum
            pariatur culpa repudiandae itaque ab fugiat inventore veniam magnam
            labore?
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
function ReviewCardContainer() {
  return (
    <Card sx={{ minWidth: 275, mt: 1.5, mb: 1.5 }}>
      <CardContent>
        <Typography sx={{ mb: 2 }} variant="h5" component="h2">
          Reviews
        </Typography>
        <Stack
          sx={{ overflowX: "auto", minWidth: "100%" }}
          direction="row"
          className="scroll"
        >
          <ReviewCard />
        </Stack>
      </CardContent>
    </Card>
  );
}
const DescriptionCard = () => {
  return (
    <div>
      <BasicCard2 />
      <BasicCard1 />
      <EducationContainer />
      <ReviewCardContainer />
    </div>
  );
};

export default DescriptionCard;
