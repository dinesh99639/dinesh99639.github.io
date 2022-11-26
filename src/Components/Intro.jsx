import PrismCode from "react-prism";
import "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism-okaidia.css";

import { Box, Typography, Paper, Tooltip, IconButton } from "@mui/material";

import user from "../data/user.json";
import accounts from "../data/accounts.json";

import GitHubIcon from "../assets/icons/github";
import LinkedInIcon from "../assets/icons/linkedin";
import DocumentIcon from "../assets/icons/document";

const terminalDefaultValue = `1   const props = {
2       name: "${user.name}",
3       interests: [
4           "Competitve Programming",
5           "Optimizing Code",
6           "Development"
7       ]
8   }
`;

const BasicDetails = (props) => {
  const theme = props.theme;

  const color =
    theme === "dark" ? "rgba(255, 255, 255, 0.76)" : "rgb(109, 131, 242)";

  const links = [
    {
      title: "Github",
      icon: <GitHubIcon color={color} />,
      link: accounts.github.link,
    },
    {
      title: "Linkedin",
      icon: <LinkedInIcon color={color} />,
      link: accounts.linkedin.link,
    },
    {
      title: "Resume",
      icon: <DocumentIcon color={color} />,
      link: new URL("/" + user.resume, import.meta.url).href,
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
          {user.name.toUpperCase()}
        </Typography>
        <Typography sx={{ fontSize: "13px", opacity: 0.76 }}>
          {user.position}
        </Typography>
        <Typography
          className="about"
          sx={{ fontSize: "13px", margin: "10px 0", textAlign: "justify" }}
        >
          {user.description}
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

export default Intro;
