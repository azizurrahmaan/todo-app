import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import validationErrors from '../services/validation/validationErrors'
import AuthRequest from '../requests/AuthRequest'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    await AuthRequest.signup(data) 
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Task App Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                error={errors.username?true:false}
                fullWidth
                inputProps={{ref:register({required: true, minLength:3, maxLength: 16})}}
                helperText={validationErrors.show(errors.username, {minLength:3, maxLength: 16})}
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                error={errors.password?true:false}
                inputProps={{ref:register({required: true, minLength:8, maxLength: 32})}}
                helperText={validationErrors.show(errors.password, {minLength:8, maxLength: 32})}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
              <Grid item>
              Don't have an account? 
                  <Link to={"/signin"} style={{textDecoration:"none"}} variant="body2">
                      {"Sign In"}
                  </Link>
              </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUp