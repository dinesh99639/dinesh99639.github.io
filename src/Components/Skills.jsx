import { Grid, Typography, Box } from "@mui/material";

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
          gap: "20px",
          flexWrap: 'wrap',
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={"skill" + index}
            sx={{
              position: "relative",
              backgroundColor: theme === "dark" ? "#333" : "#f0f0f0",
              width: "110px",
              height: "110px",
              padding: "10px",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                "& .skill-icon": {
                  transform: "translateY(-10px)",
                },
                "& .skill-label": {
                  opacity: 1,
                  // transform: "translateY(0)",
                },
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => window.open(skill.link)}
          >
            <Box
              className="skill-icon"
              component="img"
              alt={skill.label}
              src={new URL(`../assets/skills/${skill.img}`, import.meta.url).href}
              sx={{
                width: "50px",
                filter: skill.invert && theme === "dark" ? "brightness(100%) invert(100%)" : "",
                transition: "transform 0.3s ease",
              }}
            />
            <Typography className="skill-label" sx={{ position: "absolute", bottom: "15px", left: "50%", transform: "translateX(-50%)", opacity: 0, transition: "opacity 0.3s ease, transform 0.3s ease", fontSize: "12px", color: theme === "dark" ? "#fff" : "#000" }}>{skill.label}</Typography>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default Skills;
