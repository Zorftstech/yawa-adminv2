import axios from 'axios';
import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Link, Card, Stack, Typography, IconButton, InputLabel, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'src/routes/hooks';
import { bgGradient } from 'src/theme/css';
import Logo from 'src/components/logo';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Optional: Uncomment if you need an icon for navigation

// ----------------------------------------------------------------------

export default function ForgotPasswordView() {
  // Retrieve the current theme and router instance
  const theme = useTheme();
  const router = useRouter();

  // State variables for managing form input, loading, and error states
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = 'https://api.yawaapp.com.ng/api/admin/auth/login'; // URL for password reset API

    setLoading(true);
    setError(null);

    try {
      // Send POST request to the API with email
      const response = await axios.post(apiUrl, { email }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);

      // Redirect to dashboard if request is successful
      if (response.status === 200) {
        router.push('/dashboard');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (catchError) {
      setLoading(false);
      // Display error message if request fails
      setError(catchError.response?.data?.message || 'Invalid Credentials');
    }
  };

  // Validate email format
  const isEmailValid = (emailAddress) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);

  // Label for the checkbox (not used in this component, but included for completeness)
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

        <Typography variant='h4' style={{ marginBottom: 30, textAlign: 'center' }}>
          Forgot Password?
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
            <Stack spacing={2} sx={{ display: 'grid', width: '100%' }}>
              <InputLabel htmlFor='email'>
                Email
              </InputLabel>
              <TextField
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!email && !isEmailValid(email)}
                helperText={!!email && !isEmailValid(email) ? 'Enter a valid email' : ''}
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
                mt: 5,
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
              Reset Password
            </LoadingButton>
          </form>
        </Card>

        <Stack direction='row' alignItems='center' justifyContent='center' sx={{ my: 3 }}>
          <IconButton onClick={() => router.push('/login')}>
            <img src='assets/icons/Feather_Icons.svg' alt=''/>
          </IconButton>
          <Link 
            variant='subtitle2' 
            underline='hover' 
            onClick={() => router.push('/login')}
            sx={{
              color: '#204D88'
            }}
          >
            Return to Log in
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
