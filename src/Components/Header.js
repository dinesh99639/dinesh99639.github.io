import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const Header = (props) => {
  const { theme, setTheme } = props;
  return (
    <Box>
      <AppBar position="static" className="main-header" >
        <Toolbar style={{ height: "7vh", minHeight: "7vh" }} >
          <Box style={{ margin: "auto", marginLeft: "4vw", display: "flex" }}>
            <Typography
              variant="h6"
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
