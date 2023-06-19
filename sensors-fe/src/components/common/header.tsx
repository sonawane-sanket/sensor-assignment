// Material UI
import { Box, Toolbar, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';

// Utils
import { TITLE } from '../../utils/consants';

const Header = () => (
  <Box sx={{ display: 'flex' }}>
    <MuiAppBar position="absolute">
      <Toolbar>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {TITLE.HEADER}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  </Box>
);

export default Header