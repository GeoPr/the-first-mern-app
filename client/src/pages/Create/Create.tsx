import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { shortenLink } from '../../redux/reducers/currentLinkReducer/asyncActions'
import { TApp } from '../../redux/reducers/rootReducer'
import './Create.scss'

export const Create: React.FC = () => {
	const [link, setLink] = useState('')
  const { token } = useSelector((state: TApp) => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(shortenLink(link, token, history))
  }

  return (
    <div className="create">
      <div className="create__body">
        <form
          className="create__form"
          action="#"
          noValidate
          onSubmit={submitHandler}>
          <TextField
            type="text"
            color="primary"
            variant="filled"
            label="Enter a link"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
          <Button color="primary" variant="contained" type="submit">
            Shorten link
          </Button>
        </form>
      </div>
    </div>
  )
}
