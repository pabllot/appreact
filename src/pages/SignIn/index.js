import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios'

const useStyles = makeStyles ((theme) => ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign:'center'
    },
    button: {
        marginTop: theme.spacing(1)
    },
    form: {
        margin: theme.spacing(2, 4)
    }
}))

function Copyright(){
    return (
        <Typography variant='body2' align='center'>
            {'Copyright'}
            <a color='inherit' href='https://www.youtube.com'>
                Youtube
            </a> {' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate();

    function handleSignIn() {
      axios.post('/api/home/login').then(response => console.log(response))

    }

  return (
    <Grid container className={classes.root}>
      <Grid
      item
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      md={7}
      className={classes.image}>
        <Typography style={{color: '#fff', fontSize: 25, lineHeight: '45px'}}>
               <strong>Encontre as melhores avaliações de Séries da netflix!</strong> 
        </Typography>
        <Typography variant="body2" style={{color: 'rgb(255, 255, 255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                Compartilhe seu conhecimento com toda nossa comunidade.
        </Typography>
      </Grid>
        <Grid item md={5}>
          <Box display="flex" flexDirection="column" alignItems='center'  mt={8}>
              <form className={classes.form}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Senha'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
                <Button fullWidth
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={(handleSignIn)}>
                    Entrar
                </Button>
                <Grid container> 
                    <Grid item>
                        <Link>Esqueceu sua senha?</Link>
                    </Grid>
                    <Grid item>
                        <Link>Não tem uma conta? Registre-se</Link>
                    </Grid>
                </Grid>
              </form>
              <Copyright />
          </Box>
        </Grid>
    </Grid>


  )
}

export default SignIn