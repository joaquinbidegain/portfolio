import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
  // Opcional: Imagen de fondo o degradado
  // backgroundImage: 'url(/ruta-a-tu-imagen.jpg)',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // background: 'linear-gradient(135deg, #e0f2f7, #b3e5fc)',
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
}));

const HeroButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 4),
  fontSize: '1.1rem',
}));

// Corrección: Usar la forma abreviada de la función flecha
const Hero = () => (
  <HeroContainer>
    <Container maxWidth="md">
      <HeroTitle variant="h1">¡Hola! Soy Joaquín Bidegain</HeroTitle>
      <HeroSubtitle variant="subtitle1">Desarrollador Full Stack apasionado por crear experiencias web increíbles.</HeroSubtitle>
      <Box>
        <HeroButton variant="contained" color="primary" sx={{ mr: 2 }}>
          Ver Proyectos
        </HeroButton>
        <HeroButton variant="outlined" color="primary">
          Contáctame
        </HeroButton>
      </Box>
    </Container>
  </HeroContainer>
);

export default Hero;