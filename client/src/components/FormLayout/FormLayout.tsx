import React from 'react'
import {
  Button,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { TApp } from '../../redux/reducers/rootReducer'
import { hideModal } from '../../redux/reducers/modalReducer/actions'
import { History } from 'history'

interface IData {
  email: string
  password: string
}

interface IProps {
	title: string
	action: (email: string, password: string, history?: History) => any
	history?: History
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('There isn`t email like that')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(6, 'Password should not be shorter than 6 sybmols')
    .required('Password is a required field'),
})

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'start',
  },
  modal: {
    position: 'fixed',
    right: 50,
    top: 100,
    padding: '10px 30px',
    color: '#fff',
    borderRadius: 10,
  },
  title: {
    color: '#fff',
  },
}))

export const FormLayout: React.FC<IProps> = ({ title, action, history }) => {
	const { register, handleSubmit, errors, reset } = useForm<IData>({
    resolver: yupResolver(schema),
  })
  const dispatch = useDispatch()
  const modal = useSelector((state: TApp) => state.modal)

  const styles = useStyles()

  const submitHandler = handleSubmit(async data => {
    try {
			if (history) {
				await dispatch(action(data.email, data.password, history))
			} else {
				await dispatch(action(data.email, data.password))
			}
      reset()
    } catch (e) {}
  })

	return (
		<div
      className="auth-page"
      style={{
        background: 'url(images/bg.jpg) center center / cover no-repeat',
      }}>
      <Typography variant="h2" component="h2" className={styles.title}>
        {title}
      </Typography>
      <form className="auth-page__form" noValidate onSubmit={submitHandler}>
        <TextField
          type="email"
          autoComplete="off"
          variant="outlined"
          label="email"
          name="email"
          inputRef={register({ required: true })}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <TextField
          type="password"
          autoComplete="off"
          variant="outlined"
          label="password"
          name="password"
          inputRef={register({ required: true })}
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={styles.root}
				>
          {title}
        </Button>
        <Modal open={modal.isOpen} onClose={() => dispatch(hideModal())}>
          <div
            className={styles.modal}
            style={{ background: modal.status === 200 ? 'green' : 'red' }}>
            <Typography variant="h4">{modal.text}</Typography>
          </div>
        </Modal>
      </form>
    </div>
	)
}