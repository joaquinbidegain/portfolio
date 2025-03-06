import React from 'react';
import { Box, Typography, Button, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/assets/background/overlay.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.24,
    zIndex: -1,
  },
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

const HeroCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  padding: theme.spacing(4),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Sombra personalizada
  textAlign: 'center',
  position: 'relative',
  zIndex: 1, // Asegura que la HeroCard esté por encima del pseudo-elemento
}));

export function HomeView() {
  return (
    <HeroContainer>
      <Container maxWidth="md">
        <HeroCard>
          <CardContent>
            <HeroTitle variant="h1">¡Hola! Soy Joaquín Bidegain</HeroTitle>
            <HeroSubtitle variant="subtitle1">
              Desarrollador Full Stack apasionado por crear experiencias web increíbles.
            </HeroSubtitle>
            <Box>
              <HeroButton variant="contained" color="primary" sx={{ mr: 2 }}>
                Explorar
              </HeroButton>
              <HeroButton variant="outlined" color="primary">
                Contáctame
              </HeroButton>
            </Box>
          </CardContent>
        </HeroCard>
      </Container>
    </HeroContainer>
  );
}