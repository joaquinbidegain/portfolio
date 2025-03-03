import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Iconify } from 'src/components/iconify';
import type { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

export function NavFooter({ sx, ...other }:StackProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ mt: 'auto', mb: 2, textAlign: 'center', ...sx }}
      {...other}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        © {new Date().getFullYear()} Joaquín Bidegain
      </Typography>

      <Box display="flex" gap={1} mt={1}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/joaquinbidegain"
          target="_blank"
          sx={{ color: 'text.primary' }}
        >
          <Iconify icon="mdi:linkedin" width={24} />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/joaquinbidegain"
          target="_blank"
          sx={{ color: 'text.primary' }}
        >
          <Iconify icon="mdi:github" width={24} />
        </IconButton>
      </Box>
    </Box>
  );
}
