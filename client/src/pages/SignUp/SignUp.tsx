import React from 'react'
import { signUp } from '../../redux/reducers/authReducer/asyncActions'
import { useHistory } from 'react-router-dom'
import './SignUp.scss'
import { FormLayout } from '../../components/FormLayout/FormLayout'

export const SignUp: React.FC = () => {
  const history = useHistory()
  return <FormLayout action={signUp} title="Sign Up" history={history} />
}
