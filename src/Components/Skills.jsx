import { Grid, Typography } from "@mui/material";

import skills from "../data/skills.json";

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
              src={`/src/assets/skills/${skill.img}`}
              style={{
                cursor: "pointer",
                width: "15%",
                maxWidth: "60px",
                filter:
                  skill.invert && theme === "dark"
                    ? "brightness(100%) invert(100%)"
                    : "",
              }}
              onClick={() => window.open(skill.link)}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Skills;
