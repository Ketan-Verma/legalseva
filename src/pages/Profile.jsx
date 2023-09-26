import React from "react";
import IdCard from "../components/IdCard";
import Container from "@mui/material/Container";
import DescriptionCard from "../components/DescriptionCard";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  return (
    <div>
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <IdCard Sid={parseInt(id)} />
        <DescriptionCard Sid={parseInt(id)} />
      </Container>
    </div>
  );
};

export default Profile;
