import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>lawyer</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            dolorum! Corrupti, ipsa aliquam. Facilis reprehenderit illo nobis
            quos tenetur aliquid?
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quas
            nostrum placeat officia temporibus id rem necessitatibus numquam,
            deserunt consequatur esse asperiores possimus natus repudiandae
            animi ratione earum voluptatem obcaecati.
          </p>
          <button>niche jao</button>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img
              src="https://img.freepik.com/free-vector/male-lawyer-concept-illustration_114360-20389.jpg?w=740&t=st=1695142260~exp=1695142860~hmac=b7e8cd87a6977bdfc81a523fa656d713f94e8abfb785bfa0196c1ef4670d1807"
              alt=""
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
