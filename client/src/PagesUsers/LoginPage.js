import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ClearErrors, Login } from '../Redux/UserSlice';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const LoginPage = () => {
  
  const navigate = useNavigate()
  const isAuth = useSelector(state=> state.User.isAuth)
  const LoginErrors = useSelector(state=> state.User.LoginErrors)
  useEffect(()=>{
  dispatch(ClearErrors())
  if(isAuth){
    navigate('/Acceuil')
  }
  else {
    
    navigate('/')
  }
  },[isAuth])
  const [user,setUser] = useState({})
  const HandleChange = (e)=>{
    setUser({...user,[e.target.name] : e.target.value})
  }

  const dispatch = useDispatch()
  const SignIn = (e)=>{
    e.preventDefault()
    dispatch(Login(user))
    navigate('/')
  }
  return (
    <div>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
            onChange={HandleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <p>{LoginErrors && LoginErrors?.email?.msg}</p>
           
            <TextField
            onChange={HandleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              
            />
                        <p>{LoginErrors && LoginErrors?.password?.msg}</p>

          
            
            
            <Button
            onClick={SignIn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Nav.Link as={Link} to="/">Acceuil</Nav.Link>
            <Grid container>
              
              <Grid item>
                <Nav.Link as={Link} to="/Register" variant="body2">
                Register
                </Nav.Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default LoginPage 