import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { usePosts } from 'src/_mock/cvData';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import BackgroundSVGComponent from 'src/components/BackgroundSVG';
import { ColorfulPostItem } from '../color-item';

interface Colors {
  main: string;
  light: string;
  pattern: string;
}

const colorSchemes: Colors[] = [
  {
    main: 'primary.main',
    light: 'primary.lighter',
    pattern: 'primary.dark'
  },
  {
    main: 'secondary.main',
    light: 'secondary.lighter',
    pattern: 'secondary.dark'
  },
  {
    main: 'info.main',
    light: 'info.lighter',
    pattern: 'info.dark'
  }
];

export function BlogView() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const posts = usePosts();
  const postsToShow = posts.slice(0, 3);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setExpandedIndex((prevIndex) => (prevIndex + 1) % postsToShow.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [postsToShow.length, isAutoPlaying]);

  const handleMouseEnter = (index: number) => {
    setIsAutoPlaying(false);
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Blog
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          New post
        </Button>
      </Box>

      {/* Sección de descripción personal con fondo SVG */}
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '400px',
            padding: 2,
            borderRadius: 1,
            overflow: 'hidden',
            transition: 'all 0.8s ease-in-out',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo semitransparente
            backdropFilter: 'blur(5px)', // Efecto de desenfoque para profundidad
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sombra suave
            animation: 'float 7s ease-in-out infinite', // Animación de flotación
            '@media (max-width: 900px)': {
              width: '45%',
            },
            '@media (max-width: 600px)': {
              width: '100%',
            },
            '@keyframes float': {
              '0%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
              '100%': { transform: 'translateY(0px)' },
            },
          }}
        >
          <BackgroundSVGComponent /> {/* Fondo SVG */}
          
          {/* Card estilo “reproductor” */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <Box
             sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 320,
              height: 300,
              bgcolor: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro semi-transparente
              backdropFilter: 'blur(10px)', // Desenfoque para un efecto de vidrio esmerilado
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', // Sombra más pronunciada para realce
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white', // Texto blanco para contraste
            }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Aquí podrías poner tu título o texto principal
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, mb: 2, textAlign: 'center' }}>
                Aquí el texto descriptivo, como una breve presentación o contenido que quieras mostrar, similar al estilo de un reproductor.
              </Typography>

            </Box>
          </Box>

        </Box>
      </Box>

      {/* Sección de las cards */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {postsToShow.map((post, index) => {
          const isExpanded = index === expandedIndex;
          const colorScheme = colorSchemes[index % colorSchemes.length];

          return (
            <Box
              key={post.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              sx={{
                width: isExpanded ? '60%' : '18%',
                flexGrow: isExpanded ? 1 : 0,
                flexShrink: 0,
                height: '400px',
                transition: 'all 0.8s ease-in-out',
                overflow: 'hidden',
                '@media (max-width: 900px)': {
                  width: isExpanded ? '100%' : '45%',
                },
                '@media (max-width: 600px)': {
                  width: '100%',
                }
              }}
            >
              <ColorfulPostItem
                post={post}
                colors={colorScheme}
                expanded={isExpanded}
              />
            </Box>
          );
        })}
      </Box>
    </DashboardContent>
  );
}
