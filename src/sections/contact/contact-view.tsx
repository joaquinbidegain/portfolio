import { Box, Container, TextField, Button, Typography, Divider, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { Iconify } from 'src/components/iconify';
import BackgroundSVGComponent from 'src/components/BackgroundSVG';

// Styled container for the contact section
const ContactContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4),
    height: '100vh',
  },
}));

// Styled container for the card
const CardContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(4),
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
  position: 'relative',
  zIndex: 1,
  maxWidth: 480,
}));

// Contact form component
export function ContactView() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderForm = (
    <Box display="flex" flexDirection="column">
      <TextField
        fullWidth
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        label="Mensaje"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        margin="normal"
        required
        InputLabelProps={{ shrink: true }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        sx={{ mt: 3 }}
      >
        Enviar Mensaje
      </Button>
    </Box>
  );

  return (
    <ContactContainer>
      <BackgroundSVGComponent />

      <CardContainer maxWidth="sm">
        <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
          <Typography variant="h4">Contáctame</Typography>
          <Typography variant="body2" color="text.secondary">
            ¿Tienes alguna pregunta? Escríbeme
          </Typography>
        </Box>

        {renderForm}

        <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}
          >
            O
          </Typography>
        </Divider>

        <Box gap={1} display="flex" justifyContent="center">
          <IconButton color="inherit">
            <Iconify icon="logos:google-icon" />
          </IconButton>
          <IconButton color="inherit">
            <Iconify icon="eva:github-fill" />
          </IconButton>
          <IconButton color="inherit">
            <Iconify icon="ri:twitter-x-fill" />
          </IconButton>
        </Box>
      </CardContainer>
    </ContactContainer>
  );
}