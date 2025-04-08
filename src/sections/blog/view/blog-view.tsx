import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { useTranslation } from 'react-i18next';

import { AnalyticsOrderTimeline } from 'src/sections/overview/analytics-order-timeline';
import { experienceList, educationList } from 'src/sections/blog/timeline-data';
import { fDateTime } from 'src/utils/format-time';
import { ColorfulPostItem } from '../color-item';

// Definición de tipos
interface Colors {
  main: string;
  light: string;
  pattern: string;
}

interface Technology {
  name: string;
  logo: string;
}

interface MainTopic {
  id: string;
  title: string;
  description: string;
  posts: { id: string; title: string; description: string }[];
}

const colorSchemes: Colors[] = [
  { main: 'primary.main', light: 'primary.lighter', pattern: 'primary.dark' },
  { main: 'secondary.main', light: 'secondary.lighter', pattern: 'secondary.dark' },
  { main: 'info.main', light: 'info.lighter', pattern: 'info.dark' },
];

const technologies: Technology[] = [
  { name: 'Java', logo: 'logos:java' },
  { name: 'Spring Boot', logo: 'logos:spring-icon' },
  { name: 'Maven', logo: 'logos:maven' },
  { name: 'Gradle', logo: 'logos:gradle' },
  { name: 'Git', logo: 'logos:git-icon' },
  { name: 'Linux', logo: 'logos:linux-tux' },
  { name: 'JavaScript', logo: 'logos:javascript' },
  { name: 'TypeScript', logo: 'logos:typescript-icon' },
  { name: 'React', logo: 'logos:react' },
];

export function BlogView() {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const mainTopics: MainTopic[] = t('main_topics', { returnObjects: true }) as MainTopic[];
  const topicsToShow: MainTopic[] = mainTopics.slice(0, 3);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setExpandedIndex((prevIndex) => (prevIndex + 1) % topicsToShow.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [topicsToShow.length, isAutoPlaying]);

  const handleMouseEnter = (index: number) => {
    setIsAutoPlaying(false);
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const sectionRefs = {
    post1: useRef<HTMLDivElement>(null),
    post2: useRef<HTMLDivElement>(null),
    post3: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
  };

  const handleCardClick = (index: number) => {
    const targetSection = 
    index === 0 ? 'post1' : 
    index === 1 ? 'post2' : 
    'skills';
    sectionRefs[targetSection as keyof typeof sectionRefs].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <DashboardContent>
      <Box
        sx={{
          position: 'relative',
          mb: 5,
          p: 4,
          borderRadius: 2,
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z16,
          overflow: 'hidden',
        }}
      >
        <Box position="relative" zIndex={1}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            {t('blog_welcome_title')}
          </Typography>
          <Typography paragraph sx={{ color: 'text.secondary' }}>
            {t('blog_welcome_description_1')}
          </Typography>
          <Typography paragraph sx={{ color: 'text.secondary' }}>
            {t('blog_welcome_description_2')}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {topicsToShow.map((topic: MainTopic, index: number) => {
          const isExpanded = index === expandedIndex;
          const colorScheme = colorSchemes[index % colorSchemes.length];

          return (
          <ColorfulPostItem
            key={topic.id}
            title={topic.title}
            colors={colorScheme}
            expanded={isExpanded}
            index={index} // Pasamos el índice aquí
            onHoverStart={() => handleMouseEnter(index)}
            onHoverEnd={handleMouseLeave}
            onClick={() => handleCardClick(index)}
          />       
          );
        })}

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '60%' }, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              {t('more_content_title')}
            </Typography>
            <Typography paragraph sx={{ color: 'text.secondary' }}>
              {t('more_content_description_1')}
            </Typography>
            <Typography paragraph sx={{ color: 'text.secondary' }}>
              {t('more_content_description_2')}
            </Typography>
          </Box>

          <Box
            sx={{
              width: '18%',
              minWidth: 200,
              height: '400px',
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: (theme) => theme.customShadows.z8,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              '@media (max-width: 900px)': { width: '45%' },
              '@media (max-width: 600px)': { width: '100%' },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              {t('collaborate_title')}
            </Typography>
            <Typography paragraph sx={{ color: 'text.secondary', textAlign: 'center' }}>
              {t('collaborate_description')}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="mdi:email-edit-outline" />}
            >
              {t('contact_me_button')}
            </Button>
          </Box>
        </Box>
      </Box>

<Box ref={sectionRefs.post1} sx={{ mb: 10 }}>
  <Typography variant="h4" gutterBottom>
    {t('experience_section_title')}
  </Typography>
  <AnalyticsOrderTimeline 
    title="Experiencia Profesional"
    list={experienceList.map(item => ({
      ...item,
      time: fDateTime(item.time)
    }))}
    sx={{ mt: 3 }}
  />
</Box>

<Box ref={sectionRefs.post2} sx={{ mb: 10 }}>
  <Typography variant="h4" gutterBottom>
    {t('education_section_title')}
  </Typography>
  <AnalyticsOrderTimeline 
    title="Formación Académica"
    list={educationList.map(item => ({
      ...item,
      time: fDateTime(item.time)
    }))}
    sx={{ mt: 3 }}
  />
</Box>

      <Box
        ref={sectionRefs.skills}
        sx={{ mt: 10, mb: 10, width: '100%', textAlign: 'center', py: 8 }}
      >
        <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          {t('skills_section_title')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', mb: 6 }}
        >
          {t('skills_section_description')}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {technologies.map((tech: Technology) => (
            <Grid item key={tech.name} xs={6} sm={4} md={3} lg={2}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.5,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: (theme) => theme.customShadows.z8,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Iconify
                  icon={tech.logo}
                  width={48}
                  height={48}
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                />
                <Typography variant="subtitle2" component="span" sx={{ fontWeight: '500' }}>
                  {tech.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </DashboardContent>
  );
}