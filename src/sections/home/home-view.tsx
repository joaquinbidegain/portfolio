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
  minHeight: '100vh', // Use minHeight to allow content to grow
  display: 'flex',
  flexDirection: 'column', // Mobile-first: vertical stack
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
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
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row', // Desktop: side-by-side
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    height: '100vh', // Restore full height for desktop
  },
}));

// Styled text section
const TextSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    textAlign: 'left',
    flex: 1,
    maxWidth: '50%', // Limit to half the screen on desktop
  },
}));

// Styled text components
const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
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
  alignItems: 'center', // Center on mobile
  [theme.breakpoints.up('lg')]: {
    flex: 1,
    width: 'auto',
    alignItems: 'flex-end', // Align to the right on desktop
    maxWidth: '50%', // Limit to half the screen
  },
}));

// Styled container for the top row of cards ("Work" and "About us")
const TopCardsRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  justifyContent: 'center', // Center on mobile
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row', // Side by side on desktop
    width: '80%', // Match the original desktop design
    justifyContent: 'flex-end', // Align to the right
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
  height: '150px', // Set a consistent height for all cards on mobile
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
    width: '100%', // Full width for all cards on mobile
  },
  [theme.breakpoints.down('sm')]: {
    height: '150px', // Set a consistent height for all cards on mobile
    padding: theme.spacing(1.5),
  },
  [theme.breakpoints.up('lg')]: {
    width: isWide ? '80%' : 'auto', // Restore original desktop widths
    flex: isWide ? 'none' : 1, // Ensure "Work" and "About us" split evenly
    height: isWide ? '200px' : '150px', // Restore original desktop heights
  },
}));

export function HomeView() {
  return (
    <HeroContainer>
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