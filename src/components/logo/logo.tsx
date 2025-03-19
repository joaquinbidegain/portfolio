import { styled, keyframes } from '@mui/system';
import { forwardRef, useId, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { RouterLink } from 'src/routes/components';
import { logoClasses } from './classes';

// Definición de animaciones para el texto
const typeIn = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const popIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`;

// Componentes estilizados para el texto
const LogoTextContainer = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: 'monospace',
  position: 'relative',
  overflow: 'hidden',
  height: '1.5rem', // Establece una altura fija para el contenedor del logo
}));

const LogoText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'typing',
})<{ typing: boolean }>(({ typing, theme }) => ({
  fontWeight: 1200,
  letterSpacing: '.1rem',
  color: theme.palette.primary.main,
  fontSize: '1.50rem',
  position: 'relative',
  whiteSpace: 'nowrap',
  ...(typing && {
    '&::after': {
      content: '""',
      position: 'absolute',
      right: '-4px',
      animation: `${blink} 1s step-end infinite`,
    },
  }),
}));

const Brace = styled('span')(({ theme }) => ({
  fontWeight: 800,
  color: theme.palette.primary.main,
  transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.9s ease',
  display: 'inline-block',
  fontFamily: 'inherit',
  verticalAlign: 'middle',
  lineHeight: '1', // Evita alineaciones raras
  fontSize: 'inherit', // Mantiene coherencia con el texto principal
  opacity: 1,

  '&:hover': {
    transform: 'scale(1.2)',
    opacity: 0.9, // Ligero fade al hacer hover
  },
  '&:active': {
    opacity: 0.8, // Un poco más de fade al hacer clic
  },
  '&::before, &::after': {
    visibility: 'hidden',
    opacity: 0,
    transition: 'opacity 0.3s ease', // Transición también para estos elementos
  }
}));

const LogoChar = styled('span')<{ delay: number }>(({ delay }) => ({
  display: 'inline-block',
  animation: `${popIn} 0.5s ease forwards`,
  animationDelay: `${delay * 0.1}s`,
  opacity: 0,
  transform: 'scale(0)',
}));

export type LogoProps = {
  href?: string;
  isSingle?: boolean;
  disableLink?: boolean;
} & React.ComponentProps<typeof Box>;

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ width, href = '/', height, isSingle = true, disableLink = false, className, sx, ...other }, ref) => {
    const theme = useTheme();
    const [isTyping, setIsTyping] = useState(true);
    const [text, setText] = useState("");
    const fullText = "JoaCoCodes";
    
    // Efecto de escritura
    useEffect(() => {
      if (isTyping && text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 150);
    
        return () => clearTimeout(timeout);
      }
    
      if (text.length === fullText.length) {
        setIsTyping(false);
      }
    
      return undefined;
    }, [text, isTyping]);    
    
    // Reiniciar animación al hacer hover
    const handleMouseEnter = () => {
      if (!isTyping && text.length === fullText.length) {
        setText("");
        setIsTyping(true);
      }
    };

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : '')}
        aria-label="Logo"
        onMouseEnter={handleMouseEnter}
        sx={{
          flexShrink: 0,
          display: 'inline-flex',
          textDecoration: 'none !important', // Asegura que el enlace no tenga subrayado
          verticalAlign: 'middle',
          position: 'relative',
          alignItems: 'center',
          ...(disableLink && { pointerEvents: 'none' }),
          ...sx,
        }}
        {...other}
      >
        {/* Logo animado con texto */}
        <LogoTextContainer>
          <Brace>{"{"}</Brace>
          <LogoText typing={isTyping}>
            {text.split('').map((char, index) => (
              <LogoChar key={index} delay={index}>
                {char}
              </LogoChar>
            ))}
          </LogoText>
          <Brace>{"}"}</Brace>
        </LogoTextContainer>
      </Box>
    );
  }
);