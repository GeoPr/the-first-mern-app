import { Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinksList } from '../../components/LinksList/LinksList'
import { getLinks } from '../../redux/reducers/linksReducer/asyncActions'
import { TApp } from '../../redux/reducers/rootReducer'
import './Links.scss'

export const Links: React.FC = () => {
  const links = useSelector((state: TApp) => state.links)
  const { token } = useSelector((state: TApp) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLinks(token))
  }, [])

  return (
    <div className="links">
      <div className="links__body">
        {links.length ? (
          <>
            <Typography variant="h2">Your links</Typography>
            <LinksList links={links} />
          </>
        ) : (
          <Typography variant="h4" className="no-links">
            You don`t have links anymore
          </Typography>
        )}
      </div>
    </div>
  )
}
