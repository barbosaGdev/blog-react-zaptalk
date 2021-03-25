import React, { useState } from 'react'
import { Box } from 'reflexbox'
import { useFormik } from 'formik';
import { Typography, TextField, Button, CircularProgress, Snackbar} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { LoginWrapper, Form } from '../../components'
import { authMutations } from '../../graphql/mutations'
import * as authService from '../../services/auth'
import { Login } from '../../models'
import { LoginSchema } from '../../validate'

export default () => {

  const history = useHistory()
  const [snackMessage, setSnackMessage] = useState(false)

  const [authLogin, { loading }] = useMutation(authMutations.AUTH_LOGIN, {
    onCompleted({ signin }) {
     const { token } = signin
      authService.login({ token })
      const decodedToken = authService.decodedToken()
      if (decodedToken !== (undefined || null || {})) {
        setSnackMessage(false)
        history.push('/blog')
      } 
    },
    onError() {
      setSnackMessage('Email ou senha não estão corretos, tente novamente.')
    },
  })


  const formik = useFormik({
    initialValues: new Login(),
    validationSchema: LoginSchema,
    onSubmit: value => {
        authLogin({variables: value })
    }
  })

  const handleClose = () => {
    setSnackMessage(false)
  }

  return (
    <LoginWrapper>
      <Typography variant='h4' component='h1'>
          Faça o login
      </Typography>
      <Form onSubmit={formik.handleSubmit}>
        <Box width={[1]}>
          <TextField 
            id="email"
            label="email" 
            error={formik.errors.email}
            value={formik.values.email}
            helperText={formik.errors.email}
            onChange={formik.handleChange}
            multiline={false}
          />
        </Box>
        <Box width={[1]} mt={[3]}>
          <TextField 
            id="password"
            label="password" 
            type="password"
            error={formik.errors.password}
            value={formik.values.password}
            helperText={formik.errors.password}
            onChange={formik.handleChange}
            multiline={false}
          />
        </Box>
        <Box width={[1]} mt={[4]}>
          <Button variant="contained" type='submit'>          
            {(loading) ? <CircularProgress size={24}/> : 'Entrar'}
          </Button>
        </Box>
      </Form>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal:'left' }}
        open={snackMessage}
        onClose={handleClose}
        message={snackMessage}
      />
    </LoginWrapper>      
  )
}