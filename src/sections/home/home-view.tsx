import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

// Define the custom props for StyledCard
interface StyledCardProps {
  bgcolor?: string;
  isWide?: boolean;
}

// Styled container for the hero section
const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    height: '100vh',
  },
}));

// Styled SVG wrapper to ensure it fills the background
const BackgroundSVG = styled('svg')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  '& #backgroundImage': {
    animation: 'lavaFlow 8s ease-in-out infinite, opacityFlow 8s ease-in-out infinite, colorShift 8s ease-in-out infinite',
    transformOrigin: 'center',
  },
  '@keyframes lavaFlow': {
    '0%': { transform: 'translate(0, 0) scale(1,1)' },
    '25%': { transform: 'translate(150px, 150px) scale(1.8, 1.3)' },
    '50%': { transform: 'translate(-150px, -150px) scale(1.3, 1.5)' },
    '75%': { transform: 'translate(100px, -100px) scale(1.5, 1.2)' },
    '100%': { transform: 'translate(0, 0) scale(1,1)' },
  },
  '@keyframes opacityFlow': {
    '0%': { opacity: 0.8 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.8 },
  },
  '@keyframes blurEffect': {
    '0%': { filter: 'blur(10px) hue-rotate(0deg)' },
    '50%': { filter: 'blur(15px) hue-rotate(45deg)' },
    '100%': { filter: 'blur(10px) hue-rotate(0deg)' },
  },
  '@keyframes colorShift': {
    '0%': { fill: '#ff4500' },
    '50%': { fill: '#ff6347' },
    '100%': { fill: '#ff4500' },
  },
});


// Styled text section
const TextSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  width: '100%',
  zIndex: 1, // Ensure text is above the background
  [theme.breakpoints.up('lg')]: {
    textAlign: 'left',
    flex: 1,
    maxWidth: '50%',
  },
}));

// Styled text components
const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.main,
  [theme.breakpoints.up('sm')]: {
    fontSize: '4.5rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  fontSize: '0.9rem',
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 4),
    fontSize: '1.1rem',
  },
}));

// Styled container for the cards section
const CardsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  padding: theme.spacing(2),
  alignItems: 'center',
  zIndex: 1, // Ensure cards are above the background
  [theme.breakpoints.up('lg')]: {
    flex: 1,
    width: 'auto',
    alignItems: 'flex-end',
    maxWidth: '50%',
  },
}));

// Styled container for the top row of cards ("Work" and "About us")
const TopCardsRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  justifyContent: 'center',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'flex-end',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

// Styled component for individual cards with effects
const StyledCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'bgcolor' && prop !== 'isWide',
})<StyledCardProps>(({ theme, bgcolor, isWide }) => ({
  width: '100%',
  height: '150px',
  borderRadius: '24px',
  backgroundColor: bgcolor || '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    backgroundColor: bgcolor ? `${bgcolor}CC` : '#fff',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    height: '150px',
    padding: theme.spacing(1.5),
  },
  [theme.breakpoints.up('lg')]: {
    width: isWide ? '80%' : 'auto',
    flex: isWide ? 'none' : 1,
    height: isWide ? '200px' : '150px',
  },
}));

export function HomeView() {
  return (
    <HeroContainer>
      {/* SVG Background with Animation */}
      <BackgroundSVG
        width="100%"
        height="100%"
        viewBox="0 0 1440 1080"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="1440" height="1080" fill="url(#pattern0_1_2)" fillOpacity="0.44" />
        <defs>
          <pattern id="pattern0_1_2" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#backgroundImage" transform="scale(0.00069990 0.000989999)" />
          </pattern>
          <image
            id="backgroundImage"
            width="1440"
            height="1080"
            preserveAspectRatio="none"
            xlinkHref="/assets/background/svgoverlay.svg" // Your original image path
          />
        </defs>
      </BackgroundSVG>

      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', lg: 'row' }}
          alignItems="center"
          justifyContent={{ xs: 'center', lg: 'space-between' }}
        >
          {/* Text Section */}
          <TextSection>
            <HeroTitle variant="h1">¡Hola! Soy Joaquín Bidegain</HeroTitle>
            <HeroSubtitle variant="subtitle1">
              Bienvenido a mi portfolio web, el mismo es interactivo pruebalo!
            </HeroSubtitle>
            <Box>
              <HeroButton variant="contained" color="primary" sx={{ mr: 2 }}>
                Explorar
              </HeroButton>
              <HeroButton variant="outlined" color="primary">
                Contáctame
              </HeroButton>
            </Box>
          </TextSection>

          {/* Cards Section */}
          <CardsSection>
            <TopCardsRow>
              <StyledCard bgcolor="#fff">
                <Typography variant="h6">Work</Typography>
              </StyledCard>
              <StyledCard bgcolor="#2E2E2E">
                <Typography variant="h6" color="white">
                  About us
                </Typography>
              </StyledCard>
            </TopCardsRow>
            <StyledCard bgcolor="#FFD54F" isWide>
              <Typography variant="h6">Contact us</Typography>
            </StyledCard>
          </CardsSection>
        </Box>
      </Container>
    </HeroContainer>
  );
}