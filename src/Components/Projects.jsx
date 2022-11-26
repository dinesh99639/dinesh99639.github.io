import user from "../data/user.json";
import projects from "../data/projects.json";

import Tilt from "react-vanilla-tilt";
import { Grid, Box, Button, Typography, Paper, Chip } from "@mui/material";

const Project = (props) => {
  const { project } = props;

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
          width: "350px",
          color: "inherit",
          background: "rgba(255, 255, 255, 0.1)",
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
            src={`/src/assets/projects/${project.icon || "DefaultProject.svg"}`}
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
          return <Project key={"project" + index} project={project} />;
        })}
      </Grid>
      <div style={{ textAlign: "center" }}>
        <Chip
          label="View more projects"
          color="primary"
          size="medium"
          component="a"
          href={`https://github.com/${user.githubUsername}/?tab=repositories`}
          target="_blank"
          style={{
            margin: "5px 0",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
};

export default Projects;
