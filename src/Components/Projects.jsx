import { alpha } from "@mui/material/styles";

import user from "../data/user.json";
import projects from "../data/projects.json";

import Tilt from "react-vanilla-tilt";
import { Grid, Box, Button, Typography, Paper, Chip } from "@mui/material";

import FadeInScroll from "../Animations/FadeInScroll";

const Project = (props) => {
  const { project, theme } = props;

  return (
    <Tilt
      options={{ max: 25, speed: 400, glare: true, "max-glare": 1 }}
      style={{ background: "inherit", margin: "10px 0" }}
    >
      <Paper
        elevation={3}
        sx={{
          borderRadius: "7px",
          height: "350px",
          width: ["auto", "350px"],
          color: "inherit",
          backgroundColor: theme === "dark" ? "#333" : "#f0f0f0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "150px",
          }}
        >
          <img
            src={
              new URL(
                `../assets/projects/${project.icon || "DefaultProject.svg"}`,
                import.meta.url
              ).href
            }
            style={{
              width: "100px",
            }}
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            padding: "7px 15px",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          <Typography sx={{ margin: "8px 0" }}>{project.name}</Typography>
          <Typography
            sx={{
              fontSize: "13px",
              wordWrap: "break-word",
              height: "50px",
              opacity: "85%",
            }}
          >
            {project.description}
          </Typography>
        </Box>

        <Box
          style={{
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            component="a"
            href={project.github}
            target="_blank"
            sx={{
              borderRadius: "50px",
              padding: "3px",
              width: "40%",
              textTransform: "none",
              fontSize: "13px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: alpha("#2196f3", 0.2),
                borderColor: "#2196f3",
                color: theme === "dark" ? "white" : ""
              },
              borderColor: "#2196f3",
            }}
          >
            Github
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            component="a"
            href={project.live || null}
            target="_blank"
            sx={{
              borderRadius: "50px",
              padding: "3px",
              width: "40%",
              textTransform: "none",
              fontSize: "13px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: alpha("#2196f3", 0.2),
                borderColor: "#2196f3",
                color: theme === "dark" ? "white" : ""
              },
              borderColor: "#2196f3",
            }}
          >
            Live App
          </Button>
        </Box>
      </Paper>
    </Tilt>
  );
};

const Projects = ({ theme }) => {
  const isDesktop = window.innerWidth > 833.3;

  return (
    <>
      <Typography
        sx={{ textAlign: "center", fontSize: "18px", margin: "30px 0 0 0" }}
      >
        Projects
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        {projects.map((project, index) => {
          return (
            <FadeInScroll
              key={"project" + index}
              threshold={0.4}
              delay={isDesktop && index % 2 === 0 ? 300 : 0}
            >
              <Project project={project} theme={theme} />
            </FadeInScroll>
          );
        })}
      </Grid>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="outlined"
          color="inherit"
          component="a"
          href={`https://github.com/${user.githubUsername}/?tab=repositories`}
          target="_blank"
          sx={{
            borderRadius: "50px",
            margin: "5px 0",
            padding: "3px 10px",
            textTransform: "none",
            fontSize: "13px",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: alpha("#2196f3", 0.2),
              borderColor: "#2196f3",
              color: theme === "dark" ? "white" : ""
            },
            borderColor: "#2196f3",
          }}
        >
          View more projects
        </Button>
      </div>
    </>
  );
};

export default Projects;
