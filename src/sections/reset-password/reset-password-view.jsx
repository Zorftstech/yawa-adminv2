import React, { useState } from 'react';
import axios from 'axios';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Card, Stack, Typography, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'src/routes/hooks';
import { bgGradient } from 'src/theme/css';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ResetPasswordView() {
  // Retrieve the current theme and router instance
  const theme = useTheme();
  const router = useRouter();

  // State variables for managing form input, loading state, and error messages
  const [showPassword, setShowPassword] = useState(false); // Toggles password visibility
  const [password, setPassword] = useState(''); // Stores the password input
  const [verifyPassword, setVerifyPassword] = useState(''); // Stores the verify password input
  const [loading, setLoading] = useState(false); // Tracks loading state for the submit button
  const [error, setError] = useState(null); // Stores any error messages
  const [success, setSuccess] = useState(false) // Tracks success state

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if the password and verify password fields match
    if (password !== verifyPassword) {
      setError('Passwords do not match'); // Set error message if passwords do not match
      return; // Stop form submission if passwords do not match
    }

    // API endpoint for password reset (adjust URL as needed)
    const apiUrl = 'https://api.yawaapp.com.ng/api/admin/auth/login';

    setLoading(true); // Set loading state to true while the request is being processed
    setError(null); // Clear any existing error messages

    try {
      // Send a POST request to the API with the password
      const response = await axios.post(apiUrl, { password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false); // Set loading state to false after the request is complete

      // Redirect to the dashboard if the response is successful
      if (response.status === 200) {
        setSuccess(true); // set susccess state to true on successful response
      } else {
        // Set error message if login fails
        setError(response.data.message || 'Password reset failed');
      }
    } catch (catchError) {
      setLoading(false); // Set loading state to false if an error occurs
      // Set error message based on the response or a default message
      setError(catchError.response?.data?.message || 'Invalid Credentials');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        // Apply a background gradient to the entire container
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
      }}
    >
      <Stack
        sx={{
          width: '45%', // Set the width of the stack to 45% of the container
          height: '100%', // Full height of the container
          p: 5, // Padding of 5 units around the stack
          alignItems: 'center', // Center align items horizontally
          justifyContent: 'center', // Center align items vertically
        }}
      >
        <Logo sx={{ mb: 6 }} /> {/* Logo component with bottom margin */}

        <Typography variant='h4' sx={{ mb: 4, textAlign: 'center' }}>
          Reset Password
        </Typography> {/* Title text with bottom margin and centered alignment */}

        {success ? 
        <Card
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 659,
            borderRadius: 1,
            boxSizing: 'border-box',
            textAlign: 'center',
          }}
        >
          <img src='assets/icons/success.svg' alt=''/>
          <Typography variant='h4' sx={{ mb: 4 }}>
            Password Reset Successful
          </Typography>
          <Typography variant='body1' sx={{ mb: 4 }}>
            Your password has been successfully reset. You can now log in with your new password.
          </Typography>
          <LoadingButton
            fullWidth
            variant='contained'
            size='medium'
            sx={{
              py: 1,
              backgroundColor: '#03BDE9',
              color: '#FFF',
              '&:hover': {
                backgroundColor: '#02A8D1',
              },
              boxSizing: 'border-box',
            }}
            onClick={() => router.push('/login')}
          >
            Go to Login
          </LoadingButton>
        </Card>
       :
        <Card
          sx={{
            p: 4, // Padding of 4 units around the card content
            width: '100%', // Full width of the card
            maxWidth: 659, // Maximum width of the card
            borderRadius: 1, // Rounded corners for the card
            boxSizing: 'border-box', // Ensure padding is included in width and height calculations
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              {/* Password field */}
              <InputLabel htmlFor='password'>Password</InputLabel>
              <TextField
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'} // Toggle between text and password type based on state
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                placeholder='Enter your password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      {/* Icon button to toggle password visibility */}
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                size='small'
                sx={{ boxSizing: 'border-box' }}
              />

              {/* Verify Password field */}
              <InputLabel htmlFor='verify-password'>Verify Password</InputLabel>
              <TextField
                id='verify-password'
                name='verify-password'
                type={showPassword ? 'text' : 'password'} // Toggle between text and password type based on state
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)} // Update verifyPassword state on input change
                placeholder='Verify your password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      {/* Icon button to toggle password visibility */}
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                size='small'
                sx={{ boxSizing: 'border-box' }}
              />

              {/* Display error message if present */}
              {error && (
                <Typography color='error' sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
            </Stack>

            {/* Submit button */}
            <LoadingButton
              fullWidth
              type='submit'
              variant='contained'
              size='medium'
              sx={{
                py: 1,
                mt: 3,
                backgroundColor: '#03BDE9', // Button color
                color: '#FFF', // Text color
                '&:hover': {
                  backgroundColor: '#02A8D1', // Hover color
                },
                boxSizing: 'border-box',
              }}
              loading={loading} // Display loading spinner if loading state is true
            >
              Confirm
            </LoadingButton>
          </form>
        </Card>
        }  
      </Stack>
    </Box>
  );
}
