import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const Header = (props) => {
  const { theme, setTheme } = props;
  return (
    <Box>
      <Box style={{ height: "6vh" }}></Box>
      <AppBar position="fixed" className="main-header" >
        <Toolbar 
          style={{
            height: "6vh", 
            minHeight: "6vh", 
            display: "flex", 
            justifyContent: "space-between",
            padding: "0 4vw"
          }} 
        >
          <Box>
            <Typography
              sx={{ fontSize: "17.6px" }}
              component="div"
            >Portfolio</Typography>
          </Box>

          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="medium"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {(theme === "light") ?
                <NightlightRoundIcon style={{ color: "white", fontSize: "20px", transform: "rotate(-45deg)" }} /> :
                <LightModeIcon style={{ color: "white" }} />
              }
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
