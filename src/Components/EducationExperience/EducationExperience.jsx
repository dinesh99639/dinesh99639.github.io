import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import user from "../../data/user.json";
import education from "../../data/education.json";
import experience from "../../data/experience.json";

import "./EducationExperience.css";

const EducationExperience = () => {
  return (
    <Box id="resume" className="resume" sx={{ margin: "30px 0 0 0" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5">Education &amp; Experience</Typography>
        <Typography mt={1}>{user.profileInfo}</Typography>
      </Box>

      <Grid container spacing={3} sx={{ backgroundColor: "inherit" }}>
        <Grid size={{ lg: 6 }} sx={{ backgroundColor: "inherit" }}>
          <h3 className="resume-title">Sumary</h3>

          <Box className="resume-item" pb={0}>
            <h4>{user.name}</h4>
            <p>
              <em>{user.summaryInfo}</em>
            </p>
            <ul>
              <li>{user.email}</li>
              <li>{user.phone}</li>
            </ul>
          </Box>

          <h3 className="resume-title">Education</h3>
          {education.map((education, idx) => {
            return (
              <div key={idx} className="resume-item">
                <h4>{education.name}</h4>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{education.place}</span>
                  <em>{education.timePeriod}</em>
                </div>
                <p>{education.description}</p>
              </div>
            );
          })}
        </Grid>

        <Grid size={{ lg: 6 }} sx={{ backgroundColor: "inherit" }}>
          <h3 className="resume-title">Professional Experience</h3>
          {experience.map((experience, idx) => {
            return (
              <div key={idx} className="resume-item">
                <h4>
                  {experience.title}, {experience.company}
                </h4>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{experience.place}</span>
                  <em>{experience.timePeriod}</em>
                </div>
                <ul>
                  {experience.description.map((description, idx) => (
                    <li key={idx}>{description}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationExperience;
