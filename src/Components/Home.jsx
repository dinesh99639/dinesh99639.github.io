import { useEffect } from "react";

import user from "../data/user.json";

import { Box } from "@mui/material";

import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import EducationExperience from "./EducationExperience/EducationExperience";
import ConnectWithMe from "./ConnectWithMe";

function Home(props) {
  const { theme } = props;

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = user.githubProfileImage;
  }, []);

  return (
    <Box sx={{ padding: "3vw 8vw" }}>
      <Intro theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <EducationExperience theme={theme} />
      <ConnectWithMe theme={theme} />
    </Box>
  );
}

export default Home;
