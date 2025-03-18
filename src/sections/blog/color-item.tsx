import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Post } from 'src/types/post';

interface Colors {
  main: string;
  light: string;
  pattern: string;
}

// Componente SVG para el patrón decorativo elegante
const CardPattern = ({ color, opacity = 0.2 }: { color: string; opacity?: number }) => (
  <Box
    component="svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    sx={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: '140px',
      height: '140px',
      opacity,
      overflow: 'hidden',
    }}
  >
    {/* Fondo de ondas suaves */}
    <path
      d="M0 100 Q25 80 50 100 T100 100"
      fill="none"
      stroke={color}
      strokeWidth="1"
      opacity="0.5"
    />
    <path
      d="M0 90 Q30 70 60 90 T100 90"
      fill="none"
      stroke={color}
      strokeWidth="1"
      opacity="0.3"
    />

    {/* Círculos concéntricos con gradiente */}
    <circle
      cx="80"
      cy="20"
      r="20"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      opacity="0.8"
    />
    <circle
      cx="80"
      cy="20"
      r="15"
      fill="none"
      stroke={color}
      strokeWidth="1"
      opacity="0.6"
    />

    {/* Líneas curvas decorativas */}
    <path
      d="M70 10 Q85 0 100 10"
      fill="none"
      stroke={color}
      strokeWidth="0.8"
      opacity="0.7"
    />
    <path
      d="M65 25 Q80 15 95 25"
      fill="none"
      stroke={color}
      strokeWidth="0.6"
      opacity="0.5"
    />
  </Box>
);

// Componente principal
export function ColorfulPostItem({ post, colors, expanded }: { post: Post; colors: Colors; expanded: boolean }) {
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
      <CardPattern color={colors.pattern} opacity={expanded ? 0.3 : 0.15} />
      
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
          {post.title}
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
          {post.description}
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mt: 'auto', // Empuja la Box hacia la parte inferior
            opacity: expanded ? 1 : 0.5,
            transition: 'opacity 0.8s ease-in-out',
          }}
        >
          <Box 
            component="img" 
            src={post.author.avatarUrl} 
            sx={{ 
              width: 32, 
              height: 32, 
              borderRadius: '50%',
              mr: 1
            }} 
          />
          <Typography variant="subtitle2">
            {post.author.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}