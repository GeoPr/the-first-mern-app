import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/reducers/authReducer/asyncActions'
import './Header.scss'

export const Header: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
  const AuthedLinks = [
    { id: 0, title: 'Create a link', to: '/create' },
    { id: 1, title: 'Links', to: '/links' },
  ]
  const notAuthedLinks = [
    { id: 0, title: 'Sign Up', to: '/' },
    { id: 1, title: 'Login', to: '/login' },
  ]

  const dispatch = useDispatch()

  const clickHandler = () => dispatch(logout())

  return (
    <header className="header">
      <div className="header__body">
        <nav className="header__nav">
          <ul className="header__list">
            {[...(isAuthenticated ? AuthedLinks : notAuthedLinks)].map(
              ({ id, title, to }) => (
                <li key={id}>
                  <NavLink
                    to={to}
                    activeClassName="_active"
                    className="header__link"
                    exact={id === 0}>
                    {title}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>
        {isAuthenticated && (
          <Button color="secondary" variant="contained" onClick={clickHandler}>
            Log out
          </Button>
        )}
      </div>
    </header>
  )
}
