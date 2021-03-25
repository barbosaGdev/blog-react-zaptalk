import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Deve ser um e-mail válido').required('Campo obrigatório'),
  password: Yup.string().min(6, 'Deve conter no mínimo 6 caracteres').required('Campo obrigatório')
}) 

export default LoginSchema