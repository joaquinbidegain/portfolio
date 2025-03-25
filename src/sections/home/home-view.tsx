import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState, useEffect } from 'react';

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
    animation: 'lavaFlow 6s ease-in-out infinite, opacityFlow 2s ease-in-out infinite, colorShift 3s ease-in-out infinite',
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
    maxWidth: '80%',
  },
}));


const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
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

// Estilo para el título con animación
const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '4.0rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.light,
  [theme.breakpoints.up('sm')]: {
    fontSize: '4.5rem',
  },
  '& .cursor': {
    display: 'inline-block',
    width: '0.5rem',
    height: '4rem',
    backgroundColor: theme.palette.primary.light,
    verticalAlign: 'middle',
    animation: 'blink 1s step-end infinite',
    marginLeft: '4px',
  },
  '@keyframes blink': {
    '50%': { opacity: 0 },
  },
}));

// Lista de textos para la animación
const texts = [
  "Soy Joaquin Bidegain.",
  "Soy Joaco",
  "Bienvenido a JoacoCodes.",
];

export function HomeView() {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Velocidad de escritura/borrado

    const type = () => {
      if (!isDeleting && charIndex < currentText.length) {
        // Escribiendo
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Borrando
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Pausa antes de borrar
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        // Cambiar al siguiente texto
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <HeroContainer>
      {/* SVG Background con animación (sin cambios) */}
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
            xlinkHref="/assets/background/svgoverlay.svg"
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
          {/* Sección de texto */}
          <TextSection>
            <HeroTitle variant="h1">
              ¡Hola!<br />
              {displayedText}
              <span className="cursor"> </span>
            </HeroTitle>
            <HeroSubtitle variant="h2">
              Bienvenido a mi portfolio web, el mismo es interactivo ¡pruébalo!
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
        </Box>
      </Container>
    </HeroContainer>
  );
}
