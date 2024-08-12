import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';
 // Import your local logo here

// ----------------------------------------------------------------------

const Logo = forwardRef(({ useImportedLogo = false, disabledLink = false, sx, ...other }, ref) => {
  // const theme = useTheme();

  // const PRIMARY_LIGHT = theme.palette.primary.light;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 150,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
    
        <Box
          component="img"
          src="./../../public/assets/logo.png"
          sx={{ width: '100%', height: '100%', cursor: 'pointer' }}
        />
    
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  useImportedLogo: PropTypes.bool,
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
