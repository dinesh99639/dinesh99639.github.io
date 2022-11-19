import { lightTheme } from "../Theme";
import projects from "../data/projects.json";

import PrismCode from "react-prism";
import "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism-okaidia.css";

import Tilt from "react-vanilla-tilt";
import {
  Grid,
  Box,
  Button,
  Typography,
  Paper,
  Tooltip,
  IconButton,
  ClickAwayListener,
} from "@mui/material";

import GitHubIcon from "../assets/icons/github";
import LinkedInIcon from "../assets/icons/linkedin";
import DocumentIcon from "../assets/icons/document";

import GSecureLockIcon from "../assets/projects/GSecureLockIcon";
import { useState } from "react";

const terminalDefaultValue = `1   const props = {
2       name: "Dinesh Somaraju",
3       hobbies: [
4           "Competitve Programming",
5           "Listening Songs",
6           "Development"
7       ]
8   }
`;

const skills = [
  { label: "HTML", img: "/src/assets/skills/html5.svg" },
  { label: "CSS", img: "/src/assets/skills/css3.svg" },
  { label: "JavaScript", img: "/src/assets/skills/javascript.svg" },
  { label: "jQuery", img: "/src/assets/skills/jquery.svg" },
  { label: "BootStrap", img: "/src/assets/skills/bootstrap.svg" },
  { label: "Material UI", img: "/src/assets/skills/material-ui.svg" },
  { label: "php", img: "/src/assets/skills/php.svg", invert: true },
  { label: "MySQL", img: "/src/assets/skills/mysql.svg" },
  { label: "NodeJS", img: "/src/assets/skills/nodejs.svg" },
  { label: "React", img: "/src/assets/skills/react.svg" },
  { label: "Redux", img: "/src/assets/skills/redux.svg" },
  { label: "ExpressJS", img: "/src/assets/skills/expressjs.svg", invert: true },
  { label: "GraphQL", img: "/src/assets/skills/graphql.svg" },
  { label: "MongoDB", img: "/src/assets/skills/mongodb.svg" },
  { label: "Python", img: "/src/assets/skills/python.svg" },
  { label: "Git", img: "/src/assets/skills/git.svg" },
  { label: "VS Code", img: "/src/assets/skills/vscode.svg" },
  { label: "Postman", img: "/src/assets/skills/postman.svg" },
];

const BasicDetails = (props) => {
  const theme = props.theme;

  const color =
    theme === "dark" ? "rgba(255, 255, 255, 0.76)" : "rgb(109, 131, 242)";

  const links = [
    {
      title: "Github",
      icon: <GitHubIcon color={color} />,
      link: "https://github.com/dinesh99639/",
    },
    {
      title: "Linkedin",
      icon: <LinkedInIcon color={color} />,
      link: "https://www.linkedin.com/in/dinesh-somaraju/",
    },
    {
      title: "Resume",
      icon: <DocumentIcon color={color} />,
      link: "",
    },
  ];

  return (
    <>
      <Box
        className="basicDetails"
        sx={{
          padding: "40px 0 0 0",
          minWidth: "350px",
          width: "50%",
        }}
      >
        <Typography
          sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "27px" }}
        >
          DINESH SOMARAJU
        </Typography>
        <Typography sx={{ fontSize: "13px", opacity: 0.76 }}>
          Digital Specialist Engineer, Infosys
        </Typography>
        <Typography
          className="about"
          sx={{ fontSize: "13px", margin: "10px 0", textAlign: "justify" }}
        >
          Hi, I'm Dinesh Somaraju, a Full Stack Developer from India. I'm
          currently working at Infosys. I love development.
        </Typography>

        <Box sx={{ marginLeft: "-8px" }}>
          {links.map((item, idx) => (
            <Tooltip key={"intro-link-" + idx} title={item.title} arrow>
              <IconButton href={item.link} target="_blank">
                {item.icon}
              </IconButton>
              {/* <img 
              src="/src/assets/icons/linkedin.svg"
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                width: "25px",
                margin: "7px"
              }} 
            /> */}
            </Tooltip>
          ))}
        </Box>
      </Box>
    </>
  );
};

const Terminal = () => {
  return (
    <>
      <Box className="terminal" sx={{ width: "50%", maxWidth: "1000px" }}>
        <Paper
          elevation={3}
          className="terminal"
          sx={{
            marginLeft: "auto",
            backgroundColor: "#282828",
            color: "white",
            height: "220px",
            width: "100%",
            minWidth: "340px",
            maxWidth: "400px",
            borderRadius: "7px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "22px",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                height: "10px",
                width: "10px",
                backgroundColor: "red",
                margin: "auto 5px",
              }}
            ></Box>
            <Box
              sx={{
                borderRadius: "50%",
                height: "10px",
                width: "10px",
                backgroundColor: "#ffc400",
                margin: "auto 5px",
              }}
            ></Box>
            <Box
              sx={{
                borderRadius: "50%",
                height: "10px",
                width: "10px",
                backgroundColor: "#00fe00",
                margin: "auto 5px",
              }}
            ></Box>
          </Box>
          <Box>
            <pre style={{ fontSize: "12.5px" }}>
              <PrismCode
                className="language-jsx"
                children={terminalDefaultValue}
              />
            </pre>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

const Intro = ({ theme }) => {
  return (
    <>
      <Box
        style={{ boxSizing: "border-box", display: "flex", flexWrap: "wrap" }}
      >
        <BasicDetails theme={theme} />
        <Terminal />
      </Box>
    </>
  );
};

const Skills = ({ theme }) => {
  return (
    <>
      <Typography
        sx={{ textAlign: "center", fontSize: "18px", margin: "30px 0 0 0" }}
      >
        Skills
      </Typography>
      <Grid
        container
        sx={{
          padding: "30px 0",
          margin: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {skills.map((skill, index) => {
          return (
            <img
              key={"skill" + index}
              alt={skill.label}
              src={skill.img}
              style={{
                width: "15%",
                maxWidth: "60px",
                filter:
                  skill.invert && theme === "dark"
                    ? "brightness(100%) invert(100%)"
                    : "",
              }}
            />
          );
        })}
      </Grid>
    </>
  );
};

const Project = (props) => {
  const { project } = props;

  const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false);

  return (
    <Tilt
      options={{ max: 25, speed: 400, glare: true, "max-glare": 1 }}
      style={{ background: "inherit" }}
    >
      <Paper
        elevation={3}
        sx={{
          borderRadius: "7px",
          height: "350px",
          width: "350px",
          // backgroundColor:
          //   theme === "dark" ? "#404040" : lightTheme.backgroundColor,
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
          {/* <img
          src="/assets/projects/GSecureLock.svg"
          alt={project.name}
          style={{
            width: "100%",
            borderRadius: "7px 7px 0 0"
          }} 
        /> */}
          <GSecureLockIcon
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

        {/* <ClickAwayListener onClickAway={() => setIsTechnologiesOpen(false)}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={() => setIsTechnologiesOpen(false)}
            open={isTechnologiesOpen}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            // style={{ backgroundColor: "white" }}
            title={<>
              <button>sdad</button>
            </>}
          >
            <Button variant="contained" onClick={() => setIsTechnologiesOpen(true)}>Click</Button>
          </Tooltip>
      </ClickAwayListener> */}
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
    </>
  );
};

function Home(props) {
  const { theme } = props;

  return (
    <>
      <>
        <Box sx={{ padding: "3vw 8vw" }}>
          <Intro theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />

          {/* <Box sx={{ padding: "20px 0" }}></Box> */}
        </Box>
      </>
    </>
  );
}

export default Home;
