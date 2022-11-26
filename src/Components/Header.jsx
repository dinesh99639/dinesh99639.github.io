import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";

import DarkModeIcon from "../assets/icons/darkmode";
import LightModeIcon from "../assets/icons/lightmode";

const Header = (props) => {
  const { theme, setTheme } = props;

  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <Box>
      <Box style={{ height: "6vh" }}></Box>
      <AppBar position="fixed" className="main-header">
        <Toolbar
          style={{
            height: "6vh",
            minHeight: "6vh",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 4vw",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "17.6px" }} component="div">
              Portfolio
            </Typography>
          </Box>

          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="medium"
              onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? (
                <DarkModeIcon color="white" />
              ) : (
                <LightModeIcon color="white" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
