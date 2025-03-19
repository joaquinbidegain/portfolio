import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TypePost,Colors } from 'src/types/post';

import { useTranslation } from 'react-i18next'; // Importa useTranslation
import '../../i18n'; // Asegúrate de que la ruta a i18n.js sea correcta


interface TranslatedPost {
  id: string;
  title: string;
  description: string;
  category: "Trabajo" | "Estudios" | "Skills" | "Proyectos";
}


// Componente principal
export function ColorfulPostItem({ post, colors, expanded }: { post: TypePost; colors: Colors; expanded: boolean }) {
  const { t, i18n } = useTranslation();

  // Obtener traducciones de los posts desde el archivo JSON
  const translatedPosts = t('posts', { returnObjects: true }) as TranslatedPost[] || [];

  // Buscar el post traducido por id
  const postTranslated = translatedPosts.find(translatedPost => translatedPost.id === post.id);

  return (
    <Card
      sx={{
        height: '100%',
        bgcolor: colors.main,
        color: 'common.white',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.8s ease-in-out',
        boxShadow: expanded ? '0 8px 24px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '60%',
          height: '60%',
          opacity: 0.1,
          bgcolor: colors.light,
          borderTopRightRadius: '100%',
          transition: 'all 0.8s ease-in-out',
          transform: expanded ? 'scale(1.2)' : 'scale(1)',
        }}
      />
      
      <CardContent sx={{ position: 'relative', zIndex: 1, p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.8)' }}>
          {/* {post.duration} */}
        </Typography>
        
        <Typography variant="h5" sx={{ mt: 1, mb: 2, fontWeight: 'bold' }}>
          {postTranslated ? postTranslated.title : post.title}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            opacity: expanded ? 1 : 0.7,
            transition: 'opacity 0.8s ease-in-out',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: expanded ? 4 : 2,
            overflow: 'hidden',
          }}
        >
          {postTranslated ? postTranslated.description : post.description}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto', opacity: expanded ? 1 : 0.5 }}>
          <Box component="img" src={post.author.avatarUrl} sx={{ width: 32, height: 32, borderRadius: '50%', mr: 1 }} />
          <Typography variant="subtitle2">
            {post.author.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
