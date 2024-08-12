import React, { useState } from 'react';
import axios from 'axios';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Link, Card, Stack, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'src/routes/hooks';
import { bgGradient } from 'src/theme/css';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.yawaapp.com.ng/api/admin/auth/login';
  
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.post(apiUrl, { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      setLoading(false);
  
      if (response.status === 200) {
        // Handle successful login
        router.push('/dashboard');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (catchError) { // Rename the variable to avoid shadowing
      setLoading(false);
      setError(catchError.response.data.message || 'Invalid Credentials');
    }
  };
  
  

  const isEmailValid = emailAddress => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
      }}
    >
      <Stack
        sx={{
          width: '50%',
          p: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo sx={{ mb: 5 }} />

        <Card
          sx={{
            p: 5,
            width: '100%',
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" style={{ marginBottom: 60 }}>Sign in to Yawa App</Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                name="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!email && !isEmailValid(email)}
                helperText={!!email && !isEmailValid(email) ? 'Enter a valid email' : ''}
              />

              <TextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
              <Link variant="subtitle2" underline="hover">
                Forgot password?
              </Link>
            </Stack>

            {error && (
              <Typography color="error" sx={{ mb: 3 }}>
                {error}
              </Typography>
            )}

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="inherit"
              loading={loading}
              disabled={!email || !password || !!(email && !isEmailValid(email))}
            >
              Login
            </LoadingButton>
          </form>
        </Card>
      </Stack>

      <Box
        sx={{
          width: '50%',
          backgroundImage: 'url("https://yawaapp.com.ng/oakuglek/2024/05/11shots_so.png")', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
}
