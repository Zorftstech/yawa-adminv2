import React, { useState } from 'react';
import axios from 'axios';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Link, Card, Stack, Typography, IconButton, InputAdornment, InputLabel, TextField, Checkbox } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'src/routes/hooks';
import { bgGradient } from 'src/theme/css';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function LoginView() {
  // Retrieve the current theme and router instance
  const theme = useTheme();
  const router = useRouter();

  // State variables for managing form input and loading/error states
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = 'https://api.yawaapp.com.ng/api/admin/auth/login';

    setLoading(true);
    setError(null);

    try {
      // Send POST request to the API with email and password
      const response = await axios.post(apiUrl, { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);

      // Redirect to dashboard if login is successful
      if (response.status === 200) {
        router.push('/dashboard');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (catchError) {
      setLoading(false);
      // Display error message if login fails
      setError(catchError.response?.data?.message || 'Invalid Credentials');
    }
  };

  // Validate email format
  const isEmailValid = (emailAddress) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);

  // Label for the checkbox
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
      }}
    >
      <Stack
        sx={{
          width: '45%',
          height: '104%',
          p: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo sx={{ mb: 6 }} />

        <Typography variant='h4' style={{ marginBottom:30, textAlign: 'center' }}>
          Log in to your account
        </Typography>

        <Card
          sx={{
            p: 4, // Padding around the card content
            width: '100%', // Full width of the card
            maxWidth: 659,
            borderRadius: 1,
            boxSizing: 'border-box', // Ensures padding is included in width and height calculations
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ 
              display: 'grid',
              width: '100%' 
            }}>
              <InputLabel htmlFor='email'>
                Email
              </InputLabel>
              <TextField
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!email && !isEmailValid(email)}
                placeholder='Enter your email address'
                inputProps={{
                  'aria-label': 'Email',
                }}
                fullWidth
                size='small'
                sx={{
                  '& .MuiInputBase-root': {
                    boxSizing: 'border-box', // Ensures padding is included in width and height calculations
                  },
                  py: 0,
                }}
              />

              <InputLabel htmlFor='password'>
                Password
              </InputLabel>
              <TextField
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                size='small'
                sx={{
                  '& .MuiInputBase-root': {
                    boxSizing: 'border-box', // Ensures padding is included in width and height calculations
                  },
                }}
              />
            </Stack>

            <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ my: 3 }}>
              <span><Checkbox {...label} /> Remember me</span>
              <Link variant='subtitle2' underline='hover' href='/forgot-password'>
                Forgot password?
              </Link>
            </Stack>

            {error && (
              <Typography color='error' sx={{ mb: 3 }}>
                {error}
              </Typography>
            )}

            <LoadingButton
              fullWidth
              type='submit'
              variant='contained'
              size='medium'
              sx={{
                py: 1,
                backgroundColor: '#03BDE9',
                color: '#FFF',
                '&:hover': {
                  backgroundColor: '#02A8D1',
                },
                boxSizing: 'border-box', // Ensures padding is included in width and height calculations
              }}
              loading={loading}
            >
              Log in
            </LoadingButton>
          </form>
        </Card>
      </Stack>
    </Box>
  );
}
