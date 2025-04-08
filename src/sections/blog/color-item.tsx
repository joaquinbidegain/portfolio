import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { keyframes } from '@emotion/react';
import { FaBriefcase, FaGraduationCap, FaTools } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

interface Colors {
  main: string;
  light: string;
  pattern: string;
}

interface ColorfulPostItemProps {
  title: string;
  colors: Colors;
  expanded: boolean;
  index: number; // Nueva prop para el índice
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onClick?: () => void;
}

const iconFadeSlide = keyframes`
  from {
    opacity: 0;
    transform: translateX(-1px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const lavaLampExpand = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 50% 50%; }
  100% { background-position: 100% 50%; }
`;

// Array de íconos en orden fijo
const icons = [
  <FaBriefcase key="work" />,
  <FaGraduationCap key="education" />,
  <FaTools key="skills" />
];

export function ColorfulPostItem({
  title,
  colors,
  expanded,
  index, // Recibimos el índice como prop
  onHoverStart,
  onHoverEnd,
  onClick,
}: ColorfulPostItemProps) {
  const theme = useTheme();
  const icon = icons[index]; // Seleccionamos el ícono por posición

  const getPaletteColor = (color: string) => {
    const [paletteKey, shade] = color.split('.');
    return (theme.palette as any)[paletteKey]?.[shade] || color;
  };

  const mainColor = getPaletteColor(colors.main);
  const lightColor = getPaletteColor(colors.light);
  const patternColor = getPaletteColor(colors.pattern);

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
        cursor: 'pointer',
        '@media (max-width: 900px)': { width: expanded ? '100%' : '45%' },
        '@media (max-width: 600px)': { width: '100%' },
      }}
    >
      <Card
        sx={{
          height: '100%',
          bgcolor: mainColor,
          color: 'common.white',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: expanded ? 'flex-start' : 'center',
          padding: '0 20px',
          gap: 2,
          boxShadow: expanded ? 8 : 2,
          transition: 'all 0.3s ease-in-out',
          transform: expanded ? 'scale(1.05)' : 'scale(1)',
          background: expanded
            ? `linear-gradient(30deg, ${mainColor}, ${lightColor}, ${patternColor}, ${mainColor})`
            : mainColor,
          backgroundSize: '200% 200%',
          animation: expanded
            ? `${lavaLampExpand} 0.8s ease-in-out forwards`
            : undefined,
          '&:hover': {
            bgcolor: lightColor,
            animationPlayState: expanded ? 'paused' : 'running',
          },
        }}
      >
        {expanded && (
          <Box
            sx={{
              fontSize: 29,
              animation: `${iconFadeSlide} 1.2s ease-out forwards`,
              display: 'flex',
              alignItems: 'center',
              minWidth: '55px',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>
        )}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flex: 1,
          }}
        >
          {title}
        </Typography>
      </Card>
    </Box>
  );
}