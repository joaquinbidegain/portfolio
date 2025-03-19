// src/views/BlogView.tsx
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { usePosts } from 'src/_mock/cvData';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
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
    setIsAutoPlaying(false); // Pausa la animación automática
    setExpandedIndex(index); // Expande la tarjeta seleccionada
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true); // Reanuda la animación automática
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