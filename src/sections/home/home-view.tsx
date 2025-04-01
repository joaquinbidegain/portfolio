import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import { useTranslation } from 'react-i18next';
import BackgroundSVGComponent from '../../components/BackgroundSVG';


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


// Styled text section
const TextSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  width: '100%',
  zIndex: 1, // Ensure text is above the background
  [theme.breakpoints.up('lg')]: {
    textAlign: 'left',
    flex: 1,
    maxWidth: '90%',
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

const HeroButton = styled(Button)<{ component?: React.ElementType; to?: string }>(({ theme }) => ({
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


export function HomeView() {
  const { t } = useTranslation();
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Obtiene los textos traducidos
  const texts: string[] = t('hero.titles', { returnObjects: true }) as string[];
  
  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 70 : 100;

    const type = () => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);


  return (
    <HeroContainer>
      {/* SVG Background con animación (sin cambios) */}
      <BackgroundSVGComponent />

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
              {t('hero.greeting')}<br />
              {displayedText}
              <span className="cursor"> </span>
            </HeroTitle>
            <HeroSubtitle variant="h2">
              {t('hero.subtitle')}
            </HeroSubtitle>
            <Box>
              <HeroButton variant="contained" color="primary" sx={{ mr: 2 }}>
                {t('hero.buttons.explore')}
              </HeroButton>
              <HeroButton
                variant="outlined"
                color="primary"
                component={Link} // Usa el componente Link
                to="/contact" // Especifica la ruta de redirección
              >             
                {t('hero.buttons.contact')}
              </HeroButton>
            </Box>
          </TextSection>
        </Box>
      </Container>
    </HeroContainer>
  );
}
