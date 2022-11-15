import { lightTheme } from "../Theme";
import projects from "../data/projects.json";

import PrismCode from "react-prism";
import "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism-okaidia.css";

import Tilt from 'react-vanilla-tilt';
import { Grid, Box, Button, Typography, Paper, Tooltip, IconButton, ClickAwayListener } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";

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
  { label: "HTML", img: require("../assets/skills/html5.svg").default },
  { label: "CSS", img: require("../assets/skills/css3.svg").default },
  { label: "JavaScript", img: require("../assets/skills/javascript.svg").default },
  { label: "jQuery", img: require("../assets/skills/jquery.svg").default },
  { label: "BootStrap", img: require("../assets/skills/bootstrap.svg").default },
  { label: "Material UI", img: require("../assets/skills/material-ui.svg").default },
  { label: "php", img: require("../assets/skills/php.svg").default, invert: true },
  { label: "MySQL", img: require("../assets/skills/mysql.svg").default },
  { label: "NodeJS", img: require("../assets/skills/nodejs.svg").default },
  { label: "React", img: require("../assets/skills/react.svg").default },
  { label: "Redux", img: require("../assets/skills/redux.svg").default },
  { label: "ExpressJS", img: require("../assets/skills/expressjs.svg").default, invert: true },
  { label: "GraphQL", img: require("../assets/skills/graphql.svg").default },
  { label: "MongoDB", img: require("../assets/skills/mongodb.svg").default },
  { label: "Python", img: require("../assets/skills/python.svg").default },
  { label: "Git", img: require("../assets/skills/git.svg").default },
  { label: "VS Code", img: require("../assets/skills/vscode.svg").default },
  { label: "Postman", img: require("../assets/skills/postman.svg").default },
];

const BasicDetails = (props) => {
  const theme = props.theme;

  const color = theme === "dark" ? "rgba(255, 255, 255, 0.76)" : "rgb(109, 131, 242)";

  const links = [
    {
      title: "Github",
      icon: <GitHubIcon sx={{ color }} />,
      link: "https://github.com/dinesh99639/"
    },
    {
      title: "Linkedin",
      icon: <LinkedInIcon sx={{ color }} />,
      link: "https://www.linkedin.com/in/dinesh-somaraju/"
    },
    {
      title: "Resume",
      icon: <ArticleIcon sx={{ color }} />,
      link: ""
    }
  ]

  return (<>
    <Box
      className="basicDetails"
      sx={{
        padding: "40px 0 0 0",
        minWidth: "350px",
        width: "50%"
      }}
    >
      <Typography sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "27px" }} >
        DINESH SOMARAJU
      </Typography>
      <Typography sx={{ fontSize: "13px", opacity: 0.76 }} >
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
          </Tooltip>
        ))}
      </Box>
    </Box>
  </>)
}

const Terminal = () => {
  return (<>
    <Box className="terminal" sx={{ width: "50%", maxWidth: "1000px" }} >
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
        <Box sx={{ position: "relative", height: "22px", width: "100%", display: "flex", alignItems: "center" }}>
          <Box sx={{ borderRadius: "50%", height: "10px", width: "10px", backgroundColor: "red", margin: "auto 5px" }} ></Box>
          <Box sx={{ borderRadius: "50%", height: "10px", width: "10px", backgroundColor: "#ffc400", margin: "auto 5px" }} ></Box>
          <Box sx={{ borderRadius: "50%", height: "10px", width: "10px", backgroundColor: "#00fe00", margin: "auto 5px" }} ></Box>
        </Box>
        <Box>
          <pre
            style={{ fontSize: "12.5px" }}
          ><PrismCode className="language-jsx" children={terminalDefaultValue} /></pre>
        </Box>
      </Paper>
    </Box>
  </>)
}

const Intro = ({ theme }) => {
  return (
    <>
      <Box style={{ boxSizing: "border-box", display: "flex", flexWrap: "wrap" }} >
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
          gap: "60px"
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

  return (<Tilt
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
          height: "150px"
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
            opacity: "85%"
          }}
        >{project.description}</Typography>
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
  </Tilt>)
}

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
          return (
            <Project
              key={"project" + index}
              project={project}
            />
          );
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
