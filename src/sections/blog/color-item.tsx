import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

interface Colors {
  main: string;
  light: string;
  pattern: string;
}

interface ColorfulPostItemProps {
  title: string;
  colors: Colors;
  expanded: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onClick?: () => void;
}

export function ColorfulPostItem({
  title,
  colors,
  expanded,
  onHoverStart,
  onHoverEnd,
  onClick,
}: ColorfulPostItemProps) {
  return (
    <Box
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      sx={{
        width: expanded ? '60%' : '18%',
        height: '60px',
        transition: 'all 0.8s ease-in-out',
        overflow: 'hidden',
        '@media (max-width: 900px)': { width: expanded ? '100%' : '45%' },
        '@media (max-width: 600px)': { width: '100%' },
      }}
    >
      <Card
        sx={{
          height: '100%',
          bgcolor: colors.main,
          color: 'common.white',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
          boxShadow: expanded ? 8 : 2, // Sombra más grande cuando está expandido
          transition: 'all 0.3s ease-in-out',
          transform: expanded ? 'scale(1.05)' : 'scale(1)',
          '&:hover': {
            bgcolor: colors.light,
          },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Typography>
      </Card>
    </Box>
  );
}
