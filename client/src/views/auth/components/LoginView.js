import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import FacebookIcon from '../../../icons/Facebook';
import GoogleIcon from '../../../icons/Google';
import Page from '../../../components/Page';
import client from '../../../services/api/feathers';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = ({
  fetchAuthentication,
  setAuthenticationFailure,
  fetchAuthUser,
  auth
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  // setAuthenticationFailure
  //   ? setLoginError('Email or Password is incorrect')
  //   : null;
  useEffect(() => {
    fetchAuthUser();
  }, []);
  console.log('authentication wrong pass', setAuthenticationFailure);
  console.log('auth reAuthntication', auth);
  // const dateLogin = {
  //   strategy: 'local',
  //   email: 'lazarelvis15@gmail.com',
  //   password: 'galati98'
  // };

  // const authDeTest = async data => {
  //   try {
  //     if (!data) {
  //       await client.reAuthenticate();
  //     } else {
  //       await client.authenticate(data);
  //     }
  //     console.log('login success go to dashborad');
  //     navigate('/app/dashboard');
  //   } catch (error) {
  //     console.log('err', error);
  //     await setError(error);
  //     console.log('err login state:', errorLogin);

  //     navigate('/login');
  //   }
  // };

  // const mainFunc = async () => {
  //   const userDataTest = await authDeTest();
  //   console.log('userDataTest: ', userDataTest);
  // };

  // console.log('autentificare: ', authentication ? authentication : null);

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              strategy: 'local',
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string()
                .max(255)
                .required('Password is required')
            })}
            onSubmit={value => {
              // authDeTest(value);
              // mainFunc();
              // fetchAuthentication(values);
              fetchAuthentication(value);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box mt={3} mb={1}>
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                {setAuthenticationFailure
                  ? setLoginError('Email or Password is incorrect')
                  : setLoginError('')}
                {loginError && (
                  <div style={{ color: 'red' }}>
                    <span>{loginError}</span>
                  </div>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account
                  <Link component={RouterLink} to="/register" variant="h6">
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
