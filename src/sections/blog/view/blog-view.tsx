import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _posts } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

import { PostItem } from '../post-item';

// ----------------------------------------------------------------------

export function BlogView() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const postsToShow = _posts.slice(0, 3);
  
  // Efecto para cambiar la card expandida cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setExpandedIndex((prevIndex) => (prevIndex + 1) % postsToShow.length);
    }, 3000); // Cambia cada 3 segundos
    
    return () => clearInterval(interval);
  }, [postsToShow.length]);

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

      <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
        {/* Comentado como en el original */}
      </Box>

      {/* Aquí cambiamos de Grid a Flex para tener más control sobre el ancho */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {postsToShow.map((post, index) => {
          const latestPostLarge = index === 0;
          const latestPost = index === 1 || index === 2;
          const isExpanded = index === expandedIndex;

          return (
            <Box
              key={post.id}
              sx={{
                width: isExpanded ? '60%' : '18%',
                flexGrow: isExpanded ? 1 : 0,
                flexShrink: 0,
                transition: 'all 0.8s ease-in-out',
                height: '400px', // Altura fija para todas las cards
                '@media (max-width: 900px)': {
                  width: isExpanded ? '100%' : '45%',
                },
                '@media (max-width: 600px)': {
                  width: '100%',
                }
              }}
            >
              <PostItem 
                post={post} 
                latestPost={latestPost} 
                latestPostLarge={latestPostLarge} 
                sx={{
                  height: '100%',
                  transition: 'box-shadow 0.8s ease-in-out',
                  position: 'relative',
                  zIndex: isExpanded ? 10 : 1,
                  boxShadow: isExpanded ? '0 8px 24px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)'
                }}
              />
            </Box>
          );
        })}
      </Box>
    </DashboardContent>
  );
}