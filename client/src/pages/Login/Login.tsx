import React from 'react'
import { login } from '../../redux/reducers/authReducer/asyncActions'
import './Login.scss'
import { FormLayout } from '../../components/FormLayout/FormLayout'

export const Login: React.FC = () => {
  return <FormLayout action={login} title={'Login'} />
}
